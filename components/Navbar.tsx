"use client";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Navbar = () => {
  const { state } = useSidebar();

  return (
    <nav className="w-full flex items-center justify-between h-18 p-2.5 sticky">
      <div className="text-white">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarTrigger
                className={`${
                  state === "expanded" ? "hidden" : "block"
                } hover:bg-text-primary rounded-sm pl-0.5 transition-all duration-300`}
              />
            </TooltipTrigger>
            <TooltipContent>Open sidebar</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="">
        <h1 className="text-2xl md:text-3xl  text-text-primary font-bold">
          chat<span className="text-button-primary text-5xl">.</span>ai
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <Popover>
          <PopoverTrigger>
            <p className="w-14 h-14 bg-white rounded-full" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-auto gap-2">
            <button>logout</button>
            <button>dfgdfg</button>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
