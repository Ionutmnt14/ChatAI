"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

const Navbar = () => {
  const { state } = useSidebar();

  return (
    <nav className="w-full flex items-center justify-between h-18 p-2.5 sticky">
      <div className="text-white">
        <SidebarTrigger
          className={`${
            state === "expanded" ? "hidden" : "block"
          } hover:bg-text-primary rounded-md pl-0.5 transition-all duration-300`}
        />
      </div>
      <div className="">
        <h1 className="text-2xl md:text-3xl  text-text-primary font-bold">
          chat<span className="text-button-primary text-5xl">.</span>ai
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
