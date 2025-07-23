import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "AI Safety Monitoring",
    "Workflow Automation", 
    "SCADA Integration",
    "Data Visualization",
    "IoT Solutions",
    "Digital Twins"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-foreground p-2 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">s-ais</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Industrial Intelligence, Delivered. Transforming operations through AI, IoT, and automation solutions.
            </p>
            <div className="pt-4">
              <p className="font-semibold mb-2">Dhananjaya Krishna, Founder & CEO</p>
              <p className="text-sm text-primary-foreground/70">
                20+ years of technology leadership experience
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <a 
                  href="mailto:contact@s-ais.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  contact@s-ais.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <a 
                  href="tel:+15551234567"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  Global Operations
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-primary-foreground/20">
              <p className="text-xs text-primary-foreground/60">
                English & Spanish Support Available
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} S-AIS. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </button>
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;