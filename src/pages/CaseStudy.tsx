import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CaseStudyNav from "@/components/CaseStudyNav";
import CaseStudySection from "@/components/CaseStudySection";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import affinityDiagram from "@/assets/affinity-diagram.png";
import alexisPersona from "@/assets/alexis-persona.png";
import ethanPersona from "@/assets/ethan-persona.png";

const sections = [
  { id: "overview", label: "Project Overview" },
  { id: "research", label: "Research & Discovery" },
  { id: "findings", label: "Key Findings" },
  { id: "personas", label: "Personas" },
  { id: "design", label: "Design Implications" },
  { id: "reflection", label: "Reflection" },
];

const CaseStudy = () => {
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground">
                Mind Over Matter
              </h1>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
                Self-Managed Mental Health Care: How Users Evaluate and Trust Resources
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {["UX Research", "User Interviews", "Observation Studies", "Persona Development", "Affinity Mapping"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium bg-primary-light text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Executive Summary */}
            <CaseStudySection id="overview" title="Project Overview">
              <div className="space-y-6">
                <p>
                  With a rise in AI chatbots converging with a global mental health crisis, the digital space is experiencing a surge in mental health care tools. This study observed and interviewed 16 participants to understand how they build mental health care strategies and what influences their tool choices.
                </p>
                
                <div className="bg-secondary rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Key Insights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>People rely on a blend of both digital and non-digital practices for mental health support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Users are conflicted about using AI as a mental health tool, even if they trust it for other tasks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Community support affects overall wellbeing and is prioritized when looking for care</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Team & Timeline</h3>
                  <p>
                    Conducted at DePaul University's College of Computing and Digital Media for User Interview Methods. Team: Natalie, Divya, Thian, and Alia. Project completed November 2025.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Research & Discovery */}
            <CaseStudySection id="research" title="Research & Discovery">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Observation Study</h3>
                  <p className="mb-4">
                    Eight participants were tasked to create a 3-5 item mental health toolkit for a friend while thinking out loud. We observed patterns in how they discovered, evaluated, and recommended tools.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Format</h4>
                      <p className="text-sm text-muted-foreground">20-30 minute task observation via Zoom/Teams with transcription</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Analysis</h4>
                      <p className="text-sm text-muted-foreground">Inductive coding to build affinity diagrams and sequence models</p>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Semi-Structured Interviews</h3>
                  <p className="mb-4">
                    Eight participants discussed their mental health strategies, cultural influences, and thoughts on AI for emotional support.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Format</h4>
                      <p className="text-sm text-muted-foreground">30-minute semi-structured interviews covering digital literacy, AI use, and cultural influences</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Analysis</h4>
                      <p className="text-sm text-muted-foreground">Two rounds of inductive coding using Atlas.ti and FigJam</p>
                    </Card>
                  </div>
                </div>

                {/* Affinity Diagram */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Interview Affinity Diagram</h3>
                  <p className="mb-4 text-muted-foreground">
                    We synthesized interview insights using affinity mapping to identify key themes around mental health strategies, AI trust, and community support.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-border mb-4">
                    <img 
                      src={affinityDiagram} 
                      alt="Interview Affinity Diagram showing categorized themes from user research"
                      className="w-full h-auto"
                    />
                  </div>
                  <a 
                    href="https://www.figma.com/board/wuAnFDeGt01WFCvdKFyytc/HCI445---Mental-health----Affinity-Diagram?node-id=5-1235&t=SAOqS3PN6gsg09Sn-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View full affinity diagram in FigJam
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">User Behavior: Search Process</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">Initiating the Search</h4>
                      <p className="text-sm text-muted-foreground">Participants began with queries like "best anxiety apps" or prompted ChatGPT for toolkit recommendations</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">Evaluating Results</h4>
                      <p className="text-sm text-muted-foreground">Trust evaluation based on familiarity, professional authority, community endorsement, and visual appeal</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">Selection Criteria</h4>
                      <p className="text-sm text-muted-foreground">Personal experience, accessibility (free, low effort), calming aesthetics, and positive reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Findings */}
            <CaseStudySection id="findings" title="Key Findings">
              <div className="space-y-8">
                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The AI Trust Gap</h3>
                  <p className="mb-4">
                    While participants expressed high confidence in AI for functional tasks (grammar, coding, emails), they showed significant skepticism for emotional support. AI is viewed as a "communication assistant" rather than a therapeutic substitute.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "AI might be useful for retrieving information, but it cannot 'read between the lines' or interpret tone the way a human can."
                  </blockquote>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Hybrid Ecosystem of Care</h3>
                  <p className="mb-4">
                    Participants curate a personal "toolkit" bridging digital and physical spaces—combining apps like Calm and Headspace with free resources like Spotify and YouTube, supplemented by journaling, exercise, and nature time.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "A mix of talking to therapists, using the journal app, and Headspace for grounding exercises."
                  </blockquote>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Cultural & Community Reliance</h3>
                  <p className="mb-4">
                    Cultural backgrounds and community connections serve as primary filters for selecting support. Stigma in some cultures leads users to rely on peers "closer in age" or close friends who understand their struggles.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "I turn to close friends because they know what I struggle with—trust is rooted in shared identity and human connection."
                  </blockquote>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Digital Fatigue Paradox</h3>
                  <p className="mb-4">
                    Participants reported 6-11 hours daily screen time, causing "screen aversion" and "cognitive fatigue." Yet they return to platforms like TikTok to "zone out"—using digital distraction as a coping strategy.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "A computer-based job is my personal hell... but I do not have a choice due to work requirements."
                  </blockquote>
                </div>
              </div>
            </CaseStudySection>

            {/* Personas */}
            <CaseStudySection id="personas" title="Personas">
              <div className="space-y-8">
                <p className="text-muted-foreground">
                  Based on our research findings, we developed two personas representing distinct user archetypes with different relationships to technology and mental health support.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden border border-border bg-card">
                    <img 
                      src={alexisPersona} 
                      alt="Alexis - The Open-Minded Digital Professional persona"
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden border border-border bg-card">
                    <img 
                      src={ethanPersona} 
                      alt="Ethan - The Skeptical Young Adult persona"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Scenario: Ethan's Journey</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Feeling Overwhelmed</h4>
                        <p className="text-sm text-muted-foreground">Ethan struggles balancing personal life and school. Friends can't help, family won't take him seriously.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Searching for Help</h4>
                        <p className="text-sm text-muted-foreground">Can't afford therapy, doesn't trust AI. Feels stuck and hopeless.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Trying the Tool</h4>
                        <p className="text-sm text-muted-foreground">After weeks of mulling, tries a new mental health tool. Answers questions about lifestyle.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Feeling Grounded</h4>
                        <p className="text-sm text-muted-foreground">Incorporates daily walks and mood tracking. Ready to tackle next semester feeling more grounded.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Design Implications */}
            <CaseStudySection id="design" title="Design Implications">
              <div className="space-y-6">
                <p>
                  Our study offers key insights into designing digital mental health tools that align with real-world usage patterns.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Personalization & Modularity</h3>
                    <p className="text-sm text-muted-foreground">
                      Users prefer building their own combination of tools. Allow people to curate breathing exercises, podcasts, journaling prompts, and reflection activities in one place.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Make Trustworthiness Visible</h3>
                    <p className="text-sm text-muted-foreground">
                      Participants check for legitimacy indicators. Make trust cues explicit—verified credentials, transparent privacy policies, and accessible user reviews.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Design for Simplicity</h3>
                    <p className="text-sm text-muted-foreground">
                      Participants expressed frustration with gamified features. Prioritize minimalistic interfaces without overwhelming prompts or engagement mechanics.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Visual Warmth</h3>
                    <p className="text-sm text-muted-foreground">
                      Participants were drawn to inviting interfaces. Incorporate calming visuals—soft colors, icons, or nature imagery to create ease and approachability.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary md:col-span-2">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Acknowledge AI's Emotional Boundaries</h3>
                    <p className="text-sm text-muted-foreground">
                      Mental health interfaces using AI should clearly communicate their purpose, balance empathy with transparency, and include options for human intervention when appropriate.
                    </p>
                  </Card>
                </div>

                <div className="bg-secondary rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Priority Features Matrix</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 pr-4 text-foreground">Feature</th>
                          <th className="text-left py-2 px-2 text-foreground">Priority</th>
                          <th className="text-left py-2 px-2 text-foreground">Impact</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border/50">
                          <td className="py-2 pr-4">Adaptive tone based on user's stress markers</td>
                          <td className="py-2 px-2">High</td>
                          <td className="py-2 px-2">High</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-2 pr-4">Clear AI transparency & no diagnoses</td>
                          <td className="py-2 px-2">High</td>
                          <td className="py-2 px-2">High</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-2 pr-4">Crisis detection & professional redirect</td>
                          <td className="py-2 px-2">High</td>
                          <td className="py-2 px-2">Critical</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-2 pr-4">Evidence-based resource recommendations</td>
                          <td className="py-2 px-2">Medium-High</td>
                          <td className="py-2 px-2">High</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Journaling with curated prompts</td>
                          <td className="py-2 px-2">Medium</td>
                          <td className="py-2 px-2">Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Reflection & Next Steps */}
            <CaseStudySection id="reflection" title="Reflection & Future Work">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Limitations</h3>
                  <p>
                    Dimensions like warmth, complexity, and personalization are yet to be fully explored. Our protocol did not fully consider digital fatigue or literacy as an influence on tool use, and demographics may play a larger role than captured.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Future Directions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Expand to larger, more diverse participant pool to evaluate cultural and digital literacy influences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Develop and test a prototype integrating simplicity, personalization, and transparency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Reframe AI chatbots as transparent, guided companions rather than therapist mimics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
                  <p className="text-foreground font-medium">
                    "A technological solution must encompass the multimodal aspect of mental health care and provide transparency, personalization, and access to high-quality resources."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Research Team Conclusion</p>
                </div>
              </div>
            </CaseStudySection>

            {/* Next Case Study */}
            <div className="mt-16 pt-8 border-t border-border">
              <Link 
                to="/case-study/community-house-winnetka"
                className="group flex items-center justify-between p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Next Case Study</p>
                  <p className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Community House Winnetka
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

export default CaseStudy;
