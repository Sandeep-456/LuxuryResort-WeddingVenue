export default function QuoteSection() {
  return (
    <section className="w-full bg-[#3B5956] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <h4 className="text-white text-lg md:text-[24px] italic leading-relaxed">
          "The Luxury Resort provided the perfect backdrop for our special day. The staff went above and beyond to make sure we and our guests had an unforgettable experience. Highly recommended!"
        </h4>

        <div className="flex gap-3 mt-6">
            <div className="w-13 h-13 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                <span className="text-white text-xs font-bold">LR</span>
            </div>
            <div className="flex flex-col justify-start items-start ">
                <p className="text-white text-[16px] ">
                    Jessica & Ryan
                </p>
                <p className="text-[14px] text-white/60">
                    May 2025
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}