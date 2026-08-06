import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CaseStudyNav from "@/components/CaseStudyNav";
import CaseStudySection from "@/components/CaseStudySection";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Import images
import researchInterviewImage from "@/assets/katerit-research-interview.png";
import personaImage from "@/assets/katerit-persona.png";
import finalDesignImage from "@/assets/katerit-final-design.png";
import hifiPrototypeImage from "@/assets/katerit-hifi-prototype.png";
import lowfiPrototypeImage from "@/assets/katerit-lowfi-prototype.png";
import infoArchitectureGif from "@/assets/katerit-info-architecture.gif";
import userFlowImage from "@/assets/katerit-user-flow.png";
import digitalWireframesImage from "@/assets/katerit-digital-wireframes.png";
import paperWireframe1Image from "@/assets/katerit-paper-wireframe1.png";
import paperWireframe2Image from "@/assets/katerit-paper-wireframe2.png";
import allViewsImage from "@/assets/katerit-all-views.png";

const sections = [
  { id: "overview", label: "Project Overview" },
  { id: "research", label: "Research & Discovery" },
  { id: "design", label: "Design Process" },
  { id: "prototyping", label: "Prototyping & Testing" },
  { id: "solution", label: "Final Design" },
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
                  Concept Project
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
              <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                <p>
                  Part of the Google UX Design Professional Certificate on Coursera. Completed over 4 weeks as part of the "Design for Social Good" module.
                </p>
              </div>
            </header>

            {/* Project Overview */}
            <CaseStudySection id="overview" title="Project Overview">
              <div className="space-y-6">
                <p>
                  This project was part of the Google UX Design Professional Certificate program on Coursera, where I was tasked with designing a mobile app and responsive website for local caterers and businesses as part of the "Design for Social Good" module. The goal was to create a platform that simplifies the process of finding and ordering catering services while supporting local businesses in reaching a broader audience. The project emphasized user-centered design principles, accessibility, and fostering community engagement.
                </p>
                
                <a 
                  href="https://www.figma.com/proto/MNW99EiRt5IX68aDOYDdWS/KATER.IT?node-id=42-1245&t=TSkJO5iJ8KwWR5ol-1&scaling=scale-down&content-scaling=fixed&page-id=42%3A721&starting-point-node-id=42%3A1245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Hi-fi Prototype
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="bg-secondary rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Problem</h3>
                  <p className="text-muted-foreground">
                    Catering is an essential service for events and occasions, but the process of finding and ordering from local caterers is often frustrating and inefficient. Customers struggle to discover reliable local options, while small caterers face significant challenges in marketing their services and competing with larger chains. Limited online resources and reliance on platforms like Facebook make it difficult for caterers to manage orders, communicate with customers, and showcase their offerings effectively. This disconnect creates a gap in the market for a streamlined, user-friendly platform that connects customers with local caterers while supporting the growth of small businesses.
                  </p>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Goal</h3>
                  <p className="text-muted-foreground mb-4">
                    The primary goal of this project was to design a user-friendly platform that simplifies the process of discovering, ordering, and managing catering services from local businesses. By creating a hyperlocal solution, the app aims to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Empower customers to easily find and order from local caterers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Provide caterers with tools to manage orders, customize menus, and communicate with customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Foster a sense of community by supporting small businesses and promoting the local food industry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Enhance the local economy by increasing visibility and accessibility for local caterers</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">My Responsibilities</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Research & user interviews</li>
                      <li>• Strategy & persona creation</li>
                      <li>• Wireframing & prototyping</li>
                      <li>• Usability testing</li>
                      <li>• Final mockups & handoff</li>
                    </ul>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Project Duration</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Week 1: Research & problem definition</li>
                      <li>• Week 2: Ideation & wireframing</li>
                      <li>• Week 3: Hi-fi prototyping & testing</li>
                      <li>• Week 4: Iteration & documentation</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </CaseStudySection>

            {/* Research & Discovery */}
            <CaseStudySection id="research" title="Research & Discovery">
              <div className="space-y-8">
                <div>
                  <p className="mb-6">
                    To better understand the needs of both customers and caterers, I conducted user interviews with two local caterers and surveyed potential customers. Key insights included:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Frustration with Facebook</h4>
                      <p className="text-sm text-muted-foreground">Caterers found Facebook inefficient for managing orders and communicating with customers. They wanted a dedicated platform to streamline these processes.</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Desire for Control</h4>
                      <p className="text-sm text-muted-foreground">Caterers expressed a need for more control over orders, including the ability to customize menus, accommodate dietary restrictions, and set pricing for special requests.</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Limited Online Presence</h4>
                      <p className="text-sm text-muted-foreground">Small caterers struggled to compete with larger chains due to limited resources and exposure. They wanted a platform that prioritized local businesses.</p>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Interview Questions</h3>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <img 
                      src={researchInterviewImage} 
                      alt="Research interview questions organized into four sections: Current Order Management, Customization and Control, Online Presence and Competition, and General Feedback"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Persona</h3>
                  <p className="text-muted-foreground mb-4">
                    Based on the research insights, I created one primary persona that addresses the pain points of both caterers and customers. This persona represents a local caterer who is looking to expand their customer base, streamline order management, and provide a seamless experience for customers seeking reliable, high-quality catering options.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <img 
                      src={personaImage} 
                      alt="Persona card for Sui, a 55-year-old self-employed local caterer from Kansas City who runs her business on Facebook and needs a dedicated platform to display her menu and manage orders"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Design Process */}
            <CaseStudySection id="design" title="Design Process">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Paper Wireframes</h3>
                  <p className="mb-4">
                    I began by sketching multiple iterations of the mobile app's homepage, focusing on highlighting local caterers as the main attraction. After several rounds of ideation, I combined the best elements into a final paper wireframe.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl overflow-hidden border border-border bg-secondary/30">
                      <img 
                        src={paperWireframe1Image} 
                        alt="Paper wireframe sketches showing three different homepage layout iterations"
                        className="w-full"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-border bg-secondary/30">
                      <img 
                        src={paperWireframe2Image} 
                        alt="Paper wireframe sketches showing two additional homepage layout variations"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Digital Wireframes</h3>
                  <p className="mb-4">
                    Using the final paper wireframe as a foundation, I translated the design into a digital format using Figma. I then expanded the design to include other key screens, such as the menu page, order customization page, and checkout flow.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <img 
                      src={digitalWireframesImage} 
                      alt="Digital wireframes showing four key app screens: Homepage, Market/Orders, Messages, and User Profile"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">User Flow</h3>
                  <p className="mb-4">
                    I mapped out the primary user flow to ensure a seamless experience for both customers and caterers:
                  </p>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <img 
                      src={userFlowImage} 
                      alt="User flow diagram showing: Start → Discover Caterers → Browse Menus → Place & Confirm → Receive Updates → End"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Information Architecture</h3>
                  <p className="mb-4">
                    To ensure intuitive navigation, I created a sitemap that organized the app's content and features logically. Key sections included:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Home:</strong> Showcase local caterers with filters for cuisine, budget, and dietary restrictions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Menu:</strong> Allow customers to browse and customize catering options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Order Management:</strong> Enable caterers to manage orders, update menus, and communicate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Profile:</strong> Provide caterers with tools to create and manage their business profiles</span>
                    </li>
                  </ul>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <img 
                      src={infoArchitectureGif} 
                      alt="Animated GIF showing the information architecture and sitemap structure"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Prototyping & Testing */}
            <CaseStudySection id="prototyping" title="Prototyping & Testing">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Low-Fidelity Prototype</h3>
                  <p className="mb-4">
                    I developed a low-fidelity prototype to test the core functionality of the app. This included basic interactions such as browsing caterers, customizing orders, and completing the checkout process.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-border mb-4">
                    <img 
                      src={lowfiPrototypeImage} 
                      alt="Low-fidelity prototype screens showing the complete user journey from onboarding to order completion"
                      className="w-full"
                    />
                  </div>
                  <a 
                    href="https://www.figma.com/proto/MNW99EiRt5IX68aDOYDdWS/KATER.IT?node-id=134-1315&t=B707tl7pGhLcJ1iQ-1&scaling=scale-down&content-scaling=fixed&page-id=134%3A383"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    View Low-fi Prototype in Figma
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Usability Testing</h3>
                  <p className="mb-4">
                    I conducted usability testing with 5 participants, including both caterers and customers. Key findings included:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Finding #1</h4>
                      <p className="text-sm text-muted-foreground">Users appreciated the simplicity of the interface but requested more filtering options for caterers.</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Finding #2</h4>
                      <p className="text-sm text-muted-foreground">Caterers wanted clearer instructions for setting up their profiles and menus.</p>
                    </Card>
                    <Card className="p-4 bg-secondary/50">
                      <h4 className="font-semibold text-foreground mb-2">Finding #3</h4>
                      <p className="text-sm text-muted-foreground">Some users found the checkout process confusing and suggested adding a progress indicator.</p>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">High-Fidelity Prototype</h3>
                  <p className="mb-4">
                    Based on the feedback, I iterated on the design and created a high-fidelity prototype with improved navigation, additional filtering options, and a streamlined checkout process.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-border mb-4">
                    <img 
                      src={hifiPrototypeImage} 
                      alt="High-fidelity prototype showing the complete app flow with all screens and user interactions mapped out"
                      className="w-full"
                    />
                  </div>
                  <a 
                    href="https://www.figma.com/proto/MNW99EiRt5IX68aDOYDdWS/KATER.IT?node-id=42-1245&t=TSkJO5iJ8KwWR5ol-1&scaling=scale-down&content-scaling=fixed&page-id=42%3A721&starting-point-node-id=42%3A1245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    View Hi-fi Prototype in Figma
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </CaseStudySection>

            {/* Final Design */}
            <CaseStudySection id="solution" title="Final Design">
              <div className="space-y-8">
                <p>
                  The final design features a clean, intuitive interface that prioritizes ease of use for both customers and caterers. Key elements include:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Homepage</h3>
                    <p className="text-sm text-muted-foreground">
                      Showcasing local caterers with filters for cuisine, budget, and dietary restrictions.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Customizable Menu</h3>
                    <p className="text-sm text-muted-foreground">
                      Allowing customers to add special requests and dietary accommodations.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Streamlined Checkout</h3>
                    <p className="text-sm text-muted-foreground">
                      Featuring clear progress indicators and confirmation messages.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Caterer Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Enabling caterers to manage orders, update menus, and communicate with customers.
                    </p>
                  </Card>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                  <img 
                    src={finalDesignImage} 
                    alt="Final design mockups showing four key screens: Homepage with nearby caterers, Caterer's order management dashboard, Messages interface, and User profile/settings"
                    className="w-full"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Responsive Design</h3>
                  <p className="mb-4 text-muted-foreground">
                    While the project was mobile-first, I also designed responsive layouts for tablet and desktop to ensure a consistent experience across all devices.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <img 
                      src={allViewsImage} 
                      alt="Responsive design showcase showing Kater.it across desktop, tablet, and mobile devices with consistent design language"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Reflection */}
            <CaseStudySection id="reflection" title="Reflection">
              <div className="space-y-6">
                <p>
                  This project was a rewarding challenge that allowed me to apply UX design principles to a real-world problem. Despite the tight timeline, I was able to deliver a design that met the needs of both customers and caterers. However, there are areas for improvement:
                </p>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Areas for Improvement</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Creating additional personas to represent a wider range of user needs and behaviors. While the single persona I developed addressed key pain points, more personas could have provided deeper insights into diverse user groups.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Conducting more extensive user testing with a larger and more diverse group of participants.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Collaborating with developers earlier in the process to ensure feasibility and technical alignment.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Exploring additional features, such as integration with social media and loyalty programs, to further enhance the user experience.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Overall, this project reinforced the importance of user-centered design and iterative testing in creating effective solutions.
                </p>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Next Steps</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Develop additional personas to better represent the diverse needs of both customers and caterers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Conduct additional usability testing to validate the final design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Explore partnerships with local caterers to pilot the app</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Develop a marketing strategy to promote the platform and attract users</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CaseStudySection>

            {/* Next Case Study */}
            <div className="mt-16 pt-8 border-t border-border">
              <Link 
                to="/case-study/cbana-conference-app"
                className="group flex items-center justify-between p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Next Case Study</p>
                  <p className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    CBANA Conference App
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
