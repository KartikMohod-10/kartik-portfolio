import ChromaGrid from "./ChromaGrid";

export default function Projects() {
  const projects = [
    {
      title: "Food Delivery Website",
      subtitle: "Full-stack food ordering platform",
      image: "https://picsum.photos/600/400?1",
      url: "#",
      githubUrl: "https://github.com/KartikMohod-10"
    },
    {
      title: "TextUtils Website",
      subtitle: "Text analysis & manipulation app",
      image: "https://picsum.photos/600/400?2",
      url: "#",
    githubUrl: "https://github.com/KartikMohod-10"
    },
    {
      title: "News App",
      subtitle: "Real-time news with API integration",
      image: "https://picsum.photos/600/400?3",
      url: "#",
       githubUrl: "https://github.com/KartikMohod-10"
    },
    {
      title: "AI Text-to-Image",
      subtitle: "Final year AI project",
      image: "https://picsum.photos/600/400?4",
      url: "#",
       githubUrl: "https://github.com/KartikMohod-10"
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
