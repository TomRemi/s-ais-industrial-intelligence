import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cog, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced algorithms for predictive analytics and intelligent automation"
    },
    {
      icon: Cog,
      title: "IoT Integration", 
      description: "Seamless connectivity between devices and cloud systems"
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Strategic modernization of industrial processes and workflows"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Robust security frameworks for critical industrial systems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About S-AIS
          </h2>
          <div className="h-1 w-24 bg-gradient-corporate mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            S-AIS drives digital transformation in Oil & Gas, Manufacturing, and Supply Chain using cutting-edge AI, IoT, and automation technologies. We focus on creating value-first solutions through advanced technologies like Digital Twins, SCADA-to-Cloud AI Systems, and HR Compliance Automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-corporate transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="bg-gradient-corporate p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Core Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Digital Twins",
              "SCADA Integration", 
              "Edge AI",
              "Cloud Architecture",
              "IoT Hubs",
              "Automation Systems",
              "Data Visualization",
              "Predictive Analytics"
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;