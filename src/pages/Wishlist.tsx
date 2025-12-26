import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

const Wishlist = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      artisan: item.artisan,
    });
  };

  return (
    <>
      <Helmet>
        <title>My Wishlist - Heritage Handloom</title>
        <meta name="description" content="View and manage your saved handloom favorites" />
      </Helmet>

      <main className="container py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              My Wishlist
            </h1>
            <p className="text-muted-foreground mt-2">
              {items.length} {items.length === 1 ? "item" : "items"} saved
            </p>
          </div>
          {items.length > 0 && (
            <Button variant="outline" onClick={clearWishlist}>
              Clear All
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Save items you love to your wishlist and shop later
            </p>
            <Link to="/products">
              <Button variant="heritage">Browse Products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
              >
                <Link to={`/products/${item.id}`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/products/${item.id}`}>
                    <h3 className="font-display font-semibold text-foreground hover:text-secondary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">{item.artisan}</p>
                  <p className="font-semibold text-secondary mt-2">
                    ₹{item.price.toLocaleString()}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="heritage"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Wishlist;
