import Image from "next/image";
import VisionsImage from "@/public/VisionImage.png";

export default function VisionsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* LEFT — Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="relative w-full h-[450px] md:h-[520px] overflow-hidden">
            <Image
              src={VisionsImage}
              alt="Grand ballroom chandelier"
              fill
              className="object-cover rounded-[10px] w-[597px] h-[500px]"

            />
          </div>
        </div>

        {/* RIGHT — Text */}
        <div className="w-full h-full md:w-1/2 order-1 md:order-2 flex  flex-col gap-5">
          <h2 className="text-4xl font-weight-[500] md:text-[36px] text-[#0A0A0A] leading-tight">
            Nourishing Visions
          </h2>
          <p className="text-[#364153] text-sm md:text-base leading-relaxed">
            Every detail matters when it comes to your special day. Our experienced team works closely with you to bring your vision to life, from the grandest elements to the smallest touches.
          </p>
          <p className="text-[#364153] text-sm md:text-base leading-relaxed">
            We believe in creating experiences that reflect your unique love story. Our flexible spaces can be transformed to match any theme or style, whether you envision a classic, romantic celebration or a modern, contemporary affair.
          </p>
          <p className="text-[#364153] text-sm md:text-base leading-relaxed">
            With dedicated wedding planners, world-class catering, and attention to every detail, we ensure your celebration exceeds all expectations.
          </p>
        </div>

      </div>
    </section>
  );
}