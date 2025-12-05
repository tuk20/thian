import { useEffect, useState } from "react";

const defaultSections = [
  { id: "overview", label: "Executive Summary" },
  { id: "research", label: "Research & Discovery" },
  { id: "findings", label: "Key Findings" },
  { id: "personas", label: "Personas" },
  { id: "design", label: "Design Implications" },
  { id: "reflection", label: "Reflection & Future Work" },
];

interface CaseStudyNavProps {
  sections?: { id: string; label: string }[];
}

const CaseStudyNav = ({ sections = defaultSections }: CaseStudyNavProps) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className="sticky top-24 h-fit">
      <ul className="space-y-2">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={`text-left w-full px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === id
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CaseStudyNav;