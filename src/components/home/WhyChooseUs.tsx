import { Handshake, Shield, Truck, Heart } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Direct from Artisans",
    description: "No middlemen. Your purchase directly supports artisan families and rural communities.",
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "Every product is verified for authenticity with certification of origin and craft technique.",
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description: "We deliver handcrafted treasures to your doorstep, anywhere in the world.",
  },
  {
    icon: Heart,
    title: "Preserving Heritage",
    description: "Every purchase helps keep ancient craft traditions alive for future generations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Heritage Handloom
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to preserve India's rich textile heritage while empowering artisan communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-saffron/50 hover:shadow-elevated transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-saffron/10 text-saffron mb-6 group-hover:bg-saffron group-hover:text-foreground transition-all duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
