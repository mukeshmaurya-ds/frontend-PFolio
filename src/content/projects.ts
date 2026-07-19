import { Project } from "@/types/project";

export const projects: Project[] = [
  
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built using Next.js, TypeScript and Tailwind CSS.",

    image: "/images/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
  },

  {
    id: 2,
    title: "E-Commerce Website",

    description:
      "Full Stack shopping platform with authentication, cart and payment integration.",

    image: "/images/projects/ecommerce.png",

    github: "https://github.com/yourusername/ecommerce",
  },

  {
    id: 3,

    title: "Admin Dashboard",

    description:
      "Responsive analytics dashboard with charts, authentication and API integration.",

    image: "/images/projects/dashboard.png",


    github: "https://github.com/yourusername/dashboard",
  },
];