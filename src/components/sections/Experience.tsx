"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";

import { experience } from "@/content/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          title="Experience"
          subtitle="Career Journey"
        />

        <div className="mx-auto max-w-4xl space-y-12">
          {experience.map((item) => (
            <TimelineItem
              key={`${item.company}-${item.role}`}
              item={item}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}