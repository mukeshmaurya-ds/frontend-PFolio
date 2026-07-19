export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const navigation: readonly NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "#home",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "services",
    label: "Services",
    href: "#services",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
] as const;