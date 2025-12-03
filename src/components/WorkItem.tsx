import { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <Link to={to}>
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Full-width top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-border/50 pointer-events-none" />
        <div className="relative py-8 md:py-12">
          {/* Default State - Text visible on clean background */}
          <div className={`grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-8 items-center relative z-20 transition-opacity duration-700 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}>
            {/* Industry Column */}
            <div className="text-muted-foreground text-base md:text-lg lg:text-xl font-medium">
              {industry}
            </div>

            {/* Work Column */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                {title}
              </h3>
            </div>

            {/* Timeline Column */}
            <div className="text-left md:text-right text-muted-foreground text-base md:text-lg lg:text-xl font-medium">
              {timeline}
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
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-card border border-border/30 px-[100vw] py-6 md:py-8 h-full flex items-center justify-center">
                {/* Glass Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                
                {/* Content Container */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 max-w-7xl mx-auto w-full px-4 md:px-8">
                  {/* Image */}
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden flex-shrink-0 relative z-10">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm md:text-lg leading-relaxed flex-1 relative z-10 text-center md:text-left">
                    {description}
                  </p>
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
      </div>
    </Link>
  );
};

export default WorkItem;
