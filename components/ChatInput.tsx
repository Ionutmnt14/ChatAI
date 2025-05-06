import { Plus, Mic } from "lucide-react";
import React, { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, isLoading }) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (value.trim() && !isLoading) {
      onSend(value);
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex items-center rounded-2xl bg-bg-secondary border border-text-placeholder px-4 py-3 w-full shadow-sm">
      {/* Left icons */}
      <div className="flex items-center gap-2 mr-3">
        <button className="text-gray-400 hover:text-white" tabIndex={-1}>
          <Plus size={20} />
        </button>
      </div>
      {/* Input */}
      <input
        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400 text-base"
        placeholder="Ask anything"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      {/* Right icon */}
      <button className="ml-3 text-gray-400 hover:text-white" tabIndex={-1}>
        <Mic size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
