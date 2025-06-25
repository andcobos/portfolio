"use client";
import React from "react";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
