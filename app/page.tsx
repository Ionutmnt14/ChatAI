import ChatInterface from "@/components/chat/ChatInterface";
import Navbar from "@/components/navbar/Navbar";
import { AppSidebar } from "@/components/sidebar/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div>
      {/* <span className="flex !px-0 w-full h-[1px] bg-white" /> */}
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <Navbar />
          <ChatInterface />
        </div>
      </SidebarProvider>
    </div>
  );
}
