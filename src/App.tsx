import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyCBANA from "./pages/CaseStudyCBANA";
import CaseStudyNAIC from "./pages/CaseStudyNAIC";
import CaseStudyKaterIt from "./pages/CaseStudyKaterIt";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/mind-over-matter" element={<CaseStudy />} />
          <Route path="/case-study/cbana-conference-app" element={<CaseStudyCBANA />} />
          <Route path="/case-study/naic-help-page" element={<CaseStudyNAIC />} />
          <Route path="/case-study/kater-it" element={<CaseStudyKaterIt />} />
          <Route path="/resume" element={<Resume />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
