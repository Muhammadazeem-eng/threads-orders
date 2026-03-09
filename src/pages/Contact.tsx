import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-2 text-center font-display text-4xl font-bold text-foreground">Get in Touch</h1>
      <p className="mb-12 text-center text-muted-foreground">We'd love to hear from you</p>

      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        {/* Info */}
        <div className="space-y-6">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp">
              <MessageCircle size={22} className="text-background" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-card-foreground">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">+92 300 1234567</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Phone size={22} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-card-foreground">Phone</h3>
              <p className="text-sm text-muted-foreground">+92 300 1234567</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Mail size={22} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-card-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">hello@socksandthreads.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <MapPin size={22} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-card-foreground">Address</h3>
              <p className="text-sm text-muted-foreground">Gulberg III, Lahore, Pakistan</p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6">
          <div>
            <label className="mb-1 block text-sm font-medium text-card-foreground">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-card-foreground">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-card-foreground">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
