import { ReactNode } from "react";

interface CaseStudySectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const CaseStudySection = ({ id, title, children }: CaseStudySectionProps) => {
  return (
    <section id={id} className="mb-20 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{title}</h2>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        {children}
      </div>
    </section>
  );
};

export default CaseStudySection;
