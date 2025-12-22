import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/products/ProductCard";
import { products, categories, regions } from "@/data/products";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [priceRange, setPriceRange] = useState<string>("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.artisanName.toLowerCase().includes(query) ||
          p.region.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Region filter
    if (selectedRegion) {
      result = result.filter((p) => p.region.toLowerCase().includes(selectedRegion.toLowerCase()));
    }

    // Price range filter
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedRegion, sortBy, priceRange]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedRegion("");
    setSortBy("featured");
    setPriceRange("");
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedRegion || priceRange;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <Select value={selectedCategory || "all"} onValueChange={(val) => setSelectedCategory(val === "all" ? "" : val)}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.name}>
                {cat.name} ({cat.count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Region */}
      <div>
        <label className="block text-sm font-medium mb-2">Region</label>
        <Select value={selectedRegion || "all"} onValueChange={(val) => setSelectedRegion(val === "all" ? "" : val)}>
          <SelectTrigger>
            <SelectValue placeholder="All Regions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            {regions.map((reg) => (
              <SelectItem key={reg.id} value={reg.name}>
                {reg.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium mb-2">Price Range</label>
        <Select value={priceRange || "all"} onValueChange={(val) => setPriceRange(val === "all" ? "" : val)}>
          <SelectTrigger>
            <SelectValue placeholder="Any Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Price</SelectItem>
            <SelectItem value="0-2000">Under ₹2,000</SelectItem>
            <SelectItem value="2000-5000">₹2,000 - ₹5,000</SelectItem>
            <SelectItem value="5000-15000">₹5,000 - ₹15,000</SelectItem>
            <SelectItem value="15000-50000">₹15,000 - ₹50,000</SelectItem>
            <SelectItem value="50000-999999">Above ₹50,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Products - Heritage Handloom</title>
        <meta name="description" content="Browse our collection of authentic handloom products from skilled artisans across India." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 heritage-pattern">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
            <p className="text-primary-foreground/80 max-w-2xl">
              Explore authentic handloom creations from master artisans across India. Each piece tells a story of tradition and craftsmanship.
            </p>
          </div>
        </section>

        <div className="container py-8">
          {/* Search & Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products, artisans, regions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>

              {/* Mobile Filters */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden md:block w-64 shrink-0">
              <div className="sticky top-24 p-6 bg-card rounded-xl border border-border">
                <h3 className="font-display text-lg font-semibold mb-6">Filters</h3>
                <FilterContent />
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
