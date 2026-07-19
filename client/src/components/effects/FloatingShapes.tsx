export default function FloatingShapes() {
  return (
    <>
      <div
        className="
        absolute
        left-10
        top-20
        h-20
        w-20
        rounded-full
        border
        border-cyan-500/30
        animate-pulse
        "
      />

      <div
        className="
        absolute
        right-20
        bottom-20
        h-32
        w-32
        rounded-full
        border
        border-violet-500/30
        animate-pulse
        "
      />
    </>
  );
}