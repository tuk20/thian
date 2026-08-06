import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile: Simple clickable row, direct navigation
  if (isMobile) {
    return (
      <Link to={to}>
        <div className="relative py-5 border-b border-border/30">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <span className="text-muted-foreground/70 text-xs uppercase tracking-wider">{industry}</span>
              <h3 className="text-lg font-bold text-foreground truncate">{title}</h3>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
          </div>
        </div>
      </Link>
    );
  }

  // Desktop: Full eyelid effect
  return (
    <Link to={to}>
      <div
        className="relative group cursor-pointer focus-within:outline-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={0}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        role="article"
        aria-label={`${title} - ${industry} project`}
      >
        {/* Full-width top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-border/50 pointer-events-none" />
        
        {/* Subtle hover hint indicator */}
        <div className={`absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-muted-foreground/40 transition-opacity duration-500 z-30 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}>
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>

        <div className="relative py-12">
          {/* Default State */}
          <div className={`relative z-20 transition-opacity duration-700 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}>
            <div className="grid grid-cols-[1fr_2fr_1fr] gap-8 items-center">
              <div className="text-muted-foreground text-base lg:text-lg font-medium">
                {industry}
              </div>
              <div className="text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {title}
                </h3>
              </div>
              <div className="text-right text-muted-foreground text-base lg:text-lg font-medium">
                {timeline}
              </div>
            </div>
          </div>

          {/* Hover State - Eyelid opening effect */}
          <div className="absolute inset-0 -left-[100vw] -right-[100vw] overflow-hidden pointer-events-none">
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-card border border-border/30 px-[100vw] py-8 h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="flex flex-row items-center gap-6 max-w-7xl mx-auto w-full px-8">
                  <div className="w-40 h-40 rounded-lg overflow-hidden flex-shrink-0 relative z-10 bg-secondary flex items-center justify-center">
                    <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed flex-1 relative z-10">
                    {description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium relative z-10 whitespace-nowrap">
                    <span>View project</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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

        {/* Full width bottom border */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-border/50 pointer-events-none" />
        
        {/* Focus ring for keyboard navigation */}
        <div className="absolute inset-0 rounded-lg ring-2 ring-primary/0 focus-within:ring-primary/50 transition-all pointer-events-none" />
      </div>
    </Link>
  );
};

export default WorkItem;
