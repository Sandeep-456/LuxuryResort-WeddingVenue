"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { BookingFormData } from "@/types";
import { submitBooking } from "@/app/actions/submitBooking";

type BookingModalProps = {
  isOpen: boolean;                   
  onClose: () => void;                
  packageType: string;                
};

const initialFormData: BookingFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  eventDate: "",
  guestCount: 0,
  packageType: "Basic",
  message: "",
};

export default function BookingModal({
  isOpen,
  onClose,
  packageType,
}: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    ...initialFormData,
    packageType: packageType as BookingFormData["packageType"],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});

  if (!isOpen) return null;

  // ── VALIDATION ──
  const validate = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";
    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required";
    if (!formData.eventDate)
      newErrors.eventDate = "Event date is required";
    if (!formData.guestCount || formData.guestCount < 1)
      newErrors.guestCount = "Please enter guest count" as any;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
  };

  // ── HANDLE INPUT CHANGES ──
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ── HANDLE FORM SUBMIT ── //
const handleSubmit = async () => {
  if (!validate()) return;

  setIsSubmitting(true);
  try {
    const result = await submitBooking(formData);

    if (result.success) {
      setIsSuccess(true);
    } else {
      alert(`Submission failed: ${result.error}`);
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  const handleClose = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm cursor-default [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#2D5741] px-8 py-6 flex items-center justify-between">
          <div>
            <h3 className="text-white text-xl font-serif">
              Book Your Dream Wedding
            </h3>
            <p className="text-white/70 text-sm mt-1">
              {packageType} Package
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/70 hover:text-white cursor-pointer transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {isSuccess ? (
          <div className="px-8 py-16 text-center">
            <div className="w-16 h-16 bg-[#2D5741] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h4 className="text-2xl font-serif text-[#2c2c2c] mb-3">
              Request Submitted!
            </h4>
            <p className="text-[#6b6b6b] mb-8">
              Thank you! We'll be in touch within 24 hours to confirm
              your booking.
            </p>
            <button
              onClick={handleClose}
              className="bg-[#2D5741] text-white px-8 py-3 text-sm cursor-pointer hover:bg-[#4a7c59] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="px-8 py-8 flex flex-col gap-5">

            {/* Row 1 — First & Last Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#2c2c2c] uppercase tracking-wide">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-[#2D5741] transition-colors"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-xs">
                    {errors.firstName}
                  </span>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#2c2c2c] uppercase tracking-wide">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-[#2D5741] transition-colors"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-xs">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>

            {/* Row 2 — Email & Phone */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#2c2c2c] uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-[#2D5741] transition-colors"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#2c2c2c] uppercase tracking-wide">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-[#2D5741] transition-colors"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            {/* Row 3 — Event Date & Guest Count */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#2c2c2c] uppercase tracking-wide">
                  Event Date *
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-[#2D5741] transition-colors"
                />
                {errors.eventDate && (
                  <span className="text-red-500 text-xs">
                    {errors.eventDate}
                  </span>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#2c2c2c] uppercase tracking-wide">
                  Number of Guests *
                </label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount || ""}
                  onChange={handleChange}
                  placeholder="100"
                  min="1"
                  className="border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-[#2D5741] transition-colors"
                />
                {errors.guestCount && (
                  <span className="text-red-500 text-xs">
                    {errors.guestCount}
                  </span>
                )}
              </div>
            </div>

            {/* Row 4 — Package Type */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#2c2c2c] uppercase tracking-wide">
                Package
              </label>
              <select
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                className="border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-[#2D5741] transition-colors bg-white"
              >
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>

            {/* Row 5 — Message */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#2c2c2c] uppercase tracking-wide">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your dream wedding..."
                rows={4}
                className="border border-gray-200 px-4 py-3 text-sm text-black outline-none focus:border-[#2D5741] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="
                w-full bg-[#2D5741] text-white py-4 text-sm
                font-semibold uppercase tracking-widest cursor-pointer
                hover:bg-[#4a7c59] transition-colors duration-300
                disabled:opacity-60 disabled:cursor-not-allowed
                mt-2
              "
            >
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}