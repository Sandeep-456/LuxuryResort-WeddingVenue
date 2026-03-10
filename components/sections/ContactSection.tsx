"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import BookingModal from "@/components/ui/BookingModal";

const contacts = [
  {
    icon: Phone,
    title: "Call Us",
    line1: "(555) 123-4567",
    line2: "Mon–Sun 9am–8pm",
  },
  {
    icon: Mail,
    title: "Email Us",
    line1: "weddings@luxuryresort.com",
    line2: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    line1: "123 Paradise Lane",
    line2: "By appointment only",
  },
];


export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#F5F1E8] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-[40px] font-[500] text-[#0A0A0A] leading-tight">
            Ready to book your dream wedding?
          </h2>
          <p className="text-[#4A5565] text-[18px] font-poppins mt-4">
            Contact us today to schedule a tour and consultation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 mb-12">
            {contacts.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-[#2D5741] flex items-center justify-center">
                  <item.icon size={22} className="text-white" />
                </div>

                <h4 className="text-[#0A0A0A] font-poppins font-semibold text-base mt-1">
                  {item.title}
                </h4>

                <p className="text-[#4A5565] font-poppins text-[16px]">
                  {item.line1}
                </p>
                <p className="text-[#6A7282] font-poppins text-[14px]">
                  {item.line2}
                </p>
              </div>
            ))}
          </div>

          {/* ── Schedule a Tour Button ── */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="
              bg-[#2D5741] text-white
              px-12 py-4 rounded-md
              text-sm font-poppins font-medium
              hover:bg-[#4a7c59] transition-colors duration-300
            "
          >
            Schedule a Tour
          </button>

        </div>
      </section>

      {/* ── Booking Modal ── */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageType="Schedule a Tour"
      />
    </>
  );
}