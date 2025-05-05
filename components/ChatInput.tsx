"use client";

import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({
  onSendMessage,
  isLoading,
}: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        disabled={isLoading}
        aria-label="Chat input"
        className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className={`px-4 py-3 rounded-r-lg bg-blue-500 text-white font-medium transition ${
          isLoading || !input.trim()
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-blue-600"
        }`}
      >
        {isLoading ? "Thinking..." : "Send"}
      </button>
    </form>
  );
}
