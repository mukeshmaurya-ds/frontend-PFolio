import BackgroundGlow from "./BackgroundGlow";
import BackgroundGrid from "./BackgroundGrid";
import FloatingOrbs from "./FloatingOrbs";
import CursorGlow from "./CursorGlow";

export default function BackgroundEffects() {
  return (
    <>
      <BackgroundGrid />
      <BackgroundGlow />
      <FloatingOrbs />
      <CursorGlow />
    </>
  );
}