"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import StatsCard from "../ui/StatsCard";

import SocialLinks from "../shared/SocialLinks";
import FloatingShapes from "../effects/FloatingShapes";

import { heroData } from "@/content/hero";
import { stats } from "@/content/stats";

const fadeTransition = {
  duration: 0.8,
};

export default function Hero() {
  return (
    <Section id="home">
      <Container>
        <div className="relative flex min-h-screen flex-col items-center justify-center gap-20 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={fadeTransition}
            className="flex-1"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
              <span aria-hidden="true">🚀</span>
              <span className="ml-2">Available for Freelance</span>
            </div>

            <p className="mb-3 text-lg font-medium text-cyan-400">
              {heroData.greeting}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
              <span className="gradient-text">{heroData.name}</span>
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-slate-300 md:text-3xl">
              {heroData.title}
            </h2>

            <p className="mt-8 max-w-2xl leading-8 text-slate-400">
              {heroData.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">
                {heroData.hireButton}
              </Button>

              <Button
                href={heroData.resumeLink}
                variant="secondary"
              >
                {heroData.resumeButton}
              </Button>
            </div>

            <div className="mt-10">
              <SocialLinks />
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5">
              {stats.map((item) => (
                <StatsCard
                  key={item.label}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={fadeTransition}
            className="flex flex-1 justify-center"
          >
            <div className="relative">
              <div aria-hidden="true">
                <FloatingShapes />
              </div>

              <Image
                src={heroData.image}
                alt={heroData.name}
                width={420}
                height={420}
                sizes="(max-width: 768px) 280px, 420px"
                priority
                className="rounded-full border-4 border-cyan-500/30 shadow-[0_0_80px_rgba(34,211,238,.35)]"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}