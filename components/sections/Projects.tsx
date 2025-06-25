"use client";

import React, { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-xl text-gray-600">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-Commerce Platform",
              description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
              tech: ["React", "Node.js", "MongoDB"],
              gradient: "from-emerald-400 to-emerald-600",
            },
            {
              title: "Task Management App",
              description: "Collaborative task management tool with real-time updates",
              tech: ["Next.js", "Socket.io", "PostgreSQL"],
              gradient: "from-purple-400 to-purple-600",
            },
            {
              title: "Weather Dashboard",
              description: "Beautiful weather app with location-based forecasts",
              tech: ["React", "API Integration", "Chart.js"],
              gradient: "from-orange-400 to-orange-600",
            },
          ].map((project, index) => (
            <article
              key={index}
              className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 group hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-0"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
