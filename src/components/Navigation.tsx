import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${id}`);
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between md:justify-center">
          {/* Logo - Always visible */}
          <Link 
            to="/" 
            className="text-xl font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-110 md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            Thian
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              {navItems.slice(0, 2).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  {item.label}
                </button>
              ))}
              <div className="w-20" /> {/* Spacer for logo */}
              {navItems.slice(2).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-foreground hover:text-primary transition-colors">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
