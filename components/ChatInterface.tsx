"use client";

import { useState, useCallback } from "react";
import ChatInput from "./ChatInput";
import { ChatState, Message } from "@/lib/types";
import ChatMessage from "./ChatMessageComponent";

const API_URL = "/api/chat";

export default function ChatInterface() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  const sendMessage = useCallback(
    async (content: string) => {
      const userMessage: Message = { role: "user", content };

      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
        isLoading: true,
        error: null,
      }));

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...chatState.messages, userMessage],
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Failed to get response");
        }

        const data = await response.json();
        const aiMessage: Message = {
          role: "assistant",
          content: data.response,
        };

        setChatState((prev) => ({
          ...prev,
          messages: [...prev.messages, aiMessage],
          isLoading: false,
        }));
      } catch (error: any) {
        setChatState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message || "An unexpected error occurred",
        }));
      }
    },
    [chatState.messages]
  );

  return (
    <div className="flex flex-col h-full w-full mx-auto p-4">
      <div className=" p-6 flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {chatState.messages.length === 0 ? (
            <div className="text-center text-gray-500 my-10">
              <p>Start a conversation with the AI</p>
            </div>
          ) : (
            chatState.messages.map((msg, index) => (
              <div key={index} className="flex w-full">
                {/* <ChatMessage message={msg} /> */}
              </div>
            ))
          )}

          {chatState.isLoading && (
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
            </div>
          )}

          {chatState.error && (
            <div className="text-red-500 text-center py-2">
              Error: {chatState.error}
            </div>
          )}
        </div>

        {/* <ChatInput
          onSendMessage={sendMessage}
          isLoading={chatState.isLoading}
        /> */}
      </div>
    </div>
  );
}
