import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
      text-2xl
      font-black
      tracking-tight
      "
    >
      Mukesh
      <span className="text-cyan-400">
        .
      </span>
    </Link>
  );
}