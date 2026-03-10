"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HistoryImage from "@/public/HistoryImage.png";
import VenueViewImage from "@/public/Venueview.png";
import VisionImage from "@/public/VisionImage.png";

const slides = [
  {
    id: 1,
    src: VisionImage,
    alt: "Grand ballroom with chandeliers",
    name: "Orangedale Ballroom",
  },
  {
    id: 2,
    src: VenueViewImage,
    alt: "Outdoor garden ceremony",
    name: "Garden Terrace",
  },
  {
    id: 3,
    src: HistoryImage,
    alt: "Elegant reception hall",
    name: "Grand Reception Hall",
  },
];

export default function VenueCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () =>
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));

  return (
    <section
      id="venues"
      className="w-full bg-[#F5F1E8] flex items-center justify-center py-6"
    >
      <div className="relative w-full flex items-center gap-4">

        <button
          onClick={prev}
          className=" absolute left-5 cursor-pointer
            shrink-0 w-10 h-10 rounded-full
            border border-white/60 bg-transparent
            flex items-center justify-center
            hover:bg-white/20 transition-colors duration-200
            z-10
          "
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        <div className="relative flex-1 h-[420px] md:h-[580px] overflow-hidden">

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}

          <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-1">
            <span className="text-white/70 text-sm font-poppins">
              {current + 1}/{slides.length}
            </span>
            <span className="text-white text-lg font-playfair">
              {slides[current].name}
            </span>
          </div>

          <div className="absolute bottom-7 right-6 z-10 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  transition-all duration-300 rounded-full
                  ${index === current
                    ? "w-6 h-2 bg-white rounded-full"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80 rounded-full"
                  }
                `}
              />
            ))}
          </div>

        </div>

        <button
          onClick={next}
          className=" absolute right-5 cursor-pointer
            shrink-0 w-10 h-10 rounded-full
            border border-white/60 bg-transparent
            flex items-center justify-center
            hover:bg-white/20 transition-colors duration-200
            z-10
          "
        >
          <ChevronRight size={20} className="text-white" />
        </button>

      </div>
    </section>
  );
}