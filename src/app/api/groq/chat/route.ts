import { Groq } from 'groq-sdk';
import { NextResponse } from 'next/server';

// Type for the incoming request messages
interface ChatMessage {
   role: 'system' | 'user' | 'assistant';
   content: string;
}

// Type for the request body
interface RequestBody {
   messages: ChatMessage[];
}

export async function POST(request: Request) {
   const { messages } = (await request.json()) as RequestBody;

   try {
      if (!process.env.GROQ_API_KEY) {
         return NextResponse.json(
            {
               error: 'API feature is not available (missing GROQ_API_KEY)',
               warning:
                  'This is a development mode response - please configure GROQ_API_KEY for full functionality',
            },
            { status: 200 } // Use 200 to not break the frontend, or 401 if you want to force error handling
         );
      }
      const groq = new Groq({
         apiKey: process.env.GROQ_API_KEY,
      });

      const stream = await groq.chat.completions.create({
         messages,
         model: 'llama3-70b-8192',
         stream: true,
      });

      const responseStream = new ReadableStream({
         async start(controller) {
            for await (const chunk of stream) {
               const content = chunk.choices[0]?.delta?.content || '';
               controller.enqueue(new TextEncoder().encode(content));
            }
            controller.close();
         },
      });

      return new Response(responseStream);
   } catch (error) {
      return NextResponse.json(
         { error: error instanceof Error ? error.message : 'Unknown error' },
         { status: 500 }
      );
   }
}
