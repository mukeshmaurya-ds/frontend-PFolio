export default function BackgroundGlow() {
  return (
    <>
      <div
        className="
        fixed
        left-[-180px]
        top-[-180px]
        -z-50
        h-[520px]
        w-[520px]
        rounded-full
        bg-cyan-500/20
        blur-[140px]
        pointer-events-none
        "
      />

      <div
        className="
        fixed
        bottom-[-220px]
        right-[-220px]
        -z-50
        h-[620px]
        w-[620px]
        rounded-full
        bg-violet-500/20
        blur-[170px]
        pointer-events-none
        "
      />
    </>
  );
}