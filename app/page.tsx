import ChatInterface from "@/components/ChatInterface";
import Navbar from "@/components/Navbar";
import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="px-6 md:px-16 lg:px-20 mx-auto">
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
