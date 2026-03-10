import Image from "next/image";
import HistoryImage from "@/public/HistoryImage.png";

export default function HistorySection() {
  return (
    <section id="about" className="w-full bg-[#F5F1E8] py-10 px-2 md:py-24 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* LEFT — Text */}
        <div className="w-full md:w-1/2 p-4 flex flex-col gap-5">
          <h2 className="text-4xl md:text-[36px] font-weight-[500] text-[#0A0A0A] leading-tight">
            A History of<br />Romance
          </h2>
          <p className="text-[#364153] text-[16px] md:text-base leading-relaxed">
            For over half a century, our venue has been the backdrop to countless love stories. What began as a private estate in 1965 has evolved into one of the most sought-after wedding destinations in the region.
          </p>
          <p className="text-[#364153] text-[16px] md:text-base leading-relaxed">
            Our grounds have witnessed the union of thousands of couples, each celebration as unique as the love it honors. From intimate ceremonies to grand receptions, we've perfected the art of bringing wedding dreams to life.
          </p>
          <p className="text-[#364153] text-[16px] md:text-base leading-relaxed">
            The timeless architecture and meticulously maintained gardens create an atmosphere of elegance and romance, ensuring your special day is nothing short of magical.
          </p>
        </div>

        {/* RIGHT — Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[450px] md:h-[520px] overflow-hidden">
            <Image
              src={HistoryImage}
              alt="Stone gazebo"
              fill
              className="object-cover rounded-[10px] w-[597px] h-[500px]"
 
            />
          </div>
        </div>

      </div>
    </section>
  );
}