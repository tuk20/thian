import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CaseStudyNav from "@/components/CaseStudyNav";
import CaseStudySection from "@/components/CaseStudySection";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import preiaPostiaImage from "@/assets/winnetka-preia-postia.png";
import donationFormImage from "@/assets/winnetka-donation-form.png";
import homepageRedesignedImage from "@/assets/winnetka-homepage-redesigned.png";

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
            </header>

            {/* Project Overview */}
            <CaseStudySection id="overview" title="Project Overview">
              <div className="space-y-6">
                <p>
                  Community House Winnetka is a historic nonprofit organization serving the Winnetka community since 1911. They offer programs for all ages—from youth enrichment to senior activities—but their digital presence wasn't keeping pace with their mission.
                </p>
                
                <div className="bg-secondary rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Challenge</h3>
                  <p className="text-muted-foreground mb-4">
                    Through Tree Testing we found the following concerns:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Cluttered navigation:</strong> overlapping categories and ambiguous labels (e.g., "Program Info" vs "Performing Arts").</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Hidden donate action:</strong> "Support Us" wording and deep links made donations hard to find.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Lengthy donation flow:</strong> four steps and unclear microcopy increased abandonment.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Accessibility gaps:</strong> small tap targets, contrast issues, and unlabeled inputs reduced confidence for some users.</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Role</h4>
                    <p className="text-sm text-muted-foreground">Lead UX Designer & Researcher</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                    <p className="text-sm text-muted-foreground">10 Weeks (Academic Project)</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Tools</h4>
                    <p className="text-sm text-muted-foreground">Figma, UserTesting.com, Zoom, Google Suite, FigJam</p>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Team & Timeline</h3>
                  <p>
                    Conducted at DePaul University's College of Computing and Digital Media for Information Architecture & Content Strategy course. Team: Celeste, Desi, and Thian. Project completed June 2025.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Research & Discovery */}
            <CaseStudySection id="research" title="Research & Discovery">
              <div className="space-y-8">
                <p>
                  We took a mixed-methods approach focused on the two primary tasks (find programs and donate):
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">User Interviews (n=8)</h4>
                      <p className="text-sm text-muted-foreground">Community members reported difficulty finding programs and donation links.</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Heuristic Evaluation</h4>
                      <p className="text-sm text-muted-foreground">Catalogued major usability and accessibility issues such as unclear labels and weak CTAs.</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Card Sorting (n=10)</h4>
                      <p className="text-sm text-muted-foreground">Produced a clearer four-category IA (Programs, Events, About Us, Contact Us).</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Tree Testing (n=10)</h4>
                      <p className="text-sm text-muted-foreground">Validated new IA; donation page findability improved from ~40% to 100%.</p>
                    </Card>
                  </div>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Key Insight</h3>
                  <p className="text-muted-foreground">
                    Users expected "Donate" to be visible in the header and wanted fewer steps to complete their gift.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Design Process */}
            <CaseStudySection id="design" title="Design Process">
              <div className="space-y-8">
                <p>
                  We conducted a full IA analysis, generated options through card sorting, and validated them with tree testing. After introducing the new IA, we repeated tree testing and heuristic task analysis to confirm improvements.
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Heuristic Task Analysis (Post-IA)</h3>
                  <p className="mb-4">
                    We tested two critical user tasks under the new IA:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Task 1 — Sign up a child for a theater class</h4>
                      <p className="text-sm text-muted-foreground">Success path: Programs → Kids & Teens → Theater Classes — simplified to two taps with clearer labels.</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Task 2 — Make a donation</h4>
                      <p className="text-sm text-muted-foreground">Success path: Utility menu → Donate — direct access with no detours or guesswork.</p>
                    </Card>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    <strong>Result:</strong> Both tasks were completed successfully with fewer steps and less confusion, confirming the new IA improved usability.
                  </p>
                  
                  {/* Pre-IA vs Post-IA Comparison */}
                  <div className="rounded-xl overflow-hidden border border-border mb-8">
                    <img 
                      src={preiaPostiaImage} 
                      alt="Pre-IA and Post-IA comparison showing improved task success rates"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Wireframes & Mobile-First Prototyping</h3>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Wireframing:</strong> Sketched layouts and tested variations for homepage and donation flow.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>High-fidelity prototyping:</strong> Designed polished mobile screens in Figma, aligning with CHW's brand.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Microcopy:</strong> Added supportive text such as "Your gift is tax-deductible" and a clear "Complete Donation" button.</span>
                    </li>
                  </ul>

                  {/* Hi-Fi Homepage Wireframe */}
                  <h4 className="font-semibold text-foreground mb-3">Redesigned Homepage/Landing</h4>
                  <div className="rounded-xl overflow-hidden border border-border mb-8">
                    <img 
                      src={homepageRedesignedImage} 
                      alt="Redesigned mobile homepage with clear navigation and prominent Donate button"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Hi-Fi Donation Wireframe */}
                  <h4 className="font-semibold text-foreground mb-3">Donation Form Before & After</h4>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <img 
                      src={donationFormImage} 
                      alt="Donation form comparison showing simplified flow with preset amounts and clearer design"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Solution */}
            <CaseStudySection id="solution" title="Solution">
              <div className="space-y-8">
                <p>
                  The final design included:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Clear Navigation</h3>
                    <p className="text-sm text-muted-foreground">
                      Four main menu items and a prominent "Donate Now" button in the header.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Streamlined Donation Flow</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduced from four steps to two, with preset amounts, recurring option, and inline validation.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Accessibility Improvements</h3>
                    <p className="text-sm text-muted-foreground">
                      High-contrast buttons, descriptive alt text, and labeled form fields.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Responsive Layout</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimized for desktop and mobile, with a mobile-first approach.
                    </p>
                  </Card>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-bold text-primary">100%</p>
                      <p className="text-sm text-muted-foreground">of users completed the donation task</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">90%</p>
                      <p className="text-sm text-muted-foreground">successfully located a program</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">2 taps</p>
                      <p className="text-sm text-muted-foreground">to reach programs (from many more)</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">~40% → 100%</p>
                      <p className="text-sm text-muted-foreground">donation findability improvement in tree testing</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    <strong>User feedback:</strong> Participants described the new site as "clearer" and "much easier to navigate."
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.figma.com/proto/bJSOMbtIn1mGYkfdchWZ2e/MyCommunityHouse?node-id=327-232&t=xQSi42CEXAnzVKmd-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Hi-Fi Prototype in Figma
                  </a>
                </div>
              </div>
            </CaseStudySection>

            {/* Reflection */}
            <CaseStudySection id="reflection" title="Reflection">
              <div className="space-y-6">
                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Key Learnings</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Mobile-first design forced clarity in IA and simplified key flows.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Small wording and placement changes (CTA copy, sticky menu) drove measurable improvements in confidence and findability.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Accessibility and inclusivity must remain a baseline, not an afterthought.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Next Steps</h3>
                  <p className="text-muted-foreground">
                    A/B test the donate button copy, collect analytics to validate conversion impact, and expand usability testing to include users with accessibility needs.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Next Case Study */}
            <div className="mt-16 pt-8 border-t border-border">
              <Link 
                to="/case-study/naic-help-page"
                className="group flex items-center justify-between p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Next Case Study</p>
                  <p className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Redesigning the NAIC Help Page
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

export default CaseStudyCommunityHouse;
