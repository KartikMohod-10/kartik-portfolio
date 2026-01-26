import { useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const certifications = [
  { title: "Design and Analysis of Algorithm", org: "NPTEL", icon: "🎓" },
  { title: "Data Analytics with Python", org: "NPTEL", icon: "📊" },
  { title: "National Service Scheme", org: "NSS", icon: "🏆" },
  { title: "MongoDB Course", org: "GeeksforGeeks", icon: "🍃" },
  { title: "Google Cloud Study Jam", org: "Google Cloud", icon: "☁️" },
  { title: "Figma Bootcamp", org: "Design", icon: "🎨" },
];

export default function Certifications() {
  const scrollRef = useRef(null);

  /* 🔁 MOBILE AUTO SCROLL */
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const el = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!el) return;
      scrollAmount += 1;
      el.scrollLeft = scrollAmount;

      if (scrollAmount >= el.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="certifications"
      className="relative w-full bg-black pt-16 pb-24"
    >
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">
          🏅 Certifications
        </h2>
        <p className="text-gray-400 mt-2">
          Professional certifications and achievements
        </p>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-4 gap-6 px-6">
        {certifications.map((c, i) => (
          <CardContainer key={i}>
            <CardBody className="bg-[#060010] border border-white/10 rounded-2xl p-6 min-h-[160px]">
              <CardItem translateZ={40} className="text-2xl">
                {c.icon}
              </CardItem>
              <CardItem translateZ={60} className="mt-3 text-white font-semibold">
                {c.title}
              </CardItem>
              <CardItem translateZ={40} className="text-sm text-gray-400 mt-1">
                {c.org}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* MOBILE AUTO SCROLL */}
      <div
        ref={scrollRef}
        className="md:hidden flex gap-4 overflow-x-hidden px-6"
      >
        {[...certifications, ...certifications].map((c, i) => (
          <div key={i} className="min-w-[260px]">
            <CardBody className="bg-[#060010] border border-white/10 rounded-2xl p-5 min-h-[160px]">
              <div className="text-2xl">{c.icon}</div>
              <h3 className="mt-3 text-white font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-400">{c.org}</p>
            </CardBody>
          </div>
        ))}
      </div>
    </section>
  );
}
