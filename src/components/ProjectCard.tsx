import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  size?: "small" | "medium" | "large";
  to?: string;
}

const ProjectCard = ({ title, description, tags, imageUrl, size = "medium", to = "/case-study" }: ProjectCardProps) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1 min-h-[280px]",
    medium: "col-span-1 md:col-span-2 row-span-1 min-h-[320px]",
    large: "col-span-1 md:col-span-2 lg:col-span-3 row-span-2 min-h-[400px]",
  };

  return (
    <Link to={to}>
      <div
        className={`${sizeClasses[size]} group relative overflow-hidden rounded-2xl bg-card border border-border p-6 md:p-8 transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1`}
        style={{
          backgroundImage: imageUrl ? `linear-gradient(135deg, rgba(0, 104, 56, 0.05), rgba(0, 104, 56, 0.02)), url(${imageUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative h-full flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary-light text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
