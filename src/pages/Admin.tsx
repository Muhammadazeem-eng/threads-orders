import { useState, useEffect } from "react";
import { Pencil, Trash2, Plus, LogOut } from "lucide-react";
import { defaultProducts, categories, type Product, type Category } from "@/data/products";

const ADMIN_PASSWORD = "admin123";

const Admin = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [heroBanner, setHeroBanner] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", price: "", salePrice: "", category: "Socks" as Category, image: "", description: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("st-products");
    setProducts(saved ? JSON.parse(saved) : defaultProducts);
    setHeroBanner(localStorage.getItem("st-hero-banner") || "");
    setIsAuth(localStorage.getItem("st-admin-auth") === "true");
  }, []);

  const saveProducts = (p: Product[]) => {
    setProducts(p);
    localStorage.setItem("st-products", JSON.stringify(p));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuth(true);
      localStorage.setItem("st-admin-auth", "true");
    } else {
      alert("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("st-admin-auth");
  };

  const resetForm = () => {
    setForm({ name: "", price: "", salePrice: "", category: "Socks", image: "", description: "" });
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product: Product = {
      id: editingId || Date.now().toString(),
      name: form.name,
      price: Number(form.price),
      salePrice: form.salePrice ? Number(form.salePrice) : undefined,
      category: form.category,
      image: form.image || `https://placehold.co/400x500/333/eee?text=${encodeURIComponent(form.name)}`,
      description: form.description,
    };

    if (editingId) {
      saveProducts(products.map((p) => (p.id === editingId ? product : p)));
    } else {
      saveProducts([...products, product]);
    }
    resetForm();
  };

  const handleEdit = (p: Product) => {
    setEditingId(p.id);
    setForm({
      name: p.name,
      price: p.price.toString(),
      salePrice: p.salePrice?.toString() || "",
      category: p.category,
      image: p.image,
      description: p.description,
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this product?")) {
      saveProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleHeroBannerSave = () => {
    localStorage.setItem("st-hero-banner", heroBanner);
    alert("Hero banner updated!");
  };

  if (!isAuth) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 rounded-lg border border-border bg-card p-8">
          <h1 className="font-display text-2xl font-bold text-card-foreground text-center">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
          />
          <button type="submit" className="w-full rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Hero Banner */}
      <div className="mb-10 rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 font-display text-lg font-semibold text-card-foreground">Hero Banner</h2>
        <div className="flex gap-2">
          <input
            type="url"
            placeholder="Hero banner image URL"
            value={heroBanner}
            onChange={(e) => setHeroBanner(e.target.value)}
            className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
          />
          <button onClick={handleHeroBannerSave} className="rounded-md bg-accent px-5 py-2 text-sm font-bold text-accent-foreground">
            Save
          </button>
        </div>
      </div>

      {/* Add/Edit Form */}
      <form onSubmit={handleSubmit} className="mb-10 rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 font-display text-lg font-semibold text-card-foreground flex items-center gap-2">
          <Plus size={18} /> {editingId ? "Edit Product" : "Add Product"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input required placeholder="Product Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
          <input required type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
          <input type="number" placeholder="Sale Price (optional)" value={form.salePrice} onChange={(e) => setForm({ ...form, salePrice: e.target.value })} className="rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as Category })} className="rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring">
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <input placeholder="Image URL (optional)" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
          <input placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div className="mt-4 flex gap-2">
          <button type="submit" className="rounded-md bg-accent px-6 py-2 text-sm font-bold text-accent-foreground">
            {editingId ? "Update" : "Add"} Product
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="rounded-md bg-secondary px-6 py-2 text-sm font-medium text-secondary-foreground">
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Products Table */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Image</th>
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Name</th>
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Price</th>
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Category</th>
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-border bg-card">
                <td className="px-4 py-3"><img src={p.image} alt={p.name} className="h-10 w-10 rounded object-cover" /></td>
                <td className="px-4 py-3 text-card-foreground font-medium">{p.name}</td>
                <td className="px-4 py-3 text-card-foreground">
                  {p.salePrice ? <><span className="text-accent font-bold">Rs. {p.salePrice}</span> <span className="line-through text-muted-foreground">Rs. {p.price}</span></> : `Rs. ${p.price}`}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{p.category}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(p)} className="rounded p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"><Pencil size={15} /></button>
                    <button onClick={() => handleDelete(p.id)} className="rounded p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"><Trash2 size={15} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
