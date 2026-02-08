"use client";
import React from "react";

const cn = (...c) => c.filter(Boolean).join(" ");

export default function GlowingSkillCard({
  label,
  title,
  description,
}) {
  return (
    <div
      className="
        relative rounded-2xl overflow-hidden
        bg-[#060010]/90 backdrop-blur-xl
        border border-white/10
        p-6
        glowing-card
      "
    >
      {/* 🔵 MOVING DOT */}
      <span className="glow-dot" />

      {/* 🌈 ANIMATED MULTI-COLOR BORDER */}
      <span className="glow-border" />

      {/* CONTENT */}
      <div className="relative z-10">
        <span className="text-sm text-cyan-400">
          {label}
        </span>

        <h3 className="mt-2 text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
