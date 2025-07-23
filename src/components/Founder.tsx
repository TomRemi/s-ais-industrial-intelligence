import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp, BookOpen } from "lucide-react";

const Founder = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "$100M+ Global Initiatives",
      description: "Led and delivered large-scale technology transformations"
    },
    {
      icon: Users,
      title: "450+ Engineers Managed",
      description: "Built and scaled high-performing technical teams"
    },
    {
      icon: Award,
      title: "Multiple Patents",
      description: "Innovations in rig safety, computer vision, and AI monitoring"
    },
    {
      icon: BookOpen,
      title: "Industry Recognition",
      description: "IPTC 2024 Speaker, World Oil Awards Finalist"
    }
  ];

  const certifications = [
    "MIT Sloan Certified",
    "UC Berkeley Alumni", 
    "Six Sigma Black Belt",
    "Former SLB Technology Manager",
    "Former SLB Centre Director"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Leadership Excellence
            </h2>
            <div className="h-1 w-24 bg-gradient-corporate mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Dhananjaya Krishna
                </h3>
                <p className="text-xl text-primary font-semibold mb-6">
                  Founder & CEO
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  With over 20 years of technology leadership experience at SLB (Schlumberger), 
                  Dhananjaya brings unparalleled expertise in industrial intelligence and 
                  digital transformation. His track record includes leading $100M+ global 
                  initiatives and scaling engineering teams to deliver breakthrough solutions.
                </p>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Credentials & Recognition
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Current Ventures:</strong> Founder of S-AIS and contributor to GoNote.ai
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="group hover:shadow-subtle transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-corporate p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Core Belief Quote */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-corporate p-12 rounded-2xl shadow-corporate">
              <blockquote className="text-2xl md:text-3xl font-light text-primary-foreground mb-6 italic">
                "Value Before Technology"
              </blockquote>
              <p className="text-primary-foreground/90 text-lg max-w-3xl mx-auto">
                Our philosophy emphasizes strategic foresight, operational rigor, and measurable business outcomes. 
                Technology serves purpose, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;