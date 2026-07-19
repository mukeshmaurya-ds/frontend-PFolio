"use client";

import Container from "../ui/Container";
import Logo from "../shared/Logo";
import NavigationLinks from "../shared/NavigationLinks";
import MobileMenu from "../shared/MobileMenu";
import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 will-change-transform transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 supports-[backdrop-filter]:bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Logo />

          <div className="hidden md:block">
            <NavigationLinks />
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}