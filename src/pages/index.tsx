import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LatestNotices } from "@/components/LatestNotices";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Users, Flame, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImxlYWYiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAxMCBRIDUwIDIwIDQwIDMwIFEgMzAgMjAgNDAgMTAgWiBNIDIwIDQwIFEgMzAgNTAgMjAgNjAgUSAxMCA1MCAyMCA0MCBaIE0gNjAgNDAgUSA3MCA1MCA2MCA2MCBRIDUwIDUwIDYwIDQwIFoiIGZpbGw9IiMxYTVmNWYiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbGVhZikiLz48L3N2Zz4=')] bg-repeat"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <Image
                      src="/logo.jpg"
                      alt="Sri Sai Balaji Educational Trust"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                
                <div>
                  <h1 className="logo-title text-4xl md:text-5xl lg:text-6xl mb-2">
                    Sri Sai Balaji
                  </h1>
                  <p className="logo-subtitle text-sm md:text-base">
                    Educational Trust
                  </p>
                </div>
                
                <p className="logo-tagline text-xl md:text-2xl leading-relaxed">
                  Nurturing Minds, Building Futures
                </p>
                
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Providing affordable quality education for underprivileged children from Baby Class to 5th Standard. Together, we build a brighter tomorrow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-subtitle font-semibold">
                    <Link href="/admissions">
                      Apply for Admission
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-subtitle font-semibold">
                    <Link href="/donate">Support Our Mission</Link>
                  </Button>
                </div>
              </div>

              {/* Right - Hero image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/Gemini_Generated_Image_2ijmzj2ijmzj2ijm.png"
                    alt="Students learning together in our library"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Call-to-Action Panels */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Panel 1: Diya - Community Commitment */}
              <Card className="p-8 text-center border-2 border-accent/30 hover:border-accent transition-all hover:shadow-lg bg-card rounded-t-3xl">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Flame className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  Our Commitment to Community
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Serving underprivileged families with dedication and compassion
                </p>
              </Card>

              {/* Panel 2: Open Book - Quality Education */}
              <Card className="p-8 text-center border-2 border-primary/30 hover:border-primary transition-all hover:shadow-lg bg-card rounded-t-3xl">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  Quality Education For All
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Affordable excellence preparing students for bright futures
                </p>
              </Card>

              {/* Panel 3: Kalasha 'S' - Empowerment */}
              <Card className="p-8 text-center border-2 border-success/30 hover:border-success transition-all hover:shadow-lg bg-card rounded-t-3xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <div className="font-display text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    S
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  Empowering the Underprivileged
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Breaking the cycle of poverty through education
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
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
                  <Book className="h-8 w-8 text-success" />
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

        {/* Latest Notices */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
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