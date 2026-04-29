import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Target, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                About Our School
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Empowering underprivileged children through quality education since our founding
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 border-2 mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a vision to make quality education accessible to every child, regardless of their economic background, our school has been a beacon of hope in the community. We started with just a handful of students in Baby Class and have grown to serve hundreds of children from Baby Class through 5th Standard.
                  </p>
                  <p>
                    Our journey began when we recognized that many talented children in our community were being left behind due to financial constraints. We believed that every child deserves the opportunity to learn, grow, and reach their full potential. This belief continues to drive everything we do.
                  </p>
                  <p>
                    Today, we provide comprehensive education that goes beyond textbooks. We focus on character development, practical skills, and nurturing each child's unique talents and abilities. Our commitment to affordability ensures that financial barriers never stand between a child and their dreams.
                  </p>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6 border-2 hover:border-accent transition-colors">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a leading educational institution that transforms lives by providing accessible, quality education that empowers children to break the cycle of poverty and become successful, compassionate members of society.
                  </p>
                </Card>

                <Card className="p-6 border-2 hover:border-success transition-colors">
                  <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center mb-4">
                    <Heart className="h-7 w-7 text-success" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide affordable, high-quality education from Baby Class to 5th Standard, focusing on academic excellence, character development, and practical skills that prepare students for future success.
                  </p>
                </Card>
              </div>

              <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-muted/30 to-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Message from the Principal
                    </h2>
                    <p className="text-sm text-muted-foreground">Sister [Name]</p>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dear Parents and Guardians,
                  </p>
                  <p>
                    It gives me immense joy to welcome you to our school family. Every child who walks through our doors carries within them unlimited potential, and it is our sacred responsibility to nurture that potential with love, dedication, and excellence.
                  </p>
                  <p>
                    We understand the sacrifices families make to provide education for their children. That's why we are committed to keeping our fees affordable while never compromising on the quality of education. Our teachers are not just instructors; they are mentors who care deeply about each child's growth and wellbeing.
                  </p>
                  <p>
                    I believe that education is the most powerful tool for transforming lives and communities. Together with your support and trust, we are building a brighter future, one child at a time.
                  </p>
                  <p className="font-medium text-foreground">
                    With warm regards and blessings,<br />
                    Sister [Name]<br />
                    Principal
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 text-center border-2">
                <Users className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-display font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Building strong bonds of support and belonging</p>
              </Card>
              <Card className="p-6 text-center border-2">
                <Heart className="h-10 w-10 mx-auto mb-3 text-accent" />
                <h3 className="font-display font-semibold mb-2">Compassion</h3>
                <p className="text-sm text-muted-foreground">Treating every child with love and understanding</p>
              </Card>
              <Card className="p-6 text-center border-2">
                <Award className="h-10 w-10 mx-auto mb-3 text-success" />
                <h3 className="font-display font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">Striving for the highest quality in all we do</p>
              </Card>
              <Card className="p-6 text-center border-2">
                <Target className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-display font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">Upholding honesty and strong moral principles</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);

}