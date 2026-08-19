import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, HeartHandshake, Sparkles, Users } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LatestNotices } from "@/components/LatestNotices";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const strengths = [
  { icon: BookOpen, title: "Strong foundations", text: "Age-appropriate learning from Baby Class through 5th Standard." },
  { icon: Users, title: "Personal attention", text: "A caring environment where every child is known and encouraged." },
  { icon: HeartHandshake, title: "Accessible education", text: "Focused on helping families access meaningful learning opportunities." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Sri Balaji Educational Trust | Nurturing Minds, Building Futures"
        description="Affordable, caring education for children from Baby Class through 5th Standard." url="https://sribalajiedu.in" />
      <Navigation />
      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-0 hero-grid opacity-50" aria-hidden="true" />
          <div className="container relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                <Sparkles className="h-4 w-4 text-accent" /> Learning with purpose
              </p>
              <h1 className="text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-[#002147] sm:text-6xl lg:text-7xl">
                A brighter future begins with a caring education.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Sri Balaji Educational Trust helps children build confidence, curiosity and strong academic foundations in a supportive school community.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-7"><Link href="/admissions">Explore admissions <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-2 px-7"><Link href="/about">Discover our story</Link></Button>
              </div>
              <ul className="mt-8 grid gap-3 text-sm text-foreground sm:grid-cols-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-success" />Baby Class to 5th Standard</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-success" />Child-centred learning</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl">
                <div className="relative aspect-[4/3]"><Image src="/Gemini_Generated_Image_2ijmzj2ijmzj2ijm.png" alt="Children learning together at Sri Balaji Educational Trust" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" priority /></div>
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-primary p-5 text-primary-foreground shadow-xl sm:left-auto sm:w-72">
                <p className="font-display text-xl font-semibold">Nurturing minds</p><p className="mt-1 text-sm opacity-85">Building capable, compassionate learners for tomorrow.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-2xl text-center"><p className="section-kicker">Why families choose us</p><h2 className="mt-3 text-balance font-display text-3xl font-bold text-[#002147] md:text-4xl">Education grounded in care and opportunity</h2></div>
            <div className="grid gap-6 md:grid-cols-3">
              {strengths.map(({ icon: Icon, title, text }) => (
                <article key={title} className="group rounded-3xl border border-border bg-background p-7 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Icon className="h-6 w-6" /></span>
                  <h3 className="font-display text-xl font-semibold text-[#002147]">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src="/Gemini_Generated_Image_hwkrfohwkrfohwkr_1_.png" alt="A joyful school learning environment" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
            <div className="lg:pl-8"><p className="section-kicker">Our mission</p><h2 className="mt-3 text-balance font-display text-3xl font-bold text-[#002147] md:text-5xl">Every child deserves the chance to thrive.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">We work to make quality education accessible to children from underprivileged families—combining academic learning with character, confidence and practical skills.</p><Button asChild variant="link" className="mt-5 h-auto p-0 text-base font-bold"><Link href="/about">Learn more about our trust <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">Be part of the journey</p><h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Help a child learn, grow and dream bigger.</h2><p className="mt-3 opacity-85">Your support helps sustain accessible education and a caring learning environment.</p></div><Button asChild size="lg" className="shrink-0 rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90"><Link href="/donate">Support our mission <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
        </section>

        <section className="bg-white py-16 md:py-20"><div className="container"><div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="section-kicker">School updates</p><h2 className="mt-2 font-display text-3xl font-bold text-[#002147]">Latest notices</h2></div></div><div className="mx-auto max-w-4xl"><LatestNotices /></div></div></section>
      </main>
      <Footer />
    </div>
  );
}

