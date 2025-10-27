import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.classList.contains("cursor-pointer");
      
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-300 ${
          isHovering ? "scale-150 rotate-6" : "scale-100"
        }`}
      >
        {/* Mountain peaks */}
        <path
          d="M2 20L8 8L12 14L16 6L22 20H2Z"
          fill="hsl(var(--primary))"
          opacity="0.9"
        />
        <path
          d="M8 8L12 14L16 6L22 20H16L12 14L8 20H2L8 8Z"
          fill="hsl(var(--primary))"
          opacity="0.6"
        />
        {/* Snow cap on main peak */}
        <path
          d="M16 6L14 10L18 10L16 6Z"
          fill="white"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
