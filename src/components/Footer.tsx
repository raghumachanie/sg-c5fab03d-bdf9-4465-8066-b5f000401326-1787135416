import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div className="max-w-md">
          <div className="mb-5 flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-full bg-white"><Image src="/logo.jpg" alt="" fill sizes="56px" className="object-contain" /></span>
            <div><p className="font-display text-xl font-bold">Sri Balaji</p><p className="text-xs uppercase tracking-[0.18em] opacity-80">Educational Trust</p></div>
          </div>
          <p className="leading-relaxed opacity-85">Helping children learn with confidence through affordable education, personal attention and a caring school community.</p>
          <a href="tel:+918861949711" className="mt-5 inline-flex items-center gap-2 font-semibold hover:text-accent"><Phone className="h-4 w-4" />+91 88619 49711</a>
        </div>
        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">Explore</h2>
          <div className="grid gap-3 text-sm opacity-90">
            <Link href="/about" className="hover:text-accent">About the trust</Link><Link href="/academics" className="hover:text-accent">Academic programme</Link><Link href="/admissions" className="hover:text-accent">Admissions</Link><Link href="/gallery" className="hover:text-accent">Gallery</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">Take action</h2>
          <div className="grid gap-3 text-sm opacity-90">
            <Link href="/contact" className="inline-flex items-center gap-1 hover:text-accent">Contact us <ArrowUpRight className="h-3.5 w-3.5" /></Link><Link href="/donate" className="inline-flex items-center gap-1 hover:text-accent">Support our mission <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15"><div className="container flex flex-col gap-2 py-5 text-xs opacity-75 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Sri Balaji Educational Trust</p><p>Nurturing minds, building futures.</p></div></div>
    </footer>
  );
}

