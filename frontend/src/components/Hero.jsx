import Hyperspeed from "./Hyperspeed";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    { text: "Hy!", className: "text-cyan-400" },
    { text: "I" },
    { text: "Am" },
    { text: "Kartik", className: "text-cyan-400" },
    { text: "Mohod", className: "text-cyan-400" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-black overflow-hidden pt-10"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Hyperspeed />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <span className="mb-5 px-4 py-1 rounded-full bg-white/10 text-cyan-400 text-sm">
          Full-Stack Developer
        </span>

        <TypewriterEffectSmooth words={words} />

        <p className="mt-6 max-w-2xl text-gray-300">
          A passionate full-stack developer specializing in building
          interactive and scalable web applications using the MERN stack.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {/* VIEW PROJECTS */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              px-6 py-2 rounded-lg
              bg-cyan-400 text-black font-semibold
              transition-all
              hover:bg-cyan-300
              hover:shadow-[0_0_18px_#22d3ee]
            "
          >
            View Projects →
          </motion.button>

          {/* CONTACT */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              px-6 py-2 rounded-lg
              border border-cyan-400/60
              text-cyan-300 font-semibold
              bg-black/40
              transition-all
              hover:bg-cyan-400/10
              hover:shadow-[0_0_16px_#22d3ee88]
            "
          >
            Contact Me
          </motion.button>

          {/* RESUME */}
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://drive.google.com/file/d/1W1XmMgxCC_DUCzYuj7xXfa7XP5whLANN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-2 rounded-lg
              border border-cyan-400/60
              text-cyan-300 font-semibold
              bg-black/40
              transition-all
              hover:bg-cyan-400/10
              hover:shadow-[0_0_16px_#22d3ee88]
              inline-block
            "
          >
            Check My Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
