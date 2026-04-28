import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { createInquiry } from "@/services/admissionService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CheckCircle2, DollarSign, FileText, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Admissions() {
  const [formData, setFormData] = useState({
    student_name: "",
    parent_name: "",
    phone: "",
    email: "",
    desired_class: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const result = await createInquiry(formData);

    if (result.success) {
      setSubmitted(true);
      setFormData({
        student_name: "",
        parent_name: "",
        phone: "",
        email: "",
        desired_class: "",
        message: "",
      });
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Admissions
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Affordable quality education for every child
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  Simple Process
                </h3>
                <p className="text-muted-foreground text-sm">
                  Fill the inquiry form, visit the school, and complete admission
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  Affordable Fees
                </h3>
                <p className="text-muted-foreground text-sm">
                  Low-cost education designed for underprivileged families
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  Year-Round Admission
                </h3>
                <p className="text-muted-foreground text-sm">
                  Admissions open throughout the year based on availability
                </p>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-center mb-8">
                Admission Inquiry Form
              </h2>

              {submitted ? (
                <Card className="p-8 text-center bg-success/10 border-success">
                  <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-semibold text-success mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    Your inquiry has been submitted successfully. We will contact you soon.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6"
                  >
                    Submit Another Inquiry
                  </Button>
                </Card>
              ) : (
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="student_name">Student Name *</Label>
                        <Input
                          id="student_name"
                          required
                          value={formData.student_name}
                          onChange={(e) =>
                            setFormData({ ...formData, student_name: e.target.value })
                          }
                          placeholder="Child's full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="parent_name">Parent/Guardian Name *</Label>
                        <Input
                          id="parent_name"
                          required
                          value={formData.parent_name}
                          onChange={(e) =>
                            setFormData({ ...formData, parent_name: e.target.value })
                          }
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="desired_class">Desired Class *</Label>
                      <Select
                        value={formData.desired_class}
                        onValueChange={(value) =>
                          setFormData({ ...formData, desired_class: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Baby Class">Baby Class</SelectItem>
                          <SelectItem value="Middle Class">Middle Class</SelectItem>
                          <SelectItem value="Pre-Primary">Pre-Primary</SelectItem>
                          <SelectItem value="1st Standard">1st Standard</SelectItem>
                          <SelectItem value="2nd Standard">2nd Standard</SelectItem>
                          <SelectItem value="3rd Standard">3rd Standard</SelectItem>
                          <SelectItem value="4th Standard">4th Standard</SelectItem>
                          <SelectItem value="5th Standard">5th Standard</SelectItem>
                        </SelectContent>
                      </Select>
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
                        placeholder="Any specific questions or requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={submitting}
                    >
                      {submitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}