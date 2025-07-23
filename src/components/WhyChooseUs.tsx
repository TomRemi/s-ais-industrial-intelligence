import { Card, CardContent } from "@/components/ui/card";
import { Globe, Trophy, Puzzle, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Globe,
      title: "Global Track Record",
      description: "Proven success across international markets with $100M+ in delivered projects and transformative solutions for industry leaders.",
      highlights: ["20+ years of experience", "Global enterprise clients", "Multi-billion dollar project impact"]
    },
    {
      icon: Trophy,
      title: "Proven Thought Leadership",
      description: "Industry recognition through patents, speaking engagements, and award-winning innovations in industrial AI and automation.",
      highlights: ["Multiple patents in AI", "IPTC 2024 Speaker", "World Oil Awards Finalist"]
    },
    {
      icon: Puzzle,
      title: "Deep Integration Experience",
      description: "Unmatched expertise in connecting legacy industrial systems with modern cloud and AI technologies for seamless transformation.",
      highlights: ["SCADA-to-Cloud expertise", "Legacy system modernization", "Enterprise architecture mastery"]
    }
  ];

  const competitiveAdvantages = [
    "Value-first approach over technology-first",
    "Proven track record with Fortune 500 companies", 
    "Deep understanding of industrial operations",
    "End-to-end solution ownership",
    "Scalable and secure architectures",
    "24/7 operational support and monitoring"
  ];

  return (
    <section id="why-us" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose S-AIS
          </h2>
          <div className="h-1 w-24 bg-gradient-corporate mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with a team that combines deep industrial expertise with cutting-edge technology to deliver measurable business outcomes.
          </p>
        </div>

        {/* Main Reasons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-corporate transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-gradient-corporate p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {reason.description}
                  </p>
                  <ul className="space-y-2">
                    {reason.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center justify-center text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Competitive Advantages */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-subtle">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Our Competitive Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-corporate p-8 rounded-2xl shadow-corporate max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-6">
              Join industry leaders who trust S-AIS to deliver measurable results through intelligent automation and digital transformation.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors duration-300 shadow-lg"
            >
              Start Your Digital Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;