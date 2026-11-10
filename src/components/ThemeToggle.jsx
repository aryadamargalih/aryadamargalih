import { Sun, Moon } from "lucide-react";

function ThemeToggle({ theme, toggleTheme, className = "" }) {
  const isLight = theme === "light";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={isLight}
      className={`theme-toggle glass-sm glass-hover relative grid place-items-center w-9 h-9 rounded-full text-[var(--ink)] hover:text-[var(--accent)] ${className}`}
    >
      <Sun className="icon-sun absolute w-[18px] h-[18px]" />
      <Moon className="icon-moon absolute w-[18px] h-[18px]" />
    </button>
  );
}

export default ThemeToggle;
