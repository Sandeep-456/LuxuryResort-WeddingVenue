import Image from "next/image";
import DreamImage from "@/public/DreamImage.png"

export default function DreamSection() {
  return (
    <section className="w-full bg-[#F5F1E8] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">

        {/* LEFT — Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h2 className="text-4xl md:text-[36px] text-[#0A0A0A] leading-tight">
            We stage it<br />your dream
          </h2>
          <p className="text-[#364153] text-sm md:text-[14px] leading-relaxed">
            Your wedding should be a reflection of your unique love story. Our dedicated team of professionals works tirelessly to transform your vision into reality, handling every detail with care and precision.
          </p>
          <p className="text-[#364153] text-sm md:text-[14px] leading-relaxed">
            From the initial consultation to the last dance, we're with you every step of the way. Our experienced coordinators ensure a seamless celebration, allowing you to relax and cherish every moment.
          </p>
          <p className="text-[#364153] text-sm md:text-[16px] leading-relaxed" >With meticulous planning, creative design, and flawless execution, we create unforgettable experiences that you and your guests will treasure forever.</p>
        </div>

        {/* RIGHT — Table Setting Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[400px] md:h-[480px] overflow-hidden">
            <Image
              src={DreamImage}
              alt="Elegant table setting"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}