import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { createMessage } from "@/services/contactService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const result = await createMessage(formData);

    if (result.success) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Get in touch with us for any questions or inquiries
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 1234567890</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Mon-Sat: 9 AM - 4 PM
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@schoolname.edu</p>
                <p className="text-muted-foreground text-sm mt-1">
                  We respond within 24 hours
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  Location
                </h3>
                <p className="text-muted-foreground text-sm">
                  School Address Line 1<br />
                  City, State - PIN Code
                </p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl font-bold mb-8">
                  Send Us a Message
                </h2>

                {submitted ?
                <Card className="p-8 text-center bg-success/10 border-success">
                    <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-semibold text-success mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We will respond soon.
                    </p>
                    <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6">
                    
                      Send Another Message
                    </Button>
                  </Card> :

                <Card className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Full name" />
                      
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your@email.com" />
                        
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="10-digit number" />
                        
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="How can we help?" />
                      
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                        id="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Your message..." />
                      
                      </div>

                      <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={submitting}>
                      
                        {submitting ?
                      "Sending..." :

                      <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                      }
                      </Button>
                    </form>
                  </Card>
                }
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold mb-8">
                  Visit Our School
                </h2>
                <Card className="overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2347fb5cb1%3A0xe43c08589e0f7159!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </Card>
                <Card className="p-6 mt-6">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    School Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 8:00 AM - 2:30 PM</p>
                    <p>Saturday: 9:00 AM - 12:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);

}