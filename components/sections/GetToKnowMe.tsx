"use client";
import React, { forwardRef } from "react";

const GetToKnowMe = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="get-to-know-me"
      className="relative py-20 px-6 bg-[#0A0F1F] text-[#E6ECEA]"
    >
      {/* Fondo sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#1E40AF]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative max-w-5xl mx-auto space-y-10">
        <header className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 text-center space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get to know me
          </h2>
          <p className="mx-auto max-w-2xl text-[#94A3B8] leading-relaxed">
            I am a <span className="font-semibold">Software Engineering</span> and{" "}
            <span className="font-semibold">Digital Business</span> student at the{" "}
            <span className="font-semibold">Escuela Superior de Economía y Negocios (ESEN)</span>.
            I'm a passionate software developer focused on building technology that makes a 
            meaningful impact. In my free time, I enjoy a variety of activities that help me 
            unwind and stay creative.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Hobbies */}
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 md:col-span-2 grid gap-6 sm:grid-cols-2">
            {[
              { icon: "⚽", title: "Soccer", desc: "Playing and following matches keeps me active and competitive." },
              { icon: "🌲", title: "Nature", desc: "Hiking and visiting natural parks to recharge and explore." },
              { icon: "📺", title: "Series", desc: "A good series to relax with my family." },
              { icon: "📸", title: "Photo & Drone", desc: "Capturing moments with photography and drone videography." },
              { icon: "🎹", title: "Instruments", desc: "Making music with different instruments just for fun." },
              { icon: "🐶", title: "Pets", desc: "Spending quality time with my pets is non-negotiable." },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-[#334155] bg-[#0A0F1F]/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A0F1F]/80 hover:shadow-[0_0_0_1px_#334155,0_10px_30px_-10px_rgba(37,99,235,0.25)]"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#334155] bg-[#0A0F1F]/70 text-2xl">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#9FB3A8]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

GetToKnowMe.displayName = "GetToKnowMe";
export default GetToKnowMe;
