import Image from "next/image";
import CateringImage from "@/public/catering.png";

export default function CateringSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* LEFT — Food Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[400px] md:h-[480px] overflow-hidden">
            <Image
              src={CateringImage}
              alt="Catering spread"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
        </div>

        {/* RIGHT — Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A0A0A] leading-tight">
            Catering
          </h2>
          <p className="text-[#364153] text-sm md:text-base leading-relaxed">
            Our award-winning culinary team creates exceptional dining experiences tailored to your taste and vision. From elegant plated dinners to lavish buffets, every dish is prepared with the finest ingredients and presented with artistry.
          </p>
          <p className="text-[#364153] text-sm md:text-base leading-relaxed">
            We accommodate all dietary requirements and preferences, ensuring every guest enjoys a memorable meal. Our sommelier can pair each course with the perfect wines from our extensive collection.
          </p>

          {/* Two column details */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="text-[#0A0A0A] text-sm font-semibold uppercase tracking-wide mb-2">
                Menu Options
              </h4>
              <ul className="text-[#4A5565] pl-4 list-disc text-sm flex flex-col gap-1">
                <li>Plated dinners</li>
                <li>Buffet service</li>
                <li>Cocktail receptions</li>
                <li>Custom menus</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#0A0A0A] text-sm font-semibold uppercase tracking-wide mb-2">
                Specialties
              </h4>
              <ul className="text-[#4A5565] pl-4 list-disc text-sm flex flex-col gap-1">
                <li>Artisan appetizers</li>
                <li>Premium entrees</li>
                <li>Signature desserts</li>
                <li>Wine pairings</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}