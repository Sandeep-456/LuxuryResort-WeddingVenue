import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const quickLinks = ["Home", "About", "Venues", "Packages", "Gallery", "Contact"];

const services = [
  "Wedding Planning",
  "Catering",
  "Photography",
  "Floral Design",
  "Entertainment",
  "Accommodations",
];

const socialIcons = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Mail, label: "Email" },
];

const bottomLinks = ["Privacy Policy", "Terms of Service", "Sitemap"];

export default function Footer() {
  return (
    <footer className="w-full bg-[#2D4442]">

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[18px] font-semibold text-base">
              About Us
            </h4>
            <p className="font-poppins text-[#D1D5DC] text-[14px] leading-relaxed">
              The Luxury Resort has been creating unforgettable wedding
              experiences for over 50 years. Our commitment to excellence
              ensures your special day is perfect.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[18px] font-poppins font-semibold text-base">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 font-poppins text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[18px] font-poppins font-semibold text-base">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/60 font-poppins text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[18px] font-poppins font-semibold text-base">
              Connect With Us
            </h4>

            <div className="flex items-center gap-4">
              {socialIcons.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="
                    w-10 h-10 rounded-full
                    bg-[#3d6b53] cursor-pointer
                    flex items-center justify-center
                    hover:bg-[#4a7c59] transition-colors duration-200
                  "
                >
                  <Icon size={16} className="text-white" />
                </button>
              ))}
            </div>

            <p className="text-white/60 font-poppins text-sm leading-relaxed mt-1">
              Newsletter: Stay updated with our latest offerings and exclusive deals.
            </p>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 mx-8 md:mx-16" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-white/40 font-poppins text-xs text-center md:text-left">
          © 2026 The Luxury Resort. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {bottomLinks.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-white/40 font-poppins text-xs hover:text-white/70 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

      </div>

    </footer>
  );
}