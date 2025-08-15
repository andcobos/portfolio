export type Project = {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  github: string;
  website: string;
  thumbnail: string; 
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, NextJS, and MongoDB",
    tech: ["React", "NextJS", "NeonDB"],
    gradient: "from-emerald-400 to-emerald-600",
    github: "https://github.com/andcobos/ecommerceproject_andreacobos",
    website: "https://prostoremusic-andreacobos.vercel.app",
    thumbnail: "/screenshots/ecommerce.png", 
  },
  {
    title: "Tactival - Guide & Catalog",
    description: "High-quality tactical gear catalog offering survival, EDC, and outdoor essentials for preparedness and adventure.",
    tech: ["NextJS", "Typescript", "v0"],
    gradient: "from-purple-400 to-purple-600",
    github: "https://github.com/andcobos/survival-website",
    website: "https://survival-website.vercel.app",
    thumbnail: "/screenshots/tactival.png",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    tech: ["React", "API Integration", "Chart.js"],
    gradient: "from-orange-400 to-orange-600",
    github: "https://github.com/andcobos/weatherapp",
    website: "https://weather-dashboard-demo.vercel.app",
    thumbnail: "/screenshots/weather.png",
  },
];
