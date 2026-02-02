import { useState } from "react";
import { Menu, X } from "lucide-react";
import SparkleNavbar from "./SparkleNavbar";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ FIXED SCROLL (mobile + deployment safe)
  const scrollTo = (id) => {
    setOpen(false);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const navbarHeight = 80; // fixed navbar height
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 100); // wait for mobile menu close
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="w-full px-6 py-4 flex items-center justify-between
        bg-black/70 backdrop-blur-md border-b border-white/10"
      >
        {/* LOGO */}
        <h1 className="text-xl font-bold text-white">
          Kartik<span className="text-cyan-500">.</span>
        </h1>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <SparkleNavbar
            items={navItems}
            onItemClick={scrollTo}
            color="#00fffc"
          />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU WITH HORIZONTAL SCROLL */}
      {open && (
        <div
          className="
            md:hidden
            bg-black
            border-b border-white/10
            px-6 py-4
            overflow-x-auto
            scrollbar-hide
          "
        >
          <div className="min-w-max">
            <SparkleNavbar
              items={navItems}
              onItemClick={scrollTo}
              color="#00fffc"
            />
          </div>
        </div>
      )}
    </header>
  );
}
