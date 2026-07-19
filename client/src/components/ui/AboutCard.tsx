"use client";

import { motion } from "framer-motion";

type AboutCardProps = {
  icon: string;
  title: string;
  value: string;
};

export default function AboutCard({
  icon,
  title,
  value,
}: AboutCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
      "
    >
      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-slate-400">
        {value}
      </p>
    </motion.div>
  );
}