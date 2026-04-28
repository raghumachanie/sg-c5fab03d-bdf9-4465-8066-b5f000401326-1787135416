import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/academics", label: "Academics" },
    { href: "/gallery", label: "Gallery" },
    { href: "/admissions", label: "Admissions" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-card border-b-2 border-primary/20 shadow-sm">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-14 flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Sri Sai Balaji Educational Trust"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-xl font-semibold text-primary leading-tight">
                Sri Sai Balaji
              </div>
              <div className="font-display text-xs text-muted-foreground uppercase tracking-wide">
                Educational Trust
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="pb-6 lg:hidden border-t border-border/50">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}