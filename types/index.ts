export type BookingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: number;
  packageType: "Basic" | "Premium" | "Luxury";
  message: string;
};

// Pricing package card data
export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
};

// FAQ item
export type FAQItem = {
  question: string;
  answer: string;
};