import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Workflow, Cloud, BarChart3, Cpu, Database } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "AI for Oilfield Safety and Monitoring",
      description: "Advanced computer vision and AI systems for real-time safety monitoring, risk assessment, and incident prevention in oil & gas operations.",
      features: ["Real-time hazard detection", "Predictive safety analytics", "Automated compliance reporting"]
    },
    {
      icon: Workflow,
      title: "Workflow Automation for ESP and CO₂ Wells",
      description: "Intelligent automation systems for Electric Submersible Pump optimization and Carbon Capture utilization workflows.",
      features: ["ESP performance optimization", "CO₂ monitoring systems", "Automated decision workflows"]
    },
    {
      icon: Cloud,
      title: "SCADA + Edge + Cloud Architecture", 
      description: "Comprehensive integration solutions connecting industrial control systems with modern cloud infrastructure.",
      features: ["Legacy system integration", "Edge computing deployment", "Cloud-native architectures"]
    },
    {
      icon: BarChart3,
      title: "Dashboarding & Visualization",
      description: "Advanced data visualization platforms providing real-time insights and actionable intelligence for industrial operations.",
      features: ["Real-time operational dashboards", "Custom KPI visualizations", "Mobile-responsive interfaces"]
    },
    {
      icon: Cpu,
      title: "IoT Hubs & Digital Twins",
      description: "Smart IoT infrastructure and digital twin implementations for comprehensive asset monitoring and predictive maintenance.",
      features: ["IoT device management", "Digital twin modeling", "Predictive maintenance algorithms"]
    },
    {
      icon: Database,
      title: "Data Analytics & Intelligence",
      description: "Advanced analytics platforms turning industrial data into strategic insights and automated decision-making systems.",
      features: ["Predictive analytics", "Machine learning models", "Automated reporting systems"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${servicesBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background/95"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-gradient-corporate mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital transformation solutions designed for industrial excellence and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-corporate transition-all duration-500 hover:-translate-y-2 bg-card/95 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-corporate p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Edge AI", "Digital Transformation", "IoT", "SCADA", "Cloud Computing", 
              "Machine Learning", "Computer Vision", "Dashboards", "Visualization", 
              "Predictive Analytics", "Automation", "Industrial Intelligence"
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default border border-primary/20"
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

export default Services;