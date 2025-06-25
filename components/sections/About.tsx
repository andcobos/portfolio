"use client";

import React, { forwardRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Smartphone } from "lucide-react";

export const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software developer with a love for creating clean, efficient, and user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              icon: <Code className="w-8 h-8 text-white" />,
              description: "Creating responsive and interactive user interfaces with modern frameworks.",
              color: "from-emerald-400 to-emerald-600",
            },
            {
              title: "Backend Development",
              icon: <Database className="w-8 h-8 text-white" />,
              description: "Building robust APIs and server-side applications with scalable architecture.",
              color: "from-purple-400 to-purple-600",
            },
            {
              title: "Mobile Development",
              icon: <Smartphone className="w-8 h-8 text-white" />,
              description: "Developing cross-platform mobile applications with native performance.",
              color: "from-orange-400 to-orange-600",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
