import { Link } from "react-router-dom";
import { Truck, Banknote, RotateCcw, Headphones } from "lucide-react";
import { defaultProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categoryCards = [
  { name: "Socks", image: "/socks/collection.png" },
  { name: "Vests", image: "/socks/vest-tshirt.png" },
];

const trustBadges = [
  { icon: Truck, label: "Free Shipping", sub: "Above Rs. 3,000" },
  { icon: Banknote, label: "COD Available", sub: "Pay on delivery" },
  { icon: RotateCcw, label: "Easy Returns", sub: "7-day returns" },
  { icon: Headphones, label: "24/7 Support", sub: "Always here for you" },
];

const featuredProducts = defaultProducts.slice(0, 8);

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <img src="/socks/cover.png" alt="Socks and Threads — Comfort Beneath Every Layer" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-lg">
            <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Comfort Beneath <span className="text-gradient-gold">Every Layer</span>
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Premium socks & undershirts. Quality essentials delivered to your doorstep.
            </p>
            <Link
              to="/products"
              className="inline-block rounded-md bg-accent px-8 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">Shop by Category</h2>
        <p className="mb-10 text-center text-muted-foreground">Find exactly what you're looking for</p>
        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
          {categoryCards.map((cat) => (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-4">
                <h3 className="font-display text-lg font-bold text-primary-foreground md:text-xl">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">Featured Products</h2>
          <p className="mb-10 text-center text-muted-foreground">Handpicked essentials for your wardrobe</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-block rounded-md border-2 border-accent px-8 py-3 text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <badge.icon size={24} className="text-accent" />
              </div>
              <h4 className="font-display text-sm font-bold text-foreground">{badge.label}</h4>
              <p className="text-xs text-muted-foreground">{badge.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
