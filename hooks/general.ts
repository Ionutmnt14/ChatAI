// hooks/general.ts
import { ChatState, Message } from "@/lib/types";
import { useCallback, useState, useEffect } from "react";

const API_URL = "/api/chat";

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
}

export function useChat() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  const [conversations, setConversations] = useState<Conversation[]>([]);

  // Load conversations from localStorage on mount
  useEffect(() => {
    const savedConversations = localStorage.getItem("conversations");
    if (savedConversations) {
      // Convert string dates back to Date objects
      const parsedConversations = JSON.parse(savedConversations).map(
        (conv: any) => ({
          ...conv,
          createdAt: new Date(conv.createdAt),
          messages: conv.messages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          })),
        })
      );
      setConversations(parsedConversations);
    }
  }, []);

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

        const updatedMessages = [...chatState.messages, userMessage, aiMessage];

        setChatState((prev) => ({
          ...prev,
          messages: updatedMessages,
          isLoading: false,
        }));

        // Save to conversations if it's a new conversation
        if (chatState.messages.length === 0) {
          const newConversation: Conversation = {
            id: Date.now().toString(),
            title: content.slice(0, 30) + "...",
            messages: updatedMessages,
            createdAt: new Date(),
          };

          const updatedConversations = [...conversations, newConversation];
          setConversations(updatedConversations);
          localStorage.setItem(
            "conversations",
            JSON.stringify(updatedConversations)
          );
        }
      } catch (error) {
        setChatState((prev) => ({
          ...prev,
          isLoading: false,
          error:
            error instanceof Error
              ? error.message
              : "An unexpected error occurred",
        }));
      }
    },
    [chatState.messages, conversations]
  );

  // Get last 10 conversations
  const getRecentConversations = useCallback(() => {
    return conversations
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 10);
  }, [conversations]);

  return {
    chatState,
    sendMessage,
    recentConversations: getRecentConversations(),
  };
}
