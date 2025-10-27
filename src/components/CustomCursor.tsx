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
          isHovering ? "scale-150 rotate-12" : "scale-100"
        }`}
      >
        <path
          d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2Z"
          fill="hsl(var(--primary))"
          opacity="0.9"
        />
        <path
          d="M12 14C12 14 10 15 10 17C10 18.1 10.9 19 12 19C13.1 19 14 18.1 14 17C14 15 12 14 12 14Z"
          fill="hsl(var(--primary))"
          opacity="0.7"
        />
        <path
          d="M12 14L12 22"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
