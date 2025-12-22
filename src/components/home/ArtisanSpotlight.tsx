import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { artisans } from "@/data/artisans";
import { ArrowRight, Award, Star, MapPin } from "lucide-react";

const ArtisanSpotlight = () => {
  const featuredArtisans = artisans.slice(0, 3);

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Meet Our Artisans
            </h2>
            <p className="text-primary-foreground/80 max-w-xl">
              Behind every creation is a story of dedication, skill, and heritage passed down through generations.
            </p>
          </div>
          <Link to="/artisans">
            <Button variant="saffron" className="group">
              All Artisans
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredArtisans.map((artisan, index) => (
            <Link
              key={artisan.id}
              to={`/artisans/${artisan.id}`}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-foreground/5 rounded-2xl overflow-hidden border border-primary-foreground/10 hover:border-saffron/50 transition-all duration-300">
                {/* Cover Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={artisan.coverImage}
                    alt={artisan.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  
                  {/* Avatar */}
                  <div className="absolute -bottom-8 left-6">
                    <div className="relative">
                      <img
                        src={artisan.avatar}
                        alt={artisan.name}
                        className="w-20 h-20 rounded-full border-4 border-primary object-cover"
                      />
                      {artisan.isVerified && (
                        <div className="absolute -bottom-1 -right-1 bg-saffron p-1 rounded-full">
                          <Award className="h-4 w-4 text-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-12 p-6">
                  <h3 className="font-display text-xl font-semibold mb-1">{artisan.name}</h3>
                  <p className="text-sm text-saffron font-medium mb-2">{artisan.craft}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-primary-foreground/70 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {artisan.region}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-saffron fill-saffron" />
                      {artisan.rating}
                    </div>
                  </div>

                  <p className="text-sm text-primary-foreground/70 line-clamp-2">
                    {artisan.story}
                  </p>

                  <div className="mt-4 pt-4 border-t border-primary-foreground/10 flex justify-between items-center text-sm">
                    <span>{artisan.experience} years experience</span>
                    <span>{artisan.productCount} products</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisanSpotlight;
