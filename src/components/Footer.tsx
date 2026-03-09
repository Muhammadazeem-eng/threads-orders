import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold mb-3">
            Socks & Threads
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Premium menswear essentials. Quality socks, blazers, t-shirts & trousers delivered to your doorstep.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm opacity-80 transition-opacity hover:opacity-100"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm opacity-80 mb-1">📞 +92 300 1234567</p>
          <p className="text-sm opacity-80 mb-3">✉️ hello@socksandthreads.com</p>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs opacity-60">
        © 2026 Socks & Threads. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
