"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PricingPackage } from "@/types";
import BookingModal from "@/components/ui/BookingModal";

const packages: PricingPackage[] = [
  {
    id: "basic",
    name: "Classic",
    price: "$12,000",
    isPopular: false,
    features: [
      "Ceremony & reception venue (6 hours)",
      "Tables, chairs & linens",
      "Basic decoration package",
      "Bridal suite access",
      "Complimentary parking",
      
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$18,500",
    isPopular: true,
    features: [
      "Everything in Classic",
      "Extended venue access (8 hours)",
      "Premium decoration & florals",
      "Professional photography (4 hours)",
      "Wedding coordinator"
    ],
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "$28,000",
    isPopular: false,
    features: [
      "Everything in Premium",
      "Full day venue access",
      "Luxury catering & bar service",
      "Photo & video (full day)",
      "Spa access for bridal party",
    ],
  },
];

export default function PackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <section id="packages" className="w-full py-25 px-6 md:px-26 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-medium text-[#0A0A0A]">
            Packages & Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-13 items-start pt-4">
          {packages.map((pkg) => (

            <div key={pkg.id} className="relative flex flex-col">

              {pkg.isPopular && (
                <div className="absolute top-0 right-0 -translate-x-1/2 z-10
                  bg-white border border-gray-200
                  px-4 h-[26px] flex items-center justify-center
                  rounded-b-[4px] shadow-sm"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#3B5956]">
                    Popular
                  </span>
                </div>
              )}

              {/* ── CARD ── */}
              <div
                className={`
                  flex flex-col p-8 rounded-[10px] h-full
                  ${pkg.isPopular
                    ? "bg-[#2D5741] text-white shadow-xl"
                    : "bg-white shadow-md"
                  }
                `}
              >
                {/* Name */}
                <h3 className={`text-3xl font-playfair font-normal mb-3 ${
                  pkg.isPopular ? "text-white" : "text-[#0A0A0A]"
                }`}>
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-3xl font-poppins font-medium ${
                    pkg.isPopular ? "text-white" : "text-[#0A0A0A]"
                  }`}>
                    {pkg.price}
                  </span>
                </div>

                {/* Divider */}
                <div className={`w-full h-[1px] mb-6 ${
                  pkg.isPopular ? "bg-white/20" : "bg-gray-200"
                }`} />

                {/* Features */}
                <ul className="flex flex-col gap-4 flex-1 mb-10">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          pkg.isPopular ? "text-white" : "text-[#2D5741]"
                        }`}
                      />
                      <span className={`text-sm font-poppins leading-snug ${
                        pkg.isPopular ? "text-white/90" : "text-[#6b6b6b]"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => setSelectedPackage(pkg.name)}
                  className={`
                    w-full py-4 text-sm font-poppins font-medium
                    tracking-widest transition-all duration-300 rounded-[4px]
                    ${pkg.isPopular
                      ? "bg-white text-[#2D5741] hover:bg-[#c9a96e] hover:text-white"
                      : "border-2 border-[#3B5956] text-[#3B5956] hover:bg-[#2D5741] hover:text-white"
                    }
                  `}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={selectedPackage !== null}
        onClose={() => setSelectedPackage(null)}
        packageType={selectedPackage || "Classic"}
      />
    </section>

  );
}