"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ProjectCard";
import { projects } from "@/content/projects";

type Project = (typeof projects)[number] & {
  featured?: boolean;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
};

function isFeaturedProject(
  project: Project,
): project is Project & {
  featured: NonNullable<Project["featured"]>;
  technologies: NonNullable<Project["technologies"]>;
  githubUrl: NonNullable<Project["githubUrl"]>;
  liveUrl: NonNullable<Project["liveUrl"]>;
  image: string;
} {
  return Boolean(
    project.featured &&
      project.technologies &&
      project.githubUrl &&
      project.liveUrl &&
      project.image,
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="My Work"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {projects
            .filter(isFeaturedProject)
            .map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </motion.div>
      </Container>
    </Section>
  );
}