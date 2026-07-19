"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types/portfolio";
import { fadeUp } from "@/lib/animations";

type Props = {
  item: Experience;
};

export default function TimelineItem({ item }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-12"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />

      {/* Timeline Line */}
      <div className="absolute left-[7px] top-6 h-full w-[2px] bg-white/10" />

      <div className="glass rounded-2xl p-8 hover-lift">
        <h3 className="text-2xl font-bold">
          {item.role}
        </h3>

        <p className="mt-2 text-cyan-400">
          {item.company}
        </p>

        <p className="mt-2 text-sm text-slate-400">
          {item.duration}
        </p>

        <p className="mt-6 leading-8 text-slate-300">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}