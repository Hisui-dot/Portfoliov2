import { useState } from "react";
import Particles from "../effects/Particles";
import "../../styles/intro-glitch.css";
import "../../styles/intro-portal.css";

type IntroProps = {
  onComplete: () => void;
};

export default function Intro({ onComplete }: IntroProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const startPortal = () => {
    if (isAnimating) return;

    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    setIsAnimating(true);

    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950">
      
      <div
        className={`relative w-full h-full transition-opacity duration-1000 ease-out ${
          isAnimating ? "portal-particles" : ""
        }`}
      >
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          particleHoverFactor={0.8}
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h1
          className={`hero glitch layers intro-glitch cursor-pointer select-none
            ${isAnimating ? "portal-text" : ""}`}
          data-text="Welcome"
          tabIndex={0}
          onClick={startPortal}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              startPortal();
            }
          }}
          style={{ pointerEvents: "auto" }}
        >
          <span>Welcome</span>
        </h1>
      </div>
    </section>
  );
}