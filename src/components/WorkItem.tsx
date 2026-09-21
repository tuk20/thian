import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface WorkItemProps {
  industry: string;
  title: string;
  timeline: string;
  description: string;
  imageUrl: string;
  to?: string;
}

const WorkItem = ({ industry, title, timeline, description, imageUrl, to = "/case-study" }: WorkItemProps) => {
  return (
    <Link
      to={to}
      aria-label={`View ${title} case study`}
      className="group block border-t border-border py-8 md:py-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-secondary"
    >
      <article className="grid items-center gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-10 lg:gap-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-background">
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full object-contain p-3 transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.025] group-focus-visible:scale-[1.025] md:p-6"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-muted-foreground">
            <span>{industry}</span>
            <span>{timeline}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-3xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary group-focus-visible:text-primary md:text-4xl lg:text-5xl">
              {title}
            </h3>
            <ArrowUpRight className="mt-1 h-7 w-7 shrink-0 text-primary transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
          <span className="mt-6 text-sm font-semibold text-primary">View case study</span>
        </div>
      </article>
    </Link>
  );
};

export default WorkItem;
