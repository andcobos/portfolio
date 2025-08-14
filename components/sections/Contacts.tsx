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
            className="py-20 px-6 bg-[#0A0F1F] text-[#F3F4F6]"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-[#F3F4F6]">Let's Work Together</h2>
                <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto">
                    I'm always interested in new opportunities and exciting projects. Let's connect!
                </p>

                <div className="flex justify-center space-x-6 mb-12">
                    <a href="mailto:andcobos@icloud.com">
                        <Button className="bg-[#1B2432] hover:bg-[#334155] text-[#F3F4F6] p-4 rounded-full transform hover:scale-110 transition-all duration-200">
                            <Mail className="w-6 h-6" />
                        </Button>
                    </a>

                    <a href="https://www.linkedin.com/in/andrea-cobos/" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#1B2432] hover:bg-[#334155] text-[#F3F4F6] p-4 rounded-full transform hover:scale-110 transition-all duration-200">
                            <Linkedin className="w-6 h-6" />
                        </Button>
                    </a>

                    <a href="https://github.com/andcobos" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#1B2432] hover:bg-[#334155] text-[#F3F4F6] p-4 rounded-full transform hover:scale-110 transition-all duration-200">
                            <Github className="w-6 h-6" />
                        </Button>
                    </a>
                </div>

                <Button className="bg-gradient-to-r from-[#1E40AF] to-[#2563EB] text-[#F3F4F6] px-12 py-4 rounded-lg text-lg transform transition-all duration-200">
                    Get In Touch
                </Button>
            </div>
        </section>
    );
});

Contact.displayName = "Contact";
