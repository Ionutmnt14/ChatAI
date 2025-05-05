import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between h-18">
      <div className="text-white">
        <SidebarTrigger />
      </div>
      <div className="">
        <h1 className="text-2xl md:text-3xl  text-text-primary font-bold">
          Buddy<span className="text-button-primary">Chat</span>.ai
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <HoverCard>
          <HoverCardTrigger>
            <p className="w-14 h-14 bg-white rounded-full" />
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col">
            <button>logout</button>
            <button>dfgdfg</button>
          </HoverCardContent>
        </HoverCard>
      </div>
    </nav>
  );
};

export default Navbar;
