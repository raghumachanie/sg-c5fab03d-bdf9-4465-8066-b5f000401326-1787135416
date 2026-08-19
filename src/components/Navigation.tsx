import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 shadow-sm backdrop-blur">
      <div className="bg-primary text-primary-foreground">
        <div className="container flex min-h-10 items-center justify-between gap-4 py-2 text-sm">
          <a href="tel:+918861949711" className="flex items-center gap-2 font-medium hover:text-accent">
            <Phone aria-hidden="true" className="h-4 w-4" />
            <span>+91 88619 49711</span>
          </a>
          <p className="hidden text-xs opacity-90 sm:block">Education with care, opportunity and purpose</p>
        </div>
      </div>

      <nav className="container flex min-h-20 items-center justify-between gap-5" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Sri Balaji Educational Trust home">
          <span className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow-sm">
            <Image src="/logo.jpg" alt="" fill sizes="56px" className="object-contain" priority />
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-lg font-bold leading-tight text-[#002147]">SRI BALAJI</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Educational Trust</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted hover:text-primary"}`}>
                {link.label}
              </Link>
            );
          })}
          <Button asChild className="ml-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"><Link href="/donate">Support us</Link></Button>
        </div>

        <Button type="button" variant="ghost" size="icon" className="lg:hidden" aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((open) => !open)}>
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </nav>

      {mobileMenuOpen ? (
        <nav id="mobile-navigation" className="container border-t border-border/70 pb-5 pt-3 lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg px-4 py-3 font-semibold hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
            ))}
            <Link href="/donate" className="mt-2 rounded-lg bg-accent px-4 py-3 text-center font-bold text-accent-foreground" onClick={() => setMobileMenuOpen(false)}>Support our mission</Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

