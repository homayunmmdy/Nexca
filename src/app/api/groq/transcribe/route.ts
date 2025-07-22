import fsSync, { promises as fs } from "fs"; // Regular fs module for streams
import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { tmpdir } from "node:os";

export async function POST(request: Request) {
  // Check if API key is missing
  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(
      {
        error: "API feature is not available (missing GROQ_API_KEY)",
        warning:
          "This is a development mode response - please configure GROQ_API_KEY for full functionality",
      },
      { status: 200 } // Use 200 to not break the frontend, or 401 if you want to force error handling
    );
  }
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;

    if (!audioFile) {
      return NextResponse.json(
        { error: "No audio file provided" },
        { status: 400 }
      );
    }

    // Create a temporary file path
    const tempFilePath = `${tmpdir()}/${audioFile.name}`;
    const fileBuffer = await audioFile.arrayBuffer();
    await fs.writeFile(tempFilePath, Buffer.from(fileBuffer));

    // Create transcription
    const transcription = await groq.audio.transcriptions.create({
      file: fsSync.createReadStream(tempFilePath), // Use fsSync instead of fs
      model: "whisper-large-v3-turbo",
      response_format: "json",
      language: formData.get("language")?.toString() || "en",
      temperature: 0.0,
    });

    // Clean up the temporary file
    await fs.unlink(tempFilePath);

    return NextResponse.json(transcription);
  } catch (error) {
    console.error("Transcription error:", error);
    return NextResponse.json(
      { error: "Failed to transcribe audio" },
      { status: 500 }
    );
  }
}
