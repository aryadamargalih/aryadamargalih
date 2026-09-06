import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["home", "skills", "portfolio", "experience", "contact"];

function Nav({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection, scrollProgress }) {
  return (
    <nav className="fixed w-full z-40 bg-[#14161a]/90 backdrop-blur-md border-b border-[var(--line)]">
      <div
        className="h-[2px] bg-[var(--accent)] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono text-sm text-[var(--ink)]">
            <span className="text-[var(--accent)]">&lt;</span>ADG
            <span className="text-[var(--accent)]">/&gt;</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                href={`#${item}`}
                className={`cursor-pointer transition-colors duration-200 ${
                  activeSection === item
                    ? "text-[var(--accent)]"
                    : "text-[var(--ink-dim)] hover:text-[var(--ink)]"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-[var(--ink)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--panel)] border-b border-[var(--line)] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3 font-mono text-sm">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  onClick={() => scrollToSection(item)}
                  href={`#${item}`}
                  className={`block py-1 cursor-pointer border-l-2 pl-3 transition-colors ${
                    activeSection === item
                      ? "text-[var(--accent)] border-[var(--accent)]"
                      : "text-[var(--ink-dim)] border-transparent"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
