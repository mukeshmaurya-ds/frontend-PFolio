import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore my portfolio showcasing projects, skills, experience, and services in modern web development.",
};

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services/>
    </main>
  );
}