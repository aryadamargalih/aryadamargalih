import { motion } from "framer-motion";
import { Briefcase, Clock, MapPin } from "lucide-react";
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
          <div className="relative">
            {/* timeline rail */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[var(--line)]" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative pl-11"
                >
                  {/* timeline dot */}
                  <div className="absolute left-0 top-1.5 w-[31px] h-[31px] rounded-full border-2 border-[var(--line)] bg-[var(--bg)] flex items-center justify-center transition-colors duration-300 group-hover:border-[var(--accent)]">
                    <Briefcase
                      size={14}
                      className="text-[var(--ink-dim)] transition-colors duration-300 group-hover:text-[var(--accent)]"
                    />
                  </div>

                  <div className="border border-[var(--line)] rounded-md p-6 transition-all duration-300 group-hover:border-[var(--accent)]/50 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_24px_-8px_var(--accent)]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display text-lg font-medium">
                          {exp.role}
                        </h3>
                        <p className="flex items-center gap-1.5 text-[var(--ink-dim)] text-sm mt-0.5">
                          <MapPin size={13} className="shrink-0" />
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 self-start font-mono text-xs px-2.5 py-1 rounded-sm border border-[var(--line)] text-[var(--ink-dim)] whitespace-nowrap">
                        <Clock size={12} />
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-[var(--ink-dim)] text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
