'use client';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id='about' className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image with decorative edge style */}
        <div className="relative group">
          <div className="rounded-[2rem] border-[6px] border-[#E2B57F] shadow-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src="https://static.thatsup.co/content/img/place/a/b/abraco-1.jpg"
              alt="Abraco Interior"
              width={700}
              height={500}
              className="object-cover w-full h-full rounded-[1.8rem]"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#5C4033] tracking-tight font-serif">
            Welcome to Abraco
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            At Abraco, we serve more than just food — we serve stories, warmth, and a sense of belonging. Our dishes are crafted with care, using fresh ingredients and timeless techniques passed down with love.
          </p>
          <p className="text-base text-gray-600 font-sans">
            Whether you're here for a quick bite or a slow, soulful meal, Abraco is your place to gather, unwind, and taste something unforgettable.
          </p>
          <button className="mt-4 inline-block bg-[#E2B57F] hover:bg-[#d3a96f] text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
