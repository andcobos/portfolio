"use client";

import { useState, useEffect } from "react";

export default function HeroCodeBlock() {
  // Líneas con "syntax highlighting" usando spans y clases de Tailwind
  const codeLines: string[] = [
    `<span class="text-gray-500">// ¡Hola, soy Andrea Cobos!</span>`,
    `<span class="text-gray-500">// Estudiante de <span class="text-purple-400">Ingeniería De Software</span> y <span class="text-purple-400">Negocios Digitales</span></span>`,
    `<span class="text-gray-500">// Bienvenido a mi portafolio.</span>`,
    ``,
    `<span class="text-blue-400">const</span> <span class="text-green-300">nombre</span> = <span class="text-yellow-300">'Andrea Cobos'</span>;`,
    `<span class="text-blue-400">const</span> <span class="text-green-300">mensaje</span> = <span class="text-yellow-300">\`¡Bienvenido a mi sitio web!\`</span>;`,
    `<span class="text-purple-400">console</span>.<span class="text-blue-300">log</span>(<span class="text-green-300">mensaje</span>);`,
  ];

  const [displayedText, setDisplayedText] = useState("");
  const fullText = codeLines.join("\n");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + (fullText[index] ?? ""));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 18); // velocidad en ms por carácter
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
