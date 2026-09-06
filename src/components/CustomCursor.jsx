import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const hoverRef = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = dotRef.current;
    if (!el) return;

    const applySize = () => {
      const size = hoverRef.current ? 32 : 16;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.borderRadius = hoverRef.current ? "6px" : "9999px";
    };

    const move = (e) => {
      const size = hoverRef.current ? 32 : 16;
      el.style.transform = `translate(${e.clientX - size / 2}px, ${
        e.clientY - size / 2
      }px) rotate(${hoverRef.current ? 45 : 0}deg)`;
    };

    const over = (e) => {
      const isHover = !!e.target.closest(
        "a, button, [data-cursor-hover]",
      );
      if (isHover !== hoverRef.current) {
        hoverRef.current = isHover;
        applySize();
      }
    };

    document.body.style.cursor = "none";
    applySize();
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[100] pointer-events-none border border-[var(--accent)] transition-[width,height,border-radius] duration-150"
      style={{ width: 16, height: 16, borderRadius: 9999 }}
    />
  );
}

export default CustomCursor;
