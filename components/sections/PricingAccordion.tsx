"use client";

import { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import Image from "next/image";
import Bride_groom_image from "@/public/Bride_and_Groom.png"

type AccordionItem = {
  id: number;
  name: string;
  price: string;
};

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    name: "Princess Ceremony",
    price: "€4,600",
  },
  {
    id: 2,
    name: "Radiant Ceremony",
    price: "€6,800",
  },
  {
    id: 3,
    name: "Suntory Greenery",
    price: "€8,900",
  },
  {
    id: 4,
    name: "Elopement Package",
    price: "€9,950",
  },
  {
    id: 5,
    name: "Le Visions Spa Package",
    price: "€1,000",
  },
];

export default function PricingAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#F5F1E8] px-6 py-8 md:py-25 md:px-15">
      <div className="max-w-full gap-25 flex flex-col md:flex-row min-h-[600px]">

        <div className="w-full md:w-1/2 flex flex-col">

          <h2 className="text-4xl md:text-5xl font-playfair font-normal text-[#0A0A0A] leading-tight mb-4">
            Lorem Ipsum Pricing Title
          </h2>

          <p className="text-[#6b6b6b] text-sm font-poppins leading-relaxed mb-10">
            Our boutique hotel can hold receptions for up to 400 guests and
            provides a variety of venues.
          </p>

          <div className="flex flex-col flex-1">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-300"
              >
                <button
                  onClick={() => handleToggle(item.id)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-poppins font-semibold text-[#0A0A0A]">
                      {item.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <ChevronDown
                      size={18}
                      className={`text-[#0A0A0A] transition-transform duration-300 ${
                        openId === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openId === item.id
                      ? "max-h-40 opacity-100 pb-5"
                      : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <p className="text-[#6b6b6b] text-sm font-poppins leading-relaxed">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button className="
              border border-[#0A0A0A] text-[#0A0A0A]
              px-8 py-4 text-xs font-poppins font-semibold
              uppercase tracking-[3px]
              hover:bg-[#0A0A0A] hover:text-white
              transition-all duration-300 cursor-pointer
            ">
              Enquiry Button
            </button>
          </div>

        </div>

        <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-full">
          <Image
            src={Bride_groom_image}
            alt="Wedding ceremony guests"
            fill
            className="object-cover rounded-[10px]"
          />
        </div>

      </div>
    </section>
  );
}