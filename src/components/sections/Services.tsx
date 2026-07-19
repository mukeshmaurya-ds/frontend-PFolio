"use client";

import { motion } from "framer-motion";

import { services } from "@/content/services";
import { fadeUp } from "@/lib/animations";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          title="Services"
          subtitle="What I Do"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}