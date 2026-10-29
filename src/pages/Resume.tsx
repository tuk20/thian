import { useEffect } from "react";
import { Download, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import resume from "@/assets/thian-uk-resume.pdf.asset.json";

const Resume = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="stamp mb-4">Curriculum Vitae</p>
            <h1 className="font-serif text-5xl font-extrabold md:text-6xl">
              The <span className="whiteout italic font-normal">Résumé</span>
            </h1>
            <p className="mt-3 font-typewriter text-muted-foreground">UX Designer · Product & Accessibility</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={resume.url} download="Thian_Uk_Resume.pdf" className="eraser-btn bg-primary text-primary-foreground">
              <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
            </a>
            <a href={resume.url} target="_blank" rel="noopener noreferrer" className="eraser-btn bg-card text-foreground">
              <ExternalLink className="h-4 w-4" aria-hidden="true" /> Open
            </a>
          </div>
        </div>
        <div className="pencil-rule mb-10" />
        <div className="paper-card -rotate-[0.4deg] p-2 md:p-4">
          <iframe src={`${resume.url}#view=FitH`} title="Thian Uk resume" className="h-[80vh] w-full bg-whiteout" />
        </div>
      </main>
    </div>
  );
};

export default Resume;
