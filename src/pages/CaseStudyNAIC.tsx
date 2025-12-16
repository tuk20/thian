import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CaseStudyNav from "@/components/CaseStudyNav";
import CaseStudySection from "@/components/CaseStudySection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import naicBefore from "@/assets/naic-before.png";
import naicAfter from "@/assets/naic-after.png";
import naicWireframeA from "@/assets/naic-wireframe-a.png";
import naicWireframeB from "@/assets/naic-wireframe-b.png";

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
              <div className="bg-secondary rounded-xl p-4 my-6">
                <p className="text-sm text-muted-foreground italic">
                  Internship project at the National Association of Insurance Commissioners. Role: Lead UX Designer. Project completed November 2024.
                </p>
              </div>
            </header>

            {/* Project Overview */}
            <CaseStudySection id="overview" title="Project Overview">
              <div className="space-y-6">
                <p>
                  As a Web Developer Intern at the National Association of Insurance Commissioners (NAIC), I expressed my interest in UX design to my manager and was given the opportunity to lead the redesign of the NAIC Help Page.
                </p>
                <p>
                  This project allowed me to combine my technical skills as a developer with my growing passion for UX design. The goal was to improve usability, accessibility, and user engagement while aligning the page with the organization's broader design system—all within a tight 1-2 week deadline.
                </p>

                <a 
                  href="https://content.naic.org/help" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Live Implementation
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Role</h4>
                    <p className="text-sm text-muted-foreground">Lead UX Designer</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                    <p className="text-sm text-muted-foreground">1-2 Weeks (Nov 2024)</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Tools</h4>
                    <p className="text-sm text-muted-foreground">Figma, Drupal CMS, & Teams</p>
                  </Card>
                </div>
              </div>
            </CaseStudySection>

            {/* Research & Discovery */}
            <CaseStudySection id="research" title="Research & Discovery">
              <div className="space-y-8">
                <p>
                  To understand the problem deeply, I conducted the following activities:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Stakeholder Interviews</h3>
                    <p className="text-muted-foreground">
                      Collaborated with the head of the web team and senior web developer to align on organizational goals and constraints.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Competitive Analysis</h3>
                    <p className="text-muted-foreground">
                      Analyzed design patterns across other pages on the NAIC website to ensure consistency.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Deep Analysis of the NAIC Website</h3>
                    <p className="text-muted-foreground">
                      Conducted a thorough review of the entire NAIC website to understand its design system, components, and patterns. This included studying typography, color schemes, button styles, navigation structures, and other UI elements to ensure the new Help Page design would seamlessly integrate with the rest of the site.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">User Testing</h3>
                    <p className="text-muted-foreground">
                      Conducted usability testing sessions with real users to identify pain points and gather feedback on the existing design.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Key Insights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Users struggled with the cluttered layout and lack of clear navigation.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Mobile users found the page difficult to use due to poor responsiveness.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Accessibility issues, such as low contrast and lack of keyboard navigation, hindered usability for users with disabilities.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CaseStudySection>

            {/* Design Process */}
            <CaseStudySection id="design" title="Design Process">
              <div className="space-y-8">
                <p>
                  The redesign process followed a user-centered design approach, focusing on iterative improvements and collaboration with cross-functional teams. To ensure the final design met user needs and business goals, I incorporated A/B testing during the wireframing phase.
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Wireframing</h3>
                  <p className="mb-4">
                    Created two distinct low-fidelity wireframes to explore different layouts, navigation structures, and content hierarchies.
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Wireframe Option A</strong> focused on a card-based layout with clear visual separation between sections.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Wireframe Option B</strong> emphasized a list-based layout with compact information density for faster scanning.</span>
                    </li>
                  </ul>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Option A (Card-Based Layout)</p>
                      <img 
                        src={naicWireframeA} 
                        alt="NAIC Help Page Wireframe Option A - Card-based layout" 
                        className="rounded-lg border border-border w-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Option B (List-Based Layout)</p>
                      <img 
                        src={naicWireframeB} 
                        alt="NAIC Help Page Wireframe Option B - List-based layout" 
                        className="rounded-lg border border-border w-full"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Note: While the Figma prototype is no longer accessible, these wireframes illustrate the layout and structure of the redesigned Help Page.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">A/B Testing with Wireframes</h3>
                  <p className="mb-4">
                    Conducted A/B testing with a group of 7 stakeholders to compare the effectiveness of the two wireframes. Users were given specific tasks (e.g., finding a specific help topic, navigating to a resource) to complete on both wireframes.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Option A Feedback</h4>
                      <p className="text-sm text-muted-foreground">
                        Users found the card-based layout visually appealing and easier to navigate, especially on mobile devices. However, some users felt it required more scrolling.
                      </p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Option B Feedback</h4>
                      <p className="text-sm text-muted-foreground">
                        Users appreciated the compact design for quick scanning but found it less engaging and slightly overwhelming due to the lack of visual hierarchy.
                      </p>
                    </Card>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-foreground">Conclusion</p>
                    <p className="text-muted-foreground">
                      Based on the feedback, I combined the strengths of both wireframes—using a hybrid approach that incorporated the visual appeal of the card-based layout with the efficiency of the list-based structure.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">High-Fidelity Prototyping</h3>
                  <p className="mb-4">
                    Developed a high-fidelity prototype based on the insights from the A/B testing, ensuring the design was both visually engaging and functionally efficient. Conducted additional usability testing sessions with the prototype to gather feedback and iterated on the design.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Collaboration</h3>
                  <p className="text-muted-foreground">
                    Worked closely with the senior developer to ensure feasibility and alignment with technical constraints.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Solution */}
            <CaseStudySection id="solution" title="Solution">
              <div className="space-y-8">
                <p>
                  The final redesign introduced the following improvements, informed by the A/B testing results:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Hybrid Layout</h3>
                    <p className="text-sm text-muted-foreground">
                      Combined the card-based layout for visual appeal and the list-based structure for efficiency, creating a balanced design.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Consistent Design System</h3>
                    <p className="text-sm text-muted-foreground">
                      Aligned the Help Page with the NAIC website's visual identity.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Streamlined Navigation</h3>
                    <p className="text-sm text-muted-foreground">
                      Reorganized content into clear categories and subcategories.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Mobile Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Redesigned the page to be fully responsive.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Accessibility Enhancements</h3>
                    <p className="text-sm text-muted-foreground">
                      Improved color contrast and added keyboard navigation support.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Engagement Features</h3>
                    <p className="text-sm text-muted-foreground">
                      Introduced clear calls-to-action (CTAs) to guide users to relevant resources.
                    </p>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Before & After Comparison</h3>
                  <BeforeAfterSlider
                    beforeImage={naicBefore}
                    afterImage={naicAfter}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Results & Feedback</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">15%</p>
                      <p className="text-sm text-muted-foreground">Increase in Engagement</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">5%</p>
                      <p className="text-sm text-muted-foreground">Decrease in Bounce Rates</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">20%</p>
                      <p className="text-sm text-muted-foreground">Faster Task Completion</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">✓</p>
                      <p className="text-sm text-muted-foreground">Positive Stakeholder Feedback</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Stakeholders and users praised the redesign for its clarity, consistency, and accessibility. The hybrid layout, informed by A/B testing, was particularly well-received.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Reflection */}
            <CaseStudySection id="reflection" title="Reflection">
              <div className="space-y-6">
                <p>
                  This project was a pivotal moment in my career, as it allowed me to transition from web development to UX design. Key takeaways include:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Initiative Pays Off</h4>
                    <p className="text-muted-foreground">
                      By expressing my interest in UX design, I was able to take on a new challenge and expand my skill set.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">User-Centered Design</h4>
                    <p className="text-muted-foreground">
                      Incorporating user feedback at every stage, including A/B testing, led to a more effective solution.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Accessibility as a Priority</h4>
                    <p className="text-muted-foreground">
                      Addressing accessibility issues improved usability for all users and aligned with ethical design practices.
                    </p>
                  </div>
                </div>

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

                <div className="border-l-4 border-muted pl-4">
                  <h4 className="font-semibold text-foreground">Next Steps</h4>
                  <p className="text-muted-foreground">
                    A/B test the donate button copy, collect analytics to validate conversion impact, and expand usability testing to include users with accessibility needs.
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