"use client";

import React, { forwardRef } from "react";

export const Skills = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "JavaScript", level: 90, color: "emerald" },
            { name: "React", level: 85, color: "purple" },
            { name: "Node.js", level: 80, color: "orange" },
            { name: "Python", level: 75, color: "pink" },
            { name: "TypeScript", level: 85, color: "emerald" },
            { name: "Next.js", level: 80, color: "purple" },
            { name: "MongoDB", level: 70, color: "orange" },
            { name: "PostgreSQL", level: 75, color: "pink" },
          ].map((skill, index) => (
            <div
              key={index}
              className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 group"
            >
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 h-2 rounded-full transition-all duration-1000 group-hover:scale-105`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
