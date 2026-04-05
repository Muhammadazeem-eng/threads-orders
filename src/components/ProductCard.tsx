import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Product, getWhatsAppLink, SOCK_COLORS, VEST_SIZES } from "@/data/products";

// ── Sock Modal ───────────────────────────────────────────────────────────────
const SockModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleColor = (name: string) =>
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );

  const colorNote =
    selected.length > 0 ? selected.join(", ") : "Black, Blue, Grey, Brown (Full Set)";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full bg-background/80 p-1.5 text-muted-foreground hover:text-foreground">
          <X size={18} />
        </button>

        <div className="w-full overflow-hidden bg-muted" style={{ maxHeight: "320px" }}>
          <img src={product.image} alt={product.name} className="h-full w-full object-contain" style={{ maxHeight: "320px" }} />
        </div>

        <div className="p-5">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Socks — Set of 4 Pairs</p>
          <h2 className="mb-1 font-display text-xl font-bold text-card-foreground">{product.name}</h2>
          <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>

          <div className="mb-4">
            <p className="mb-2 text-sm font-semibold text-foreground">
              Available Colors <span className="text-xs font-normal text-muted-foreground">(tap to select)</span>
            </p>
            <div className="flex gap-3">
              {SOCK_COLORS.map((color) => (
                <button key={color.name} onClick={() => toggleColor(color.name)} title={color.name} className="flex flex-col items-center gap-1 transition-transform hover:scale-110">
                  <span
                    className={`h-8 w-8 rounded-full border-2 transition-all ${selected.includes(color.name) ? "border-accent scale-110 shadow-md" : "border-border"}`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-[10px] text-muted-foreground">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-accent">Rs. 1,999</span>
            <span className="text-sm text-muted-foreground">/ set of 4 pairs</span>
          </div>

          <a
            href={getWhatsAppLink(product, colorNote)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <MessageCircle size={16} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

// ── Vest Modal ───────────────────────────────────────────────────────────────
const VestModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const [selectedSize, setSelectedSize] = useState("M");

  const sizeObj = VEST_SIZES.find((s) => s.label === selectedSize)!;
  const totalPrice = product.price + sizeObj.extra;

  const orderMessage = `Hi, I want to order: ${product.name} | Size: ${selectedSize} | Pack of 3 | Price: Rs. ${totalPrice}. Please confirm availability.`;
  const waLink = `https://wa.me/923098147346?text=${encodeURIComponent(orderMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full bg-background/80 p-1.5 text-muted-foreground hover:text-foreground">
          <X size={18} />
        </button>

        <div className="w-full overflow-hidden bg-muted" style={{ maxHeight: "320px" }}>
          <img src={product.image} alt={product.name} className="h-full w-full object-contain" style={{ maxHeight: "320px" }} />
        </div>

        <div className="p-5">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Vests — Pack of 3</p>
          <h2 className="mb-1 font-display text-xl font-bold text-card-foreground">{product.name}</h2>
          <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>

          {/* Size selector */}
          <div className="mb-4">
            <p className="mb-2 text-sm font-semibold text-foreground">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {VEST_SIZES.map((s) => (
                <button
                  key={s.label}
                  onClick={() => setSelectedSize(s.label)}
                  className={`min-w-[48px] rounded-lg border-2 px-3 py-2 text-sm font-bold transition-all ${
                    selectedSize === s.label
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-background text-foreground hover:border-accent/50"
                  }`}
                >
                  {s.label}
                  {s.extra > 0 && (
                    <span className="block text-[9px] font-normal leading-tight opacity-70">+Rs.{s.extra}</span>
                  )}
                </button>
              ))}
            </div>
            {sizeObj.extra > 0 && (
              <p className="mt-2 text-xs text-muted-foreground">
                +Rs. {sizeObj.extra} added for {selectedSize} size
              </p>
            )}
          </div>

          {/* Price */}
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-accent">Rs. {totalPrice.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground">/ pack of 3</span>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <MessageCircle size={16} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

// ── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ product }: { product: Product }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const isSock = product.category === "Socks";
  const isVest = product.category === "Vests";

  return (
    <>
      <div
        className="product-card group overflow-hidden rounded-lg border border-border bg-card cursor-pointer"
        onClick={() => (isSock || isVest) && setModalOpen(true)}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {(isSock || isVest) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
              <span className="rounded-full bg-background/90 px-4 py-1.5 text-xs font-bold text-foreground shadow">
                View Details
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {isSock ? "Socks — Set of 4" : isVest ? "Vests — Pack of 3" : product.category}
          </p>
          <h3 className="mb-2 font-display text-base font-semibold leading-tight text-card-foreground">
            {product.name}
          </h3>

          {/* Sock color dots */}
          {isSock && (
            <div className="mb-2 flex gap-1.5">
              {SOCK_COLORS.map((c) => (
                <span key={c.name} title={c.name} className="h-4 w-4 rounded-full border border-border" style={{ backgroundColor: c.hex }} />
              ))}
            </div>
          )}

          {/* Vest size hint */}
          {isVest && (
            <p className="mb-2 text-[10px] text-muted-foreground">S / M / L / XL / XXL</p>
          )}

          <div className="mb-3 flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">Rs. {product.price.toLocaleString()}</span>
            {isVest && <span className="text-xs text-muted-foreground">/ pack of 3</span>}
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">
            View & Order
          </button>
        </div>
      </div>

      {modalOpen && isSock && <SockModal product={product} onClose={() => setModalOpen(false)} />}
      {modalOpen && isVest && <VestModal product={product} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default ProductCard;
