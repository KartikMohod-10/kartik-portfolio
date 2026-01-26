import Hyperspeed from "./Hyperspeed";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Hero() {
  const words = [
    { text: "Hy!", className: "text-cyan-400" },
    { text: "I" },
    { text: "Am" },
    { text: "Kartik", className: "text-cyan-400" },
    //{ text: "Vinod", className: "text-cyan-400" },
    { text: "Mohod", className: "text-cyan-400" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* 🔥 HYPERSPEED BACKGROUND */}
      <div className="absolute inset-0">
        <Hyperspeed />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen
        flex flex-col items-center justify-center text-center px-6">

        <span className="mb-5 px-4 py-1 rounded-full
          bg-white/10 text-cyan-400 text-sm">
          Full-Stack Developer
        </span>

        <TypewriterEffectSmooth words={words} />

        <p className="mt-6 max-w-2xl text-gray-300">
          A passionate full-stack developer specializing in building
          interactive and scalable web applications using the MERN stack.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-xl
    bg-cyan-400 text-black font-semibold
    cursor-pointer"
          >
            View Projects →
          </button>


          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-xl
    border border-white/30 text-white
    cursor-pointer"
          >
            Contact Me
          </button>

        </div>

      </div>
    </section>
  );
}
