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
    tech: ["React", "NextJS", "PostgreSQL"],
    gradient: "from-emerald-400 to-emerald-600",
    github: "https://github.com/andcobos/ecommerceproject_andreacobos",
    website: "https://prostoremusic-andreacobos.vercel.app",
    thumbnail: "/screenshots/ecommerce.png", 
  },
  {
    title: "Pomodoro Timer",
    description: "Pomodoro timer app to boost productivity",
    tech: ["React", "Vite", "JS"],
    gradient: "from-purple-400 to-purple-600",
    github: "https://github.com/andcobos/taskapp",
    website: "https://taskapp-demo.vercel.app",
    thumbnail: "/screenshots/taskapp.png",
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
