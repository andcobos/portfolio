"use client";

import React, { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/constants/projects";
import ScreenshotFrame from "@/components/ScreenshotFrame";


export const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 text-xl text-gray-600">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 group hover:shadow-2xl hover:-translate-y-4 overflow-hidden rounded-2xl bg-white pointer-events-auto"
            >
              {/* Screenshot estático (sin iframe) */}
              <div className="relative">
                <ScreenshotFrame
                  title={project.title}
                  thumbnail={project.thumbnail} // 👈 solo imagen
                />

                {/* Acciones encima del screenshot */}
                <div className="absolute top-4 right-4 flex space-x-2 z-30">
                  {project.github && (
                    <Button asChild size="sm" variant="secondary" className="bg-white/70 hover:bg-white/90 text-gray-900 border-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open GitHub for ${project.title}`}>
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.website && (
                    <Button asChild size="sm" variant="secondary" className="bg-white/70 hover:bg-white/90 text-gray-900 border-0">
                      <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`Open website for ${project.title}`}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
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
