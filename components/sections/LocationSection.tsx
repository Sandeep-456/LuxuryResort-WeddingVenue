import { MapPin, Phone, Mail, Clock } from "lucide-react";

const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.71278937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1614807637025!5m2!1sen!2sus";

const GOOGLE_MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=123+Paradise+Lane+New+York+NY+10001";

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    lines: [
      "123 Paradise Lane",
      "Luxury District",
      "New York, NY 10001",
    ],
  },
  {
    icon: Phone,
    title: "Contact",
    lines: [
      "Phone: (555) 123-4567",
      "Fax: (555) 123-4568",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      "weddings@luxuryresort.com",
      "events@luxuryresort.com",
    ],
  },
  {
    icon: Clock,
    title: "Viewing Hours",
    lines: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday - Sunday: 10:00 AM - 8:00 PM",
      "By appointment only",
    ],
    lastLineSmall: true, // "By appointment only" is smaller
  },
];

export default function LocationSection() {
  return (
    <section className="w-full bg-[#F5F1E8] py-16 px-6 md:px-16">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-playfair font-normal text-[#0A0A0A]">
          Visit Our Venue
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">

        {/* ── LEFT — Google Map ── */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-sm">
          <iframe
            src={GOOGLE_MAPS_EMBED}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Location"
            className="w-full"
          />
        </div>

        {/* ── RIGHT — Contact Details ── */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">

          {contactDetails.map((item) => (
            <div key={item.title} className="flex items-start gap-4">

              <div className="shrink-0 w-11 h-11 rounded-full bg-[#2D5741] flex items-center justify-center">
                <item.icon size={18} className="text-white" />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-[#0A0A0A] font-poppins font-semibold text-base">
                  {item.title}
                </h4>
                {item.lines.map((line, index) => (
                  <p
                    key={index}
                    className={`font-poppins ${
                      item.lastLineSmall && index === item.lines.length - 1
                        ? "text-xs text-[#9b9b9b]"
                        : "text-sm text-[#6b6b6b]"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>

            </div>
          ))}

          <div className="mt-2">
          <a
              href={GOOGLE_MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-[#2D5741] text-white
                px-8 py-3 rounded-md
                text-sm font-poppins font-medium
                hover:bg-[#4a7c59] transition-colors duration-300
              "
            >
              Get Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
