import Link from "next/link";
import { socialLinks } from "@/content/social";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex gap-6">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            className="text-3xl transition hover:text-cyan-400"
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}