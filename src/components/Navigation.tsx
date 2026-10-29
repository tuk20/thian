import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (id: string) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const linkCls =
    "font-typewriter text-sm uppercase tracking-widest text-muted-foreground hover:text-primary underline-offset-8 decoration-wavy hover:underline";

  const items = (
    <>
      <button onClick={() => goTo("works")} className={linkCls}>Work</button>
      <button onClick={() => goTo("about")} className={linkCls}>About</button>
      <button onClick={() => goTo("contact")} className={linkCls}>Contact</button>
      <Link to="/resume" onClick={() => setIsOpen(false)} className="eraser-btn bg-card px-4 py-2 text-xs text-foreground">
        <FileText className="h-4 w-4" aria-hidden="true" /> Resume
      </Link>
    </>
  );

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-foreground/80 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-serif text-2xl font-extrabold tracking-tight text-foreground hover:text-primary">
          THIAN<span className="text-primary">.</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">{items}</div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 text-foreground md:hidden" aria-label="Open menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background">
            <nav className="mt-10 flex flex-col items-start gap-6">{items}</nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
