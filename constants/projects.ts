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
    description: "E-commerce solution, full-stack website built with Next.js, React, and MongoDB, designed to showcase the complete development of an online store from front to back. It serves as a practical demonstration of integrating these technologies to create a functional and dynamic application, following the detailed steps provided in an O'Reilly course by Brad Traversy.",
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
    website: "https://tactival.vercel.app",
    thumbnail: "/screenshots/tactival.png",
  },
  {
    title: "Website ESEN - Knowledge Center",
    description: "Website for students and administrators. Students can request study rooms and books and pay loans. The administrator can add students, review requests and asign loans.",
    tech: ["NextJS", "Firebase", "Tailwind"],
    gradient: "from-orange-400 to-orange-600",
    github: "https://github.com/andcobos/weatherapp",
    website: "https://centro-conocimiento-sitioweb.vercel.app",
    thumbnail: "/screenshots/knowledgecenter.png",
  },
];
