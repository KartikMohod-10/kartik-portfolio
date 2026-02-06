import ChromaGrid from "./ChromaGrid";

export default function Projects() {
  const projects = [
  {
    title: "Tomato Food Delivery",
    subtitle: "Full-stack food ordering platform",
    image: "/projects/food-delivery.png",
    url: "https://tomato-food-del-frontend-zzaw.onrender.com/",
    githubUrl: "https://github.com/KartikMohod-10/Tomato_Food_Del.git",
  },
  {
    title: "AI Text to Image coverter",
    subtitle: "Final year AI-based project",
    image: "/projects/ai-text-image.jpeg",
    url: "#",
    githubUrl: "https://github.com/KartikMohod-10/Text-to-image-generator.git",
  },
  {
    title: "Maple Banquet Hall",
    subtitle: "Business website with modern UI",
    image: "/projects/maple-banquet.jpg",
    url: "https://maple-banquet.netlify.app/",
    githubUrl: "",
  },
  
  {
    title: "Scientific Equipment Portal",
    subtitle: "Frontend dashboard (Vercel deployed)",
    image: "/projects/scientific-equipment.png",
    url: "https://scientific-equipment-frontend.vercel.app/",
    githubUrl: "",
  },
  {
    title: "Society Management Portal",
    subtitle: "Housing society management system",
    image: "/projects/society-portal.jpg",
    url: "#",
    githubUrl: "https://github.com/kshitij2201/society-manage-portal.git",
  },
  {
    title: "TextUtils Website",
    subtitle: "Text analysis & manipulation app",
    image: "/projects/textutils.png",
    url: "https://textutlils.vercel.app/",
    githubUrl: "https://github.com/KartikMohod-10/Textutlils.git",
  }, 
];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black px-6 py-24"
    >
      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Recent <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="mt-3 text-gray-400">
          A showcase of my development work across various technologies
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/KartikMohod-10"
            target="_blank"
            className="px-4 py-2 text-sm rounded-lg
              border border-white/10 text-white
              hover:text-cyan-400 hover:border-cyan-400 transition"
          >
            GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/kartik-mohod/"
            target="_blank"
            className="px-4 py-2 text-sm rounded-lg
              border border-white/10 text-white
              hover:text-cyan-400 hover:border-cyan-400 transition"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* GRID */}
      <ChromaGrid items={projects} />
    </section>
  );
}
