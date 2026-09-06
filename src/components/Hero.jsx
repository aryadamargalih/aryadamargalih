import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { stats } from "../data";
import AnimatedCounter from "./AnimatedCounter";

function Hero({ sectionRef, typedText, scrollToSection }) {
  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center relative pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: framed photo + intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[var(--line)] rounded-full font-mono text-xs text-[var(--ink-dim)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            Available for work
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
            Arya Damar
            <br />
            Galih
          </h1>

          <p className="text-[var(--ink-dim)] text-lg max-w-md mb-8">
            Informatics student building web applications end to end — from
            Laravel backends to React interfaces.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-[var(--accent)] text-[#14161a] font-medium rounded-sm flex items-center gap-2 hover:brightness-110 transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 border border-[var(--line)] rounded-sm flex items-center gap-2 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <Mail size={18} />
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right: terminal panel — the single orchestrated motion moment */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[var(--panel)] border border-[var(--line)] rounded-md overflow-hidden shadow-2xl"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--line)] bg-[#16181d]">
            <span className="w-3 h-3 rounded-full bg-[#4a4e58]" />
            <span className="w-3 h-3 rounded-full bg-[#4a4e58]" />
            <span className="w-3 h-3 rounded-full bg-[#4a4e58]" />
            <span className="ml-2 font-mono text-xs text-[var(--ink-dim)]">
              whoami.sh
            </span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            <p className="text-[var(--ink-dim)]">
              <span className="text-[var(--accent)]">$</span> whoami
            </p>
            <p className="text-[var(--ink)] mb-4 mt-1 min-h-[1.5em]">
              {typedText}
              <span className="cursor-blink text-[var(--accent)]">▍</span>
            </p>

            <p className="text-[var(--ink-dim)] mb-3">
              <span className="text-[var(--accent)]">$</span> cat stats.json
            </p>
            <div className="space-y-2">
              {stats.map((stat, i) => (
                <div key={i} className="flex justify-between text-[var(--ink)]">
                  <span className="text-[var(--ink-dim)]">{stat.label}:</span>
                  <span className="text-[var(--accent)]">
                    <AnimatedCounter value={stat.value} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
