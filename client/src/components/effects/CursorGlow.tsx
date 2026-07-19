"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="
      pointer-events-none
      fixed
      z-[-40]
      h-72
      w-72
      rounded-full
      bg-cyan-500/15
      blur-[120px]
      "
      animate={{
        x: x - 144,
        y: y - 144,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 180,
      }}
    />
  );
}