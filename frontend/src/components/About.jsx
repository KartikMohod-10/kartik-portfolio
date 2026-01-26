import { useEffect, useRef, useState } from "react";
import Hyperspeed from "./Hyperspeed";

export default function About() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Aceternity-style progress (0 → 1)
      const start = vh * 0.9;
      const end = vh * 0.3;

      const raw =
        (start - rect.top) / (start - end);

      const clamped = Math.min(Math.max(raw, 0), 1);
      setProgress(clamped);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6"
    >
      {/* 🔥 SAME HYPERSPEED BACKGROUND */}
      <div className="absolute inset-0">
        <Hyperspeed />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div
        style={{
          transform: `
            perspective(1200px)
            translateY(${60 - progress * 60}px)
            scale(${0.9 + progress * 0.1})
            rotateX(${15 - progress * 15}deg)
          `,
          opacity: progress,
        }}
        className="relative z-10
        transition-[transform,opacity] duration-300 ease-out
        max-w-5xl w-full rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-[0_0_120px_rgba(0,255,255,0.08)]
        p-10 md:p-14"
      >
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-white">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
          A dedicated full-stack developer with a passion for building
          interactive and scalable web applications.
        </p>

        {/* GRID */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Who I Am
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I’m a passionate full-stack developer pursuing my B.Tech in
              Computer Science & Engineering. I specialize in modern MERN
              stack applications with a strong focus on UX and scalability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              What I Do
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I bring ideas to life using clean code and thoughtful design,
              building interactive React frontends and reliable backend APIs.
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold text-cyan-400 mb-6">
            Education
          </h3>

          <div className="space-y-6">
            <Edu
              title="B.Tech in Computer Science & Engineering"
              place="S.B. Jain Institute of Technology, Nagpur"
              year="2022 – 2026"
            />
            <Edu
              title="HSC (Higher Secondary Certificate)"
              place="MPL High School & Junior College"
              year="2021 – 2022"
            />
            <Edu
              title="SSC (Secondary School Certificate)"
              place="Pratap Madhyamik Vidyalaya"
              year="2019 – 2020"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* EDUCATION ITEM */
function Edu({ title, place, year }) {
  return (
    <div className="flex justify-between gap-6">
      <div className="border-l-2 border-cyan-400 pl-4">
        <h4 className="text-white font-medium">{title}</h4>
        <p className="text-gray-400 text-sm">{place}</p>
      </div>
      <span className="text-cyan-400 text-sm whitespace-nowrap">
        {year}
      </span>
    </div>
  );
}
