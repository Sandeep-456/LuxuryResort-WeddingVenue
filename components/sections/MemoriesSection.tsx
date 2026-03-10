import Image from "next/image";
import Memory_1 from "@/public/Memory1.png"
import Memory_2 from "@/public/Memory2.png"
import Memory_3 from "@/public/Memory3.png"
import Memory_4 from "@/public/Memory4.png"

const memories = [
  {
    id: 1,
    src: Memory_1,
    alt: "Floral Design",

  },
  {
    id: 2,
    src: Memory_2,
    alt: "Poolside Events",
  },
  {
    id: 3,
    src: Memory_3,
    alt: "Intimate Moments",

  },
  {
    id: 4,
    src: Memory_4,
    alt: "Celebrations",
  },
];

export default function MemoriesSection() {
  return (
    <section id="gallery" className="w-full bg-[#ffffff] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-[36px] font-serif text-[#0A0A0A]">
            Memories to Remember
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className="relative h-[200px] md:h-[350px] overflow-hidden group"
            >
              <Image
                src={memory.src}
                alt={memory.alt}
                fill
                className="object-cover rounded-[10px] transition-transform duration-500 group-hover:scale-102 "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}