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

const CaseStudyKaterIt = () => {
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
                  Startup
                </span>
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm">
                  Food & Beverage
                </span>
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm">
                  Product Design
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Kater.it
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                A catering discovery app connecting local users with nearby caterers for events of all sizes
              </p>
              <p className="text-muted-foreground">
                Timeline: Feb 2024
              </p>
            </header>

            {/* Project Overview */}
            <CaseStudySection id="overview" title="Project Overview">
              <div className="space-y-6">
                <p>
                  Kater.it was born from a simple frustration: finding quality local caterers for small events is unnecessarily difficult. Most catering platforms focus on large corporate events, leaving individuals and small businesses without good options for intimate gatherings.
                </p>
                
                <div className="bg-secondary rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Challenge</h3>
                  <p className="text-muted-foreground">
                    Create a mobile-first platform that connects users with local caterers, emphasizing discovery, trust-building through reviews, and seamless booking for events ranging from 10 to 500 guests.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Role</h4>
                    <p className="text-sm text-muted-foreground">Solo Product Designer</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                    <p className="text-sm text-muted-foreground">1 month (Feb 2024)</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Tools</h4>
                    <p className="text-sm text-muted-foreground">Figma, Maze, Notion</p>
                  </Card>
                </div>
              </div>
            </CaseStudySection>

            {/* Research & Discovery */}
            <CaseStudySection id="research" title="Research & Discovery">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Market Research</h3>
                  <p className="mb-4">
                    I analyzed existing catering platforms (ezCater, CaterCow, Grubhub Corporate) to understand market gaps. Most platforms targeted B2B corporate catering, leaving a significant opportunity in the B2C space for personal events.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">User Interviews</h3>
                  <p className="mb-4">
                    I conducted 10 interviews with people who had recently planned catered events. Key pain points emerged around discovery, pricing transparency, and communication with caterers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Pain Point #1</h4>
                      <p className="text-sm text-muted-foreground">"I had to call 8 different caterers just to get pricing. It took days."</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Pain Point #2</h4>
                      <p className="text-sm text-muted-foreground">"I couldn't find reviews anywhere. Had to trust random Google results."</p>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">User Personas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-1">Sarah</h4>
                      <p className="text-sm text-primary mb-3">The Busy Professional</p>
                      <p className="text-sm text-muted-foreground">
                        32, marketing manager. Needs catering for office celebrations and client meetings. Values convenience and reliability over price.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-1">Marcus</h4>
                      <p className="text-sm text-primary mb-3">The Event Host</p>
                      <p className="text-sm text-muted-foreground">
                        45, hosts family gatherings quarterly. Wants variety and cultural cuisine options. Price-conscious but quality-focused.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Design Process */}
            <CaseStudySection id="design" title="Design Process">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">User Flow Mapping</h3>
                  <p className="mb-4">
                    I mapped the complete user journey from discovery to booking confirmation. The critical path focused on: Browse → Filter → Compare → Contact → Book, with review integration at every touchpoint.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Wireframing & Prototyping</h3>
                  <p className="mb-4">
                    Starting with low-fidelity sketches, I iterated through 3 major design directions before landing on a card-based discovery interface that showcased caterer portfolios effectively.
                  </p>
                  <div className="bg-secondary rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Design Decisions</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Photo-first cards to showcase food quality immediately</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Upfront pricing ranges to set expectations early</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>In-app messaging to streamline caterer communication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Cuisine and event-type filtering for quick discovery</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Usability Testing</h3>
                  <p>
                    I ran unmoderated tests with 15 participants using Maze. The booking flow had a 78% completion rate initially, which improved to 91% after simplifying the quote request form.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Solution */}
            <CaseStudySection id="solution" title="Solution">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Smart Discovery</h3>
                    <p className="text-sm text-muted-foreground">
                      Location-based search with filters for cuisine type, dietary restrictions, event size, and budget range.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Transparent Pricing</h3>
                    <p className="text-sm text-muted-foreground">
                      Per-person price ranges displayed upfront with detailed menu breakdowns available before contact.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Trust Signals</h3>
                    <p className="text-sm text-muted-foreground">
                      Verified reviews, response time badges, and event photo galleries from past customers.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Streamlined Booking</h3>
                    <p className="text-sm text-muted-foreground">
                      3-step quote request with event details saved for quick rebooking of favorite caterers.
                    </p>
                  </Card>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Key Screens</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-full aspect-[9/16] bg-primary/10 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Discovery</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Home Feed</p>
                    </div>
                    <div className="text-center">
                      <div className="w-full aspect-[9/16] bg-primary/10 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Profile</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Caterer Detail</p>
                    </div>
                    <div className="text-center">
                      <div className="w-full aspect-[9/16] bg-primary/10 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Quote</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Request Form</p>
                    </div>
                    <div className="text-center">
                      <div className="w-full aspect-[9/16] bg-primary/10 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Messages</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Chat Interface</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Prototype Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">91%</p>
                      <p className="text-sm text-muted-foreground">Booking flow completion</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">4.2/5</p>
                      <p className="text-sm text-muted-foreground">Usability score (SUS)</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">&lt;2min</p>
                      <p className="text-sm text-muted-foreground">Average time to first quote</p>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Reflection */}
            <CaseStudySection id="reflection" title="Reflection">
              <div className="space-y-6">
                <p>
                  Kater.it was my first end-to-end product design project. Working solo pushed me to wear multiple hats—researcher, designer, and tester—which gave me a holistic understanding of the product development process.
                </p>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Key Learnings</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Two-sided marketplaces require balancing both user and provider needs simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Pricing transparency builds trust but requires careful presentation to avoid sticker shock</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Photo quality in food apps directly correlates with conversion rates</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">What I'd Do Differently</h3>
                  <p className="text-muted-foreground">
                    With more time, I would have conducted diary studies with actual event planners to understand their full planning journey, not just the catering selection portion. I also would have prototyped the caterer-side experience more thoroughly.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Next Case Study */}
            <div className="mt-16 pt-8 border-t border-border">
              <Link 
                to="/case-study/mind-over-matter"
                className="group flex items-center justify-between p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Next Case Study</p>
                  <p className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Mind Over Matter
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

export default CaseStudyKaterIt;
