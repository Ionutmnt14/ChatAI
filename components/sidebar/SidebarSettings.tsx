import { Settings, Moon, MessageSquareWarning, CircleHelp } from "lucide-react";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Switch } from "../ui/switch";

const settings = [
  {
    name: "Dark Mode",
    icon: Moon,
    button: <Switch id="dark-theme" />,
  },
  {
    name: "Send Feedback",
    icon: MessageSquareWarning,
  },
  {
    name: "Help",
    icon: CircleHelp,
  },
];

const SidebarSettings = () => {
  return (
    <div className="pl-0.5 pt-0.5 mr-1">
      <Popover>
        <PopoverTrigger>
          <Settings
            style={{ width: "28px", height: "28px" }}
            className="text-white pl-0.5 pt-0.5 mr-1 hover:bg-text-primary hover:text-black rounded-sm transition-all duration-300"
          />
        </PopoverTrigger>
        <PopoverContent className="!h-auto">
          <div className="flex flex-col items-start justify-center">
            {settings.map(({ name, icon, button }) => (
              <div
                key={name}
                className="flex w-full items-start justify-between gap-3 space-y-3"
              >
                <div className="flex w-full items-start justify-start gap-3 space-y-3">
                  <div>
                    {React.createElement(icon, {
                      className: "w-5 h-5 inline-block",
                    })}
                  </div>
                  <p>{name}</p>
                </div>
                <div>{button}</div>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SidebarSettings;
