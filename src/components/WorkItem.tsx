import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface WorkItemProps {
  industry: string;
  title: string;
  timeline: string;
  description: string;
  imageUrl: string;
  to?: string;
}

const WorkItem = ({ industry, title, timeline, description, imageUrl, to = "/case-study" }: WorkItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const handleTouchStart = () => {
    setIsTapped(true);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    // Keep open briefly for mobile users to see content
    setTimeout(() => {
      setIsTapped(false);
      setIsHovered(false);
    }, 2000);
  };

  return (
    <Link to={to}>
      <div
        className="relative group cursor-pointer focus-within:outline-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        tabIndex={0}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        role="article"
        aria-label={`${title} - ${industry} project`}
      >
        {/* Full-width top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-border/50 pointer-events-none" />
        
        {/* Subtle hover hint indicator - arrow only */}
        <div className={`absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-muted-foreground/40 transition-opacity duration-500 z-30 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}>
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>

        <div className="relative py-6 md:py-12">
          {/* Default State - Simplified on mobile */}
          <div className={`relative z-20 transition-opacity duration-700 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}>
            {/* Mobile: Stacked simple layout */}
            <div className="md:hidden flex flex-col gap-1">
              <span className="text-muted-foreground/70 text-xs uppercase tracking-wider">{industry}</span>
              <h3 className="text-xl font-bold text-foreground">{title}</h3>
            </div>
            
            {/* Desktop: Three-column grid */}
            <div className="hidden md:grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
              {/* Industry Column */}
              <div className="text-muted-foreground text-base lg:text-lg font-medium">
                {industry}
              </div>

              {/* Work Column */}
              <div className="text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {title}
                </h3>
              </div>

              {/* Timeline Column */}
              <div className="text-right text-muted-foreground text-base lg:text-lg font-medium">
                {timeline}
              </div>
            </div>
          </div>

          {/* Hover State - Eyelid opening effect that covers entire row */}
          <div className="absolute inset-0 -left-[100vw] -right-[100vw] overflow-hidden pointer-events-none">
            {/* Content that gets revealed */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-xl bg-card border border-border/30 px-4 md:px-[100vw] py-4 md:py-8 h-full flex items-center justify-center">
                {/* Glass Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                
                {/* Content Container */}
                <div className="flex flex-row items-center gap-3 md:gap-6 max-w-7xl mx-auto w-full md:px-8">
                  {/* Image */}
                  <div className="w-16 h-16 md:w-40 md:h-40 rounded-lg overflow-hidden flex-shrink-0 relative z-10">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description - hidden on mobile for cleaner look */}
                  <p className="hidden md:block text-muted-foreground text-lg leading-relaxed flex-1 relative z-10">
                    {description}
                  </p>

                  {/* CTA Button */}
                  <div className="flex items-center gap-1 md:gap-2 text-primary font-medium relative z-10 whitespace-nowrap text-sm md:text-base">
                    <span>View</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Top Eyelid */}
            <div
              className="absolute top-0 left-0 right-0 bg-secondary z-10 transition-all duration-700 ease-in-out origin-top"
              style={{
                height: isHovered ? "0%" : "50%",
                transform: isHovered ? "scaleY(0)" : "scaleY(1)",
              }}
            />

            {/* Bottom Eyelid */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-secondary z-10 transition-all duration-700 ease-in-out origin-bottom"
              style={{
                height: isHovered ? "0%" : "50%",
                transform: isHovered ? "scaleY(0)" : "scaleY(1)",
              }}
            />
          </div>
        </div>

        {/* Full width bottom border - no hover effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-border/50 pointer-events-none" />
        
        {/* Focus ring for keyboard navigation */}
        <div className="absolute inset-0 rounded-lg ring-2 ring-primary/0 focus-within:ring-primary/50 transition-all pointer-events-none" />
      </div>
    </Link>
  );
};

export default WorkItem;
