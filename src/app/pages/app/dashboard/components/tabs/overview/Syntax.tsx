import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaHtml5 } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import hljs from "highlight.js";
import "./styles.css";

interface Code {
  code: string;
  title?: string;
  icon?: boolean;
}

export const SyntaxCode: React.FC<Code> = ({ code, title, icon }) => {
  const [copied, setIsCopied] = useState<boolean>(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const renderCodeWithLineNumbers = (code: string) => {
    const lines = code.split("\n");
    return lines.map((line, index) => (
      <div className="flex items-center gap-2" key={index}>
        <span className="line-number-style">{index + 1}</span>
        <pre className="text-sm">
          <code className={`language-${title} rounded-xl text-sm`}>{line}</code>
        </pre>
      </div>
    ));
  };

  return (
    <div className="border rounded-xl font-mono  ">
      <div className="border-b flex items-center justify-between px-4 py-2">
        <div className="flex gap-2 items-center">
          <FaHtml5 className="h-6" />
          <h1 className="text-sm">{title}</h1>
        </div>

        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={handleCopy}
          className="flex justify-center items-center"
        >
          {!copied ? <FiCopy /> : <FaCheck />}
        </Button>
      </div>
      <div className="px-4 py-2 overflow-x-scroll max-h-[400px] max-w-[750px]">
        {renderCodeWithLineNumbers(code)}
      </div>
    </div>
  );
};
