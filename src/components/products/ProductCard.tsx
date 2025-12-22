import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Heart, ShoppingCart, Star, Award } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      artisan: product.artisanName,
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-saffron/50 hover:shadow-elevated transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isHandmade && (
              <Badge className="bg-primary text-primary-foreground">
                <Award className="h-3 w-3 mr-1" />
                Handmade
              </Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-terracotta text-primary-foreground">
                {discount}% OFF
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background hover:text-terracotta"
            onClick={(e) => {
              e.preventDefault();
              // Wishlist functionality
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button
              variant="heritage"
              className="w-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-saffron font-medium mb-1">{product.region}</p>
          <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1 group-hover:text-saffron transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">by {product.artisanName}</p>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <Star className="h-4 w-4 fill-saffron text-saffron" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-foreground">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
