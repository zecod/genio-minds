import {
  BarChart2,
  Book,
  DollarSign,
  RabbitIcon,
  Rocket,
  Target,
} from "lucide-react";
import React, { FC, useEffect, ReactNode } from "react";
import { quantum } from "ldrs";
import { SyntaxCode } from "./Syntax";
import hljs from "highlight.js";

quantum.register();

const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
const boldTextRegex = /\*\*(.*?)\*\*/g; // Match text between ** **
const inlineCodeRegex = /`([^`]+)`/g; // Match text between ` `

type Message = {
  role: string;
  content: ReactNode;
};

const UserUi: FC<{ item: Message }> = ({ item }) => {
  return (
    <div className="flex w-full items-start justify-end my-8">
      <div className="dark:bg-zinc-900 bg-gray-100 p-3 rounded-xl ">
        <div className="text-pretty font-light whitespace-pre-line text-sm space-y-5">
          {item.content}
        </div>
      </div>
    </div>
  );
};

const BotUi: FC<{ item: Message }> = ({ item }) => {
  const renderContent = (content: ReactNode) => {
    if (typeof content !== "string") {
      return content;
    }

    const elements = [];
    let lastIndex = 0;

    content.replace(codeBlockRegex, (match, language, code, offset) => {
      if (lastIndex < offset) {
        const segment = content.slice(lastIndex, offset);
        elements.push(...parseText(segment, lastIndex));
      }

      elements.push(
        <div key={offset} className="my-2">
          <SyntaxCode code={code.trim()} title={language} />
        </div>
      );

      lastIndex = offset + match.length;
      return match;
    });

    if (lastIndex < content.length) {
      const segment = content.slice(lastIndex);
      elements.push(...parseText(segment, lastIndex));
    }

    return elements;
  };

  const parseText = (text: string, keyOffset: number) => {
    const parts = [];
    let lastIndex = 0;

    text.replace(boldTextRegex, (match, p1, offset) => {
      if (lastIndex < offset) {
        parts.push(
          <span key={keyOffset + lastIndex} className="opacity-80 mb-5">
            {text.slice(lastIndex, offset)}
          </span>
        );
      }

      parts.push(
        <span key={keyOffset + offset} className="font-semibold">
          {p1}
        </span>
      );

      lastIndex = offset + match.length;
      return match;
    });

    text.replace(inlineCodeRegex, (match, p1, offset) => {
      if (lastIndex < offset) {
        parts.push(
          <span key={keyOffset + lastIndex} className="opacity-80">
            {text.slice(lastIndex, offset)}
          </span>
        );
      }

      parts.push(
        <span
          key={keyOffset + offset}
          className="dark:bg-zinc-900 bg-gray-100 px-1 py-0.5 rounded"
        >
          {p1}
        </span>
      );

      lastIndex = offset + match.length;
      return match;
    });

    if (lastIndex < text.length) {
      parts.push(
        <span key={keyOffset + lastIndex} className="opacity-80 leading-loose">
          {text.slice(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  useEffect(() => {
    hljs.highlightAll();
  }, [item.content]);

  return (
    <div className="flex items-start gap-5">
      <div className="flex items-start h-auto">
        <div className="dark:bg-white dark:text-black bg-black text-white p-1 rounded-full">
          <RabbitIcon />
        </div>
      </div>
      <div className="flex-1 text-pretty font-light whitespace-pre-line text-[16px]">
        {renderContent(item.content)}
      </div>
    </div>
  );
};

const NoMessages = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-[70vh] gap-10">
      <RabbitIcon size={70} />

      <div className="flex items-center gap-5 md:flex-row flex-col">
        <div className="flex flex-col w-[170px] border p-5 rounded-lg gap-2 transition-all duration-200 ease-in-out hover:dark:bg-zinc-900 hover:bg-gray-100 cursor-pointer">
          <Rocket className="text-blue-500" size={18} />
          <div className="text-sm text-muted-foreground">
            Discover SaaS Growth Strategies
          </div>
        </div>

        <div className="flex flex-col w-[170px] border p-5 rounded-lg gap-2 transition-all duration-200 ease-in-out hover:dark:bg-zinc-900 hover:bg-gray-100 cursor-pointer">
          <DollarSign className="text-green-500" size={18} />
          <div className="text-sm text-muted-foreground">
            Explore Startup Funding Options
          </div>
        </div>

        <div className="flex flex-col w-[170px] border p-5 rounded-lg gap-2 transition-all duration-200 ease-in-out hover:dark:bg-zinc-900 hover:bg-gray-100 cursor-pointer">
          <Target className="text-red-500" size={18} />
          <div className="text-sm text-muted-foreground">
            Achieve Product-Market Fit
          </div>
        </div>

        <div className="flex flex-col w-[170px] border p-5 rounded-lg gap-2 transition-all duration-200 ease-in-out hover:dark:bg-zinc-900 hover:bg-gray-100 cursor-pointer">
          <BarChart2 className="text-purple-500" size={18} />
          <div className="text-sm text-muted-foreground">
            Learn How to Scale Your SaaS
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChatComponent: FC<{
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}> = ({ messages, setMessages }) => {
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].role === "user") {
      chat_api(setMessages);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: <l-quantum size="29" speed="1.75" color="gray"></l-quantum>,
        },
      ]);
    }
  }, [messages]);

  const chat_api = async (
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  ): Promise<void> => {
    try {
      const url = new URL("http://localhost:3001/api/stream-chat");
      const req = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o",
          data: messages,
        }),
      });

      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`);
      }

      const reader = req.body?.getReader();
      if (!reader) {
        throw new Error("Failed to get reader from response body.");
      }

      const decoder = new TextDecoder();
      let done = false;
      let text = "";

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          text += chunk;

          setMessages((prevMessages) => {
            const lastIndex = prevMessages.length - 1;
            const updatedMessages = [...prevMessages];
            updatedMessages[lastIndex].content = text;
            return updatedMessages;
          });
        }
      }
    } catch (error) {
      console.error("Error in chat_api:", error);
    }
  };

  return (
    <div className="pb-5">
      {messages.length === 0 ? (
        <NoMessages />
      ) : (
        <div className="mb-5 mt-2">
          {messages.map((item, key) =>
            item.role === "user" ? (
              <UserUi key={key} item={item} />
            ) : (
              <BotUi key={key} item={item} />
            )
          )}
        </div>
      )}
    </div>
  );
};
