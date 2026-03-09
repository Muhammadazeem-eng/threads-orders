const messages = [
  "🚚 Free Delivery Above Rs. 3,000",
  "💵 Cash on Delivery Available",
  "↩️ Easy Returns & Exchanges",
  "📦 Premium Quality Guaranteed",
  "🎁 New Arrivals Every Week",
];

const AnnouncementBar = () => {
  return (
    <div className="bg-primary overflow-hidden py-2">
      <div className="animate-scroll-left flex whitespace-nowrap">
        {[...messages, ...messages].map((msg, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium text-primary-foreground"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
