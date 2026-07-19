"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Section from "../ui/Section";
import Container from "../ui/Container";
import Button from "../ui/Button";
import AboutCard from "../ui/AboutCard";

import { aboutCards, aboutData } from "@/content/about";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <Image
                src="/images/about.png"
                alt="Mukesh Maurya Portrait"
                width={420}
                height={520}
                className="rounded-3xl border border-cyan-500/20 shadow-[0_0_50px_rgba(34,211,238,.15)]"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {aboutData.heading}
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              {aboutData.title}
            </h2>

            <p className="mt-8 leading-8 text-slate-400">
              {aboutData.description}
            </p>

            <div className="mt-10">
              <Button
                href={aboutData.resumeLink}
                variant="secondary"
              >
                Download Resume
              </Button>
            </div>

            {/* Cards */}
            <div className="mt-12 grid grid-cols-2 gap-5">
              {aboutCards.map((card) => (
                <AboutCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  value={card.value}
                />
              ))}
            </div>

          </motion.div>

        </div>
      </Container>
    </Section>
  );
}