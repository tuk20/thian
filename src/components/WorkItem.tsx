import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface WorkItemProps {
  industry: string;
  title: string;
  timeline: string;
  description: string;
  imageUrl: string;
  to?: string;
  index?: number;
}

const WorkItem = ({ industry, title, timeline, description, imageUrl, to = "/case-study", index = 0 }: WorkItemProps) => {
  const tilt = index % 2 === 0 ? "-rotate-1" : "rotate-1";
  return (
    <Link
      to={to}
      aria-label={`View ${title} case study`}
      className="group block py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    >
      <article className="grid items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-14">
        <div className={`paper-card relative p-3 transition-transform duration-300 motion-reduce:transition-none ${tilt} group-hover:rotate-0`}>
          <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-eraser/60" />
          <div className="aspect-[16/10] overflow-hidden bg-background">
            <img src={imageUrl} alt="" className="h-full w-full object-contain p-3 md:p-5" />
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <span className="stamp">{industry}</span>
            <span className="font-typewriter text-sm text-muted-foreground">{timeline}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-3xl font-extrabold leading-tight text-foreground group-hover:text-primary md:text-4xl lg:text-5xl">
              <span className="text-primary/60 font-typewriter text-lg align-top mr-2">No.{String(index + 1).padStart(2, "0")}</span>
              {title}
            </h3>
            <ArrowUpRight className="mt-2 h-7 w-7 shrink-0 text-primary transition-transform duration-300 motion-reduce:transition-none group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          <span className="mt-6 inline-block font-typewriter text-sm uppercase tracking-widest text-primary underline decoration-wavy underline-offset-8">
            Read case study
          </span>
        </div>
      </article>
    </Link>
  );
};

export default WorkItem;
