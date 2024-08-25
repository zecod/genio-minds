import { Clock, Flag, PanelRight, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

// export function CommandHistory() {
//   return (

//   );
// }

export function SideBar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleSetting = () => {
    setOpen(!open);
  };

  return (
    <TooltipProvider delayDuration={200}>
      <div
        className={`${
          open ? "w-[250px]" : "w-[55px] flex flex-col items-center"
        } bg-[#FAFAFA] dark:bg-[#1A1A1A] border-r-[1px] border-gray-100 dark:border-zinc-900 flex flex-col p-2 pt-3 transition-all duration-500 ease-in-out`}
      >
        <div className="flex items-center justify-between px-2">
          <Button size="icon" variant="ghost" onClick={handleSetting}>
            <PanelRight size={18} />
          </Button>
        </div>

        <div className="my-4 px-2 flex flex-col gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={`gap-2 ${open ? "w-full justify-start" : ""}`}
                size={open ? "default" : "icon"}
                variant={"default"}
              >
                <Plus size={18} />
                {open && (
                  <span
                    className={`transition-all duration-500 ease-in-out ${
                      open
                        ? "delay-100 opacity-100 max-w-[200px] "
                        : "opacity-0 max-w-0"
                    } overflow-hidden whitespace-nowrap`}
                  >
                    New Chat
                  </span>
                )}
              </Button>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>New Chat</p>
              </TooltipContent>
            )}
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className={`gap-2 ${open ? "w-full justify-start" : ""}`}
                    size={open ? "default" : "icon"}
                    variant={"ghost"}
                  >
                    <Clock size={18} />
                    {open && (
                      <span
                        className={`transition-all duration-500 ease-in-out ${
                          open
                            ? "delay-100 opacity-100 max-w-[200px] "
                            : "opacity-0 max-w-0"
                        } overflow-hidden whitespace-nowrap`}
                      >
                        History
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-80 p-0 border-none shadown-none ml-2"
                  side="bottom"
                  align="center"
                >
                  <Command className="rounded-lg border">
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Today">
                        <CommandItem className="group cursor-pointer">
                          <div className="px-1 py-1 text-sm text-muted-foreground rounded-md transition-all duration-200 ease-in-out group-hover:bg-accent group-hover:text-accent-foreground cursor-pointer">
                            Full-stack engineer
                          </div>
                        </CommandItem>
                        <CommandItem className="group cursor-pointer">
                          <div className="px-1 py-1 text-sm rounded-md text-muted-foreground transition-all duration-200 ease-in-out group-hover:text-accent-foreground cursor-pointer cursor-pointer">
                            Agency Landing Page
                          </div>
                        </CommandItem>
                        <CommandItem disabled></CommandItem>
                      </CommandGroup>
                      <CommandGroup heading="Last 7 days">
                        <CommandItem className="group cursor-pointer">
                          {" "}
                          <div className="px-1 py-1 text-sm text-muted-foreground rounded-md transition-all duration-200 ease-in-out group-hover:text-accent-foreground cursor-pointer cursor-pointer">
                            Code Fix Needed
                          </div>
                        </CommandItem>
                        <CommandItem className="group cursor-pointer">
                          {" "}
                          <div className="px-1 py-1 text-sm text-muted-foreground rounded-md transition-all duration-200 ease-in-out group-hover:text-accent-foreground cursor-pointer cursor-pointer">
                            Sidebar Animation
                          </div>
                        </CommandItem>
                        <CommandItem className="group cursor-pointer">
                          {" "}
                          <div className="px-1 py-1 text-sm text-muted-foreground rounded-md transition-all duration-200 ease-in-out group-hover:text-accent-foreground cursor-pointer cursor-pointer">
                            Team Todo App
                          </div>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>History</p>
              </TooltipContent>
            )}
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={`gap-2 ${open ? "w-full justify-start" : ""}`}
                size={open ? "default" : "icon"}
                variant={"ghost"}
              >
                <Flag size={18} />
                {open && (
                  <span
                    className={`transition-all duration-500 ease-in-out ${
                      open
                        ? "delay-100 opacity-100 max-w-[200px] "
                        : "opacity-0 max-w-0"
                    } overflow-hidden whitespace-nowrap`}
                  >
                    Feedback
                  </span>
                )}
              </Button>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>New Chat</p>
              </TooltipContent>
            )}
          </Tooltip>
        </div>

        {/* {open && (
        <ScrollArea className="flex-1 w-full px-2 my-5">
          <div className="flex flex-col gap-3">
            <div className="text-xs text-muted-foreground">16/08/2024</div>
            <div className="px-2 py-2 text-sm rounded-md transition-all duration-200 ease-in-out group-hover:text-accent-foreground cursor-pointer cursor-pointer">
              Full-stack engineer
            </div>
            <div className="px-2 py-2 text-sm rounded-md transition-all duration-200 ease-in-out group-hover:text-accent-foreground cursor-pointer cursor-pointer">
              DevOps engineer
            </div>
            <div className="px-2 py-2 text-sm rounded-md transition-all duration-200 ease-in-out group-hover:text-accent-foreground cursor-pointer cursor-pointer">
              Cloud architect
            </div>
          </div>
        </ScrollArea>
      )} */}

        <div className="mt-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={`gap-2 ${open ? "w-full justify-start py-5" : ""}`}
                size={open ? "default" : "icon"}
                variant={"outline"}
              >
                <Settings size={18} />
                {open && (
                  <span
                    className={`transition-all duration-500 ease-in-out ${
                      open
                        ? "delay-100 opacity-100 max-w-[200px] "
                        : "opacity-0 max-w-0"
                    } overflow-hidden whitespace-nowrap`}
                  >
                    Settings
                  </span>
                )}
              </Button>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>Settings</p>
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
