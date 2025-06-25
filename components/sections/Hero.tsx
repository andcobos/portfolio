"use client";

import { forwardRef } from "react";
import { Button } from "@/components/ui/button";

export const Hero = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section ref={ref} className="pt-24 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                <span className="sr-only">Andrea Cobos - </span>
                                Software
                                <span className="block bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                                    Developer
                                </span>
                            </h1>
                        </div>
                        <p className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-xl text-gray-600 leading-relaxed">
                            Passionate about creating innovative solutions and building exceptional digital experiences.
                        </p>
                        <div className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 flex space-x-4">
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-200">
                                View Projects
                            </Button>
                            <Button
                                variant="outline"
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-200"
                            >
                                Download CV
                            </Button>
                        </div>
                    </div>

                    {/* Isometric Elements */}
                    <figure className="relative" aria-label="Decorative isometric design elements">
                        <div className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700">
                            <div className="relative w-80 h-80 mx-auto">
                                {/* Main Cube */}
                                <div className="absolute inset-0 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                                    <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl shadow-2xl transform perspective-1000 rotateX-12 rotateY-12"></div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-500"></div>
                                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-lg transform -rotate-12 hover:rotate-12 transition-transform duration-500"></div>
                                <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg animate-bounce"></div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    );
});
Hero.displayName = "Hero";
export default Hero;