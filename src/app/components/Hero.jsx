'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center px-6 text-center"
      style={{
        backgroundImage:
          "url('https://assets-global.website-files.com/641a3249b8c4027539157305/649cc039c4d3cad3c4f491de_abraco.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white font-serif space-y-6 px-4">
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
          “Good Food, Good Mood.”
        </h1>
        <p className="text-xl text-gray-300 max-w-xl mx-auto">
          Experience the joy of fresh flavors, handcrafted with love to delight your senses.
        </p>
        <Link
          href="#menu"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-md shadow-lg transition-colors duration-300"
        >
          Discover Our Menu
        </Link>
      </div>
    </section>
  );
}
