import { Message } from "@/lib/types";
import ReactMarkdown from "react-markdown";

export default function ChatMessage({ message }: { message: Message }) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`flex flex-col w-full mb-4 ${
        isAssistant ? "ml-auto items-start" : "mr-auto items-end"
      }`}
    >
      <div
        className={`w-auto p-3 rounded-2xl rounded-tr-md ${
          isAssistant ? " text-white " : "bg-bg-secondary text-white text-8xl"
        }`}
      >
        <div className="prose prose-invert">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
