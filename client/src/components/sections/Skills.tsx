"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../SkillCard";

import { skillCategories } from "@/content/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          title="My Skills"
          subtitle="Technologies"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
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
              <SkillCard
                title={category.title}
                skills={category.skills}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}