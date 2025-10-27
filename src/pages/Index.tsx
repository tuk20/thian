import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "var(--gradient-subtle)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              UX Designer
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground">
              Sarah Anderson
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Crafting meaningful digital experiences that connect people with purpose-driven products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-5 py-2 bg-primary-light text-primary rounded-full text-sm font-medium">
                User Research
              </span>
              <span className="px-5 py-2 bg-primary-light text-primary rounded-full text-sm font-medium">
                Interaction Design
              </span>
              <span className="px-5 py-2 bg-primary-light text-primary rounded-full text-sm font-medium">
                Design Systems
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Featured Projects - Bento Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Work</h2>
            <p className="text-xl text-muted-foreground">
              A selection of recent projects showcasing user-centered design solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            <ProjectCard
              size="large"
              title="E-Commerce Redesign"
              description="Transforming the shopping experience for a sustainable fashion brand with improved accessibility and engagement."
              tags={["UX Research", "UI Design", "Prototyping"]}
              to="/case-study"
            />
            
            <ProjectCard
              size="medium"
              title="Healthcare Portal"
              description="Streamlining patient experience with intuitive appointment scheduling and medical records access."
              tags={["Healthcare", "Accessibility"]}
            />
            
            <ProjectCard
              size="small"
              title="Fintech App"
              description="Simplifying personal finance management for Gen Z users."
              tags={["Mobile", "Finance"]}
            />
            
            <ProjectCard
              size="small"
              title="EdTech Platform"
              description="Creating engaging learning experiences for remote education."
              tags={["Education", "Remote"]}
            />
            
            <ProjectCard
              size="medium"
              title="Travel Booking"
              description="Reimagining the journey from inspiration to booking with AI-powered recommendations."
              tags={["Travel", "AI", "Mobile"]}
            />

            <ProjectCard
              size="small"
              title="Design System"
              description="Building scalable component libraries for enterprise products."
              tags={["Systems", "Enterprise"]}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Design Philosophy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I believe great design is invisible. It guides users naturally, anticipates their needs, 
            and creates delightful moments without demanding attention. Every project starts with empathy 
            and ends with impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Research-Driven</h3>
              <p className="text-muted-foreground">
                Deep user insights inform every design decision
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Collaborative</h3>
              <p className="text-muted-foreground">
                Working closely with cross-functional teams
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Impact-Focused</h3>
              <p className="text-muted-foreground">
                Measuring success through user outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-muted-foreground">
            © 2025 Sarah Anderson. Designed with purpose.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
