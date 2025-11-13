import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import WorkItem from "@/components/WorkItem";
import AnimatedName from "@/components/AnimatedName";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowDown } from "lucide-react";
import portraitImage from "@/assets/portrait.jpg";
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

  const works = [
    {
      industry: "Fitness Coaching",
      title: "Everfit",
      timeline: "(22)-(Present)",
      description: "Redesigned the fitness coaching platform to improve trainer-client interactions and streamline workout planning.",
      imageUrl: fintechImage,
    },
    {
      industry: "EdTech",
      title: "Sumenki",
      timeline: "(23)-(25)",
      description: "Created an engaging learning experience for students with interactive lessons and progress tracking.",
      imageUrl: edtechImage,
    },
    {
      industry: "Blockchain",
      title: "Flux Labs",
      timeline: "(24)-(25)",
      description: "Designed a crypto trading platform with real-time data visualization and seamless transaction flows.",
      imageUrl: designSystemImage,
    },
    {
      industry: "Travel",
      title: "Wanderlust",
      timeline: "(21)-(23)",
      description: "Built a travel planning app that helps users discover destinations and create personalized itineraries.",
      imageUrl: travelImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <Navigation />

      {/* Hero Section with Immersive Entry Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Glass Effect Background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "var(--gradient-subtle)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        {/* Animated Glass Panels */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 backdrop-blur-3xl rounded-3xl rotate-12 animate-fade-in" style={{ animationDelay: "0.2s" }} />
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/10 backdrop-blur-3xl rounded-3xl -rotate-12 animate-fade-in" style={{ animationDelay: "0.4s" }} />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="animate-scale-in">
            {/* Portrait Image with Glass Effect */}
            <div 
              className="mb-8 flex justify-center animate-fade-in"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                animationDelay: "0.1s"
              }}
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden backdrop-blur-sm bg-card/30 border border-border/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:scale-105">
                <img 
                  src={portraitImage} 
                  alt="Thian Uk - UX Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
              UX Designer
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <AnimatedName 
                name="Thian Uk" 
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground"
              />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Crafting meaningful digital experiences that connect people with purpose-driven products.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <span className="px-5 py-2 bg-primary-light text-primary rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                User Research
              </span>
              <span className="px-5 py-2 bg-primary-light text-primary rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                Interaction Design
              </span>
              <span className="px-5 py-2 bg-primary-light text-primary rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                Design Systems
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
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
