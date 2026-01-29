"use client";

import { useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";



export default function Certifications() {
  const scrollRef = useRef(null);

  /* ✅ TRUE AUTO SCROLL (NO MANUAL) */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollPos = 0;
    let direction = 1;

    const autoScroll = () => {
      scrollPos += direction * 0.8;
      el.scrollLeft = scrollPos;

      if (scrollPos >= el.scrollWidth - el.clientWidth) direction = -1;
      if (scrollPos <= 0) direction = 1;
    };

    const interval = setInterval(autoScroll, 18);
    return () => clearInterval(interval);
  }, []);

  const certifications = [
    {
      title: "Design and Analysis of Algorithm",
      desc: "NPTEL certified course focused on algorithmic thinking.",
      org: "NPTEL",
      icon: "🎓",
      link: "https://drive.google.com/file/d/1E0kLzTrwhq4qGNSamVwG0kRvx31er6Id/view?usp=sharing",
    },
    {
      title: "Data Analytics with Python",
      desc: "Hands-on data analysis using Python libraries.",
      org: "NPTEL",
      icon: "📊",
      link: "https://drive.google.com/file/d/1HuDEFzWnPef6ZGeIwLC0nI9chz9Bc_T8/view",
    },
    {
      title: "National Service Scheme",
      desc: "Community service and leadership program.",
      org: "Ministry of Youth Affairs & Sports",
      icon: "🏆",
      link: "https://drive.google.com/file/d/1CwKF53ZaiViloCeRJQB_hP9Fa17TsTQJ/view?usp=drive_link",
    },
    {
      title: "MongoDB Course",
      desc: "NoSQL database fundamentals and queries.",
      org: "GeeksforGeeks",
      icon: "🍃",
      link: "https://drive.google.com/file/d/1iI7w_q2ESvcOxOf3Mmlio1yp97sAUjV7/view?usp=drive_link",
    },
    {
      title: "Google Cloud Study Jam",
      desc: "Cloud fundamentals with hands-on labs.",
      org: "Google Cloud",
      icon: "☁️",
      link: "https://drive.google.com/file/d/1Tcx1WViM9b66dywEfQHRhfI7TLI1rIJM/view?usp=drive_link",
    },
    {
      title: "Figma Bootcamp",
      desc: "UI/UX design and prototyping skills.",
      org: "Design Certification",
      icon: "🎨",
      link: "https://drive.google.com/file/d/1YzUkRBPJr0ibN21YVNshdMZUBJEPjKtW/view?usp=drive_link",
    },
  ];

  return (
    <section className="relative bg-black  pt-10 pb-24 overflow-hidden min-h-screen">
  
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements that highlight my
            continuous learning and technical growth.
          </p>
        </div>

        {/* 🖥 DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContainer>
                <CardBody
                  className="
                    h-[220px] w-full
                    bg-gradient-to-b from-[#0b031a] to-[#05000d]
                    border border-white/10
                    rounded-2xl
                    p-5
                    flex flex-col
                  "
                >
                  <CardItem className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                    {c.icon}
                  </CardItem>

                  <h3 className="text-white font-semibold text-base">
                    {c.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                    {c.desc}
                  </p>

                  <p className="text-cyan-400 text-xs mt-auto">
                    {c.org}
                  </p>
                </CardBody>
              </CardContainer>
            </a>
          ))}
        </div>

        {/* 📱 MOBILE AUTO SCROLL */}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-4 overflow-x-auto no-scrollbar"
        >
          {certifications.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[240px]"
            >
              <CardBody
                className="
                  h-[220px]
                  bg-gradient-to-b from-[#0b031a] to-[#05000d]
                  border border-white/10
                  rounded-2xl
                  p-5
                  flex flex-col
                "
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                  {c.icon}
                </div>

                <h3 className="text-white font-semibold text-base">
                  {c.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                  {c.desc}
                </p>

                <p className="text-cyan-400 text-xs mt-auto">
                  {c.org}
                </p>
              </CardBody>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
