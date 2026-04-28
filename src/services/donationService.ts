import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Donation = Tables<"donations">;

export async function getAllDonations(): Promise<Donation[]> {
  const { data, error } = await supabase
    .from("donations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching donations:", error);
    return [];
  }

  return data || [];
}

export async function createDonation(donation: {
  donor_name: string;
  email?: string;
  phone: string;
  amount?: number;
  purpose: string;
  message?: string;
}): Promise<{ success: boolean; donation?: Donation; error?: string }> {
  const { data, error } = await supabase
    .from("donations")
    .insert(donation)
    .select()
    .single();

  if (error) {
    console.error("Error creating donation:", error);
    return { success: false, error: error.message };
  }

  return { success: true, donation: data };
}

export async function updateDonationStatus(
  id: string,
  status: string
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase
    .from("donations")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("Error updating donation status:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function deleteDonation(
  id: string
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from("donations").delete().eq("id", id);

  if (error) {
    console.error("Error deleting donation:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}