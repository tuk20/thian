import { Link } from "react-router-dom";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
            Portfolio
          </Link>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Philosophy
            </button>
            <button 
              onClick={() => scrollToSection('works')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
