import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in your products.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-background" fill="currentColor" />
    </a>
  );
};

export default WhatsAppFloat;
