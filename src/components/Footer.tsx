import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t-2 border-accent/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">
              Sri Sai Balaji Educational Trust
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Dedicated to providing quality education to underprivileged children, helping them build a brighter future.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/academics" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                Academics
              </Link>
              <Link href="/gallery" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                Gallery
              </Link>
              <Link href="/admissions" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                Admissions
              </Link>
              <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <p>School Address, City, State - PIN</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p>+91 XXXXX XXXXX</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <p>info@school.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} Sri Sai Balaji Educational Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}