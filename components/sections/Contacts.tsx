"use client";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { forwardRef } from "react";
import React from "react";

export const Contact = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section
            ref={ref}
            id="contact"
            className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    I'm always interested in new opportunities and exciting projects. Let's connect!
                </p>

                <div className="flex justify-center space-x-6 mb-12">
                    <a href="mailto:andcobos@icloud.com">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-200">
                            <Mail className="w-6 h-6" />
                        </Button>
                    </a>

                    <a href="https://www.linkedin.com/in/andrea-cobos/" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-200">
                            <Linkedin className="w-6 h-6" />
                        </Button>
                    </a>

                    <a href="https://github.com/andcobos" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-200">
                            <Github className="w-6 h-6" />
                        </Button>
                    </a>
                </div>

                <Button className="bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-700 hover:to-purple-700 text-white px-12 py-4 rounded-lg text-lg transform hover:scale-105 transition-all duration-200">
                    Get In Touch
                </Button>
            </div>
        </section>
    );
});

Contact.displayName = "Contact";
