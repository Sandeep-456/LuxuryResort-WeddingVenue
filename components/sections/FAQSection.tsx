"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How far in advance should we book our wedding?",
    answer:
      "We recommend booking at least 12 months in advance for peak wedding season (April–October). For off-season weddings, 6 months is usually sufficient. Early bookings receive priority date selection and special early-bird pricing.",
  },
  {
    id: 2,
    question: "Do you offer wedding planning services?",
    answer:
      "Yes! Our experienced wedding planning team is available to assist you every step of the way. From initial concept to final execution, we offer full planning, partial planning, and day-of coordination packages to suit your needs.",
  },
  {
    id: 3,
    question: "Can we bring our own vendors?",
    answer:
      "We have a preferred vendors list of trusted professionals we work with regularly. While we encourage using our in-house services for seamless coordination, we do allow pre-approved external vendors with prior written consent.",
  },
  {
    id: 4,
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 6 months or more before the event receive a full refund. Cancellations within 3–6 months receive a 50% refund. Unfortunately, cancellations within 3 months are non-refundable, but we offer date rescheduling options.",
  },
  {
    id: 5,
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Absolutely! Our culinary team is experienced in catering to a wide range of dietary needs including vegetarian, vegan, gluten-free, halal, and kosher. Please inform us of any dietary requirements during the planning process.",
  },
  {
    id: 6,
    question: "Is there accommodation available for guests?",
    answer:
      "Yes! Our luxury resort offers on-site accommodation for your guests. The Premium and Luxury packages include a complimentary honeymoon suite. Additional rooms can be reserved at a special group rate for your wedding party.",
  },
];
export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-[40px]  text-[#0A0A0A]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full cursor-pointer flex items-center justify-between py-5 text-left gap-4"
              >
                <span className={`text-sm font-medium ${openId === faq.id ? "text-[#2D5741]" : "text-[#2c2c2c]"}`}>
                  {faq.question}
                </span>
                <span className="shrink-0 text-[#2D5741]">
                  {openId === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"}`}>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}