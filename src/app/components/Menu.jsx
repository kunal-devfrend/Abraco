'use client';
import Image from "next/image";

export default function MenuHighlights() {
  const items = [
    {
      name: "Signature Platter",
      desc: "A gourmet selection of seasonal ingredients, beautifully arranged and served fresh.",
      price: "$18.00",
      img: "https://order.thefishermanlounge.com/wp-content/uploads/2020/04/Platter-Signature-couple.png",
    },
    {
      name: "Classic Bruschetta",
      desc: "Fresh tomatoes, basil, and garlic on toasted artisan bread.",
      price: "$8.50",
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/06/12/8641161_bruschetta-chicken_s4x3.jpg",
    },
    {
      name: "Savory Tacos",
      desc: "Three crispy tacos filled with spiced veggies and a creamy dressing.",
      price: "$10.00",
      img: "https://img.freepik.com/premium-photo/delectable-savory-tacos-with-flavorful-vegetables_1073912-2452.jpg",
    },
  ];

  return (
    <section
      id="menu"
      className="relative bg-[#fefcfb] bg-[url('https://www.transparenttextures.com/patterns/white-wall-3.png')] bg-cover bg-center py-10 px-6 md:px-16"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-400 text-transparent bg-clip-text tracking-wide">
          Handpicked Delights
        </h2>
        <p className="mt-4 text-[#7a7a7a] text-lg font-medium">Crafted to perfection, served with care</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#fff9f5] border border-[#eccfc2] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            <div className="relative w-full h-60 overflow-hidden rounded-t-3xl">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority={i === 0}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#4d2c24] mb-1">{item.name}</h3>
              <p className="text-[#d36135] font-bold text-md mb-2">{item.price}</p>
              <p className="text-[#7c6f64] flex-grow text-sm">{item.desc}</p>
              <button className="mt-5 bg-gradient-to-r from-[#f88e61] to-[#e75e36] text-white font-medium rounded-full py-2 px-5 hover:scale-105 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
