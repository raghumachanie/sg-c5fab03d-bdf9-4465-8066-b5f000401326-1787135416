import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type AdmissionInquiry = Tables<"admission_inquiries">;

export async function getAllInquiries(): Promise<AdmissionInquiry[]> {
  const { data, error } = await supabase
    .from("admission_inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching inquiries:", error);
    return [];
  }

  return data || [];
}

export async function createInquiry(inquiry: {
  student_name: string;
  parent_name: string;
  phone: string;
  email?: string;
  desired_class: string;
  message?: string;
}): Promise<{ success: boolean; inquiry?: AdmissionInquiry; error?: string }> {
  const { data, error } = await supabase
    .from("admission_inquiries")
    .insert(inquiry)
    .select()
    .single();

  if (error) {
    console.error("Error creating inquiry:", error);
    return { success: false, error: error.message };
  }

  return { success: true, inquiry: data };
}

export async function updateInquiryStatus(
  id: string,
  status: string
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase
    .from("admission_inquiries")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("Error updating inquiry status:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}