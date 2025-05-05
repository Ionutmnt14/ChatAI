import { GoogleGenerativeAI } from "@google/generative-ai";
import { Message } from "./types";

// Initialize the Gemini API with your API key
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not defined in environment variables");
  }

  return new GoogleGenerativeAI(apiKey);
};

export const generateGeminiResponse = async (
  messages: Message[]
): Promise<string> => {
  try {
    const genAI = getGeminiClient();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Format the conversation history for Gemini
    const formattedMessages = messages.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // Create a chat session
    const chat = model.startChat({
      history: formattedMessages.slice(0, -1), // All messages except the latest
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    });

    // Send the latest message and get the response
    const latestMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(latestMessage.content);
    const response = result.response;

    return response.text();
  } catch (error) {
    console.error("Error generating response from Gemini:", error);
    throw error;
  }
};
