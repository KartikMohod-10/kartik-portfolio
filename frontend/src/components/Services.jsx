import { useEffect, useRef, useState } from "react";
import { Code, Layers, Smartphone } from "lucide-react";

export default function Services() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  // Same parallax logic as Skills
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const value = (vh - rect.top) / vh;
      setProgress(Math.min(Math.max(value, 0), 1));
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className="
        relative
        min-h-screen
        bg-black
        flex items-center justify-center
        px-6
        z-20
      "
    >
      {/* CONTENT */}
      <div
        style={{
          transform: `translateY(${80 - progress * 80}px)`,
          opacity: progress,
        }}
        className="
          transition-all duration-300 ease-out
          max-w-7xl w-full
        "
      >
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-cyan-400">Awesome Services</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Comprehensive development services tailored to bring your vision to life
          </p>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center gap-10">
          <ServiceCard
            icon={<Code />}
            title="Frontend Development"
            desc="Creating responsive and interactive user interfaces using modern technologies."
            points={[
              "Responsive Design",
              "Interactive UI",
              "Performance Optimization",
            ]}
          />

          <ServiceCard
            icon={<Layers />}
            title="Full-Stack Web Development"
            desc="Building complete web applications using the MERN stack."
            points={[
              "End-to-End Development",
              "RESTful APIs",
              "Database Design",
            ]}
          />

          <ServiceCard
            icon={<Smartphone />}
            title="Web Applications"
            desc="Developing scalable web apps with seamless UX and backend architecture."
            points={[
              "Single Page Apps",
              "Real-time Features",
              "Cloud Integration",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ===== CARD ===== */
function ServiceCard({ icon, title, desc, points }) {
  return (
    <div
      className="
        group
        w-[320px] h-[380px]
        bg-[#060010]
        border border-white/10
        rounded-3xl
        p-8
        transition-all duration-500
        hover:-translate-y-4 hover:scale-[1.03]
        shadow-[0_0_25px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_50px_rgba(0,240,255,0.2)]
      "
    >
      {/* ICON */}
      <div className="
        w-12 h-12 mb-4
        flex items-center justify-center
        rounded-xl
        bg-cyan-500/10 text-cyan-400
      ">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="
        text-xl font-semibold text-white mb-3
        transition-transform duration-500
        group-hover:-translate-y-1
      ">
        {title}
      </h3>

      {/* DESC */}
      <p className="text-sm text-gray-400 mb-5 leading-relaxed">
        {desc}
      </p>

      {/* POINTS */}
      <ul className="space-y-2 text-sm text-gray-300">
        {points.map((p, i) => (
          <li
            key={i}
            className="
              flex gap-2
              opacity-80
              transition-all duration-300
              group-hover:opacity-100
              group-hover:translate-x-1
            "
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <span className="text-cyan-400">•</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
