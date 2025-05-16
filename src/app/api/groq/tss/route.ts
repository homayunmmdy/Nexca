import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export async function POST(request: Request) {
    try {
        const { text } = await request.json();

        if (!text) {
            return NextResponse.json(
                { error: 'Text is required' },
                { status: 400 }
            );
        }

        const response = await groq.audio.speech.create({
            model: "playai-tts",
            voice: "Fritz-PlayAI",
            input: text,
            response_format: "wav"
        });

        const buffer = Buffer.from(await response.arrayBuffer());

        return new NextResponse(buffer, {
            headers: {
                'Content-Type': 'audio/wav',
                'Content-Disposition': 'attachment; filename="speech.wav"'
            }
        });
    } catch (error) {
        console.error('Error generating speech:', error);
        return NextResponse.json(
            { error: 'Failed to generate speech' },
            { status: 500 }
        );
    }
}