import { useState } from "react";

interface AnimatedNameProps {
  name: string;
  className?: string;
}

const AnimatedName = ({ name, className = "" }: AnimatedNameProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <h1 className={className}>
      {name.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-125 hover:text-primary cursor-default hover:drop-shadow-[0_0_15px_hsl(var(--primary))]"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedName;
