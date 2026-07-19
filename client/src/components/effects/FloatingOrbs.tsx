export default function FloatingOrbs() {
  return (
    <>
      <div
        className="
        absolute
        left-[12%]
        top-[18%]
        h-4
        w-4
        animate-pulse
        rounded-full
        bg-cyan-400/60
        "
      />

      <div
        className="
        absolute
        right-[18%]
        top-[40%]
        h-3
        w-3
        animate-pulse
        rounded-full
        bg-violet-400/60
        "
      />

      <div
        className="
        absolute
        bottom-[15%]
        left-[30%]
        h-5
        w-5
        animate-pulse
        rounded-full
        bg-cyan-300/40
        "
      />
    </>
  );
}