import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { defaultProducts, categories, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") as Category | null;
  const [activeCategory, setActiveCategory] = useState<string>(initialCat || "All");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = activeCategory === "All"
    ? defaultProducts
    : defaultProducts.filter((p) => p.category === activeCategory);

  const handleFilter = (cat: string) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-2 text-center font-display text-3xl font-bold text-foreground md:text-4xl">Our Products</h1>
      <p className="mb-8 text-center text-muted-foreground">Premium menswear for every occasion</p>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No products found in this category.</p>
      )}
    </div>
  );
};

export default Products;
