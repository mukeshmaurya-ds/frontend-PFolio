import { Project } from "@/types/project";

export const projects: Project[] = [
  
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built using Next.js, TypeScript and Tailwind CSS.",

    image: "/images/projects/portfolio.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    githubUrl: "https://github.com/yourusername/portfolio",

    liveUrl: "https://portfolio.vercel.app",

    featured: true,
  },

  {
    id: 2,
    title: "E-Commerce Website",

    description:
      "Full Stack shopping platform with authentication, cart and payment integration.",

    image: "/images/projects/ecommerce.png",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],

    githubUrl: "https://github.com/yourusername/ecommerce",

    liveUrl: "https://ecommerce.vercel.app",

    featured: true,
  },

  {
    id: 3,

    title: "Admin Dashboard",

    description:
      "Responsive analytics dashboard with charts, authentication and API integration.",

    image: "/images/projects/dashboard.png",

    technologies: [
      "Next.js",
      "Chart.js",
      "Tailwind CSS",
    ],

    githubUrl: "https://github.com/yourusername/dashboard",

    liveUrl: "https://dashboard.vercel.app",

    featured: true,
  },
];