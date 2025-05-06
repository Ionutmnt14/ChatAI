import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const SidebarHeader = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger className="hover:bg-text-primary rounded-sm transition-all duration-300" />
          </TooltipTrigger>
          <TooltipContent>Close sidebar</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button>
              <Plus
                style={{ width: "28px", height: "28px" }}
                className="hover:bg-text-primary hover:text-black rounded-sm transition-all duration-300"
              />
            </button>
          </TooltipTrigger>
          <TooltipContent>New chat</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SidebarHeader;
