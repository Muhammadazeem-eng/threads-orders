import { MessageCircle } from "lucide-react";
import { Product, getWhatsAppLink } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card group overflow-hidden rounded-lg border border-border bg-card">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.salePrice && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
            SALE
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mb-2 font-display text-base font-semibold leading-tight text-card-foreground">
          {product.name}
        </h3>
        <div className="mb-3 flex items-center gap-2">
          {product.salePrice ? (
            <>
              <span className="text-lg font-bold text-accent">Rs. {product.salePrice.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground line-through">Rs. {product.price.toLocaleString()}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-foreground">Rs. {product.price.toLocaleString()}</span>
          )}
        </div>
        <a
          href={getWhatsAppLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          <MessageCircle size={16} />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
