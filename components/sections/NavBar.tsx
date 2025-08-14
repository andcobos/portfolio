"use client";
import React from "react";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#0A0F1F]/90 backdrop-blur-md z-50 border-b border-[#334155]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-[#94A3B8] hover:text-[#1E40AF] transition-colors">
              About
            </a>
            <a href="#projects" className="text-[#94A3B8] hover:text-[#1E40AF] transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-[#94A3B8] hover:text-[#1E40AF] transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-[#94A3B8] hover:text-[#1E40AF] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
