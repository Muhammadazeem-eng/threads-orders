export type Category = "Socks" | "Blazers" | "T-Shirts" | "Trousers";

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
  {
    id: "1",
    name: "Classic Black Crew Socks",
    price: 499,
    category: "Socks",
    image: "https://placehold.co/400x500/1a1a2e/eee?text=Black+Crew+Socks",
    description: "Premium cotton crew socks with reinforced heel and toe for lasting comfort."
  },
  {
    id: "2",
    name: "Striped Ankle Socks Pack of 3",
    price: 899,
    salePrice: 699,
    category: "Socks",
    image: "https://placehold.co/400x500/2d3a4a/eee?text=Striped+Ankle+Socks",
    description: "Trendy striped ankle socks in a pack of 3. Perfect for everyday wear."
  },
  {
    id: "3",
    name: "Premium Cotton Sports Socks",
    price: 599,
    category: "Socks",
    image: "https://placehold.co/400x500/3a4a3d/eee?text=Sports+Socks",
    description: "Breathable sports socks with moisture-wicking technology."
  },
  {
    id: "4",
    name: "Dotted Dress Socks Pack of 5",
    price: 1499,
    salePrice: 999,
    category: "Socks",
    image: "https://placehold.co/400x500/4a3a2d/eee?text=Dress+Socks+x5",
    description: "Elegant dotted dress socks bundle. Ideal for formal and semi-formal occasions."
  },
  {
    id: "5",
    name: "Navy Blue Slim Fit Blazer",
    price: 5999,
    category: "Blazers",
    image: "https://placehold.co/400x500/1a2744/eee?text=Navy+Blazer",
    description: "Tailored slim fit blazer in classic navy. Perfect for business and events."
  },
  {
    id: "6",
    name: "Black Classic Blazer",
    price: 6499,
    salePrice: 4999,
    category: "Blazers",
    image: "https://placehold.co/400x500/111111/eee?text=Black+Blazer",
    description: "Timeless black blazer with premium fabric and modern cut."
  },
  {
    id: "7",
    name: "Grey Casual Blazer",
    price: 5499,
    category: "Blazers",
    image: "https://placehold.co/400x500/4a4a4a/eee?text=Grey+Blazer",
    description: "Versatile grey blazer for casual and semi-formal settings."
  },
  {
    id: "8",
    name: "White Essential Crew Neck",
    price: 999,
    category: "T-Shirts",
    image: "https://placehold.co/400x500/f5f5f0/333?text=White+Tee",
    description: "Soft 100% cotton crew neck tee. A wardrobe essential."
  },
  {
    id: "9",
    name: "Black Oversized T-Shirt",
    price: 1299,
    category: "T-Shirts",
    image: "https://placehold.co/400x500/1a1a1a/eee?text=Black+Oversized",
    description: "Relaxed fit oversized tee in premium heavyweight cotton."
  },
  {
    id: "10",
    name: "Olive Green Polo",
    price: 1499,
    salePrice: 1199,
    category: "T-Shirts",
    image: "https://placehold.co/400x500/4a5a3a/eee?text=Olive+Polo",
    description: "Classic polo shirt in olive green with ribbed collar."
  },
  {
    id: "11",
    name: "Beige Chino Trousers",
    price: 2499,
    category: "Trousers",
    image: "https://placehold.co/400x500/c4b08a/333?text=Beige+Chinos",
    description: "Comfortable slim fit chinos in versatile beige color."
  },
  {
    id: "12",
    name: "Black Formal Trousers",
    price: 2999,
    salePrice: 2499,
    category: "Trousers",
    image: "https://placehold.co/400x500/1a1a1a/eee?text=Black+Trousers",
    description: "Crisp formal trousers with a tailored fit for a polished look."
  }
];

export const WHATSAPP_NUMBER = "923001234567";

export const getWhatsAppLink = (product: Product) => {
  const price = product.salePrice || product.price;
  const message = encodeURIComponent(
    `Hi, I want to order: ${product.name} | Price: Rs. ${price}. Please confirm availability.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const categories: Category[] = ["Socks", "Blazers", "T-Shirts", "Trousers"];
