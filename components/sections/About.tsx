"use client";

import React, { forwardRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Code, Database, Layout, Layers, Settings } from "lucide-react";

export const About = forwardRef<HTMLElement>((_, ref) => {
  const items = [
    {
      title: "Frontend Development",
      icon: Code,
      description:
        "Creating responsive and interactive user interfaces with modern frameworks like Next.js.",
      iconColor: "text-amber-500",
    },
    {
      title: "Backend Development",
      icon: Settings,
      description:
        "Building secure and scalable RESTful APIs using Laravel and NestJS. JWT auth and Google OAuth experience.",
      iconColor: "text-emerald-500", 
    },
    {
      title: "UX/UI Design",
      icon: Layout,
      description:
        "Designing intuitive interfaces and prototypes focused on usability and aesthetics in Figma.",
      iconColor: "text-pink-500", 
    },
    {
      title: "Database Design",
      icon: Database,
      description:
        "Relational schemas and query optimization with PostgreSQL and MySQL.",
      iconColor: "text-pink-500",
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      description:
        "VMs, deployments and reliable cloud workflows.",
      iconColor: "text-amber-500",
    },
    {
      title: "Software Architecture",
      icon: Layers,
      description:
        "Scalable and maintainable systems using proven architectural patterns.",
      iconColor: "text-emerald-500",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-20 px-6 bg-[#0A0F1F]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 text-4xl font-bold text-[#F3F4F6] mb-4">
            About Me
          </h2>
          <p className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 text-xl text-[#94A3B8] max-w-3xl mx-auto">
            I am a Junior Software Engineer with experience in web development, PostgreSQL, and building RESTful APIs. I also have expertise 
            in UX/UI design using Figma, software testing, and Agile methodologies, along with a solid understanding of business intelligence concepts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map(({ title, icon: Icon, description, iconColor }, i) => (
            <Card
              key={i}
              className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 
                        group hover:shadow-xl hover:-translate-y-2 
                        bg-[#1B2432] border border-[#202835] hover:border-[#273141] 
                        rounded-xl hover:bg-[#202A3A]"
            >
              <CardContent className="p-8 text-center">
                {/* Contenedor del icono: fondo sutil + ring azul */}
                <div className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center bg-white/5 ring-1 ring-[#334155] group-hover:ring-[#202835] transition">
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>

                <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">
                  {title}
                </h3>
                <p className="text-[#94A3B8]">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
