import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type ContactMessage = Tables<"contact_messages">;

export async function getAllMessages(): Promise<ContactMessage[]> {
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching messages:", error);
    return [];
  }

  return data || [];
}

export async function createMessage(message: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; message?: ContactMessage; error?: string }> {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert(message)
    .select()
    .single();

  if (error) {
    console.error("Error creating message:", error);
    return { success: false, error: error.message };
  }

  return { success: true, message: data };
}

export async function updateMessageStatus(
  id: string,
  status: "new" | "read" | "replied",
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase
    .from("contact_messages")
    .update({ status })
    .eq("id", id);

  return error ? { success: false, error: error.message } : { success: true };
}

