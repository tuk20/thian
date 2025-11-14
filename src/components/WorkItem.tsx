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
        className="group relative border-t border-border/50 py-8 transition-all duration-700 hover:bg-card/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-8 items-center relative">
          {/* Industry Column */}
          <div className="text-muted-foreground text-sm md:text-base font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            {industry}
          </div>

          {/* Work Column with Eyelid Opening Effect */}
          <div className="relative overflow-visible">
            <div className="relative">
              {/* Title - Always Visible */}
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 group-hover:text-primary">
                {title}
              </h3>

              {/* Eyelid Opening Effect Container */}
              <div className="relative mt-6 h-40 overflow-hidden">
                {/* Content that gets revealed */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-card/50 border border-border/30 p-6 h-full">
                    {/* Glass Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    
                    <div className="relative z-10 flex gap-6 h-full">
                      {/* Image */}
                      <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={imageUrl}
                          alt={title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Eyelid */}
                <div
                  className="absolute top-0 left-0 right-0 bg-background z-10 transition-all duration-700 ease-in-out origin-top"
                  style={{
                    height: isHovered ? "0%" : "50%",
                    transform: isHovered ? "scaleY(0)" : "scaleY(1)",
                  }}
                />

                {/* Bottom Eyelid */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-background z-10 transition-all duration-700 ease-in-out origin-bottom"
                  style={{
                    height: isHovered ? "0%" : "50%",
                    transform: isHovered ? "scaleY(0)" : "scaleY(1)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Timeline Column */}
          <div className="text-right text-muted-foreground text-sm md:text-base font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            {timeline}
          </div>
        </div>

        {/* Hover Gradient Line */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-700 ${
            isHovered ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        />
      </div>
    </Link>
  );
};

export default WorkItem;
