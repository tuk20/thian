import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CaseStudyNav from "@/components/CaseStudyNav";
import CaseStudySection from "@/components/CaseStudySection";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ImageIcon, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import lofiAsset from "@/assets/cbana-schedule-lofi.png";
import hifiAsset from "@/assets/cbana-schedule-hifi.png";
import scheduleScreensAsset from "@/assets/cbana-schedule-screens.png";
import colorsAsset from "@/assets/cbana-colors.png";
import typographyAsset from "@/assets/cbana-typography.png";
import logosAsset from "@/assets/cbana-logos.png";
import fullFlowAsset from "@/assets/cbana-full-flow.webp";

const sections = [
  { id: "overview", label: "Project Overview" },
  { id: "research", label: "Research & Discovery" },
  { id: "design", label: "Design Process" },
  { id: "solution", label: "Solution" },
  { id: "reflection", label: "Reflection" },
];

const ImageSlot = ({ label }: { label: string }) => (
  <div className="rounded-xl border border-dashed border-border bg-secondary/40 aspect-[16/9] flex flex-col items-center justify-center gap-2 text-muted-foreground">
    <ImageIcon className="w-6 h-6" aria-hidden="true" />
    <p className="text-sm px-6 text-center">{label}</p>
  </div>
);

const CaseImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure className="rounded-xl border border-border bg-secondary/40 p-6 flex flex-col items-center gap-4">
    <img src={src} alt={alt} loading="lazy" className="max-h-[560px] w-auto rounded-lg" />
    <figcaption className="text-sm text-muted-foreground text-center">{caption}</figcaption>
  </figure>
);

const CaseStudyCBANA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 md:px-8 pt-32 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          <aside className="hidden lg:block">
            <CaseStudyNav sections={sections} />
          </aside>

          <article className="max-w-4xl">
            {/* Hero Section */}
            <header className="mb-16 animate-fade-in">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm">
                  Mobile App
                </span>
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm">
                  Visual Identity
                </span>
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm">
                  UX Design
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                CBANA Conference App
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Designing a native mobile experience for the Chin Baptist Association of North America's 8th Conference
              </p>
              <a
                href="https://apps.apple.com/us/app/cbana/id6761687586"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-opacity hover:opacity-90"
              >
                View on the App Store
                <ExternalLink className="w-4 h-4" />
              </a>
            </header>

            {/* Project Overview */}
            <CaseStudySection id="overview" title="Project Overview">
              <div className="space-y-6">
                <p>
                  For CBANA's 8th Conference (July 2026), I led the visual design of the organization's first native conference app — designing a system that unified the conference theme, the CBANA brand, and the everyday needs of hundreds of attendees navigating a multi-day event. I also designed the Schedule screen, one of the app's core navigation experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Role</h4>
                    <p className="text-sm text-muted-foreground">Lead Graphic Designer / Product Designer</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Timeline</h4>
                    <p className="text-sm text-muted-foreground">March 2026 – July 2026</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Tools</h4>
                    <p className="text-sm text-muted-foreground">Figma, Adobe Illustrator, Notion</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Client</h4>
                    <p className="text-sm text-muted-foreground">Chin Baptist Association of North America (CBANA)</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Platform</h4>
                    <p className="text-sm text-muted-foreground">iOS (native) + Android</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-2">Team</h4>
                    <p className="text-sm text-muted-foreground">1 Developer, 1 Designer (me), CBANA Conference Committee</p>
                  </Card>
                </div>

                <div className="bg-secondary rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Role & Responsibilities</h3>
                  <p className="text-muted-foreground mb-4">
                    My role on this project wasn't fixed from day one — it grew based on a gap I noticed once I saw the app in progress. What started as a single-event graphic design assignment turned into a hybrid graphic design + UX design role:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Conference graphic design (original scope):</strong> designed the single-use conference theme identity — logo, color palette, typography, and core visual system for the 8th Conference, meant for print and event collateral.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Brand handoff:</strong> was originally only expected to hand off the conference color scheme to the developer, for him to approximate within the app.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>UX design (expanded scope):</strong> after seeing the app mid-development, identified a UX gap, then proposed and led the design of the Schedule screen — one of the app's primary navigation destinations — including a lightweight Figma design system and both low-fi and high-fi iterations.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Design–development collaboration:</strong> partnered directly and iteratively with the app's sole developer (who had no prior product/UX design support) to translate the Schedule screen design into the native build.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CaseStudySection>

            {/* Research & Discovery */}
            <CaseStudySection id="research" title="Research & Discovery">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">The Challenge</h3>
                  <div className="space-y-4">
                    <p>
                      I was originally brought on to design the conference's single-use event identity — a theme logo, color palette, and typography meant for the 8th Conference alone, to be used across print and promotional materials. My only expected touchpoint with the app itself was handing off the color scheme so the developer could approximate it visually.
                    </p>
                    <p>
                      By the time I handed those colors off, the developer — who was building the app solo, without any product or UX designer on the project — was already about 70% done. Seeing the app at that stage, it was clear that a lot of the interface had been built without dedicated UX input: navigation and layout decisions had been made out of necessity, not by design.
                    </p>
                    <p>
                      It came up in a casual conversation between us. He mentioned he wished he'd had a UX/product designer on the project from the start — as a one-person developer, having someone hand him thought-out designs to build from would have made his job much easier. I mentioned I had UX/product design experience, and he asked if I'd be willing to help design the Schedule page. I'd already noticed some inconsistencies in the app and places where UX hadn't been prioritized, so I was glad to jump in.
                    </p>
                    <p>
                      We talked through what a dedicated product/UX design pass could add, and where it would have the most impact given how little time was left before the conference. We agreed I'd step in to design the Schedule screen: the section every attendee would rely on most throughout the multi-day event, and one of the app's primary navigation destinations.
                    </p>
                    <p>
                      This meant working under real constraints: a feature already partially built, a solo developer with no design background to collaborate with, and a fixed conference date that couldn't move.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Goals</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Give attendees a fast, reliable way to find "what's happening now and next."</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Visually unify the conference theme, CBANA's brand identity, and the app UI into one cohesive system.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Make the schedule easy to scan across multiple days and tracks/sessions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CaseStudySection>

            {/* Design Process */}
            <CaseStudySection id="design" title="Design Process">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">1. From Print Identity to Product Conversation</h3>
                  <p>
                    The project started with conference-only deliverables: a theme logo, color palette, and typography built for print and event use. Handing off the color scheme was meant to be my last touchpoint with the app — but seeing the app mid-build turned into a conversation with the developer about what a dedicated design pass could actually add, and whether there was still time to make it count.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">2. Scoping a Fast, Focused Design Contribution</h3>
                  <div className="space-y-4">
                    <p>
                      Given the timeline, we scoped the work down to the highest-impact piece: the Schedule screen, the section attendees would depend on most throughout the multi-day event. Rather than trying to redesign the whole app, I built a lightweight Figma design system — color, type, and core components — sized specifically for this one flow, so it could integrate with what the developer had already built rather than requiring a rebuild.
                    </p>
                    <p>
                      I kept the conference's core colors to maintain that visual thread, but simplified the typography for screen legibility. The app needed to work for a wide age range of attendees, so readability on a small screen took priority over the more decorative typeface used in the print theme.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">3. Low-Fi First</h3>
                  <div className="space-y-4 mb-6">
                    <p>
                      I started with a low-fidelity wireframe of the Schedule screen for a single day of the conference — deliberately small in scope, so we could align on structure and interaction before investing in visual polish.
                    </p>
                    <p>
                      One key addition came out of this stage: my first wireframe didn't include any sense of "what's happening right now." Based on the discussion, I added a small dashboard element to the schedule showing sessions currently in progress, so attendees could orient themselves at a glance instead of scanning the full day's list every time.
                    </p>
                  </div>
                  <CaseImage
                    src={lofiAsset.url}
                    alt="Low-fidelity wireframe of the CBANA Schedule screen showing a day selector and a timeline list of sessions with image, title, time, and location"
                    caption="Low-fidelity wireframe of the Schedule screen: day switcher, session timeline, and bottom tab navigation."
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">4. Iterating to High-Fidelity</h3>
                  <div className="space-y-4">
                    <p>
                      From that first wireframe, we went through several rounds of iteration together, moving from low-fi to a high-fidelity design. Because the developer had no prior design collaborator, this stage was as much about communication as it was about pixels — checking in on what was technically feasible, and explaining design rationale so decisions weren't just handed down.
                    </p>
                    <p>
                      We went through two rounds of iteration, testing each with the conference committee for feedback. Timing was tight: I joined the project in the first week of July, and the conference ran July 23–26, so on top of designing and iterating, we were racing app store approval timelines. Moving fast without cutting corners on the design was the biggest challenge of this stage.
                    </p>
                  </div>
                  <div className="mt-6">
                    <CaseImage
                      src={hifiAsset.url}
                      alt="High-fidelity design of the CBANA Schedule screen in dark mode, with a session-in-progress dashboard card at the top, a day selector, and a timeline of sessions"
                      caption="High-fidelity Schedule screen: the in-progress dashboard sits above the day selector, so attendees see what's happening now before scanning the day."
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">5. Handoff & Implementation</h3>
                  <div className="space-y-4">
                    <p>
                      Once the high-fidelity design was finalized, I handed it off and the developer built the Schedule screen from those specs. I stayed available through implementation to answer questions and review the build against the design.
                    </p>
                    <p>
                      No adjustments were needed after handoff — the build matched the design closely. The bigger outcome of this stage was a conversation about process: how much smoother and faster the work could be with a UX/product designer involved from the start rather than joining mid-build. We're planning to collaborate more closely from the beginning for the next conference.
                    </p>
                  </div>
                </div>
              </div>
            </CaseStudySection>

            {/* Solution */}
            <CaseStudySection id="solution" title="Solution">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Design Deep Dive: The Schedule Screen</h3>
                  <p className="mb-6">
                    The Schedule screen had to hold a lot at once: multiple conference days, sessions running back to back, and an audience spanning a wide age range — many of whom would open the app for the first time on day one. The hardest part wasn't listing sessions; it was making "what's happening right now" answerable in a glance, without forcing anyone to read through a full day's agenda to get there.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="p-6 border-l-4 border-primary">
                      <h4 className="text-lg font-semibold mb-2 text-foreground">Now-in-progress dashboard</h4>
                      <p className="text-sm text-muted-foreground">
                        A compact element at the top of the schedule surfacing sessions currently underway, so attendees orient themselves immediately instead of scanning the list.
                      </p>
                    </Card>
                    <Card className="p-6 border-l-4 border-primary">
                      <h4 className="text-lg font-semibold mb-2 text-foreground">Day-by-day navigation</h4>
                      <p className="text-sm text-muted-foreground">
                        Each conference day is its own view, keeping any single screen short enough to scan rather than collapsing four days into one long list.
                      </p>
                    </Card>
                    <Card className="p-6 border-l-4 border-primary">
                      <h4 className="text-lg font-semibold mb-2 text-foreground">Scannable session rows</h4>
                      <p className="text-sm text-muted-foreground">
                        A consistent structure per session — time first, then title and details — so the eye can move down the time column without re-reading each block.
                      </p>
                    </Card>
                    <Card className="p-6 border-l-4 border-primary">
                      <h4 className="text-lg font-semibold mb-2 text-foreground">Legibility over decoration</h4>
                      <p className="text-sm text-muted-foreground">
                        Larger type sizes and higher-contrast text, chosen for a multi-generational audience reading on a phone in a crowded venue.
                      </p>
                    </Card>
                  </div>

                  <p className="mb-6 text-muted-foreground">
                    The screen went from a single-day low-fidelity wireframe through two rounds of high-fidelity iteration, each reviewed with the conference committee before handoff — the progression described in the Design Process section above.
                  </p>

                  <div className="space-y-6">
                    <CaseImage
                      src={scheduleScreensAsset.url}
                      alt="Three final CBANA Schedule screens showing day 23, 24 and 26 states, including empty and in-progress session cards"
                      caption="Final Schedule screens across all three conference days — the status card adapts between 'No Session in Progress' and a live session, while completed items are checked off down the timeline."
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Visual & Brand System</h3>
                  <div className="space-y-4 mb-6">
                    <p>
                      The app's design system carries the conference's core color palette so the digital experience reads as part of the same event as the printed and promotional materials. Type was the deliberate departure: the theme typeface was built for posters and banners, where decorative letterforms work, but on a small screen it worked against a multi-generational audience. I swapped it for a simpler, more legible family and let color and layout carry the brand instead.
                    </p>
                    <p>
                      The app icon and the conference theme logo are intentionally different. The theme logo is a single-use mark for the 8th Conference — detailed, illustrative, and built for large-format print. An app icon has to survive at a fraction of that size on a crowded home screen, so it's a simplified, higher-contrast mark that reads instantly while still belonging to the same visual family.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <CaseImage
                      src={colorsAsset.url}
                      alt="CBANA app color palette: background layers, text colors, and two brand accent ramps"
                      caption="Color system — layered dark backgrounds with a blue primary accent and a green status accent, carried over from the conference materials."
                    />
                    <CaseImage
                      src={typographyAsset.url}
                      alt="CBANA app typography scale showing SF Pro Rounded headings and Poppins body styles"
                      caption="Type scale — SF Pro Rounded for headings, Poppins for body and UI labels, chosen for legibility across a multi-generational audience."
                    />
                    <CaseImage
                      src={logosAsset.url}
                      alt="CBANA conference theme logos and simplified app icon marks"
                      caption="Conference theme marks alongside the simplified app icon built to stay legible at small sizes."
                    />
                    <ImageSlot label="App icon + splash screen" />
                    <CaseImage
                      src={fullFlowAsset.url}
                      alt="Full CBANA app screen flow: Games quiz, Schedule, CBANA TV, CBANA AI chatbot, Registration, and the App Store listing"
                      caption="The full app flow — Games, Schedule, CBANA TV, the CBANA AI chatbot, and Registration — all sharing the same dark surface, accent color and card patterns, alongside the shipped App Store listing."
                    />
                  </div>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Challenges & Trade-offs</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Joining mid-build, three weeks out.</strong> I came in during the first week of July for a conference running July 23–26, with the app already ~70% complete. That ruled out any research phase — decisions had to be made from the developer's context and the committee's feedback rather than from attendee testing.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Designing for one developer's capacity.</strong> Every decision had to be buildable by a solo developer with no design support, on top of app store approval timelines. I kept components simple and reused existing patterns rather than introducing anything that would require a rebuild.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>One screen, not the whole app.</strong> Scoping to the Schedule screen meant accepting that inconsistencies I'd noticed elsewhere in the app would ship as-is. Focusing on the highest-traffic screen was the right call for the timeline, but it left the experience uneven.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Outcome & Impact</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>The app launched in time for CBANA's 8th Conference, July 23–26, 2026, live on both iOS and Android.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>The Schedule screen shipped as designed, with no post-handoff adjustments needed between the specs and the native build.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>The collaboration led to a commitment to bring design in from the start of the next conference cycle.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CaseStudySection>

            {/* Reflection */}
            <CaseStudySection id="reflection" title="Reflection">
              <div className="space-y-6">
                <p>
                  This project reshaped how I think about scope. I came in expecting to hand off a color palette and be done — but noticing a gap, raising it, and being willing to step into an unplanned role taught me that good design work sometimes starts with a conversation, not a brief.
                </p>
                <p>
                  Working 1:1 with a developer who had no prior design collaborator also meant communication carried as much weight as the deliverables themselves. Every design decision needed a "why," not just a "what," so it could hold up once I wasn't in the room. Staying flexible — scoping down to what mattered most given the timeline, iterating quickly, and being open to feedback from someone outside a design background — made the difference between a stalled handoff and a Schedule screen that actually shipped.
                </p>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">What I'm taking forward</h3>
                  <p className="text-muted-foreground">
                    Communication and flexibility matter as much as the design itself. On the next project, I want to be in the conversation early enough that the design work shapes the build instead of catching up to it.
                  </p>
                </div>
              </div>
            </CaseStudySection>

            {/* Next Case Study */}
            <div className="mt-16 pt-8 border-t border-border">
              <Link
                to="/case-study/mind-over-matter"
                className="group flex items-center justify-between p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Next Case Study</p>
                  <p className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Mind Over Matter
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyCBANA;
