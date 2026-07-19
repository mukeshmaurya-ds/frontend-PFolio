export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-slate-400">
        © {new Date().getFullYear()} Mukesh Maurya.
        All Rights Reserved.
      </div>
    </footer>
  );
}