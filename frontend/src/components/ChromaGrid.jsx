import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ExternalLink, Github } from "lucide-react";

const ChromaGrid = ({
    items,
    radius = 300,
    damping = 0.45,
    fadeOut = 0.5,
    ease = "power3.out",
}) => {
    const rootRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;

        setX.current = gsap.quickSetter(el, "--x", "px");
        setY.current = gsap.quickSetter(el, "--y", "px");

        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x, y) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current(pos.current.x);
                setY.current(pos.current.y);
            },
            overwrite: true,
        });
    };

    const handleMove = (e) => {
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25 });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut });
    };

    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className="relative w-full flex flex-wrap justify-center gap-6"
            style={{
                "--r": `${radius}px`,
                "--x": "50%",
                "--y": "50%",
            }}
        >
            {items.map((c, i) => (
                <article
                    key={i}
                    className="
    group relative w-[300px]
    rounded-2xl overflow-hidden
    bg-[#060010]
    border border-white/10
    transition-all duration-300
    hover:-translate-y-1
  "
                >
                    {/* IMAGE */}
                    <div className="relative h-[160px] w-full">
                        <img
                            src={c.image}
                            alt={c.title}
                            className="w-full h-full object-cover"
                        />

                        {/* BADGE (optional) */}
                        <span className="
      absolute top-3 right-3
      text-xs px-3 py-1 rounded-full
      bg-white/90 text-cyan
    "> 
                            Project
                        </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4">
                        <h3 className="text-[1.05rem] font-semibold text-cyan-400">
                            {c.title}
                        </h3>

                        <p className="mt-2 text-sm text-cyan-400 leading-relaxed">
                            {c.subtitle}
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-4 flex gap-3">
  {/* VIEW BUTTON */}
  <a
    href={c.liveUrl || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex-1 flex items-center justify-center gap-2
      py-2 rounded-lg
      bg-white/5 border border-white/10
      text-white text-sm font-medium
      transition-all
      hover:bg-white/10
      active:scale-95
    "
  >
    <ExternalLink size={16} />
    View
  </a>

  {/* GITHUB BUTTON */}
  <a
    href={c.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-11 h-11 flex items-center justify-center
      rounded-lg
      bg-white/5 border border-white/10
      text-white
      transition-all
      hover:bg-white/10
      active:scale-95
    "
  >
    <Github size={18} />
  </a>
</div>

                    </div>
                </article>

            ))}

            {/* Spotlight masks */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backdropFilter: "grayscale(1) brightness(0.8)",
                    maskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,.6) 70%)",
                }}
            />

            <div
                ref={fadeRef}
                className="absolute inset-0 pointer-events-none"
                style={{
                    backdropFilter: "grayscale(1) brightness(0.8)",
                }}
            />
        </div>
    );
};

export default ChromaGrid;
