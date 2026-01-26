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

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full px-6 py-4 flex items-center justify-between
        bg-black/70 backdrop-blur-md border-b border-white/10">

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

      {/* MOBILE MENU WITH SPARKLE */}
      {open && (
        <div className="md:hidden bg-black border-b border-white/10 px-6 py-6">
          <SparkleNavbar
            items={navItems}
            onItemClick={scrollTo}
            color="#00fffc"
          />
        </div>
      )}
    </header>
  );
}
