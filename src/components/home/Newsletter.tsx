import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, MapPin, Phone, Mail, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const Newsletter = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  // Pre-fill form with user's profile data when logged in
  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        // Set email from auth user
        setFormData(prev => ({
          ...prev,
          email: user.email || "",
          name: user.user_metadata?.name || "",
        }));

        // Fetch additional profile data
        const { data: profile } = await supabase
          .from("profiles")
          .select("name, phone, location")
          .eq("user_id", user.id)
          .single();

        if (profile) {
          setFormData(prev => ({
            ...prev,
            name: profile.name || prev.name,
            phone: profile.phone || "",
            location: profile.location || "",
          }));
        }
      }
    };

    fetchProfile();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.location) {
      toast.success("Thank you for reaching out! We'll get back to you soon.");
      setFormData(prev => ({ ...prev, message: "" }));
    }
  };

  return (
    <section className="py-20 bg-gradient-heritage text-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-foreground/80">
              Have questions? Want to collaborate? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-elevated">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className="text-foreground">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 bg-background border-border"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email" className="text-foreground">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 bg-background border-border"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone" className="text-foreground">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 bg-background border-border"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-location" className="text-foreground">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="contact-location"
                    name="location"
                    type="text"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={handleChange}
                    className="pl-10 bg-background border-border"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="contact-message" className="text-foreground">Message (Optional)</Label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us how we can help you..."
                value={formData.message}
                onChange={handleChange}
                className="w-full min-h-[100px] px-3 py-2 rounded-md bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron resize-none"
              />
            </div>

            <Button type="submit" variant="heritage" size="lg" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
          
          <p className="text-xs text-foreground/60 mt-4 text-center">
            We respect your privacy. Your information is safe with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
