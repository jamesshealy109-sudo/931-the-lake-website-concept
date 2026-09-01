'use client';

import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Cake,
  CalendarDays,
  Check,
  ChevronRight,
  Heart,
  Mail,
  MapPin,
  Menu,
  Mic2,
  Phone,
  Play,
  Radio,
  Sparkles,
  Trophy,
  Users,
  Waves,
  X,
} from 'lucide-react';
import { FormEvent, useState } from 'react';

const LIVE_URL = 'https://rdo.to/WZMJ';
const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? '';
const asset = (path: string) => `${ASSET_PREFIX}${path}`;

const hosts = [
  {
    name: 'Brent Johnson',
    role: 'Mornings · Program Director',
    image: asset('/images/brent.jpg'),
    accent: 'bg-[#f7ce46]',
    copy: 'Start your day with the songs, laughs, and local conversations that feel like home.',
  },
  {
    name: 'Michelle Renew',
    role: 'Middays · Creative Services',
    image: asset('/images/michelle.jpg'),
    accent: 'bg-[#8de8f2]',
    copy: 'The perfect soundtrack for the middle of your workday—familiar, upbeat, and easy.',
  },
  {
    name: 'Tony Clyburn',
    role: 'Afternoons · Hometown Heroes',
    image: asset('/images/tony.jpg'),
    accent: 'bg-[#ef5a47]',
    copy: 'Tony brings Columbia home with personality, heart, and the stories behind our community.',
  },
];

const music = [
  { artist: 'Fleetwood Mac', song: 'Everywhere', color: 'bg-[#f7ce46]' },
  { artist: 'Earth, Wind & Fire', song: 'September', color: 'bg-[#ef5a47]' },
  { artist: 'Hall & Oates', song: 'You Make My Dreams', color: 'bg-[#8de8f2]' },
  { artist: 'Elton John', song: 'I’m Still Standing', color: 'bg-[#d8b7ff]' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSignedUp(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f0e7] text-[#082d42]">
      <header className="relative z-40 border-b border-[#082d42]/10 bg-white">
        <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="93.1 The Lake home" className="shrink-0">
            <Image src={asset('/images/logo.png')} alt="93.1 The Lake" width={235} height={60} priority className="h-auto w-[180px] sm:w-[220px]" />
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-extrabold uppercase tracking-[0.11em] lg:flex">
            <a href="#shows" className="transition hover:text-[#0d83b2]">On Air</a>
            <a href="#community" className="transition hover:text-[#0d83b2]">Community</a>
            <a href="#events" className="transition hover:text-[#0d83b2]">Events</a>
            <a href="#win" className="transition hover:text-[#0d83b2]">Win</a>
            <a href="#contact" className="transition hover:text-[#0d83b2]">Connect</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={LIVE_URL} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[#f7ce46] px-5 py-3 text-sm font-black uppercase tracking-[0.1em] transition hover:-translate-y-0.5 hover:shadow-lg sm:flex">
              <Play className="h-4 w-4 fill-current" /> Listen live
            </a>
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-full border border-[#082d42]/20 lg:hidden"><Menu /></button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#082d42] p-6 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <Image src={asset('/images/logo.png')} alt="93.1 The Lake" width={190} height={49} className="h-auto w-44 brightness-0 invert" />
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="grid h-12 w-12 place-items-center rounded-full border border-white/30"><X /></button>
          </div>
          <nav className="mt-16 grid gap-2 text-4xl font-black uppercase tracking-[-.04em]">
            {[
              ['On Air', '#shows'],
              ['Community', '#community'],
              ['Events', '#events'],
              ['Win', '#win'],
              ['Connect', '#contact'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-white/15 py-4">{label}<ArrowUpRight className="text-[#f7ce46]" /></a>
            ))}
          </nav>
          <a href={LIVE_URL} target="_blank" rel="noreferrer" className="mt-12 flex items-center justify-center gap-3 rounded-full bg-[#f7ce46] px-6 py-4 font-black uppercase tracking-[.12em] text-[#082d42]"><Play className="h-5 w-5 fill-current" /> Listen live</a>
        </div>
      )}

      <section id="top" className="relative isolate min-h-[720px] overflow-hidden bg-[#0d668a] text-white">
        <Image src={asset('/images/lake-brand.jpg')} alt="Lake Murray under a bright Carolina sky" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,29,44,.94)_0%,rgba(3,43,64,.74)_48%,rgba(4,79,105,.14)_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative mx-auto flex min-h-[720px] max-w-[1440px] items-center px-5 pb-28 pt-16 sm:px-8 lg:px-12">
          <div className="max-w-5xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-[#8de8f2] sm:text-sm"><Radio className="h-5 w-5" /> Live & local from the Midlands</div>
            <h1 className="max-w-5xl text-[clamp(4.2rem,9.7vw,9rem)] font-black uppercase leading-[.79] tracking-[-.065em]">
              Your favorites.<br/><span className="text-[#f7ce46]">Your Lake.</span>
            </h1>
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center">
              <a href={LIVE_URL} target="_blank" rel="noreferrer" className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-base font-black uppercase tracking-[0.12em] text-[#082d42] transition hover:-translate-y-1 hover:shadow-2xl">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ef5a47] text-white"><Play className="h-4 w-4 fill-current" /></span>
                Listen live <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <p className="max-w-md text-base leading-relaxed text-white/80 sm:text-lg">The songs you know by heart, the people you know by name, and everything happening around Columbia.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-[#082d42]/92 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1440px] items-center gap-5 px-5 py-4 sm:px-8 lg:px-12">
            <a href={LIVE_URL} target="_blank" rel="noreferrer" aria-label="Play 93.1 The Lake" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f7ce46] text-[#082d42] transition hover:scale-105"><Play className="ml-0.5 h-5 w-5 fill-current" /></a>
            <div className="min-w-0 flex-1"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#8de8f2]">93.1 The Lake · Live</p><p className="truncate text-base font-bold">All-Time Favorites for Columbia</p></div>
            <div className="hidden items-end gap-1 md:flex" aria-hidden="true">{[18, 28, 14, 34, 22, 38, 19, 30, 16, 25].map((h, i) => <span key={i} className="w-1 rounded-full bg-[#8de8f2]" style={{ height: h }} />)}</div>
            <span className="hidden text-xs font-bold uppercase tracking-[.18em] text-white/55 sm:block">WZMJ-FM</span>
          </div>
        </div>
      </section>

      <section className="bg-[#f7ce46]">
        <div className="mx-auto grid max-w-[1440px] divide-y divide-[#082d42]/20 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
          {[
            { icon: Trophy, title: 'Win on The Lake', copy: 'See current giveaways', href: '#win' },
            { icon: CalendarDays, title: 'Around Columbia', copy: 'Find something to do', href: '#events' },
            { icon: Cake, title: 'Birthday shoutout', copy: 'Make their day', href: 'mailto:Brent@931thelakefm.com' },
          ].map(({ icon: Icon, title, copy, href }) => (
            <a key={title} href={href} className="group flex items-center gap-4 py-6 sm:px-6 first:pl-0 last:pr-0">
              <Icon className="h-7 w-7 shrink-0" />
              <div className="flex-1"><h2 className="font-black uppercase tracking-[.04em]">{title}</h2><p className="text-sm text-[#082d42]/65">{copy}</p></div>
              <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </section>

      <section id="shows" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="mb-3 text-xs font-black uppercase tracking-[.22em] text-[#0d83b2]">Meet your on-air neighbors</p><h2 className="text-5xl font-black uppercase leading-[.85] tracking-[-.055em] sm:text-7xl">Good company.<br/>All day long.</h2></div>
            <p className="max-w-md text-lg leading-relaxed text-[#436272]">Real people. Real Columbia. And a music mix built for wherever your day takes you.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {hosts.map((host, index) => (
              <article key={host.name} className="group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_70px_rgba(8,45,66,.08)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={host.image} alt={host.name} fill className={`object-cover transition duration-700 group-hover:scale-105 ${index === 1 ? 'object-[center_32%]' : 'object-center'}`} />
                  <div className={`absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full ${host.accent}`}><Mic2 className="h-5 w-5" /></div>
                </div>
                <div className="p-7">
                  <p className="text-[11px] font-black uppercase tracking-[.16em] text-[#0d83b2]">{host.role}</p>
                  <h3 className="mt-2 text-3xl font-black uppercase tracking-[-.035em]">{host.name}</h3>
                  <p className="mt-4 leading-relaxed text-[#436272]">{host.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#082d42] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="mb-4 text-xs font-black uppercase tracking-[.22em] text-[#8de8f2]">The soundtrack you already love</p><h2 className="text-5xl font-black uppercase leading-[.85] tracking-[-.055em] sm:text-7xl">Press play.<br/>Feel good.</h2><a href="https://931thelakefm.com/whats-that-song/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-[#f7ce46] pb-2 font-black uppercase tracking-[.1em] text-[#f7ce46]">What’s that song? <ArrowUpRight className="h-4 w-4" /></a></div>
            <div className="grid gap-3">
              {music.map((track, index) => (
                <div key={track.song} className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[.06] p-4 transition hover:bg-white/[.11] sm:p-5">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${track.color} text-[#082d42]`}><Play className="h-4 w-4 fill-current" /></div>
                  <span className="w-6 text-sm font-bold text-white/35">0{index + 1}</span>
                  <div className="min-w-0 flex-1"><p className="truncate text-lg font-black">{track.song}</p><p className="text-sm text-white/55">{track.artist}</p></div>
                  <Waves className="hidden h-6 w-6 text-[#8de8f2] sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="relative overflow-hidden bg-[#0d83b2] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[70px] border-white/10" />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem]">
            <Image src={asset('/images/hometown-heroes.jpg')} alt="93.1 The Lake Hometown Heroes" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082d42]/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between"><div><p className="text-xs font-black uppercase tracking-[.18em] text-[#f7ce46]">Weekdays</p><p className="mt-1 text-2xl font-black">6:10 · 9:10 · 1:10 · 6:10</p></div><Heart className="h-9 w-9 fill-[#ef5a47] text-[#ef5a47]" /></div>
          </div>
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[.22em] text-[#8de8f2]"><Users className="h-5 w-5" /> More than a radio station</p>
            <h2 className="text-5xl font-black uppercase leading-[.85] tracking-[-.055em] sm:text-7xl">Meet the people who make us proud.</h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">Hometown Heroes recognizes the police, firefighters, EMS, healthcare workers, volunteers, and neighbors whose service makes the Midlands better.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://931thelakefm.com/hometown-heroes/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#f7ce46] px-6 py-4 font-black uppercase tracking-[.1em] text-[#082d42]">Meet our heroes <ArrowRight className="h-5 w-5" /></a>
              <a href="https://931thelakefm.com/hometown-heroes/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-4 font-black uppercase tracking-[.1em]">Nominate someone</a>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex min-h-[460px] flex-col justify-between rounded-[2rem] bg-[#f7ce46] p-8 sm:p-12">
              <div><p className="text-xs font-black uppercase tracking-[.2em]">Columbia calendar</p><h2 className="mt-4 text-5xl font-black uppercase leading-[.86] tracking-[-.055em] sm:text-7xl">Go make a memory.</h2></div>
              <div><p className="mb-7 max-w-md text-lg leading-relaxed text-[#082d42]/70">Concerts, festivals, family days, and the kind of local happenings you’ll talk about Monday morning.</p><a href="https://931thelakefm.com/calendar/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#082d42] px-6 py-4 font-black uppercase tracking-[.1em] text-white">See the calendar <ArrowUpRight className="h-5 w-5" /></a></div>
            </div>
            <div id="win" className="relative flex min-h-[460px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#ef5a47] p-8 text-white sm:p-12">
              <Sparkles className="absolute -right-10 -top-10 h-64 w-64 text-white/10" strokeWidth={1} />
              <div className="relative"><p className="text-xs font-black uppercase tracking-[.2em]">Lake perks</p><h2 className="mt-4 text-5xl font-black uppercase leading-[.86] tracking-[-.055em] sm:text-7xl">Your next win starts here.</h2></div>
              <div className="relative"><p className="mb-7 max-w-md text-lg leading-relaxed text-white/80">Local date nights, concert tickets, unforgettable experiences—listen in and get in on the fun.</p><a href="https://931thelakefm.com/contest/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-black uppercase tracking-[.1em] text-[#082d42]">See current giveaways <Trophy className="h-5 w-5" /></a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_80px_rgba(8,45,66,.08)] lg:grid-cols-[.8fr_1.2fr]">
          <div className="bg-[#dce8e7] p-8 sm:p-12"><Cake className="h-12 w-12 text-[#ef5a47]" /><h2 className="mt-8 text-4xl font-black uppercase leading-[.9] tracking-[-.04em] sm:text-5xl">Put their birthday on the radio.</h2><p className="mt-6 leading-relaxed text-[#436272]">Send Brent the details or call the studio weekday mornings. A little shoutout can make a very big day.</p></div>
          <div className="grid content-center gap-4 p-8 sm:p-12">
            <a href="mailto:Brent@931thelakefm.com" className="group flex items-center gap-5 rounded-2xl border border-[#082d42]/10 p-5 transition hover:border-[#0d83b2]"><Mail className="h-6 w-6 text-[#0d83b2]" /><div className="flex-1"><p className="text-xs font-black uppercase tracking-[.16em] text-[#436272]">Email Brent</p><p className="font-bold">Brent@931thelakefm.com</p></div><ChevronRight className="transition group-hover:translate-x-1" /></a>
            <a href="tel:8037225093" className="group flex items-center gap-5 rounded-2xl border border-[#082d42]/10 p-5 transition hover:border-[#0d83b2]"><Phone className="h-6 w-6 text-[#0d83b2]" /><div className="flex-1"><p className="text-xs font-black uppercase tracking-[.16em] text-[#436272]">Studio line</p><p className="font-bold">803-722-5093</p></div><ChevronRight className="transition group-hover:translate-x-1" /></a>
          </div>
        </div>
      </section>

      <section className="bg-[#8de8f2] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2 lg:items-center">
          <div><p className="text-xs font-black uppercase tracking-[.2em]">Stay in the loop</p><h2 className="mt-3 text-4xl font-black uppercase leading-[.9] tracking-[-.04em] sm:text-6xl">Lake news, without the noise.</h2></div>
          {signedUp ? (
            <div role="status" className="flex items-center gap-4 rounded-2xl bg-white p-6"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#f7ce46]"><Check /></span><div><p className="font-black uppercase">You’re on the list.</p><p className="text-sm text-[#436272]">Good stuff is headed your way.</p></div></div>
          ) : (
            <form onSubmit={submitNewsletter} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className="min-h-14 flex-1 rounded-full border-0 bg-white px-6 text-base outline-none ring-[#0d83b2] placeholder:text-[#436272]/60 focus:ring-2" />
              <button className="min-h-14 rounded-full bg-[#082d42] px-7 font-black uppercase tracking-[.1em] text-white">Join The Lake list</button>
            </form>
          )}
        </div>
      </section>

      <footer id="contact" className="bg-[#061f2e] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1fr_auto_auto]">
            <div><Image src={asset('/images/logo.png')} alt="93.1 The Lake" width={250} height={64} className="h-auto w-56 brightness-0 invert" /><p className="mt-5 max-w-md text-white/55">Columbia’s locally owned home for all-time favorites, familiar voices, and the community we share.</p></div>
            <div><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-[#8de8f2]">Get in touch</p><div className="grid gap-3 text-sm text-white/70"><a href="tel:8037536800" className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" /> 803-753-6800</a><a href="mailto:info@midlandsmediagroup.com" className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> info@midlandsmediagroup.com</a><span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 2412 Main Street, Columbia, SC</span></div></div>
            <div><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-[#8de8f2]">Follow along</p><a href="https://www.facebook.com/931thelake/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm font-black uppercase tracking-[.1em] hover:border-[#8de8f2]"><span className="grid h-6 w-6 place-items-center rounded-full bg-white font-black text-[#061f2e]">f</span> Facebook</a></div>
          </div>
          <div className="flex flex-col gap-6 pt-7 text-xs text-white/40 lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 93.1 The Lake · WZMJ-FM · Midlands Media Group</p>
            <div className="flex flex-wrap items-center gap-5"><a href="https://931thelakefm.com/contest-rules/" target="_blank" rel="noreferrer" className="hover:text-white">Contest Rules</a><a href="https://931thelakefm.com/contact/" target="_blank" rel="noreferrer" className="hover:text-white">Contact</a><a href="https://publicfiles.fcc.gov/fm-profile/wzmj" target="_blank" rel="noreferrer" className="hover:text-white">FCC Public File</a></div>
            <a href="https://strataworks.tech" target="_blank" rel="noreferrer" aria-label="Site by StrataWorks" className="group flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 transition hover:border-[#8de8f2]/50 hover:bg-white/[.08]">
              <span className="font-bold uppercase tracking-[.14em] text-white/55 transition group-hover:text-white">Site by</span>
              <span className="rounded-lg bg-white px-2 py-1"><Image src={asset('/images/strataworks-logo.png')} alt="StrataWorks" width={957} height={661} className="h-auto w-20" /></span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
