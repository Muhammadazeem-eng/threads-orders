export type Category = "Socks" | "Vests";

export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  category: Category;
  image: string;
  description: string;
}

export const defaultProducts: Product[] = [
  // ── Socks — each sold as a Set of 4 (Black, Blue, Grey, Brown) ────────────
  {
    id: "1",
    name: "Classic Crew Socks",
    price: 1999,
    category: "Socks",
    image: "/socks/black-crew-socks.png",
    description: "Premium cotton crew socks with reinforced heel and toe. Comes as a set of 4 pairs in Black, Blue, Grey & Brown."
  },
  {
    id: "2",
    name: "Striped Ankle Socks",
    price: 1999,
    category: "Socks",
    image: "/socks/gray-striped-socks.png",
    description: "Stylish striped ankle socks in a perfect casual fit. Comes as a set of 4 pairs in Black, Blue, Grey & Brown."
  },
  {
    id: "3",
    name: "Sports Socks",
    price: 1999,
    category: "Socks",
    image: "/socks/sport-socks.png",
    description: "Breathable cushioned socks for active wear. Comes as a set of 4 pairs in Black, Blue, Grey & Brown."
  },
  {
    id: "4",
    name: "Striped Dress Socks",
    price: 1999,
    category: "Socks",
    image: "/socks/dress-socks.png",
    description: "Elegant striped dress socks for formal occasions. Comes as a set of 4 pairs in Black, Blue, Grey & Brown."
  },
  {
    id: "5",
    name: "Fine Striped Socks",
    price: 1999,
    category: "Socks",
    image: "/socks/navy-striped-socks.png",
    description: "Classic fine-stripe socks, versatile for any outfit. Comes as a set of 4 pairs in Black, Blue, Grey & Brown."
  },
  {
    id: "6",
    name: "Solid Crew Socks",
    price: 1999,
    category: "Socks",
    image: "/socks/navy-crew-socks.png",
    description: "Clean solid crew socks, the everyday reliable choice. Comes as a set of 4 pairs in Black, Blue, Grey & Brown."
  },
  {
    id: "7",
    name: "Premium Crew Socks",
    price: 1999,
    category: "Socks",
    image: "/socks/brown-socks.png",
    description: "Luxuriously soft premium cotton crew socks. Comes as a set of 4 pairs in Black, Blue, Grey & Brown."
  },
  {
    id: "8",
    name: "Everyday Comfort Socks",
    price: 1999,
    category: "Socks",
    image: "/socks/gray-socks.png",
    description: "Soft everyday socks with subtle detailing. Comes as a set of 4 pairs in Black, Blue, Grey & Brown."
  },
  // ── Vests / Undershirts ────────────────────────────────────────────────────
  {
    id: "10",
    name: "White Sleeveless Undershirt",
    price: 1199,
    category: "Vests",
    image: "/socks/vest-sleeveless.png",
    description: "Classic white sleeveless cotton undershirt. Pack of 3. Lightweight, durable and comfortable all day."
  },
  {
    id: "9",
    name: "White Half-Sleeve Undershirt",
    price: 1499,
    category: "Vests",
    image: "/socks/vest-tshirt.png",
    description: "Soft 100% cotton white half-sleeve undershirt. Pack of 3. Smooth, breathable and perfectly fitted."
  },
  {
    id: "11",
    name: "Black Sleeveless Undershirt",
    price: 1399,
    category: "Vests",
    image: "/socks/black-sleeveless.png",
    description: "Classic black sleeveless cotton undershirt. Pack of 3. Lightweight, durable and comfortable all day."
  },
  {
    id: "12",
    name: "Black Half-Sleeve Undershirt",
    price: 1799,
    category: "Vests",
    image: "/socks/black-halfsleeve.png",
    description: "Soft 100% cotton black half-sleeve undershirt. Pack of 3. Smooth, breathable and perfectly fitted."
  },
];

export const WHATSAPP_NUMBER = "923098147346";

export const getWhatsAppLink = (product: Product, colorNote?: string) => {
  const price = product.salePrice || product.price;
  const colorPart = colorNote ? ` | Colors: ${colorNote}` : "";
  const message = encodeURIComponent(
    `Hi, I want to order: ${product.name}${colorPart} | Price: Rs. ${price}. Please confirm availability.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const categories: Category[] = ["Socks", "Vests"];

export const SOCK_COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "Blue",  hex: "#1e3a5f" },
  { name: "Grey",  hex: "#8a8a8a" },
  { name: "Brown", hex: "#6b3a2a" },
];

export const VEST_COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "White", hex: "#f0f0f0" },
];

export const VEST_SIZES = [
  { label: "S",   extra: 0 },
  { label: "M",   extra: 0 },
  { label: "L",   extra: 0 },
  { label: "XL",  extra: 100 },
  { label: "XXL", extra: 200 },
];
