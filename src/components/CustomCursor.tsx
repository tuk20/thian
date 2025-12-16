import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverText, setIsOverText] = useState(false);

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
      
      const isTextElement = 
        target.tagName === "P" ||
        target.tagName === "SPAN" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4" ||
        target.tagName === "H5" ||
        target.tagName === "H6" ||
        target.tagName === "DIV" ||
        !!target.closest("p") ||
        !!target.closest("h1") ||
        !!target.closest("h2") ||
        !!target.closest("h3") ||
        !!target.closest("section");
      
      setIsHovering(isInteractive);
      setIsOverText(isTextElement && !isInteractive);
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
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ${
            isHovering ? "w-6 h-6" : "w-3 h-3"
          }`}
        />
      </div>
      {!isOverText && (
        <div
          className="fixed pointer-events-none z-[9998] border border-white rounded-full mix-blend-difference transition-all duration-500"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            width: isHovering ? '24px' : '20px',
            height: isHovering ? '24px' : '20px',
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
