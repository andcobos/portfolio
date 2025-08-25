"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroCodeBlock() {
  const codeLines = [
    `<span class="text-gray-500">// ¡Hello, I am Andrea Cobos!</span>`,
    `<span class="text-gray-500">// Student of <span class="text-purple-400">Software Engineering</span> and <span class="text-purple-400">Digital Business</span></span>`,
    `<span class="text-gray-500">// Welcome to my portfolio.</span>`,
    ``,
    `<span class="text-blue-400">const</span> <span class="text-green-300">name</span> = <span class="text-yellow-300">'Andrea Cobos'</span>;`,
    `<span class="text-blue-400">const</span> <span class="text-green-300">message</span> = <span class="text-yellow-300">\`¡Welcome to my website!\`</span>;`,
    `<span class="text-purple-400">console</span>.<span class="text-blue-300">log</span>(<span class="text-green-300">message</span>);`,
  ];
  const fullText = codeLines.join("\n");

  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const type = () => {
      if (idx < fullText.length) {
        setIdx((v) => v + 1);
        timer.current = window.setTimeout(type, 18);
      } else {
        setDone(true);
        // Pausa final antes de “quedar quieto”
        timer.current = window.setTimeout(() => {}, 500);
      }
    };
    type();
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <div
      className="
        w-full max-w-xl h-80
        bg-[#0A0F1F]/80 border border-[#334155]
        rounded-2xl shadow-lg p-6
        font-mono text-[13px] md:text-sm text-[#F3F4F6]
        overflow-hidden
      "
      style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
      aria-label="Animated code block"
      aria-live="polite"
    >
      <div dangerouslySetInnerHTML={{ __html: fullText.slice(0, idx) }} />
      {!done && <span className="animate-pulse text-[#2563EB]">|</span>}
    </div>
  );
}
