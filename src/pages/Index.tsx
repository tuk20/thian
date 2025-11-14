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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tagsVisible, setTagsVisible] = useState(false);
  const [allTagsAppeared, setAllTagsAppeared] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);
  const projectsSection = useScrollAnimation(0.3);
  const aboutSection = useScrollAnimation(0.2);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLocked) {
        window.scrollTo(0, 0);
        return;
      }
      setScrollY(window.scrollY);
      if (window.scrollY > 50 && !tagsVisible) {
        setTagsVisible(true);
        setScrollLocked(true);
        setTimeout(() => {
          setAllTagsAppeared(true);
          setScrollLocked(false);
        }, 1200); // Wait for all 3 tags to appear (0.2s + 0.5s + 0.8s delays)
      }
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [tagsVisible, scrollLocked]);

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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float opacity-0 animate-[float_6s_ease-in-out_infinite,fade-out_8s_ease-in_forwards]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-0 animate-[float_6s_ease-in-out_infinite_2s,fade-out_8s_ease-in_2s_forwards]" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] opacity-0 animate-[float_6s_ease-in-out_infinite_4s,fade-out_8s_ease-in_4s_forwards]" />
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
        
        {/* Interactive Animated Glass Panels with Hover Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-auto">
          <div 
            className="absolute top-20 left-10 w-64 h-64 bg-primary/10 backdrop-blur-3xl rounded-3xl rotate-12 opacity-100 transition-all duration-1000 group hover:scale-110 cursor-pointer"
            style={{ 
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.5}px) rotate(12deg)`,
              opacity: Math.max(0, 1 - scrollY * 0.003)
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderRadius = '40% 60% 60% 40% / 60% 40% 60% 40%';
              setTimeout(() => {
                e.currentTarget.style.opacity = '0';
                e.currentTarget.style.transform = 'scale(1.5)';
              }, 300);
            }}
          />
          <div 
            className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/10 backdrop-blur-3xl rounded-3xl -rotate-12 opacity-100 transition-all duration-1000 group hover:scale-110 cursor-pointer" 
            style={{ 
              transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03 + scrollY * 0.6}px) rotate(-12deg)`,
              opacity: Math.max(0, 1 - scrollY * 0.003)
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderRadius = '50% 50% 40% 60% / 40% 60% 50% 50%';
              setTimeout(() => {
                e.currentTarget.style.opacity = '0';
                e.currentTarget.style.transform = 'scale(1.5)';
              }, 300);
            }}
          />
          <div 
            className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/10 backdrop-blur-3xl rounded-full opacity-100 transition-all duration-1000 group hover:scale-110 cursor-pointer" 
            style={{ 
              transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015 + scrollY * 0.4}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.003)
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderRadius = '60% 40% 50% 50% / 50% 60% 40% 50%';
              setTimeout(() => {
                e.currentTarget.style.opacity = '0';
                e.currentTarget.style.transform = 'scale(1.5)';
              }, 300);
            }}
          />
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
              <div 
                className="relative w-48 h-48 rounded-full overflow-hidden backdrop-blur-sm bg-card/30 border border-border/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:scale-105 hover:rotate-3"
                style={{
                  transform: `perspective(1000px) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg) rotateX(${-(mousePosition.y - window.innerHeight / 2) * 0.01}deg)`
                }}
              >
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
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12 text-foreground"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span 
                className={`px-5 py-2 bg-primary-light text-primary rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-all duration-700 ${
                  tagsVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                User Research
              </span>
              <span 
                className={`px-5 py-2 bg-primary-light text-primary rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-all duration-700 ${
                  tagsVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                Interaction Design
              </span>
              <span 
                className={`px-5 py-2 bg-primary-light text-primary rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-all duration-700 ${
                  tagsVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{ transitionDelay: "0.8s" }}
              >
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
      <section id="about" className="py-20 px-6 bg-secondary">
        <div 
          ref={aboutSection.ref}
          className={`container mx-auto max-w-4xl transition-all duration-1000 ${
            aboutSection.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-32"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground opacity-70 text-center">
            About Me
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed text-justify">
            {`My path into UX started with curiosity. I taught myself design through YouTube, spent hours practicing in Figma, and turned that passion into a career. That self-taught start shaped how I work. I stay curious, focus on people, and break down tough problems into simple, usable experiences. I'm now earning my master's in human-computer interaction to deepen that foundation.`
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-300 hover:scale-110 hover:text-primary cursor-default mx-[0.25em]"
                >
                  {word}
                </span>
              ))}
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 px-6">
        <div 
          ref={projectsSection.ref}
          className="container mx-auto max-w-4xl text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-foreground opacity-70 transition-all duration-1000 ${
            projectsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Design Philosophy
          </h2>
          <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 transition-all duration-1000 delay-150 ${
            projectsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            I believe great design is invisible. It guides users naturally, anticipates their needs, 
            and creates delightful moments without demanding attention. Every project starts with empathy 
            and ends with impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className={`transition-all duration-1000 delay-300 ${
              projectsSection.isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 -rotate-3"
            }`}>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Research-Driven</h3>
              <p className="text-muted-foreground">
                Deep user insights inform every design decision
              </p>
            </div>
            <div className={`transition-all duration-1000 delay-500 ${
              projectsSection.isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-3"
            }`}>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Collaborative</h3>
              <p className="text-muted-foreground">
                Working closely with cross-functional teams
              </p>
            </div>
            <div className={`transition-all duration-1000 delay-700 ${
              projectsSection.isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 -rotate-3"
            }`}>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Impact-Focused</h3>
              <p className="text-muted-foreground">
                Measuring success through user outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 px-6 bg-secondary">
        <div 
          ref={projectsSection.ref}
          className={`container mx-auto max-w-7xl transition-all duration-1000 ${
            projectsSection.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Selected Works
          </h2>
          <div className="mb-4 px-6 grid grid-cols-[1fr_2fr_1fr] gap-4 text-xs uppercase tracking-wider text-muted-foreground">
            <div>Industry</div>
            <div>Work</div>
            <div className="text-right">Timeline</div>
          </div>
          <div className="space-y-2">
            {works.map((work, index) => (
              <WorkItem key={index} {...work} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="mailto:hello@thianuk.com" 
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
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
