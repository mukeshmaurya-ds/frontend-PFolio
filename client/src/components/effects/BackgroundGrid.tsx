export default function BackgroundGrid() {
  return (
    <div
      className="
      pointer-events-none
      fixed
      inset-0
      -z-50
      opacity-[0.05]
      [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
      [background-size:48px_48px]
      "
    />
  );
}