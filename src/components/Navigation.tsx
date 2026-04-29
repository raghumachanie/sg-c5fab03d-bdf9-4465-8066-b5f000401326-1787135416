import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Program" },
  { href: "/academics", label: "Learning" },
  { href: "/donate", label: "Supports" },
  { href: "/contact", label: "Contacts" }];


  return (
    <nav className="sticky top-0 z-50 w-full bg-card shadow-sm">
      {/* Top Bar - Teal with phone and links */}
      <div className="bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-subtitle font-medium">023 486 8990</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/gallery" className="font-subtitle font-medium hover:text-accent transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="font-subtitle font-medium hover:text-accent transition-colors">
                Contact Us
              </Link>
              <Link href="/admin/login" className="font-subtitle font-medium hover:text-accent transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Gold/Tan background */}
      <div className="bg-accent/20 border-b-2 border-accent/30">
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-14 w-14 flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Sri Sai Balaji Educational Trust"
                  fill
                  className="object-contain" />
                
              </div>
              <div className="hidden sm:block">
                <div className="logo-title text-base leading-tight">SRI BALAJI

                </div>
                <div className="logo-subtitle text-[10px]">
                  Educational Trust
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {mainNavLinks.map((link) =>
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-subtitle font-medium text-foreground transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
                
                  {link.label}
                </Link>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {mobileMenuOpen &&
          <div className="pb-6 lg:hidden border-t border-border/50">
              <div className="flex flex-col gap-1 pt-4">
                {mainNavLinks.map((link) =>
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-subtitle font-medium text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md"
                onClick={() => setMobileMenuOpen(false)}>
                
                    {link.label}
                  </Link>
              )}
              </div>
            </div>
          }
        </div>
      </div>
    </nav>);

}