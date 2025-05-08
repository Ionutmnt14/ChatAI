"use client";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessageComponent";
import { Scroll } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { useChat } from "@/hooks/general";

export default function ChatInterface() {
  const { chatState, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-[90vh] w-full mx-auto p-4">
      <div className=" p-6 flex-1 flex flex-col">
        <ScrollArea className="flex-1  mb-4 space-y-4">
          {chatState.messages.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>Start a conversation with the AI</p>
            </div>
          ) : (
            chatState.messages.map((msg, index) => (
              <div key={index} className="flex w-full">
                <ChatMessage message={msg} />
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
          <Scroll orientation="vertical" />
        </ScrollArea>
        <div className="sticky bottom-0  z-10">
          <ChatInput onSend={sendMessage} isLoading={chatState.isLoading} />
        </div>
      </div>
    </div>
  );
}
