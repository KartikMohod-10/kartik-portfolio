import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function SparkleNavbar({
  items,
  color = "#00fffc",
  onItemClick,
  vertical = false,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const navRef = useRef(null);
  const activeRef = useRef(null);
  const buttonRefs = useRef([]);

  const getOffset = (el) => {
    const navRect = navRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    return vertical
      ? elRect.top - navRect.top + elRect.height / 2 - 6
      : elRect.left - navRect.left + elRect.width / 2 - 18;
  };

  useLayoutEffect(() => {
    const btn = buttonRefs.current[0];
    if (!btn || !activeRef.current) return;

    gsap.set(activeRef.current, {
      x: vertical ? 0 : getOffset(btn),
      y: vertical ? getOffset(btn) : 0,
      opacity: 1,
    });
  }, [vertical]);

  const handleClick = (index) => {
    const btn = buttonRefs.current[index];
    if (!btn || !activeRef.current) return;

    gsap.to(activeRef.current, {
      x: vertical ? 0 : getOffset(btn),
      y: vertical ? getOffset(btn) : 0,
      duration: 0.5,
      ease: "power3.out",
    });

    setActiveIndex(index);
    onItemClick(items[index].id);
  };

  return (
    <>
      <style>{`
        .sparkle-nav {
          position: relative;
        }
        .sparkle-nav ul {
          display: flex;
          flex-direction: ${vertical ? "column" : "row"};
          gap: ${vertical ? "20px" : "32px"};
        }
        .sparkle-nav button {
          background: none;
          border: none;
          cursor: pointer;
          color: #ccc;
          font-size: 15px;
          transition: color .3s;
          text-align: left;
        }
        .sparkle-nav li.active button {
          color: white;
          text-shadow: 0 0 10px ${color};
        }
        .sparkle-active {
          position: absolute;
          ${vertical ? "left: -8px; width: 3px; height: 24px;" : "bottom: -6px; width: 36px; height: 3px;"}
          background: ${color};
          border-radius: 2px;
          box-shadow: 0 0 12px ${color};
          opacity: 0;
        }
      `}</style>

      <nav ref={navRef} className="sparkle-nav">
        <ul>
          {items.map((item, i) => (
            <li key={item.id} className={i === activeIndex ? "active" : ""}>
              <button
                ref={(el) => (buttonRefs.current[i] = el)}
                onClick={() => handleClick(i)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div ref={activeRef} className="sparkle-active" />
      </nav>
    </>
  );
}
