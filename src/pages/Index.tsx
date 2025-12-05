import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import WorkItem from "@/components/WorkItem";
import AnimatedName from "@/components/AnimatedName";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowDown } from "lucide-react";
import portraitImage from "@/assets/portrait.jpg";
import mentalHealthImage from "@/assets/mental-health-project.jpg";
import edtechImage from "@/assets/edtech-project.jpg";
import travelImage from "@/assets/travel-project.jpg";
import designSystemImage from "@/assets/design-system-project.jpg";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tagsVisible, setTagsVisible] = useState(false);
  const [allTagsAppeared, setAllTagsAppeared] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [philosophyVisible, setPhilosophyVisible] = useState(false);
  const [shapePositions, setShapePositions] = useState({
    shape1: { x: 0, y: 0 },
    shape2: { x: 0, y: 0 },
    shape3: { x: 0, y: 0 },
    shape4: { x: 0, y: 0 },
  });
  const projectsSection = useScrollAnimation(0.3);
  const aboutSection = useScrollAnimation(0.2);

  const dodgeShape = (shapeName: keyof typeof shapePositions) => {
    const newX = Math.random() * 400 - 200;
    const newY = Math.random() * 400 - 200;
    setShapePositions(prev => ({
      ...prev,
      [shapeName]: { x: newX, y: newY }
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 50 && !tagsVisible) {
        setTagsVisible(true);
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
  }, [tagsVisible]);

  const works = [
    {
      industry: "Academic / Mental Health",
      title: "Mind Over Matter",
      timeline: "(Sept - Oct 2025)",
      description: "Investigated how users evaluate and trust digital mental health resources through observation studies and interviews.",
      imageUrl: mentalHealthImage,
    },
    {
      industry: "Academic / Non-profit",
      title: "Community House Winnetka",
      timeline: "(Mar - Jun 2025)",
      description: "Mobile-first information architecture and donation flow redesign to improve findability and conversions for a local nonprofit.",
      imageUrl: edtechImage,
    },
    {
      industry: "Fintech",
      title: "Redesigning the NAIC Help Page",
      timeline: "(Nov 2024)",
      description: "Transitioning from Web Development to UX Design to Improve Accessibility, Consistency, and User Engagement.",
      imageUrl: designSystemImage,
    },
    {
      industry: "Food",
      title: "Kater.it",
      timeline: "Feb 2024",
      description: "Built a catering app that helps local users discover and connect with local caterers.",
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
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
          {/* Shape 1 - Left Square */}
          <div 
            className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary/10 backdrop-blur-3xl rounded-3xl rotate-12 opacity-100 cursor-pointer hover:bg-primary/20"
            style={{ 
              transform: `translate(calc(${mousePosition.x * 0.02}px + ${shapePositions.shape1.x}px), calc(${mousePosition.y * 0.02 + scrollY * 0.5}px + ${shapePositions.shape1.y}px)) rotate(12deg)`,
              opacity: Math.max(0, 1 - scrollY * 0.003),
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onClick={() => dodgeShape('shape1')}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderRadius = '48% 52% 58% 42% / 53% 47% 53% 47%';
              e.currentTarget.style.backgroundColor = 'hsl(280 65% 60% / 0.35)';
              e.currentTarget.style.transform = 'scale(1.2) rotate(25deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderRadius = '1.5rem';
              e.currentTarget.style.transform = `translate(calc(${mousePosition.x * 0.02}px + ${shapePositions.shape1.x}px), calc(${mousePosition.y * 0.02 + scrollY * 0.5}px + ${shapePositions.shape1.y}px)) rotate(12deg)`;
              e.currentTarget.style.backgroundColor = 'hsl(var(--primary) / 0.1)';
            }}
          />
          
          {/* Shape 2 - Center Circle */}
          <div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 bg-secondary/10 backdrop-blur-3xl rounded-full opacity-100 cursor-pointer hover:bg-secondary/20" 
            style={{ 
              transform: `translate(calc(-50% + ${mousePosition.x * 0.02}px + ${shapePositions.shape2.x}px), calc(${mousePosition.y * 0.02 + scrollY * 0.45}px + ${shapePositions.shape2.y}px))`,
              opacity: Math.max(0, 1 - scrollY * 0.003),
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onClick={() => dodgeShape('shape2')}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderRadius = '50% 50% 50% 50% / 40% 40% 60% 60%';
              e.currentTarget.style.backgroundColor = 'hsl(160 55% 50% / 0.35)';
              e.currentTarget.style.transform = 'translate(-50%, 0) scale(1.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderRadius = '9999px';
              e.currentTarget.style.transform = `translate(calc(-50% + ${mousePosition.x * 0.02}px + ${shapePositions.shape2.x}px), calc(${mousePosition.y * 0.02 + scrollY * 0.45}px + ${shapePositions.shape2.y}px))`;
              e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.1)';
            }}
          />
          
          {/* Shape 3 - Right Star */}
          <div 
            className="absolute top-40 right-20 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-accent/10 backdrop-blur-3xl opacity-100 cursor-pointer hover:bg-accent/20"
            style={{ 
              transform: `translate(calc(${-mousePosition.x * 0.025}px + ${shapePositions.shape3.x}px), calc(${mousePosition.y * 0.025 + scrollY * 0.55}px + ${shapePositions.shape3.y}px)) rotate(0deg)`,
              opacity: Math.max(0, 1 - scrollY * 0.003),
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onClick={() => dodgeShape('shape3')}
            onMouseEnter={(e) => {
              e.currentTarget.style.clipPath = 'polygon(50% 0%, 100% 100%, 0% 100%)';
              e.currentTarget.style.backgroundColor = 'hsl(45 85% 55% / 0.35)';
              e.currentTarget.style.transform = 'scale(1.15) rotate(0deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
              e.currentTarget.style.transform = `translate(calc(${-mousePosition.x * 0.025}px + ${shapePositions.shape3.x}px), calc(${mousePosition.y * 0.025 + scrollY * 0.55}px + ${shapePositions.shape3.y}px)) rotate(0deg)`;
              e.currentTarget.style.backgroundColor = 'hsl(var(--accent) / 0.1)';
            }}
          />
          
          {/* Shape 4 - Bottom Left Liquid Circle */}
          <div 
            className="absolute bottom-32 left-1/4 w-36 h-36 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-primary/10 backdrop-blur-3xl rounded-full opacity-100 cursor-pointer hover:bg-primary/20"
            style={{ 
              transform: `translate(calc(${mousePosition.x * 0.015}px + ${shapePositions.shape4.x}px), calc(${mousePosition.y * 0.015 + scrollY * 0.4}px + ${shapePositions.shape4.y}px))`,
              opacity: Math.max(0, 1 - scrollY * 0.003),
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onClick={() => dodgeShape('shape4')}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderRadius = '65% 35% 58% 42% / 53% 50% 50% 47%';
              e.currentTarget.style.backgroundColor = 'hsl(200 70% 50% / 0.35)';
              e.currentTarget.style.transform = 'scale(1.25) rotate(-20deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderRadius = '9999px';
              e.currentTarget.style.transform = `translate(calc(${mousePosition.x * 0.015}px + ${shapePositions.shape4.x}px), calc(${mousePosition.y * 0.015 + scrollY * 0.4}px + ${shapePositions.shape4.y}px))`;
              e.currentTarget.style.backgroundColor = 'hsl(var(--primary) / 0.1)';
            }}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>


      {/* About Section */}
      <section 
        id="about" 
        ref={aboutSection.ref}
        className={`py-20 px-6 bg-secondary transition-all duration-1000 ${
          aboutSection.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-32"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
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
      <section 
        id="philosophy" 
        className="py-20 px-6"
        onMouseEnter={() => setPhilosophyVisible(true)}
        onMouseLeave={() => setPhilosophyVisible(false)}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-foreground opacity-70 transition-all duration-700 ${
            philosophyVisible ? "opacity-100 translate-y-0" : "opacity-70 translate-y-0"
          }`}>
            Design Philosophy
          </h2>
          <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 transition-all duration-700 ${
            philosophyVisible ? "opacity-100 translate-y-0" : "opacity-60 translate-y-0"
          }`}>
            I believe great design is invisible. It guides users naturally, anticipates their needs, 
            and creates delightful moments without demanding attention. Every project starts with empathy 
            and ends with impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className={`transition-all duration-700 hover:scale-110 hover:-translate-y-2 cursor-pointer ${
              philosophyVisible ? "opacity-100 scale-100" : "opacity-60 scale-95"
            }`}>
              <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary transition-colors duration-300">Research-Driven</h3>
              <p className="text-muted-foreground">
                Deep user insights inform every design decision
              </p>
            </div>
            <div className={`transition-all duration-700 hover:scale-110 hover:-translate-y-2 cursor-pointer ${
              philosophyVisible ? "opacity-100 scale-100" : "opacity-60 scale-95"
            }`}>
              <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary transition-colors duration-300">Collaborative</h3>
              <p className="text-muted-foreground">
                Working closely with cross-functional teams
              </p>
            </div>
            <div className={`transition-all duration-700 hover:scale-110 hover:-translate-y-2 cursor-pointer ${
              philosophyVisible ? "opacity-100 scale-100" : "opacity-60 scale-95"
            }`}>
              <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary transition-colors duration-300">Impact-Focused</h3>
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
