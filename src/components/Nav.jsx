import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["home", "skills", "portfolio", "experience", "contact"];

function Nav({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection, scrollProgress }) {
  return (
    <nav className="fixed inset-x-0 top-3 z-40 px-4">
      <div
        className={`glass relative max-w-6xl mx-auto overflow-hidden transition-[border-radius] duration-300 ${
          isMenuOpen ? "rounded-3xl" : "rounded-full"
        }`}
      >
        <div className="px-6">
          <div className="flex justify-between items-center h-14">
            <div className="font-mono text-sm text-[var(--ink)]">
              <span className="text-[var(--accent)]">&lt;</span>ADG
              <span className="text-[var(--accent)]">/&gt;</span>
            </div>

            <div className="hidden md:flex items-center gap-1 font-mono text-sm">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  href={`#${item}`}
                  className={`cursor-pointer px-4 py-1.5 rounded-full transition-all duration-200 ${
                    activeSection === item
                      ? "text-[var(--accent)] bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
                      : "text-[var(--ink-dim)] hover:text-[var(--ink)] hover:bg-white/5"
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
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 pb-4 space-y-1 font-mono text-sm">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    onClick={() => scrollToSection(item)}
                    href={`#${item}`}
                    className={`block py-2 px-4 rounded-full cursor-pointer transition-colors ${
                      activeSection === item
                        ? "text-[var(--accent)] bg-white/10"
                        : "text-[var(--ink-dim)]"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="absolute bottom-0 left-0 h-[2px] bg-[var(--accent)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}

export default Nav;
