"use client";
import Image from "next/image";
import Link from "next/link";
import HerosectionImage from "@/public/Herosection.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-[90vh] md:min-h-[70vh] flex flex-col md:flex-row"
    >
      <div className="relative order-1 md:order-0 min-h-[40vh] md:min-h-full w-full md:w-[50%]">
        <Image
          src={HerosectionImage}
          alt="Wedding couple walking in garden"
          fill                       
          className="object-cover"    
        />
      </div>

      <div className="w-full order-0 md:order-1 md:w-[50%] bg-[#3B5956] flex items-center">
        <div className="px-4 py-10 lg:px-20 lg:py-16 md:py-0">

          <h1 className="text-4xl md:text-5xl w-[70%] lg:text-5xl font-playfair text-white leading-tight mb-6">
            Luxury resort and wedding venue
          </h1>

          <p className="text-white/80 text-[16px] md:text-base leading-relaxed mb-10">
            Nestled in the heart of breathtaking landscapes, our luxury resort
            offers an unparalleled setting for your dream wedding. With pristine
            gardens, elegant architecture, and world-class amenities, we create
            unforgettable moments that last a lifetime.
          </p>

          <Link
            href="#about"
            className="
              inline-block
              border border-white
              px-8 py-3
              rounded-[4px]
              font-[500]
              text-[#3B5956]
              text-md
              bg-white
              transition-all duration-300
            "
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}