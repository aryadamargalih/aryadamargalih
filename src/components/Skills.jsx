import { motion } from "framer-motion";
import { skills } from "../data";

function SkillChip({ skill }) {
  const Icon = skill.icon;
  return (
    <div className="glass-sm glass-hover group relative flex items-center gap-3 px-5 py-3 mx-2 rounded-2xl shrink-0 duration-300 hover:-translate-y-1">

      <div className="relative shrink-0 w-6 h-6 flex items-center justify-center">
        <span
          className="skill-ring absolute inset-[-6px] rounded-full border border-dashed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderColor: skill.accent }}
        />
        <Icon className="w-6 h-6 relative z-10" style={{ color: skill.accent }} />
      </div>
      <div>
        <p className="font-display text-sm font-medium leading-tight">
          {skill.name}
        </p>
        <p className="font-mono text-[10px] text-[var(--ink-dim)] leading-tight">
          {skill.category}
        </p>
      </div>
    </div>
  );
}

function Skills({ sectionRef }) {
  return (
    <section id="skills" ref={sectionRef} className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-[var(--accent)] mb-2">
            02 — capabilities
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Skills & Stack
          </h2>
        </motion.div>
      </div>

      <div className="space-y-4">
        <div className="marquee-row marquee-fade overflow-hidden py-4">
          <div className="flex w-max marquee-track">
            {[...skills, ...skills].map((skill, i) => (
              <SkillChip key={`row1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        <div className="marquee-row marquee-fade overflow-hidden py-4">
          <div className="flex w-max marquee-track-reverse">
            {[...skills, ...skills].reverse().map((skill, i) => (
              <SkillChip key={`row2-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
