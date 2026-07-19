"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navigation } from "@/content/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="
          rounded-lg
          p-2
          transition-colors
          hover:bg-white/10
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-400
        "
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="
            absolute
            right-0
            mt-4
            w-56
            rounded-xl
            border
            border-white/10
            bg-slate-950/95
            backdrop-blur-xl
            shadow-xl
          "
        >
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col py-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      block
                      px-5
                      py-3
                      transition-colors
                      hover:bg-white/5
                      hover:text-cyan-400
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}