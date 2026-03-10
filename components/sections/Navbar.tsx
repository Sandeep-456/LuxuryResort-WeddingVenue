"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Venues", href: "#venues" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#2D5741] flex items-center justify-center">
            <span className="text-white text-xs font-bold">L</span>
          </div>
          <h1 className="text-[#0A0A0A] font-semibold text-lg tracking-wide">
            The Luxury Resort
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#0A0A0A] text-sm hover:text-[#2D5741] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="md:hidden text-[#2D5741]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE  MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#2c2c2c] text-sm hover:text-[#2D5741] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)} 
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}