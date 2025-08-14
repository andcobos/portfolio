"use client";

import React, { forwardRef } from "react";
import { skillGroups } from "@/constants/skills";

export const Skills = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="skills" className="py-20 px-6 bg-[#0A0F1F]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-4xl font-bold text-[#F3F4F6] mb-4">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700"
            >
              <div className="group relative overflow-hidden rounded-2xl
                bg-gradient-to-br from-[#0F1A2E] via-[#15223A] to-[#1E3A8A]
                border border-white/10 p-6
                hover:scale-[1.03] hover:shadow-xl hover:ring-1 hover:ring-sky-400/30
                transition-all duration-300">

                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                                  bg-[radial-gradient(120%_60%_at_80%_0%,rgba(59,130,246,0.20),transparent_60%)]" />
                  <h3 className="text-lg md:text-xl font-semibold text-white/95 mb-4">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill, idx) => (
                      <li key={idx}
                          className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm
                                    border border-white/10 hover:bg-white/15 transition-colors">
                        {skill}
                      </li>
                    ))}
                  </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
