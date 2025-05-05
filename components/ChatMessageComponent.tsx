import { Message } from "@/lib/types";

export default function ChatMessage({ message }: { message: Message }) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`flex flex-col w-full mb-4 ${
        isAssistant ? "ml-auto items-start" : "mr-auto items-end"
      }`}
    >
      <div
        className={`w-full max-w-lg p-4 rounded-lg ${
          isAssistant ? "bg-blue-500 text-white " : "bg-gray-200 text-gray-800"
        }`}
      >
        <div className="text-sm font-bold mb-1">
          {isAssistant ? "AI Assistant" : "You"}
        </div>
        <div className="whitespace-pre-wrap">{message.content}</div>
      </div>
    </div>
  );
}
