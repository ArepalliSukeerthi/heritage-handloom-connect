import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { artisans } from "@/data/artisans";
import { useCart } from "@/contexts/CartContext";
import { 
  Heart, ShoppingCart, Star, Award, MapPin, 
  Truck, Shield, RefreshCw, ChevronRight, Minus, Plus 
} from "lucide-react";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);
  const artisan = product ? artisans.find((a) => a.id === product.artisanId) : null;

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/products">
          <Button variant="heritage">Browse Products</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        artisan: product.artisanName,
      });
    }
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <>
      <Helmet>
        <title>{product.name} - Heritage Handloom</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-foreground">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        <div className="container py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isHandmade && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    <Award className="h-3 w-3 mr-1" />
                    Handmade Certified
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-saffron border-saffron">
                    {product.region}
                  </Badge>
                  <Badge variant="outline">{product.category}</Badge>
                </div>
                
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-saffron text-saffron" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-bold text-foreground">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <Badge className="bg-terracotta text-primary-foreground">
                      {discount}% OFF
                    </Badge>
                  </>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Artisan Info */}
              {artisan && (
                <Link
                  to={`/artisans/${artisan.id}`}
                  className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                >
                  <img
                    src={artisan.avatar}
                    alt={artisan.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Created by</p>
                    <p className="font-display font-semibold">{artisan.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {artisan.region}, {artisan.state}
                    </div>
                  </div>
                  {artisan.isVerified && (
                    <Badge className="bg-saffron text-foreground">
                      <Award className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </Link>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <Button
                  variant="heritage"
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>

                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                {product.stock > 0 ? (
                  <span className="text-sage">✓ {product.stock} in stock</span>
                ) : (
                  <span className="text-terracotta">Out of stock</span>
                )}
              </p>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {[
                  { icon: Truck, label: "Free Shipping" },
                  { icon: Shield, label: "Authenticity Guaranteed" },
                  { icon: RefreshCw, label: "Easy Returns" },
                ].map((feature) => (
                  <div key={feature.label} className="text-center">
                    <feature.icon className="h-6 w-6 mx-auto mb-2 text-saffron" />
                    <p className="text-xs text-muted-foreground">{feature.label}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
