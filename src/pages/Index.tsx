import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import AnimatedName from "@/components/AnimatedName";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowDown } from "lucide-react";
import portraitImage from "@/assets/portrait.jpg";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import healthcareImage from "@/assets/healthcare-project.jpg";
import fintechImage from "@/assets/fintech-project.jpg";
import edtechImage from "@/assets/edtech-project.jpg";
import travelImage from "@/assets/travel-project.jpg";
import designSystemImage from "@/assets/design-system-project.jpg";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const projectsSection = useScrollAnimation(0.1);
  const aboutSection = useScrollAnimation(0.2);

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
            {/* Portrait Image */}
            <div 
              className="mb-8 flex justify-center"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:scale-105">
                <img 
                  src={portraitImage} 
                  alt="Thian Uk - UX Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              UX Designer
            </p>
            <AnimatedName 
              name="Thian Uk" 
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground"
            />
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
          <div 
            ref={projectsSection.ref}
            className={`mb-12 transition-all duration-1000 ${
              projectsSection.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Work</h2>
            <p className="text-xl text-muted-foreground">
              A selection of recent projects showcasing user-centered design solutions.
            </p>
          </div>

          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto transition-all duration-1000 delay-300 ${
              projectsSection.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <ProjectCard
              size="large"
              title="E-Commerce Redesign"
              description="Transforming the shopping experience for a sustainable fashion brand with improved accessibility and engagement."
              tags={["UX Research", "UI Design", "Prototyping"]}
              imageUrl={ecommerceImage}
              to="/case-study"
            />
            
            <ProjectCard
              size="medium"
              title="Healthcare Portal"
              description="Streamlining patient experience with intuitive appointment scheduling and medical records access."
              tags={["Healthcare", "Accessibility"]}
              imageUrl={healthcareImage}
            />
            
            <ProjectCard
              size="small"
              title="Fintech App"
              description="Simplifying personal finance management for Gen Z users."
              tags={["Mobile", "Finance"]}
              imageUrl={fintechImage}
            />
            
            <ProjectCard
              size="small"
              title="EdTech Platform"
              description="Creating engaging learning experiences for remote education."
              tags={["Education", "Remote"]}
              imageUrl={edtechImage}
            />
            
            <ProjectCard
              size="medium"
              title="Travel Booking"
              description="Reimagining the journey from inspiration to booking with AI-powered recommendations."
              tags={["Travel", "AI", "Mobile"]}
              imageUrl={travelImage}
            />

            <ProjectCard
              size="small"
              title="Design System"
              description="Building scalable component libraries for enterprise products."
              tags={["Systems", "Enterprise"]}
              imageUrl={designSystemImage}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-secondary">
        <div 
          ref={aboutSection.ref}
          className={`container mx-auto max-w-4xl text-center transition-all duration-1000 ${
            aboutSection.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Design Philosophy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I believe great design is invisible. It guides users naturally, anticipates their needs, 
            and creates delightful moments without demanding attention. Every project starts with empathy 
            and ends with impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className={`transition-all duration-700 delay-100 ${
              aboutSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Research-Driven</h3>
              <p className="text-muted-foreground">
                Deep user insights inform every design decision
              </p>
            </div>
            <div className={`transition-all duration-700 delay-300 ${
              aboutSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Collaborative</h3>
              <p className="text-muted-foreground">
                Working closely with cross-functional teams
              </p>
            </div>
            <div className={`transition-all duration-700 delay-500 ${
              aboutSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
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
            © 2025 Thian Uk. Designed with purpose.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
