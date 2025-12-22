import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Globe, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    { value: "500+", label: "Artisans Empowered" },
    { value: "₹2Cr+", label: "Paid to Artisans" },
    { value: "15+", label: "States Covered" },
    { value: "50,000+", label: "Happy Customers" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Preserving Heritage",
      description: "We believe every thread carries a story. Our mission is to keep ancient textile traditions alive for future generations.",
    },
    {
      icon: Users,
      title: "Artisan First",
      description: "Fair prices, direct connections. We ensure artisans receive the recognition and compensation they deserve.",
    },
    {
      icon: Award,
      title: "Authentic Craftsmanship",
      description: "Every product is verified for authenticity. No machine-made replicas, only genuine handcrafted pieces.",
    },
    {
      icon: Globe,
      title: "Sustainable Fashion",
      description: "Handloom is inherently eco-friendly. We promote slow fashion that respects both people and planet.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Story - Heritage Handloom</title>
        <meta name="description" content="Learn about Heritage Handloom's mission to preserve Indian textile heritage and empower artisan communities." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 heritage-pattern opacity-10" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Weaving Stories, Changing Lives
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                We started Heritage Handloom with a simple belief: authentic craftsmanship deserves a global stage, 
                and the hands that create beauty deserve fair recognition.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-heritage">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-foreground/70 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The Story Behind the Loom
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    India's handloom tradition spans over 5,000 years. From the royal courts of Mughal emperors 
                    to the streets of modern fashion capitals, Indian textiles have always been treasured 
                    for their unmatched artistry.
                  </p>
                  <p>
                    Yet, the artisans behind these masterpieces often struggle. Middlemen take the lion's share, 
                    young weavers abandon their looms for factory jobs, and ancient techniques face extinction.
                  </p>
                  <p>
                    Heritage Handloom was born to change this narrative. By connecting artisans directly with 
                    conscious consumers worldwide, we're creating a sustainable ecosystem where tradition 
                    thrives and communities prosper.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop"
                  alt="Artisan at loom"
                  className="rounded-2xl shadow-elevated"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elevated max-w-xs">
                  <p className="font-display text-lg font-semibold text-foreground mb-2">
                    "Every saree I weave carries my family's legacy of five generations."
                  </p>
                  <p className="text-sm text-muted-foreground">— Ramesh Kumar, Varanasi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every decision we make is guided by these core principles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-card p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-saffron" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Join the Movement
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you're an artisan looking to share your craft or a conscious consumer 
              seeking authentic handloom, you have a role to play in preserving India's textile heritage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <Button variant="saffron" size="lg" className="group">
                  Shop Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/register?role=artisan">
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Become an Artisan Partner
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
