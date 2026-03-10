"use server"; 

import { supabase } from "@/lib/supabase";
import { BookingFormData } from "@/types";

type SubmitResult = {
  success: boolean;
  error?: string;
};

export async function submitBooking(
  formData: BookingFormData
): Promise<SubmitResult> {
  try {
    // Insert into Supabase bookings table
    const { error } = await supabase.from("bookings").insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        event_date: formData.eventDate,
        guest_count: formData.guestCount,
        package_type: formData.packageType,
        message: formData.message || "",
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}