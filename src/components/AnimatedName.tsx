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
          className="inline-block transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 hover:text-primary cursor-default"
          style={{
            animation: hoveredIndex === index ? "float 0.6s ease-in-out" : undefined,
          }}
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
