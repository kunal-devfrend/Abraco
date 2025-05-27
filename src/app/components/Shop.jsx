'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Ethiopia",
    roast: "Light Roast",
    flavor: "Floral, Citrus, Tea-like",
    description: "Experience bright and fruity flavors with floral aroma, perfect for light brew lovers.",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/6PX6O_pLt3zZai0yIujVYw/348s.jpg",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    origin: "Colombia",
    roast: "Medium Roast",
    flavor: "Nutty, Chocolate, Balanced",
    description: "Rich, smooth with a balanced flavor profile and a hint of chocolate undertones.",
    image: "https://tse1.mm.bing.net/th?id=OIP.dplhBDFaIGDgxveWrGZxSgHaE7&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    origin: "Indonesia",
    roast: "Dark Roast",
    flavor: "Earthy, Bold, Low Acidity",
    description: "Full-bodied and earthy with a smooth finish, perfect for dark roast enthusiasts.",
    image: "https://assets.bonappetit.com/photos/5b2c0702f8a4481508189e71/16:9/w_2560%2Cc_limit/abraco-3.jpg",
  },
  {
    id: 4,
    name: "Kenyan AA",
    origin: "Kenya",
    roast: "Medium Roast",
    flavor: "Berry, Bright, Juicy",
    description: "Juicy acidity with vibrant berry notes, great for a refreshing cup.",
    image: "/images/kenyan-coffee.jpg",
  },
  {
    id: 5,
    name: "Guatemalan Antigua",
    origin: "Guatemala",
    roast: "Medium-Dark Roast",
    flavor: "Chocolate, Smoky, Spicy",
    description: "A smoky aroma with spicy undertones and rich chocolate flavors.",
    image: "/images/guatemalan-coffee.jpg",
  },
  {
    id: 6,
    name: "Brazilian Santos",
    origin: "Brazil",
    roast: "Light-Medium Roast",
    flavor: "Smooth, Sweet, Nutty",
    description: "Smooth and sweet coffee with subtle nutty hints, great for everyday drinking.",
    image: "/images/brazilian-coffee.jpg",
  },
];

export default function Shop() {
  const [showAll, setShowAll] = useState(false);

  // Determine number of visible cards based on screen size with CSS and JS fallback
  // We'll just show initially 2 cards on mobile and 3 on larger screens, so slice accordingly:
  const initialVisibleCount = 3; // Show 3 cards initially on laptops (md and up)
  const initialMobileCount = 2; // For mobile, we want to show only 2 initially

  // To handle responsive initial count, we can just show initialVisibleCount on desktop
  // and 2 cards on mobile by CSS hiding cards after 2 on mobile.  
  // But since React doesn't know screen size, we can just do a simpler approach:
  // Show initialVisibleCount cards initially; on mobile CSS hides some cards beyond 2.
  // On "Show More" show all.

  return (
    <section id="shop" className="relative py-10 px-8 md:px-24 lg:px-44 b text-center overflow-hidden">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#7B3F00] to-[#D2691E] text-transparent bg-clip-text drop-shadow-lg">
        Elevate Your Coffee Experience
      </h2>
      <p className="text-xl md:text-2xl text-[#4b2e05] max-w-4xl mx-auto mb-16 leading-relaxed font-semibold">
        Unlock the taste of luxury with our small-batch artisan blends. Each bag is a journey of flavor, crafted for those who demand more from their cup.
      </p>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20 text-left text-[#4b2e05]">
        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold mb-4 text-[#7B3F00]">Artisan Roasting</h3>
          <p className="text-lg text-[#6b4423]">Slow-roasted in small batches for full flavor and aroma control.</p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold mb-4 text-[#7B3F00]">Eco-Friendly Packaging</h3>
          <p className="text-lg text-[#6b4423]">Our bags are 100% compostable and made from sustainable materials.</p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold mb-4 text-[#7B3F00]">Barista-Grade Quality</h3>
          <p className="text-lg text-[#6b4423]">Tried and tested by professionals, perfect for home brewing.</p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mb-8">
        {(showAll ? products : products.slice(0, initialVisibleCount)).map(
          ({ id, name, origin, roast, flavor, description, image }) => (
            <div
              key={id}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-3xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
              </div>
              <div className="p-8 text-left">
                <h4 className="font-extrabold text-2xl mb-2 text-[#7B3F00]">{name}</h4>
                <p className="text-[#4b2e05] font-semibold mb-1">
                  Origin: <span className="font-normal">{origin}</span>
                </p>
                <p className="text-[#4b2e05] font-semibold mb-1">
                  Roast Level: <span className="font-normal">{roast}</span>
                </p>
                <p className="text-[#4b2e05] font-semibold mb-3">
                  Flavor Notes: <span className="font-normal">{flavor}</span>
                </p>
                <p className="text-gray-700 mb-6">{description}</p>
                <Button className="bg-gradient-to-r from-[#7B3F00] to-[#D2691E] hover:from-[#D2691E] hover:to-[#7B3F00] text-white font-bold px-6 py-3 rounded-full shadow-lg transition">
                  Buy Now
                </Button>
              </div>
            </div>
          )
        )}
      </div>

      {/* Show More / Show Less Button */}
      {products.length > initialVisibleCount && (
        <div className="flex justify-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-[#7B3F00] to-[#D2691E] hover:from-[#D2691E] hover:to-[#7B3F00] text-white text-xl px-12 py-4 font-bold shadow-xl rounded-full"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </section>
  );
}
