import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { experiences } from "../data";

function Experience({ sectionRef }) {
  return (
    <section id="experience" ref={sectionRef} className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-[var(--accent)] mb-2">
            04 — experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Work Experience
          </h2>
        </motion.div>

        {experiences.length > 0 ? (
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border border-[var(--line)] rounded-md p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="font-display text-lg font-medium">
                      {exp.role}
                    </h3>
                    <p className="text-[var(--ink-dim)] text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--ink-dim)] text-sm font-mono mt-2 md:mt-0">
                    <Clock size={14} />
                    {exp.duration}
                  </div>
                </div>
                <p className="text-[var(--ink-dim)] text-sm">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-[var(--line)] rounded-md p-10 md:p-14 font-mono">
            <p className="text-[var(--ink-dim)] text-sm">
              <span className="text-[var(--accent)]">$</span> ls
              ./experience
            </p>
            <p className="text-[var(--ink-dim)] text-sm mt-1">
              directory empty — first role not logged yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
