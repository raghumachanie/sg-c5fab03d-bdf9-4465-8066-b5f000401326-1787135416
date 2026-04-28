import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Affordable Quality Education for Every Child
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Building bright futures from Baby Class to 5th Standard. We believe every child deserves access to excellent education, regardless of their background.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="font-semibold">
                  <Link href="/admissions">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white font-semibold">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To provide quality education that empowers children from underprivileged families to reach their full potential and break the cycle of poverty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 text-center border-2 hover:border-accent transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Compassion</h3>
                <p className="text-muted-foreground">
                  Every child is valued and nurtured with care and understanding
                </p>
              </Card>

              <Card className="p-6 text-center border-2 hover:border-success transition-colors">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  High-quality education that prepares students for future success
                </p>
              </Card>

              <Card className="p-6 text-center border-2 hover:border-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Building a supportive environment where everyone belongs
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest Notices
              </h2>
              <p className="text-muted-foreground">Stay updated with important announcements</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-white border-2 border-accent/20">
                <p className="text-center text-muted-foreground">
                  Notice board will be updated soon. Check back for important announcements about admissions, holidays, and events.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}