import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  ChevronRight,
  Code2,
  Cpu,
  MapPin,
  Menu,
  Music2,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  campusFestEvents,
  campusFestGallery,
  campusFestSchedule,
  campusFestStats,
  type CampusFestEvent,
} from "@/lib/campusfest";
import heroPhoto from "@/assets/campusfest-hero.jpg";

const eventIcons = [Code2, Cpu, Sparkles, Music2, Users, Camera];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampusFest 2026 | Celebrate. Compete. Create." },
      {
        name: "description",
        content:
          "Join CampusFest 2026, December 15–17, for three days of college technology, culture, competitions and unforgettable memories.",
      },
      { property: "og:title", content: "CampusFest 2026 | Celebrate. Compete. Create." },
      {
        property: "og:description",
        content:
          "Three days of technology, creativity, music and college festival events. December 15–17, 2026 at College Campus.",
      },
    ],
  }),
  component: CampusFestPage,
});

function CampusFestPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState<CampusFestEvent | null>(null);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  function handleRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSelectedEvent("");
    window.alert("Registration submitted successfully! 🎉");
  }

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setMessageSent(true);
  }

  function chooseEvent(eventName: string) {
    setSelectedEvent(eventName);
    setActiveEvent(null);
  }

  const navigation = (
    <>
      <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
      <a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a>
      <a href="#schedule" onClick={() => setMobileMenuOpen(false)}>Schedule</a>
      <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
      <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
    </>
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-paper/10 bg-ink/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#home" aria-label="CampusFest 2026 home" className="shrink-0 font-display text-xl leading-none text-paper">
            CAMPUSFEST<span className="text-sky">/26</span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm text-paper/70 md:flex [&_a]:transition-colors [&_a:hover]:text-sky">
            {navigation}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button asChild size="sm" className="rounded-full bg-sky px-4 text-ink shadow-none transition-transform hover:-translate-y-0.5 hover:bg-sky-end">
              <a href="#register">Register now</a>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="text-paper hover:bg-paper/10 hover:text-paper md:hidden"
            >
              {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="grid gap-1 border-t border-paper/10 px-5 py-3 text-sm text-paper/80 md:hidden [&_a]:rounded-md [&_a]:px-3 [&_a]:py-2 [&_a:hover]:bg-paper/5 [&_a:hover]:text-sky">
            {navigation}
          </nav>
        )}
      </header>

      <section id="home" className="relative isolate scroll-mt-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-violet/20 via-ink to-sky/10" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-20">
          <div className="relative z-10">
            <div className="festival-pill">
              <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-sky animate-pulse" />
              <CalendarDays aria-hidden="true" className="size-4 shrink-0" />
              15–17 December 2026
            </div>
            <h1 className="mt-6 font-display text-6xl uppercase leading-[0.9] text-paper sm:text-7xl lg:text-8xl">
              CampusFest <span className="text-sky">2026</span>
            </h1>
            <p className="mt-5 font-display text-2xl uppercase leading-tight text-paper sm:text-3xl">
              Celebrate. Compete. Create.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
              Join us for an exciting college festival filled with technology, creativity, music, competitions and unforgettable memories.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-paper/75">
              <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-sky" />M.S Bidve Engineering College Campus


              </span>
              <span className="inline-flex items-center gap-2"><Users aria-hidden="true" className="size-4 text-sky" />Open for All Students</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="festival-gradient-button rounded-full px-6 text-ink shadow-none">
                <a href="#events">Explore events <ArrowRight aria-hidden="true" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-paper/25 bg-paper/5 px-6 text-paper shadow-none hover:bg-paper/10 hover:text-paper">
                <a href="#register">Register now <ArrowDown aria-hidden="true" /></a>
              </Button>
            </div>

            <a href="#events" className="mt-9 inline-flex items-center gap-2 text-xs font-medium uppercase text-paper/45 transition-colors hover:text-sky">
              A celebration of student talent <ChevronRight aria-hidden="true" className="size-3" />
            </a>
          </div>

          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-xl bg-paper/5 p-2 ring-1 ring-paper/15 backdrop-blur-sm sm:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img src={heroPhoto} alt="Students celebrating together at a College Campus evening concert" width={1408} height={1056} fetchPriority="high" className="size-full object-cover" />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/75 via-transparent to-ink/10" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6">
                  <div>
                    <span className="text-xs font-medium uppercase text-paper/75">Three days. Every kind of talent.</span>
                    <p className="mt-1 font-display text-2xl uppercase leading-tight text-paper sm:text-3xl">This is our moment.</p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sky text-ink" aria-hidden="true"><Sparkles className="size-5" /></span>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute -bottom-4 -left-3 -z-10 h-24 w-24 rounded-xl border border-violet/35 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32" />
            <div aria-hidden="true" className="absolute -right-3 -top-3 -z-10 h-16 w-20 rounded-lg border border-sky/35 sm:-right-5 sm:-top-5 sm:h-24 sm:w-28" />
          </div>
        </div>
      </section>

      <section id="events" className="scroll-mt-20 border-t border-paper/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
            <div>
              <p className="festival-eyebrow">Find your thing</p>
              <h2 className="festival-heading mt-2">Explore our events</h2>
            </div>
            <a href="#schedule" className="inline-flex items-center gap-2 text-sm font-semibold text-sky transition-colors hover:text-sky-end">
              See the schedule <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {campusFestEvents.map((event, index) => {
              const EventIcon = eventIcons[index] ?? Sparkles;
              return (
                <article key={event.name} className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl bg-paper/[0.045] ring-1 ring-paper/10 transition duration-300 hover:-translate-y-1 hover:bg-paper/[0.075] hover:ring-sky/35">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink/60">
                    <img src={event.image} alt={event.imageAlt} width={800} height={500} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.045]" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/75 px-3 py-1.5 text-xs font-medium text-paper backdrop-blur-sm">
                      <EventIcon aria-hidden="true" className="size-3.5 text-sky" />{event.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-sky"><CalendarDays aria-hidden="true" className="size-3.5" />{event.date}</div>
                    <h3 className="mt-2 text-xl font-semibold text-paper">{event.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/65">{event.description}</p>
                    <Button type="button" variant="ghost" onClick={() => setActiveEvent(event)} className="mt-4 h-auto min-h-10 justify-between rounded-lg px-0 text-sm font-semibold text-paper hover:bg-transparent hover:text-sky">
                      View details <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="schedule" className="scroll-mt-20 border-y border-paper/10 bg-paper/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8 sm:mb-10">
            <p className="festival-eyebrow">Mark your calendar</p>
            <h2 className="festival-heading mt-2">Three days, full of life.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {campusFestSchedule.map((day, dayIndex) => (
              <section key={day.name} aria-labelledby={`schedule-${dayIndex}`} className="rounded-xl bg-ink/55 p-5 ring-1 ring-paper/10 sm:p-6">
                <div className="flex items-center justify-between gap-3 border-b border-paper/10 pb-4">
                  <div>
                    <h3 id={`schedule-${dayIndex}`} className="font-display text-2xl uppercase text-sky">{day.name}</h3>
                    <p className="mt-1 text-xs text-paper/50">December {day.date}, 2026</p>
                  </div>
                  <span className="grid size-10 place-items-center rounded-lg bg-paper/5 text-sky" aria-hidden="true"><CalendarDays className="size-5" /></span>
                </div>
                <ol className="mt-2 divide-y divide-paper/[0.08]">
                  {day.items.map((item) => (
                    <li key={item.time} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 py-3.5">
                      <time className="text-xs font-medium tabular-nums text-paper/45">{item.time}</time>
                      <span className="text-sm font-medium text-paper/85">{item.name}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-b border-paper/10">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <p className="festival-eyebrow">A campus tradition</p>
            <h2 className="festival-heading mt-2 max-w-xl">Made of many moments. Shared by everyone.</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70">
              CampusFest is our college’s annual celebration of technology, creativity, culture and student talent. It brings students together to participate, compete, learn and create unforgettable memories.
            </p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-paper/10 border-y border-paper/10 py-5">
            {campusFestStats.map((stat) => (
              <div key={stat.label} className="min-w-0 px-2 text-center sm:px-4">
                <p className="font-display text-3xl leading-tight text-sky sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-paper/55 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="scroll-mt-20 border-b border-paper/10 bg-paper/[0.025]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="text-center">
            <p className="festival-eyebrow">Your festival starts here</p>
            <h2 className="festival-heading mt-2">Save your spot.</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-paper/60">Join us on campus, December 15–17, 2026.</p>
          </div>

          <form onSubmit={handleRegistration} className="mt-8 grid gap-4 rounded-xl bg-paper/[0.045] p-5 ring-1 ring-paper/10 sm:grid-cols-2 sm:p-7">
            <label className="grid gap-1.5 text-sm font-medium text-paper/75" htmlFor="registration-name">Full Name
              <input id="registration-name" name="name" autoComplete="name" placeholder="Your full name" required className="festival-input" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-paper/75" htmlFor="registration-email">Email
              <input id="registration-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required className="festival-input" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-paper/75" htmlFor="registration-phone">Phone Number
              <input id="registration-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required className="festival-input" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-paper/75" htmlFor="registration-department">Department
              <input id="registration-department" name="department" placeholder="Your department" required className="festival-input" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-paper/75" htmlFor="registration-year">Year
              <select id="registration-year" name="year" defaultValue="" required className="festival-input">
                <option value="" disabled>Select your year</option>
                <option>1st year</option><option>2nd year</option><option>3rd year</option><option>4th year</option><option>Other</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-paper/75" htmlFor="registration-event">Select Event
              <select id="registration-event" name="event" value={selectedEvent} onChange={(event) => setSelectedEvent(event.target.value)} required className="festival-input">
                <option value="" disabled>Choose an event</option>
                {campusFestEvents.map((event) => <option key={event.name} value={event.name}>{event.name}</option>)}
              </select>
            </label>
            <Button type="submit" size="lg" className="festival-gradient-button mt-2 w-full rounded-full text-ink shadow-none sm:col-span-2">
              Register now <ArrowRight aria-hidden="true" />
            </Button>
            <p className="text-center text-xs text-paper/45 sm:col-span-2">Registration is a demonstration only. Your details are not sent or stored.</p>
          </form>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8">
            <p className="festival-eyebrow">Little moments, big memories</p>
            <h2 className="festival-heading mt-2">A taste of the fest.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {campusFestGallery.map((image) => (
              <figure key={image.label} className="group relative aspect-[4/3] min-w-0 overflow-hidden rounded-lg bg-paper/5 ring-1 ring-paper/10">
                <img src={image.image} alt={image.alt} width={600} height={450} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/5 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-paper sm:p-4">{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-y border-paper/10 bg-paper/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="festival-eyebrow">We’d love to hear from you</p>
            <h2 className="festival-heading mt-2">Talk to the team.</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/60">Have a question about CampusFest? Send a note to the festival team.</p>
            <div className="mt-7 space-y-4 text-sm">
              <div className="flex items-start gap-3"><MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sky" /><div><p className="font-medium text-paper">M.S Bidve Engineering College Campus</p></div></div>
              <div className="flex items-start gap-3"><CalendarDays aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sky" /><div><p className="font-medium text-paper">CampusFest 2026</p><p className="mt-1 text-paper/55">Celebrate. Compete. Create.</p></div></div>
              <div className="flex items-start gap-3"><ArrowUpRight aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sky" /><a className="font-medium text-paper transition-colors hover:text-sky" href="mailto:msbecl@gmail.com">msbecl@gmail.com</a></div>
              <div className="flex items-start gap-3"><span aria-hidden="true" className="mt-0.5 grid size-4 shrink-0 place-items-center text-xs text-sky">☎</span><p className="font-medium text-paper">+91 8830848612</p></div>
            </div>
          </div>

          <form onSubmit={handleContact} onChange={() => setMessageSent(false)} className="grid gap-4 rounded-xl bg-paper/[0.045] p-5 ring-1 ring-paper/10 sm:p-7">
            <label className="grid gap-1.5 text-sm font-medium text-paper/75" htmlFor="contact-name">Name
              <input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required className="festival-input" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-paper/75" htmlFor="contact-email">Email
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required className="festival-input" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-paper/75" htmlFor="contact-message">Message
              <textarea id="contact-message" name="message" rows={4} placeholder="How can we help?" required className="festival-input min-h-28 resize-y" />
            </label>
            <Button type="submit" size="lg" className="festival-gradient-button mt-1 justify-self-start rounded-full px-6 text-ink shadow-none">
              Send message <ArrowRight aria-hidden="true" />
            </Button>
            {messageSent && <p role="status" aria-live="polite" className="text-sm text-sky">Thanks for your message! It was submitted successfully.</p>}
            <p className="text-xs text-paper/45">This demonstration form does not send or store messages.</p>
          </form>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-11">
        <div className="flex flex-col gap-6 border-t border-paper/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="#home" className="font-display text-xl text-paper">CAMPUSFEST<span className="text-sky">/26</span></a>
            <p className="mt-1 text-xs text-paper/50">Celebrate. Compete. Create.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper/55 [&_a:hover]:text-sky">
            <a href="#home">Home</a><a href="#events">Events</a><a href="#schedule">Schedule</a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
          <p className="text-xs text-paper/45">© 2026 CampusFest. All Rights Reserved.</p>
        </div>
      </footer>

      {activeEvent && (
        <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-ink/85 p-4 backdrop-blur-sm" onClick={() => setActiveEvent(null)}>
          <section role="dialog" aria-modal="true" aria-labelledby="event-dialog-title" onClick={(event) => event.stopPropagation()} className="relative w-full max-w-lg overflow-hidden rounded-xl bg-ink ring-1 ring-paper/20 shadow-2xl">
            <img src={activeEvent.image} alt={activeEvent.imageAlt} width={800} height={500} className="aspect-[16/9] w-full object-cover" />
            <div className="p-5 sm:p-7">
              <p className="festival-eyebrow">{activeEvent.category} · {activeEvent.date}</p>
              <h2 id="event-dialog-title" className="mt-2 font-display text-3xl uppercase text-paper">{activeEvent.name}</h2>
              <p className="mt-3 leading-relaxed text-paper/70">{activeEvent.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button type="button" onClick={() => { chooseEvent(activeEvent.name); document.getElementById("register")?.scrollIntoView({ behavior: "smooth" }); }} className="festival-gradient-button rounded-full text-ink shadow-none">
                  Register for this event <ArrowRight aria-hidden="true" />
                </Button>
                <Button type="button" variant="ghost" onClick={() => setActiveEvent(null)} className="rounded-full text-paper hover:bg-paper/10 hover:text-paper">Close</Button>
              </div>
            </div>
            <Button type="button" variant="ghost" size="icon" onClick={() => setActiveEvent(null)} aria-label="Close event details" className="absolute right-3 top-3 rounded-full bg-ink/75 text-paper hover:bg-ink hover:text-paper">
              <X aria-hidden="true" />
            </Button>
          </section>
        </div>
      )}
    </main>
  );
}
