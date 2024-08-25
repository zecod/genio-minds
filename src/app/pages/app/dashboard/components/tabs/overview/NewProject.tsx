import { ArrowUp, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";
import { SideBar } from "./SideBar";
import { ChatComponent } from "./ChatComponent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState, useRef } from "react";
import { BsStars } from "react-icons/bs";
import { HiLightningBolt } from "react-icons/hi";
import { WiLightning } from "react-icons/wi";
import { ScrollArea } from "@/components/ui/scroll-area";

export type ChatInput = {
  role: string;
  content: any;
};

export function ModelLLM() {
  const [position, setPosition] = useState("GPT-4o");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2">
          {position}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="GPT-4o"
            className="flex items-center gap-2"
          >
            <BsStars className="text-violet-500" />
            <span>GPT-4o</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="GPT-4o-mini"
            className="flex items-center gap-2"
          >
            <HiLightningBolt className="text-yellow-500" />
            <span>GPT-4o-mini</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="GPT-3.5-turbo">
            <WiLightning className="text-yellow-500" />
            <span>GPT-3.5-turbo</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const NewProject = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<ChatInput[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (): void => {
    const data: ChatInput = {
      role: "user",
      content: input,
    };
    if (input.length === 0) {
      return;
    }
    setMessages((prevMessages) => [...prevMessages, data]);
    setInput("");
  };

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col fixed inset-0">
      <div className="flex h-full overflow-hidden">
        <SideBar />
        <div className="ml-5 flex-1 flex flex-col">
          <div className="flex items-center justify-between p-2">
            <ModelLLM />
            <div className="flex items-center gap-1 text-sm font-medium border rounded-full px-2 py-2">
              <Coins className="w-4 h-4 text-primary" />
              <span>1,234</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col w-full relative">
            <ScrollArea className="flex-1 overflow-y-auto w-full p-5">
              <div className="max-w-[750px] m-auto">
                <ChatComponent messages={messages} setMessages={setMessages} />
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            <div className=" bg-none py-2 flex flex-col justify-center items-center sticky bottom-0 left-0 w-full gap-4">
              <div className="w-full border dark:border-zinc-900 h-full rounded-full max-w-[500px] px-2 py-2 flex items-center justify-between gap-2 ">
                <input
                  className="flex-1 h-full outline-none bg-transparent text-sm px-2"
                  placeholder="e.g. How can I optimize SEO?"
                  value={input} // Bind input value to state
                  onChange={handleInput}
                />
                <Button
                  className="rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in-out"
                  size={"icon"}
                  onClick={handleSubmit}
                  disabled={input.length == 0}
                >
                  <ArrowUp size={18} />
                </Button>
              </div>

              <div className="text-muted-foreground text-[12px]">
                GenioMind can make mistakes. Check important info.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
