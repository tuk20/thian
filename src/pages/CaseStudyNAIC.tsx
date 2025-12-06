import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CaseStudyNav from "@/components/CaseStudyNav";
import CaseStudySection from "@/components/CaseStudySection";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { id: "overview", label: "Project Overview" },
  { id: "research", label: "Research & Discovery" },
  { id: "design", label: "Design Process" },
  { id: "solution", label: "Solution" },
  { id: "reflection", label: "Reflection" },
];

const CaseStudyNAIC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 md:px-8 pt-32 pb-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          <aside className="hidden lg:block">
            <CaseStudyNav sections={sections} />
          </aside>

          <article className="max-w-4xl">
            {/* Hero Section */}
            <header className="mb-16 animate-fade-in">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm">
                  Government
                </span>
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm">
                  Accessibility
                </span>
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm">
                  UX Redesign
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Redesigning the NAIC Help Page
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Transitioning from Web Development to UX Design to improve accessibility, consistency, and user engagement
              </p>
              <p className="text-muted-foreground">
                Timeline: Nov 2024
              </p>
            </header>

            {/* Project Overview */}
            <CaseStudySection id="overview" title="Project Overview">
              <div className="space-y-6">
                <p>
                  The National Association of Insurance Commissioners (NAIC) is the U.S. standard-setting body for insurance regulation. Their Help page serves millions of consumers seeking guidance on insurance-related questions, but the existing design created barriers to finding critical information.
                </p>
                
                <div className="bg-secondary rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Challenge</h3>
                  <p className="text-muted-foreground">
                    The Help page suffered from inconsistent visual hierarchy, poor accessibility compliance, and an overwhelming information architecture. Users struggled to locate answers, leading to increased support calls and frustrated consumers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Role</h4>
                    <p className="text-sm text-muted-foreground">UX Designer</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                    <p className="text-sm text-muted-foreground">1 month (Nov 2024)</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Tools</h4>
                    <p className="text-sm text-muted-foreground">Figma, axe DevTools, WAVE</p>
                  </Card>
                </div>
              </div>
            </CaseStudySection>

            {/* Research & Discovery */}
            <CaseStudySection id="research" title="Research & Discovery">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Heuristic Evaluation</h3>
                  <p className="mb-4">
                    I conducted a comprehensive heuristic evaluation of the existing Help page, identifying 23 usability issues across Nielsen's 10 heuristics. The most critical issues involved visibility of system status, consistency, and error prevention.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Critical Issue #1</h4>
                      <p className="text-sm text-muted-foreground">Low color contrast ratios failing WCAG 2.1 AA standards</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Critical Issue #2</h4>
                      <p className="text-sm text-muted-foreground">Inconsistent heading hierarchy confusing screen readers</p>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Accessibility Audit</h3>
                  <p className="mb-4">
                    Using axe DevTools and WAVE, I identified 47 accessibility violations. Government websites must meet WCAG 2.1 AA compliance, making this audit essential for the redesign strategy.
                  </p>
                  <div className="bg-secondary rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Violations</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Missing alt text on 12 informational images</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Form inputs without associated labels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Focus indicators removed or invisible</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Content Analysis</h3>
                  <p>
                    I mapped the existing content structure and identified opportunities to consolidate redundant information. The Help page contained 156 FAQs spread across 8 categories with significant overlap and outdated content.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Design Process */}
            <CaseStudySection id="design" title="Design Process">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Design System Alignment</h3>
                  <p className="mb-4">
                    I worked within NAIC's existing design system while proposing accessibility-compliant modifications. This included updated color tokens meeting 4.5:1 contrast ratios and consistent typography scales.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Information Architecture Redesign</h3>
                  <p className="mb-4">
                    I restructured the FAQ content from 8 overlapping categories to 5 distinct, user-task-oriented sections. Each section now follows a consistent pattern with scannable headings and progressive disclosure.
                  </p>
                  <div className="border-l-4 border-primary pl-4 my-6">
                    <h4 className="font-semibold text-foreground">New IA Structure</h4>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>1. Finding Insurance Coverage</li>
                      <li>2. Filing Claims & Complaints</li>
                      <li>3. Understanding Your Policy</li>
                      <li>4. State-Specific Resources</li>
                      <li>5. Contact & Support</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Component Design</h3>
                  <p className="mb-4">
                    I designed accessible FAQ accordions with proper ARIA attributes, keyboard navigation, and clear visual states. Search functionality was enhanced with auto-suggest and filtered results.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Accordion Pattern</h4>
                      <p className="text-sm text-muted-foreground">Expandable sections with ARIA-expanded, focus management, and animated transitions</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Search Enhancement</h4>
                      <p className="text-sm text-muted-foreground">Live search with keyboard navigation and screen reader announcements</p>
                    </Card>
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Solution */}
            <CaseStudySection id="solution" title="Solution">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">WCAG 2.1 AA Compliance</h3>
                    <p className="text-sm text-muted-foreground">
                      All 47 accessibility violations resolved with proper color contrast, semantic HTML, and ARIA implementation.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Simplified Navigation</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduced cognitive load with clear visual hierarchy and task-based content organization.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Enhanced Search</h3>
                    <p className="text-sm text-muted-foreground">
                      Predictive search with categorized results helps users find answers in fewer clicks.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Consistent Design Language</h3>
                    <p className="text-sm text-muted-foreground">
                      Unified visual system with accessible color palette and typography hierarchy.
                    </p>
                  </Card>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Impact Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">100%</p>
                      <p className="text-sm text-muted-foreground">WCAG 2.1 AA Compliance</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">-38%</p>
                      <p className="text-sm text-muted-foreground">Content consolidation</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">5</p>
                      <p className="text-sm text-muted-foreground">Clear content categories (down from 8)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Reflection */}
            <CaseStudySection id="reflection" title="Reflection">
              <div className="space-y-6">
                <p>
                  This project marked my transition from web development to UX design. Having built websites for years, I understood the technical constraints—but this project taught me to advocate for users within those constraints.
                </p>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Key Learnings</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Accessibility isn't a checklist—it's a mindset that should inform every design decision</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Government websites have unique constraints around compliance, branding, and stakeholder approval</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Content strategy is just as important as visual design for help-focused pages</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Personal Growth</h3>
                  <p className="text-muted-foreground">
                    This project solidified my decision to pursue UX design full-time. The satisfaction of making government resources more accessible to all citizens—including those with disabilities—showed me the real-world impact of thoughtful design.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Next Case Study */}
            <div className="mt-16 pt-8 border-t border-border">
              <Link 
                to="/case-study/kater-it"
                className="group flex items-center justify-between p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Next Case Study</p>
                  <p className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Kater.it
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyNAIC;
