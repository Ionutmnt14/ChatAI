"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";

const SidebarButton = () => {
  const { state } = useSidebar();

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger
              className={`${state === "expanded" ? "hidden" : "block"}
                
                 hover:bg-text-primary rounded-sm pl-0.5 transition-all duration-300`}
            />
          </TooltipTrigger>
          <TooltipContent>Open sidebar</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SidebarButton;
