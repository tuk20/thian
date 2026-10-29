import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import WorkItem from "@/components/WorkItem";
import { ArrowDown, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import portraitImage from "@/assets/portrait.jpg";
import mentalHealthImage from "@/assets/mental-health-project.jpg";
import kateritAppImage from "@/assets/katerit-app.png";
import naicLogoImage from "@/assets/naic-logo.png";
import cbanaFullFlow from "@/assets/cbana-full-flow.webp";

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 100);
  }, []);

  const works = [
    {
      industry: "Non-profit / Conference",
      title: "CBANA Conference App",
      timeline: "(Mar - Jul 2026)",
      description: "Led the visual design of CBANA's first native conference app and designed the Schedule screen, one of its core navigation experiences.",
      imageUrl: cbanaFullFlow,
      to: "/case-study/cbana-conference-app",
    },
    {
      industry: "Academic / Mental Health",
      title: "Mind Over Matter",
      timeline: "(Sept - Oct 2025)",
      description: "Investigated how users evaluate and trust digital mental health resources through observation studies and interviews.",
      imageUrl: mentalHealthImage,
      to: "/case-study/mind-over-matter",
    },
    {
      industry: "Government / Internship",
      title: "Redesigning the NAIC Help Page",
      timeline: "(Nov 2024)",
      description: "Transitioning from Web Development to UX Design to Improve Accessibility, Consistency, and User Engagement.",
      imageUrl: naicLogoImage,
      to: "/case-study/naic-help-page",
    },
    {
      industry: "Concept Project / Food",
      title: "Kater.it",
      timeline: "(Feb 2024)",
      description: "A mobile-first catering discovery platform designed to connect customers with local caterers and support small businesses.",
      imageUrl: kateritAppImage,
      to: "/case-study/kater-it",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />

      {/* Title page */}
      <section className="ruled relative px-4 pb-16 pt-32 sm:px-6 md:pt-36">
        <div className="container mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="stamp mb-6 -rotate-2">Vol. 2026 · Portfolio</p>
            <h1 className="font-serif text-6xl font-extrabold leading-[0.95] tracking-tight md:text-8xl">Thian Uk</h1>
            <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-muted-foreground md:text-3xl">
              A UX designer who <span className="whiteout text-foreground">erases friction</span> and sketches
              products people can actually use.
            </p>
            <p className="mt-4 font-typewriter text-sm text-graphite">
              Product · Accessibility · Research — M.S. HCI, DePaul University
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#works" className="eraser-btn bg-primary text-primary-foreground">
                Open the work <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link to="/resume" className="eraser-btn bg-card text-foreground">
                <FileText className="h-4 w-4" aria-hidden="true" /> Resume
              </Link>
            </div>
          </div>
          <figure className="paper-card relative mx-auto w-64 rotate-3 p-3 pb-10 md:w-full md:max-w-xs">
            <span aria-hidden="true" className="absolute -top-3 left-6 h-6 w-20 -rotate-6 bg-eraser/60" />
            <img src={portraitImage} alt="Portrait of Thian Uk" className="aspect-[4/5] w-full object-cover sepia-[.15]" />
            <figcaption className="absolute bottom-2 left-0 right-0 text-center font-typewriter text-xs text-muted-foreground">
              fig. 1 — the author
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="scroll-mt-16 border-y border-foreground/80 bg-secondary px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-2 font-typewriter text-sm uppercase tracking-widest text-primary">Chapter I</p>
              <h2 className="font-serif text-4xl font-extrabold md:text-6xl">Selected Work</h2>
            </div>
            <p className="max-w-sm font-serif italic text-muted-foreground md:text-right">
              Research and product design grounded in real people, clear decisions, and measurable outcomes.
            </p>
          </div>
          <div className="pencil-rule" />
          {works.map((work, i) => (
            <div key={work.to}>
              <WorkItem {...work} index={i} />
              {i < works.length - 1 && <div className="pencil-rule" />}
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="ruled scroll-mt-16 px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-2 font-typewriter text-sm uppercase tracking-widest text-primary">Chapter II</p>
          <h2 className="mb-8 font-serif text-4xl font-extrabold md:text-6xl">About the Author</h2>
          <p className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
            <span className="float-left mr-3 font-serif text-7xl font-extrabold leading-[0.8] text-primary">M</span>
            y path into UX started with curiosity. I taught myself design through YouTube, spent hours practicing in
            Figma, and turned that passion into a career. That self-taught start shaped how I work: I stay curious,
            focus on people, and break tough problems into simple, usable experiences. I recently earned my{" "}
            <span className="whiteout">master's in human-computer interaction</span>, deepening that foundation.
          </p>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              ["Research-Driven", "Deep user insights inform every design decision."],
              ["Collaborative", "Working closely with cross-functional teams."],
              ["Impact-Focused", "Measuring success through user outcomes."],
            ].map(([t, d], i) => (
              <div key={t} className={`paper-card p-6 ${i === 1 ? "rotate-1" : "-rotate-1"}`}>
                <p className="font-typewriter text-xs text-primary">Note {i + 1}</p>
                <h3 className="mt-2 font-serif text-2xl font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 border-t border-foreground/80 bg-secondary px-6 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="mb-2 font-typewriter text-sm uppercase tracking-widest text-primary">Epilogue</p>
          <h2 className="mb-6 font-serif text-4xl font-extrabold md:text-6xl">Let's write the next chapter</h2>
          <p className="mb-10 text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:t.lianuk7@gmail.com" className="eraser-btn bg-primary text-primary-foreground">Get in touch</a>
            <Link to="/resume" className="eraser-btn bg-card text-foreground">
              <FileText className="h-4 w-4" aria-hidden="true" /> View resume
            </Link>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10">
        <p className="text-center font-typewriter text-sm text-muted-foreground">
          © 2026 Thian Uk. Designed with purpose — and a well-worn pencil.
        </p>
      </footer>
    </div>
  );
};

export default Index;
