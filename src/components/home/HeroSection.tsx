import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden heritage-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-saffron/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 border border-saffron/20">
              <Sparkles className="h-4 w-4 text-saffron" />
              <span className="text-sm font-medium text-saffron">Handcrafted with Love</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Weaving Stories,{" "}
              <span className="text-gradient-heritage">Preserving Heritage</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Connect directly with master artisans across India. Every thread tells a story of tradition, 
              skill, and generations of craftsmanship. Shop authentic handloom and support rural livelihoods.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button variant="heritage" size="xl" className="group">
                  Explore Collection
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/artisans">
                <Button variant="outline-indigo" size="xl">
                  Meet Our Artisans
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              {[
                { value: "500+", label: "Artisans" },
                { value: "10,000+", label: "Products" },
                { value: "50+", label: "Craft Forms" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div 
                  className="h-64 rounded-2xl bg-cover bg-center shadow-elevated animate-fade-up"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop')",
                    animationDelay: "0.2s"
                  }}
                />
                <div 
                  className="h-48 rounded-2xl bg-cover bg-center shadow-elevated animate-fade-up"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop')",
                    animationDelay: "0.4s"
                  }}
                />
              </div>
              <div className="space-y-4 pt-8">
                <div 
                  className="h-48 rounded-2xl bg-cover bg-center shadow-elevated animate-fade-up"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=400&fit=crop')",
                    animationDelay: "0.3s"
                  }}
                />
                <div 
                  className="h-64 rounded-2xl bg-cover bg-center shadow-elevated animate-fade-up"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=800&fit=crop')",
                    animationDelay: "0.5s"
                  }}
                />
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-card p-4 rounded-xl shadow-elevated animate-float">
              <p className="font-display text-2xl font-bold text-secondary">100%</p>
              <p className="text-xs text-muted-foreground">Handmade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
