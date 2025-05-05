import { NextRequest, NextResponse } from "next/server";
import { generateGeminiResponse } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required and must be a non-empty array" },
        { status: 400 }
      );
    }

    const responseText = await generateGeminiResponse(messages);

    return NextResponse.json({
      response: responseText,
    });
  } catch (error: any) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate response" },
      { status: 500 }
    );
  }
}
