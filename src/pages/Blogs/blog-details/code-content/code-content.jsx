"use client";
import { useEffect, useState } from "react";
import { Clipboard } from "lucide-react";
import { codeToHtml } from "shiki";
import { useToast } from "@/hooks/use-toast";

const CodeContentBody = ({ codeContent }) => {
  const { toast } = useToast();
  const [html, setHtml] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent);
    toast({
      title: "Code Copied!",
      description: "Code copied to your to clipboard!",
    });
  };

  useEffect(() => {
    async function convertCodeToHtml() {
      const generatedHtml = await codeToHtml(codeContent, {
        lang: "javascript",
        theme: "vitesse-dark",
      });
      setHtml(generatedHtml);
    }
    convertCodeToHtml();
  }, []);

  return (
    <div className="relative">
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <button
        onClick={handleCopy}
        className="absolute bottom-2 right-2 flex gap-1 text-xs text-white/40 hover:bg-white/10 hover:text-white transition-colors bg-white/5 py-1.5 pl-2 pr-2.5 rounded"
      >
        <Clipboard className="h-3 w-3 mt-[1px]" />
        Copy Code
      </button>
    </div>
  );
};

export default CodeContentBody;
