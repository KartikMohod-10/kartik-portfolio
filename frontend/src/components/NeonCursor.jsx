import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NeonCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    // ❌ Mobile disable
    if (window.innerWidth < 768) return;

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClick(true);
    const up = () => setClick(false);

    const over = (e) => {
      if (e.target.closest("a, button, input, textarea, [data-hover]")) {
        setHover(true);
      }
    };

    const out = () => setHover(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      {/* MAIN DOT */}
      <motion.div
        className="fixed z-[9999] pointer-events-none
        w-3 h-3 rounded-full bg-cyan-400"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: click ? 0.7 : hover ? 1.4 : 1,
        }}
      />

      {/* RING */}
      <motion.div
        className="fixed z-[9998] pointer-events-none
        w-10 h-10 rounded-full border-2
        border-cyan-500"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hover ? 1.5 : 1,
          opacity: hover ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />

      {/* GLOW */}
      <motion.div
        className="fixed z-[9997] pointer-events-none
        w-16 h-16 rounded-full
        bg-cyan-400/30 blur-xl"
        animate={{
          x: pos.x - 32,
          y: pos.y - 32,
          opacity: hover ? 0.9 : 0.4,
        }}
      />
    </>
  );
}
