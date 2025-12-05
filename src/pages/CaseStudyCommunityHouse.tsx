import { useEffect } from "react";
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
                  Non-profit
                </span>
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm">
                  Information Architecture
                </span>
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm">
                  Mobile-First Design
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Community House Winnetka
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Mobile-first information architecture and donation flow redesign to improve findability and conversions
              </p>
              <p className="text-muted-foreground">
                Timeline: Mar - Jun 2025
              </p>
            </header>

            {/* Project Overview */}
            <CaseStudySection id="overview" title="Project Overview">
              <div className="space-y-6">
                <p>
                  Community House Winnetka is a historic nonprofit organization serving the North Shore community since 1911. They offer programs for all ages—from youth enrichment to senior activities—but their digital presence wasn't keeping pace with their mission.
                </p>
                
                <div className="bg-secondary rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Challenge</h3>
                  <p className="text-muted-foreground">
                    The existing website struggled with poor information architecture, leading to high bounce rates on mobile devices and low donation conversions. Users couldn't easily find programs, events, or ways to give back.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Role</h4>
                    <p className="text-sm text-muted-foreground">UX Designer & Researcher</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                    <p className="text-sm text-muted-foreground">4 months (Mar - Jun 2025)</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Tools</h4>
                    <p className="text-sm text-muted-foreground">Figma, Optimal Workshop, Hotjar</p>
                  </Card>
                </div>
              </div>
            </CaseStudySection>

            {/* Research & Discovery */}
            <CaseStudySection id="research" title="Research & Discovery">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Stakeholder Interviews</h3>
                  <p className="mb-4">
                    I conducted interviews with staff members to understand organizational goals, pain points, and what success looked like for them. Key insights emerged around the disconnect between their rich programming and how it was presented online.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">User Research</h3>
                  <p className="mb-4">
                    Through surveys and contextual inquiry with 12 community members, I mapped user journeys and identified friction points. Parents searching for youth programs and donors looking to contribute faced the most significant challenges.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Key Finding #1</h4>
                      <p className="text-sm text-muted-foreground">68% of users accessed the site on mobile, but the navigation collapsed into an unusable state</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Key Finding #2</h4>
                      <p className="text-sm text-muted-foreground">Donation page had a 72% abandonment rate due to confusing form structure</p>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Competitive Analysis</h3>
                  <p>
                    I analyzed 5 similar nonprofit organizations to benchmark best practices in information architecture, donation flows, and mobile experience. This helped establish design patterns that users already expected.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Design Process */}
            <CaseStudySection id="design" title="Design Process">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Card Sorting & Tree Testing</h3>
                  <p className="mb-4">
                    I ran open card sorting sessions with 15 participants to understand their mental models for categorizing programs. The results informed a completely restructured navigation that grouped content by audience (families, adults, seniors) rather than program type.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Wireframing</h3>
                  <p className="mb-4">
                    Starting mobile-first, I created low-fidelity wireframes focusing on thumb-friendly navigation and progressive disclosure. The donation flow was redesigned as a 3-step wizard to reduce cognitive load.
                  </p>
                  <div className="bg-secondary rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">Design Decisions</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Sticky bottom navigation for key actions (Donate, Register, Contact)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Collapsible program cards to reduce scroll fatigue</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Prominent search with smart suggestions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Usability Testing</h3>
                  <p>
                    I conducted 8 moderated usability tests on the high-fidelity prototypes. Task success rate for finding programs improved from 45% to 89%, and the donation flow completion rate increased significantly.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Solution */}
            <CaseStudySection id="solution" title="Solution">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Restructured Navigation</h3>
                    <p className="text-sm text-muted-foreground">
                      Audience-based IA with clear pathways for families, adults, and seniors. Mobile navigation reduced from 12 top-level items to 5.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Streamlined Donation Flow</h3>
                    <p className="text-sm text-muted-foreground">
                      3-step donation wizard with preset amounts, impact messaging, and guest checkout option. Reduced form fields by 40%.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Program Discovery</h3>
                    <p className="text-sm text-muted-foreground">
                      Filterable program grid with age-based filtering, schedule views, and one-tap registration.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Mobile-First Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Touch-optimized interfaces with 44px minimum tap targets and bottom-sheet modals for forms.
                    </p>
                  </Card>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Projected Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">89%</p>
                      <p className="text-sm text-muted-foreground">Task success rate (up from 45%)</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">2.5x</p>
                      <p className="text-sm text-muted-foreground">Projected donation conversion increase</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">-60%</p>
                      <p className="text-sm text-muted-foreground">Reduction in support inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Reflection */}
            <CaseStudySection id="reflection" title="Reflection">
              <div className="space-y-6">
                <p>
                  This project reinforced the power of user-centered design in the nonprofit space. By deeply understanding both stakeholder goals and user needs, we created a solution that serves the community better while supporting the organization's mission.
                </p>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Key Learnings</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Card sorting with real users is invaluable for restructuring complex information architectures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Mobile-first isn't just about responsive design—it's about rethinking the entire experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Nonprofit organizations often have more constraints than traditional clients, requiring creative solutions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Next Steps</h3>
                  <p className="text-muted-foreground">
                    The redesigned website is scheduled for launch in late 2025. Post-launch, I'll be monitoring analytics to validate our design decisions and iterating based on real user behavior data.
                  </p>
                </div>
              </div>
            </CaseStudySection>
          </article>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyCommunityHouse;
