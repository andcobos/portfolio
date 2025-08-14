"use client";

import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import HeroCodeBlock from "../HeroCodeBlock";

export const Hero = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section ref={ref} className="pt-24 pb-20 px-6 bg-[#0A0F1F]">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700">
                            <h1 className="text-5xl lg:text-6xl font-bold text-[#F3F4F6] leading-tight">
                                <span className="sr-only">Andrea Cobos - </span>
                                Software
                                <span className="block bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">
                                    Developer
                                </span>
                            </h1>
                        </div>
                        <p className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-xl text-[#94A3B8] leading-relaxed">
                            Passionate about creating innovative solutions and building exceptional digital experiences.
                        </p>
                        <div className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 flex space-x-4">
                            <Button className="bg-[#1E40AF] hover:bg-[#2563EB] text-[#F3F4F6] px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-200">
                                View Projects
                            </Button>

                            <a
                                href="/andrea_cobos_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="outline"
                                    className="border-[#334155] text-[#F3F4F6] hover:bg-[#1B2432] px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-200"
                                >
                                    Download CV
                                </Button>
                            </a>

                        </div>
                    </div>

                    <HeroCodeBlock />
                    
                </div>
            </div>
        </section>
    );
});
Hero.displayName = "Hero";
export default Hero;