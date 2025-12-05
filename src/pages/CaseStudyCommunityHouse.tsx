import Navigation from "@/components/Navigation";
import CaseStudyNav from "@/components/CaseStudyNav";
import CaseStudySection from "@/components/CaseStudySection";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { id: "overview", label: "Project Overview" },
  { id: "research", label: "Research & Discovery" },
  { id: "design", label: "Design Process" },
  { id: "solution", label: "Solution" },
  { id: "reflection", label: "Reflection" },
];

const CaseStudyCommunityHouse = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 md:px-8 pt-32 pb-16">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <CaseStudyNav sections={sections} />
          </aside>

          {/* Main Content */}
          <article className="max-w-4xl">
            {/* Hero Section */}
            <header className="mb-16">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Non-profit
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Academic
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  UX Research
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Community House Winnetka
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Enhancing community engagement through thoughtful digital experiences
              </p>
              <p className="text-muted-foreground">
                Timeline: May - June 2025
              </p>
            </header>

            {/* Coming Soon Notice */}
            <Card className="p-8 mb-16 border-primary/20 bg-primary/5">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Case Study Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  This case study is currently being documented. Check back soon for a detailed 
                  walkthrough of the research process, design decisions, and outcomes.
                </p>
              </div>
            </Card>

            {/* Placeholder Sections */}
            <CaseStudySection id="overview" title="Project Overview">
              <p className="text-muted-foreground">
                Content coming soon...
              </p>
            </CaseStudySection>

            <CaseStudySection id="research" title="Research & Discovery">
              <p className="text-muted-foreground">
                Content coming soon...
              </p>
            </CaseStudySection>

            <CaseStudySection id="design" title="Design Process">
              <p className="text-muted-foreground">
                Content coming soon...
              </p>
            </CaseStudySection>

            <CaseStudySection id="solution" title="Solution">
              <p className="text-muted-foreground">
                Content coming soon...
              </p>
            </CaseStudySection>

            <CaseStudySection id="reflection" title="Reflection">
              <p className="text-muted-foreground">
                Content coming soon...
              </p>
            </CaseStudySection>
          </article>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyCommunityHouse;
