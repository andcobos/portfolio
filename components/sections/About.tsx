"use client";

import React, { forwardRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Code, Database, Layout, Layers, Settings, } from "lucide-react";

export const About = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section ref={ref} id="about" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-4xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <p className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-xl text-gray-600 max-w-3xl mx-auto">
                        I'm a Junior Software Engineer with experience in full-stack development, PostgreSQL, and RESTful APIs. I also work with UX/UI design in
                        Figma, software testing, Agile methods, and Business Intelligence. I enjoy teamwork and keep learning to build scalable, user-centered solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Frontend Development",
                            icon: <Code className="w-8 h-8 text-white" />,
                            description: "Creating responsive and interactive user interfaces with modern frameworks like Next.JS.",
                            color: "from-emerald-400 to-emerald-600",
                        },
                        {
                            title: "Backend Development",
                            icon: <Settings className="w-8 h-8 text-white" />,
                            description: "Building secure and scalable RESTful APIs using Laravel and NestJS. Experienced in JWT authentication and Google OAuth for modern backend applications.",
                            color: "from-purple-400 to-purple-600",
                        },
                        {
                            title: "UX/UI Design",
                            icon: <Layout className="w-8 h-8 text-white" />,
                            description: "Designing intuitive user interfaces and interactive prototypes with a focus on usability and aesthetics using Figma.",
                            color: "from-orange-400 to-orange-600",
                        },
                        {
                            title: "Database Design",
                            icon: <Database className="w-8 h-8 text-white" />,
                            description: "Designing and managing relational databases using PostgreSQL and MySQL for structured and scalable data storage.",
                            color: "from-emerald-400 to-emerald-600",
                        },
                        {
                            title: "Cloud Computing",
                            icon: <Cloud className="w-8 h-8 text-white" />,
                            description: "Exploring cloud platforms, virtual machines, and deployment workflows to build reliable cloud-based applications.",
                            color: "from-purple-400 to-purple-600",
                        },
                        {
                            title: "Software Architecture",
                            icon: <Layers className="w-8 h-8 text-white" />,
                            description: "Designing scalable and maintainable applications by applying architectural patterns and aligning with client needs.",
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
