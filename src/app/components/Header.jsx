"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-md z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="https://a35f7f06ff3e273dee53.cdn6.editmysite.com/uploads/b/a35f7f06ff3e273dee532b4b61c02df1d163ed461c9193ace9e25888d6bd7648/watercolor%20abraco_1714098040.jpg?width=2400&optimize=medium"
              alt="Abraco Logo"
              width={64}
              height={64}
              className="object-contain rounded-none" // no background, full-size
            />
            <span className="text-3xl font-bold tracking-wider italic text-[#7B3F00] font-serif">
              Abraco
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 font-medium text-lg text-gray-800">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-black transition-colors">
              About
            </Link>
            <Link href="#menu" className="hover:text-black transition-colors">
              Menu
            </Link>
            <Link href="#shop" className="hover:text-black transition-colors">
              Shop
            </Link>
            <Link
              href="#contact"
              className="hover:text-black transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Buy Now Button */}
          <div className="hidden md:flex">
            <Link
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-[#5C4033] text-white text-center py-2 px-4 rounded-lg mt-2 font-semibold shadow-sm hover:bg-[#4a3229] hover:shadow-md transition-all duration-200"
            >
              Buy Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-7 h-7 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`absolute top-full right-4 w-64 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 transition-transform duration-300 ease-in-out z-40 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-base font-medium text-gray-800">
            {["Home", "About", "Menu", "Shop", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition-all"
                >
                  {item}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="#shop"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-[#5C4033] text-white text-center py-2 px-4 rounded-xl font-semibold shadow-md hover:bg-[#4a3229] hover:shadow-lg transition-all duration-200"
              >
                Buy Now
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
