"use client";

import Link from "next/link";

import { navigation } from "@/content/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export default function NavigationLinks() {
  const activeSection = useActiveSection(
    navigation.map((item) => item.id)
  );

  return (
    <nav aria-label="Primary Navigation">
      <ul className="flex items-center gap-8">
        {navigation.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={cn(
                  "group relative px-2 py-1 font-medium transition-all duration-300",
                  "hover:text-cyan-400",
                  isActive && "text-cyan-400"
                )}
              >
                {item.label}

                <span
                  className={cn(
                    "absolute left-0 -bottom-1 h-0.5 bg-cyan-400 transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}