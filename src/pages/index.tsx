import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LatestNotices } from "@/components/LatestNotices";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <Image
                    src="/logo.jpg"
                    alt="Sri Sai Balaji Educational Trust"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Sri Sai Balaji Educational Trust
              </h1>
              
              <p className="font-display text-xl md:text-2xl text-accent font-medium italic">
                Nurturing Minds, Building Futures
              </p>
              
              <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
                Providing affordable quality education for underprivileged children from Baby Class to 5th Standard
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="font-semibold">
                  <Link href="/admissions">
                    Apply for Admission
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
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
              <LatestNotices />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}