"use client";

import React, { useRef } from "react";

/* =========================
   CARD CONTAINER
========================= */
export function CardContainer({ children, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ perspective: "1000px" }}
    >
      {children}
    </div>
  );
}

/* =========================
   CARD BODY (3D TILT)
========================= */
export function CardBody({ children, className = "" }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 transform-gpu ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

/* =========================
   CARD ITEM (DEPTH)
========================= */
export function CardItem({
  children,
  className = "",
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  as: Component = "div",
}) {
  return (
    <Component
      className={className}
      style={{
        transform: `
          translateZ(${translateZ}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)
        `,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </Component>
  );
}
