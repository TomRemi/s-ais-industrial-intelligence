import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Video, Languages } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    preferredTime: "",
    meetingType: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
      preferredTime: "",
      meetingType: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@s-ais.com",
      link: "mailto:contact@s-ais.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Global Operations",
      link: null
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "24/7 Support Available",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-corporate mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your industrial operations? Let's discuss how S-AIS can deliver value-driven solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-subtle">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="preferredTime" className="text-foreground">Preferred Meeting Time</Label>
                  <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (1 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (6 PM - 8 PM)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="meetingType" className="text-foreground">Meeting Platform</Label>
                  <Select onValueChange={(value) => handleInputChange("meetingType", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select meeting platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google-meet">Google Meet</SelectItem>
                      <SelectItem value="microsoft-teams">Microsoft Teams</SelectItem>
                      <SelectItem value="zoom">Zoom</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project and requirements..."
                    className="mt-2 min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" variant="corporate" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-subtle">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-gradient-corporate p-3 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Additional Features */}
            <Card className="shadow-subtle">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Meeting Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Video className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Google Meet & Microsoft Teams Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Languages className="h-5 w-5 text-primary" />
                  <span className="text-foreground">English & Spanish Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Flexible Scheduling Across Time Zones</span>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-corporate p-6 rounded-lg shadow-corporate">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-primary-foreground/90 mb-4">
                Schedule a consultation to discuss your digital transformation journey.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;