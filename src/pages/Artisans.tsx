import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { artisans } from "@/data/artisans";
import { Award, Star, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Artisans = () => {
  return (
    <>
      <Helmet>
        <title>Our Artisans - Heritage Handloom</title>
        <meta name="description" content="Meet the master artisans behind our handloom products. Each craftsperson carries forward centuries of tradition." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 heritage-pattern">
          <div className="container text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Master Artisans
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Behind every handwoven masterpiece is an artisan whose hands carry forward centuries of tradition. 
              Meet the creators who keep India's textile heritage alive.
            </p>
          </div>
        </section>

        <div className="container py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan, index) => (
              <Link
                key={artisan.id}
                to={`/artisans/${artisan.id}`}
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="bg-card rounded-2xl overflow-hidden border border-border hover:border-saffron/50 hover:shadow-elevated transition-all duration-300">
                  {/* Cover Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={artisan.coverImage}
                      alt={artisan.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    
                    {/* Avatar */}
                    <div className="absolute -bottom-10 left-6">
                      <div className="relative">
                        <img
                          src={artisan.avatar}
                          alt={artisan.name}
                          className="w-24 h-24 rounded-full border-4 border-card object-cover shadow-elevated"
                        />
                        {artisan.isVerified && (
                          <div className="absolute -bottom-1 -right-1 bg-saffron p-1.5 rounded-full">
                            <Award className="h-4 w-4 text-foreground" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-14 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-saffron transition-colors">
                          {artisan.name}
                        </h3>
                        <p className="text-saffron font-medium">{artisan.craft}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full">
                        <Star className="h-4 w-4 fill-saffron text-saffron" />
                        <span className="text-sm font-medium">{artisan.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      {artisan.region}, {artisan.state}
                    </div>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {artisan.story}
                    </p>

                    {artisan.awards.length > 0 && (
                      <div className="flex items-center gap-2 text-xs text-saffron mb-4">
                        <Award className="h-4 w-4" />
                        <span>{artisan.awards[0]}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="text-sm">
                        <span className="font-semibold text-foreground">{artisan.experience}</span>
                        <span className="text-muted-foreground"> years experience</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-foreground">{artisan.productCount}</span>
                        <span className="text-muted-foreground"> products</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-heritage rounded-2xl p-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Are You an Artisan?
            </h2>
            <p className="text-foreground/80 max-w-xl mx-auto mb-6">
              Join our community of master craftspeople and connect directly with customers who appreciate authentic handloom art.
            </p>
            <Link to="/register?role=artisan">
              <Button variant="indigo" size="lg" className="group">
                Join as an Artisan
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Artisans;
