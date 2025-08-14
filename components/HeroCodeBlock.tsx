"use client";

import { useState, useEffect } from "react";

export default function HeroCodeBlock() {
  const codeLines: string[] = [
    `<span class="text-gray-500">// ¡Hello, I am Andrea Cobos!</span>`,
    `<span class="text-gray-500">// Student of <span class="text-purple-400">Software Engineering</span> and <span class="text-purple-400">Digital Business</span></span>`,
    `<span class="text-gray-500">// Welcome to my portfolio.</span>`,
    ``,
    `<span class="text-blue-400">const</span> <span class="text-green-300">name</span> = <span class="text-yellow-300">'Andrea Cobos'</span>;`,
    `<span class="text-blue-400">const</span> <span class="text-green-300">message</span> = <span class="text-yellow-300">\`¡Welcome to my website!\`</span>;`,
    `<span class="text-purple-400">console</span>.<span class="text-blue-300">log</span>(<span class="text-green-300">message</span>);`,
  ];

  const [displayedText, setDisplayedText] = useState("");
  const fullText = codeLines.join("\n");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + (fullText[index] ?? ""));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 18); 
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div
      className="
        w-full max-w-xl h-80
        bg-[#0A0F1F]/80 border border-[#334155]
        rounded-2xl shadow-lg p-6
        font-mono text-[13px] md:text-sm text-[#F3F4F6]
        overflow-hidden
      "
      style={{
        whiteSpace: "pre-wrap", 
        wordBreak: "break-word", 
      }}
      aria-label="Animated code block"
    >
      <div dangerouslySetInnerHTML={{ __html: displayedText }} />
      <span className="animate-pulse text-[#2563EB]">|</span>
    </div>
  );
}
