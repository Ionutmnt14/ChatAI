import { Calendar, Home, Inbox, Search, Settings, Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white flex items-center justify-between h-14">
            <SidebarTrigger className="hover:bg-text-primary  rounded-md  transition-all duration-300" />
            <Plus
              style={{ width: "28px", height: "28px" }}
              className="hover:bg-text-primary hover:text-black rounded-md  transition-all duration-300"
            />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="text-white">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div
          style={{ width: "28px", height: "28px" }}
          className="text-white pl-0.5 pt-0.5 self-end hover:bg-text-primary hover:text-black rounded-md transition-all duration-300"
        >
          <Settings />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
