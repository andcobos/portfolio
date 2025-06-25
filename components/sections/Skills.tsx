"use client";

import React, { forwardRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Laravel", "RESTful APIs", "Postman"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Cloud Computing",
    skills: ["Google Cloud Platform", "Virtual Machines", "Cloud Deployment"],
  },
  {
    title: "Tools & Others",
    skills: ["Figma", "Agile / Scrum", "GCP (básico)", "Design Thinking"],
  },
];

export const Skills = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700"
            >
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full inline-block text-sm"
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
