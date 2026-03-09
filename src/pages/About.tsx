const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-center font-display text-4xl font-bold text-foreground">Our Story</h1>
        <div className="mb-12 h-1 w-16 mx-auto bg-accent rounded-full" />

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p>
            <span className="font-display text-lg font-semibold text-foreground">Socks & Threads</span> was born out of a simple belief — every man deserves premium quality essentials without the premium price tag. We started with socks, perfected them, and expanded into blazers, t-shirts, and trousers.
          </p>
          <p>
            Based in Pakistan, we source the finest fabrics and work with skilled artisans to bring you clothing that looks great, feels incredible, and lasts. Every stitch tells a story of craftsmanship and care.
          </p>

          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Our Mission</h2>
            <p>
              To make premium menswear accessible to everyone. We believe style shouldn't be complicated or expensive. Simple, high-quality pieces that you'll reach for every day — that's what we do best.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Our Vision</h2>
            <p>
              To become Pakistan's most trusted menswear brand, known for uncompromising quality and customer-first service. We're building a community of well-dressed men, one thread at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
