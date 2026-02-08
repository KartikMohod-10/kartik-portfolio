import { useEffect, useRef, useState } from "react";
import Galaxy from "./Galaxy";
import { skills } from "./skillsData";
import GlowingSkillCard from "./GlowingSkillCard";

export default function Skills() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

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
      className="
        relative min-h-screen overflow-hidden
        bg-black px-6
        flex items-center justify-center
      "
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseInteraction
          mouseRepulsion
          density={0.7}
          glowIntensity={0.35}
          saturation={0}
          hueShift={180}
          twinkleIntensity={0.3}
          rotationSpeed={0.08}
          starSpeed={0.5}
          speed={1}
          transparent
        />
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

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
        className="
          relative z-10 w-full
          max-w-[1440px]
          transition-all duration-300
        "
      >
        {/* TITLE */}
        <div className="text-center mb-14 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="mt-3 text-gray-400">
            Technical expertise across the stack
          </p>
        </div>

        {/* 🔥 GRID (FIXED) */}
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            justify-items-center
          "
        >
          {skills.map((skill, i) => (
            <div key={i} className="w-full max-w-[340px]">
              <GlowingSkillCard
                label={skill.label}
                title={skill.title}
                description={skill.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
