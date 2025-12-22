import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { artisans } from "@/data/artisans";
import { products } from "@/data/products";
import { Award, Star, MapPin, Clock, Package, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";

const ArtisanDetails = () => {
  const { id } = useParams();
  const artisan = artisans.find((a) => a.id === id);
  const artisanProducts = products.filter((p) => p.artisanId === id);

  if (!artisan) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold mb-4">Artisan not found</h1>
        <Link to="/artisans">
          <Button variant="heritage">Browse Artisans</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{artisan.name} - Heritage Handloom Artisan</title>
        <meta name="description" content={artisan.story} />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/artisans" className="hover:text-foreground">Artisans</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{artisan.name}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={artisan.coverImage}
            alt={artisan.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </section>

        <div className="container -mt-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar & Basic Info */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-elevated md:w-80 shrink-0">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={artisan.avatar}
                    alt={artisan.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-card shadow-lg mx-auto"
                  />
                  {artisan.isVerified && (
                    <div className="absolute bottom-0 right-0 bg-saffron p-2 rounded-full">
                      <Award className="h-5 w-5 text-foreground" />
                    </div>
                  )}
                </div>

                <h1 className="font-display text-2xl font-bold text-foreground mb-1">
                  {artisan.name}
                </h1>
                <p className="text-saffron font-semibold mb-2">{artisan.craft}</p>

                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="h-5 w-5 fill-saffron text-saffron" />
                  <span className="font-semibold">{artisan.rating}</span>
                  <span className="text-muted-foreground">rating</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4" />
                  {artisan.region}, {artisan.state}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-saffron mx-auto mb-1" />
                    <p className="font-semibold">{artisan.experience}</p>
                    <p className="text-xs text-muted-foreground">Years</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <Package className="h-5 w-5 text-saffron mx-auto mb-1" />
                    <p className="font-semibold">{artisan.productCount}</p>
                    <p className="text-xs text-muted-foreground">Products</p>
                  </div>
                </div>

                {artisan.isVerified && (
                  <Badge className="bg-saffron/10 text-saffron border-saffron">
                    <Award className="h-3 w-3 mr-1" />
                    Verified Artisan
                  </Badge>
                )}
              </div>
            </div>

            {/* Story & Awards */}
            <div className="flex-1 space-y-8">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h2 className="font-display text-xl font-bold mb-4">The Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {artisan.story}
                </p>
              </div>

              {artisan.awards.length > 0 && (
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h2 className="font-display text-xl font-bold mb-4">Awards & Recognition</h2>
                  <div className="space-y-3">
                    {artisan.awards.map((award) => (
                      <div key={award} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center">
                          <Award className="h-5 w-5 text-saffron" />
                        </div>
                        <span className="text-foreground">{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products by this Artisan */}
          {artisanProducts.length > 0 && (
            <section className="py-12">
              <h2 className="font-display text-2xl font-bold mb-8">
                Products by {artisan.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {artisanProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default ArtisanDetails;
