function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--line)] relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-[var(--ink-dim)]">
          © 2025 Arya Damar Galih
        </p>
        <div className="flex gap-6 font-mono text-xs text-[var(--ink-dim)]">
          <a href="#" className="hover:text-[var(--accent)] transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-[var(--accent)] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[var(--accent)] transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
