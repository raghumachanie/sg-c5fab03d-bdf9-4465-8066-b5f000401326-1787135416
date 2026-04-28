import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, Palette, Calculator, Globe, Heart } from "lucide-react";

export default function Academics() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Our Academic Programs
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Comprehensive education from Baby Class to 5th Standard
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <Tabs defaultValue="early-years" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="early-years" className="font-display text-base">
                  Early Years
                </TabsTrigger>
                <TabsTrigger value="primary" className="font-display text-base">
                  Primary School
                </TabsTrigger>
              </TabsList>

              <TabsContent value="early-years" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-bold mb-4">Early Years Education</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Building strong foundations through play-based learning and nurturing care
                  </p>
                </div>

                <Card className="p-8 border-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-2">Baby Class (Ages 3-4)</h3>
                      <p className="text-muted-foreground mb-4">
                        Introduction to school life in a warm, nurturing environment
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-16">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">Basic social skills and classroom routines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">Introduction to numbers and letters through play</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">Creative activities: drawing, coloring, singing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">Physical development through games and activities</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 border-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <Palette className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-2">Middle Class (Ages 4-5)</h3>
                      <p className="text-muted-foreground mb-4">
                        Developing early literacy and numeracy skills
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-16">
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">•</span>
                      <span className="text-muted-foreground">Letter recognition and phonics introduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">•</span>
                      <span className="text-muted-foreground">Number recognition and basic counting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">•</span>
                      <span className="text-muted-foreground">Enhanced motor skills through art and craft</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">•</span>
                      <span className="text-muted-foreground">Story time and vocabulary building</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 border-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-2">Pre-Primary (Ages 5-6)</h3>
                      <p className="text-muted-foreground mb-4">
                        Preparing for formal education with structured learning
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-16">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Reading simple words and sentences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Basic addition and subtraction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Writing letters and numbers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Introduction to environmental studies</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="primary" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-bold mb-4">Primary School Education</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive curriculum building strong academic foundations
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-2">
                    <h3 className="font-display text-xl font-semibold mb-4">Core Subjects</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Calculator className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">Mathematics</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">English Language</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Hindi Language</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">Environmental Studies</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-2">
                    <h3 className="font-display text-xl font-semibold mb-4">Beyond Academics</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Palette className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">Arts & Crafts</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Heart className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Physical Education</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">Moral Education</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">Library Activities</span>
                      </li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-8 border-2 bg-accent/5">
                  <h3 className="font-display text-2xl font-semibold mb-4">Standard-wise Highlights</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-semibold text-lg mb-2">1st & 2nd Standard</h4>
                      <p className="text-muted-foreground">
                        Focus on building strong reading, writing, and arithmetic skills. Introduction to structured learning with age-appropriate activities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg mb-2">3rd & 4th Standard</h4>
                      <p className="text-muted-foreground">
                        Expanding knowledge across all subjects. Development of critical thinking and problem-solving abilities. Emphasis on independent learning.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg mb-2">5th Standard</h4>
                      <p className="text-muted-foreground">
                        Comprehensive preparation for secondary education. Advanced concepts in all subjects. Special focus on competitive exam preparation and entrance tests for next level.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}