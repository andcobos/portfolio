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
              <div
                className="bg-[#1B2432] border border-[#334155] rounded-xl p-6 
                          hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#334155] text-[#F3F4F6] text-sm"
                    >
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
