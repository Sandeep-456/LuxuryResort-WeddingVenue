import Image from "next/image";
import VenueViewImage from "@/public/Venueview.png";
import VenueViewImage1 from "@/public/Venueview1.png"

const venues = [
  {
    id: 1,
    src: VenueViewImage1,
    alt: "Grand Ballroom",
  },
  {
    id: 2,
    src: VenueViewImage,
    alt: "Garden Terrace",
  },
];

export default function VenueShowcase() {
  return (
    <section className="w-full bg-[#F5F1E8] px-4 py-8 md:px-18 md:py-15">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="relative h-[220px] md:h-[560px] rounded-2xl overflow-hidden group"
          >
            <Image
              src={venue.src}
              alt={venue.alt}
              fill
              className="transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}