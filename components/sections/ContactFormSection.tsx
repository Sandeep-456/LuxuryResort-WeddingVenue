"use client";

import { useState } from "react";
import { submitBooking } from "@/app/actions/submitBooking";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.email || !formData.eventDate) {
      alert("Please fill in required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitBooking({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.eventDate,
        guestCount: Number(formData.guestCount) || 1,
        packageType: "Basic",
        message: formData.message,
      });

      if (result.success) {
        setIsSuccess(true);
        setFormData({
          firstName: "", lastName: "",
          email: "", phone: "",
          eventDate: "", guestCount: "",
          message: "",
        });
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-[36px] font-playfair font-[500] text-[#0A0A0A]">
            Plan Your Dream Wedding
          </h2>
          <p className="text-[#6b6b6b] text-[16px] font-poppins mt-4">
            Fill out the form below and our wedding specialists will contact you within 24 hours
          </p>
        </div>

        {/* ── Success State ── */}
        {isSuccess ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-[#2D5741] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h4 className="text-2xl font-playfair text-[#0A0A0A] mb-3">
              Thank You!
            </h4>
            <p className="text-[#6b6b6b] font-poppins text-sm">
              We'll be in touch within 24 hours to discuss your dream wedding.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">

            {/* ── Row 1 — First & Last Name ── */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-poppins font-medium text-[#0A0A0A]">
                  First Name <span className="text-[#0A0A0A]">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="
                    border border-gray-200 rounded-lg
                    px-4 py-4 text-sm font-poppins
                    outline-none focus:border-[#2D5741]
                    transition-colors bg-white text-black
                    w-full
                  "
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-poppins font-medium text-[#0A0A0A]">
                  Last Name <span className="text-[#0A0A0A]">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="
                    border border-gray-200 rounded-lg
                    px-4 py-4 text-sm font-poppins
                    outline-none focus:border-[#2D5741]
                    transition-colors bg-white text-black
                    w-full
                  "
                />
              </div>
            </div>

            {/* ── Row 2 — Email & Phone ── */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-poppins font-medium text-[#0A0A0A]">
                  Email Address <span className="text-[#0A0A0A]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    border border-gray-200 rounded-lg
                    px-4 py-4 text-sm font-poppins
                    outline-none focus:border-[#2D5741]
                    transition-colors bg-white text-black
                    w-full
                  "
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-poppins font-medium text-[#0A0A0A]">
                  Phone Number <span className="text-[#0A0A0A]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="
                    border border-gray-200 rounded-lg
                    px-4 py-4 text-sm font-poppins
                    outline-none focus:border-[#2D5741]
                    transition-colors bg-white text-black
                    w-full
                  "
                />
              </div>
            </div>

            {/* ── Row 3 — Date & Guests ── */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-poppins font-medium text-[#0A0A0A]">
                  Preferred Wedding Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="
                    border border-gray-200 rounded-lg
                    px-4 py-4 text-sm font-poppins
                    outline-none focus:border-[#2D5741]
                    transition-colors bg-white text-black
                    w-full
                  "
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-poppins font-medium text-[#0A0A0A]">
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="
                    border border-gray-200 rounded-lg
                    px-4 py-4 text-sm font-poppins text-black
                    outline-none focus:border-[#2D5741]
                    transition-colors bg-white text-black
                    w-full
                  "
                />
              </div>
            </div>

            {/* ── Row 4 — Textarea ── */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-poppins font-medium text-[#0A0A0A]">
                Tell us about your wedding vision
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Share your ideas, questions, or special requirements..."
                className="
                  border border-gray-200 rounded-lg
                  px-4 py-4 text-sm font-poppins
                  outline-none focus:border-[#2D5741]
                  transition-colors bg-white
                  resize-none w-full text-black
                  placeholder:text-gray-300
                "
              />
            </div>

            {/* ── Submit Button — centered, not full width ── */}
            <div className="flex justify-center mt-2">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="
                  bg-[#3B5956] text-white
                  px-16 py-4 text-sm font-poppins font-medium
                  rounded-md
                  hover:bg-[#4a7c59] transition-colors duration-300
                  disabled:opacity-60 disabled:cursor-not-allowed
                  min-w-[200px] cursor-pointer
                "
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}