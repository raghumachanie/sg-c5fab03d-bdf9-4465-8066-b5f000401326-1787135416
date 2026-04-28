import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createDonation } from "@/services/donationService";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";

export default function Donate() {
  const [formData, setFormData] = useState({
    donor_name: "",
    email: "",
    phone: "",
    amount: "",
    purpose: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const result = await createDonation({
      donor_name: formData.donor_name,
      email: formData.email || undefined,
      phone: formData.phone,
      amount: formData.amount ? parseFloat(formData.amount) : undefined,
      purpose: formData.purpose,
      message: formData.message || undefined,
    });

    if (result.success) {
      setSubmitted(true);
      setFormData({
        donor_name: "",
        email: "",
        phone: "",
        amount: "",
        purpose: "",
        message: "",
      });
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Support Our Mission
              </h1>
              <p className="text-lg text-muted-foreground">
                Your contribution helps provide quality education to underprivileged children
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              <Card className="p-6 text-center border-2 hover:border-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Educational Materials</h3>
                <p className="text-sm text-muted-foreground">
                  Books, uniforms, and learning resources for students
                </p>
              </Card>

              <Card className="p-6 text-center border-2 hover:border-accent transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Teacher Support</h3>
                <p className="text-sm text-muted-foreground">
                  Training and resources for our dedicated educators
                </p>
              </Card>

              <Card className="p-6 text-center border-2 hover:border-success transition-colors">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  Classroom improvements and learning facilities
                </p>
              </Card>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                  Make a Contribution
                </h2>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-10 w-10 text-success" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      Thank You for Your Generosity!
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Your contribution will make a real difference in the lives of our students. We will contact you shortly with further details.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="mt-4"
                    >
                      Submit Another Contribution
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="donor_name">Full Name *</Label>
                        <Input
                          id="donor_name"
                          required
                          value={formData.donor_name}
                          onChange={(e) =>
                            setFormData({ ...formData, donor_name: e.target.value })
                          }
                          placeholder="Your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="10-digit mobile number"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="amount">Contribution Amount (Optional)</Label>
                        <Input
                          id="amount"
                          type="number"
                          min="0"
                          step="0.01"
                          value={formData.amount}
                          onChange={(e) =>
                            setFormData({ ...formData, amount: e.target.value })
                          }
                          placeholder="Enter amount in ₹"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="purpose">Purpose *</Label>
                        <Select
                          value={formData.purpose}
                          onValueChange={(value) =>
                            setFormData({ ...formData, purpose: value })
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select purpose" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="General Support">General Support</SelectItem>
                            <SelectItem value="Student Scholarships">Student Scholarships</SelectItem>
                            <SelectItem value="Books & Uniforms">Books & Uniforms</SelectItem>
                            <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                            <SelectItem value="Teacher Training">Teacher Training</SelectItem>
                            <SelectItem value="Special Projects">Special Projects</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Any special instructions or message..."
                      />
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> After submitting this form, our team will contact you with payment details and instructions to complete your contribution.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full font-semibold"
                      size="lg"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Submit Contribution Details"}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            <div className="max-w-3xl mx-auto mt-12 text-center">
              <Card className="p-6 bg-accent/5 border-accent/20">
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  Every Contribution Counts
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sri Sai Balaji Educational Trust is committed to providing quality education to children from underprivileged families. Your generous support helps us continue our mission of nurturing minds and building futures.
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