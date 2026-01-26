import { useEffect, useRef, useState } from "react";
//import Hyperspeed from "./Hyperspeed";
import MagicBento from "./MagicBento";
import { skills } from "./skillsData";

export default function Skills() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  /* ---------- PARALLAX SCROLL ---------- */
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 0.9;
      const end = vh * 0.3;
      const value = (start - rect.top) / (start - end);

      setProgress(Math.min(Math.max(value, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen bg-black overflow-hidden
      flex items-center justify-center px-6"
    >
      {/* 🔥 BACKGROUND */}
      {/*<div className="absolute inset-0">
        <Hyperspeed />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div
        style={{
          transform: `
            perspective(1200px)
            translateY(${80 - progress * 80}px)
            rotateX(${18 - progress * 18}deg)
            scale(${0.9 + progress * 0.1})
          `,
          opacity: progress,
        }}
        className="relative z-10 w-full max-w-6xl
        transition-all duration-300 ease-out"
      >
        {/* TITLE */}
        <div className="text-center mb-10 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="mt-3 text-gray-400">
            Technical expertise across the stack
          </p>
        </div>

        {/* MAGIC BENTO GRID */}
        <MagicBento
          enableSpotlight
          enableStars
          enableBorderGlow
          enableMagnetism
          glowColor="0,240,255"
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="card bg-[#060010] border border-white/10
              rounded-2xl p-5 text-white"
            >
              <span className="text-sm text-cyan-400">
                {skill.label}
              </span>
              <h3 className="mt-2 text-lg font-semibold">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </MagicBento>
      </div>
    </section>
  );
}
