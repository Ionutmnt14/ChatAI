"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import SidebarSettings from "@/components/sidebar/SidebarSettings";
import SidebarHeader from "./SidebarHeader";
import { useChat } from "@/hooks/general";
import { format } from "date-fns";

export function AppSidebar() {
  const { recentConversations } = useChat();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white h-14">
            <SidebarHeader />
          </SidebarGroupLabel>
          <SidebarGroupLabel className="text-white">
            Conversations
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentConversations.map((conversation) => {
                const date = new Date(conversation.createdAt);
                const formattedDate = isNaN(date.getTime())
                  ? "Invalid date"
                  : format(date, "MMM d, yyyy");

                return (
                  <div
                    key={conversation.id}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <div className="font-medium">{conversation.title}</div>
                    <div className="text-sm text-gray-500">{formattedDate}</div>
                  </div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="text-white flex items-end justify-center h-14">
        <SidebarSettings />
      </SidebarFooter>
    </Sidebar>
  );
}
