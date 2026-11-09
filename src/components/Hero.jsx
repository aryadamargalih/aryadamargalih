import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { stats } from "../data";
import AnimatedCounter from "./AnimatedCounter";

function Hero({ sectionRef, typedText, scrollToSection }) {
  return (
    <section
      id="home"
      ref={sectionRef}
      className="lg:min-h-screen flex items-start lg:items-center relative pt-28 lg:pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: framed photo + intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="glass relative inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full font-mono text-xs text-[var(--ink-dim)]">
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
              className="glass-accent px-6 py-3 font-medium rounded-full items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="glass glass-hover relative px-6 py-3 rounded-full flex items-center gap-2 hover:text-[var(--accent)]"
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
          className="glass relative w-full rounded-3xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <span className="w-3 h-3 rounded-full bg-white/30" />
            <span className="w-3 h-3 rounded-full bg-white/30" />
            <span className="w-3 h-3 rounded-full bg-white/30" />
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
