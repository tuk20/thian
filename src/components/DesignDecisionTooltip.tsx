import { useState } from "react";
import { Info } from "lucide-react";

interface DesignDecisionTooltipProps {
  decision: string;
  reasoning: string;
  position?: "top" | "bottom" | "left" | "right";
}

const DesignDecisionTooltip = ({ 
  decision, 
  reasoning, 
  position = "top" 
}: DesignDecisionTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="p-1 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors cursor-help"
        aria-label="Design decision"
      >
        <Info className="w-4 h-4 text-primary" />
      </button>
      
      {isVisible && (
        <div 
          className={`absolute ${positionClasses[position]} z-50 w-64 p-4 bg-card border border-border rounded-lg shadow-lg animate-scale-in`}
        >
          <div className="space-y-2">
            <p className="font-semibold text-sm text-foreground">{decision}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{reasoning}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignDecisionTooltip;
