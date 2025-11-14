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
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              Philosophy
            </button>
            <Link to="/" className="text-xl font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              Portfolio
            </Link>
            <button 
              onClick={() => scrollToSection('works')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
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
