import Navigation from "@/components/Navigation";
import CaseStudyNav from "@/components/CaseStudyNav";
import CaseStudySection from "@/components/CaseStudySection";

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
          {/* Vertical Navigation */}
          <aside className="hidden lg:block">
            <CaseStudyNav />
          </aside>

          {/* Main Content */}
          <main className="max-w-4xl">
            {/* Hero Section */}
            <div className="mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                E-Commerce Redesign
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Transforming the shopping experience for a sustainable fashion brand with a focus on accessibility and user engagement.
              </p>
              <div className="flex flex-wrap gap-3">
                {["UX Research", "UI Design", "Prototyping", "User Testing"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium bg-primary-light text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Overview */}
            <CaseStudySection id="overview" title="Project Overview">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Introduction</h3>
                  <p>
                    This case study explores the redesign of an e-commerce platform for a sustainable fashion brand. The goal was to create an intuitive, accessible, and engaging shopping experience that reflects the brand's commitment to sustainability.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">The Problem</h3>
                  <p>
                    Users were experiencing high cart abandonment rates and difficulty navigating the product catalog. The existing interface lacked visual hierarchy and failed to communicate the brand's sustainability story effectively.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">My Role</h3>
                  <p>
                    Lead UX Designer responsible for user research, wireframing, prototyping, and user testing. Collaborated closely with the development team and stakeholders throughout the 3-month project timeline.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Research & Discovery */}
            <CaseStudySection id="research" title="Research & Discovery">
              <div className="space-y-6">
                <p>
                  Our research phase included competitive analysis, user interviews, and analytics review to understand pain points and opportunities.
                </p>

                <div className="bg-secondary rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Key Findings</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>73% of users abandoned cart due to unclear shipping information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Users wanted more transparency about product sustainability credentials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Mobile users struggled with small touch targets and cluttered navigation</span>
                    </li>
                  </ul>
                </div>

                <p>
                  These insights guided our design decisions and helped prioritize features that would have the most impact on user experience and business goals.
                </p>
              </div>
            </CaseStudySection>

            {/* Design Process */}
            <CaseStudySection id="design-process" title="Design Process">
              <div className="space-y-6">
                <p>
                  The design process involved iterative cycles of ideation, prototyping, and testing to ensure we were creating the best possible solution.
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Information Architecture</h3>
                  <p>
                    We restructured the navigation to reduce cognitive load, grouping products by lifestyle categories rather than technical specifications. This approach aligned better with how users actually shop.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Wireframes & Prototyping</h3>
                  <p>
                    Low-fidelity wireframes were created to quickly test concepts with users. High-fidelity prototypes were then developed in Figma, incorporating the brand's visual identity and design system.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Visual Design</h3>
                  <p>
                    The visual design emphasized clean layouts, ample white space, and a color palette that reflects the brand's eco-friendly values. Typography and spacing were carefully considered for optimal readability across devices.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Solution */}
            <CaseStudySection id="solution" title="Solution">
              <div className="space-y-6">
                <p>
                  The final design delivered a streamlined shopping experience with improved navigation, transparent product information, and seamless checkout flow.
                </p>

                <div className="bg-secondary rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Sustainability scorecard for each product with detailed impact metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>One-click checkout with saved preferences and payment methods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Smart search with filters optimized for mobile touch interactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Personalized recommendations based on style preferences and values</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Each feature was designed with accessibility in mind, meeting WCAG 2.1 AA standards and ensuring a positive experience for all users.
                </p>
              </div>
            </CaseStudySection>

            {/* Reflection & Next Steps */}
            <CaseStudySection id="reflection" title="Reflection & Next Steps">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Impact</h3>
                  <p>
                    Post-launch metrics showed a 42% reduction in cart abandonment, 35% increase in average session duration, and improved accessibility scores across the platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Learnings</h3>
                  <p>
                    This project reinforced the importance of iterative testing and staying close to user feedback. Early validation of concepts saved significant development time and ensured we were building the right features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Next Steps</h3>
                  <p>
                    Future iterations will focus on enhancing the personalization engine, adding AR try-on features, and expanding the sustainability storytelling elements throughout the experience.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
                  <p className="text-foreground font-medium">
                    "The redesign transformed our digital presence and helped us better connect with our values-driven customers."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Head of Digital, Fashion Brand</p>
                </div>
              </div>
            </CaseStudySection>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
