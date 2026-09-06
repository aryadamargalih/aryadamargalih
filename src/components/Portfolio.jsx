import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "../data";

const STATUS_STYLES = {
  live: "border-[var(--accent)] text-[var(--accent)]",
  "in progress": "border-[var(--line)] text-[var(--ink-dim)]",
  archived: "border-[#ef4444]/40 text-[#ef4444]/80",
};

function ProjectGallery({ images, title }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-full">
      <div
        ref={scrollRef}
        className="relative w-full h-full flex items-center gap-6 px-8 blueprint-grid overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        {/* soft accent glow behind the gallery */}
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "var(--accent)" }}
        />
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            className="relative shrink-0 snap-center max-h-[85%] w-auto rounded-2xl border border-[var(--line)] shadow-2xl"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[var(--bg)]/80 border border-[var(--line)] flex items-center justify-center backdrop-blur-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[var(--bg)]/80 border border-[var(--line)] flex items-center justify-center backdrop-blur-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            <ChevronRight size={18} />
          </button>
          <span className="absolute top-2 right-2 z-20 font-mono text-[10px] px-1.5 py-0.5 rounded-sm bg-[var(--bg)]/80 border border-[var(--line)] text-[var(--ink-dim)]">
            {images.length} shots
          </span>
        </>
      )}
    </div>
  );
}

function Portfolio({ sectionRef }) {
  return (
    <section id="portfolio" ref={sectionRef} className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-[var(--accent)] mb-2">
            03 — projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Featured Work
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const hasLink = project.link && project.link !== "#";
            return (
            <div
              key={index}
              className="group border border-[var(--line)] rounded-md overflow-hidden md:grid md:grid-cols-[1fr_1.2fr] hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-[var(--ink-dim)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-mono text-xs px-2 py-0.5 rounded-sm border ${
                        STATUS_STYLES[project.status] ??
                        STATUS_STYLES["in progress"]
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[var(--ink-dim)] text-sm mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-2 py-1 border border-[var(--line)] rounded-sm text-[var(--ink-dim)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-sm text-[var(--ink-dim)] hover:text-[var(--accent)] transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                    {project.status !== "archived" && hasLink && (
                      <a
                        href={project.link}
                        className="flex items-center gap-1.5 text-sm text-[var(--ink-dim)] hover:text-[var(--accent)] transition-colors"
                      >
                        <ExternalLink size={16} /> Visit
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative aspect-video md:aspect-auto md:max-h-[400px] overflow-hidden bg-[var(--panel)] border-t md:border-t-0 md:border-l border-[var(--line)]">
                {project.images?.length ? (
                  <ProjectGallery images={project.images} title={project.title} />
                ) : project.image ? (
                  project.imageFit === "contain" ? (
                    <div className="relative w-full h-full flex items-center justify-center p-8 blueprint-grid overflow-hidden">
                      {/* soft accent glow behind the mockup */}
                      <div
                        className="absolute w-64 h-64 rounded-full blur-3xl opacity-25 pointer-events-none"
                        style={{ background: "var(--accent)" }}
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="relative max-h-full w-auto rounded-2xl border border-[var(--line)] shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
                      />
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/90 via-[#0a0b0d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center blueprint-grid">
                    <Smartphone
                      className="w-12 h-12 text-[var(--line)]"
                      strokeWidth={1.2}
                    />
                  </div>
                )}
                {project.status !== "archived" && hasLink && (
                  <a
                    href={project.link}
                    className="absolute bottom-4 left-4 flex items-center gap-1.5 font-mono text-xs text-[var(--accent)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    View project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
