import { useState } from "react";
import { Card } from "./ui/card";

interface InteractivePrototypeProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const InteractivePrototype = ({ title, description, children }: InteractivePrototypeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-6 cursor-pointer transition-all hover:shadow-[var(--shadow-hover)]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all hover:scale-105"
        >
          {isExpanded ? "Close" : "Try It"}
        </button>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 bg-secondary/50 rounded-lg border border-border">
          {children}
        </div>
      </div>
    </Card>
  );
};

export default InteractivePrototype;
