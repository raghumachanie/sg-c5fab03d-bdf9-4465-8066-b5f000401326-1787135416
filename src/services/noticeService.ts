import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Notice = Tables<"notices">;

export async function getLatestNotices(limit: number = 5): Promise<Notice[]> {
  const { data, error } = await supabase
    .from("notices")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching notices:", error);
    return [];
  }

  return data || [];
}

export async function getAllNotices(): Promise<Notice[]> {
  const { data, error } = await supabase
    .from("notices")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching all notices:", error);
    return [];
  }

  return data || [];
}

export async function createNotice(
  title: string,
  content: string,
  category: string
): Promise<{ success: boolean; notice?: Notice; error?: string }> {
  const { data, error } = await supabase
    .from("notices")
    .insert({ title, content, category, is_active: true })
    .select()
    .single();

  if (error) {
    console.error("Error creating notice:", error);
    return { success: false, error: error.message };
  }

  return { success: true, notice: data };
}

export async function updateNotice(
  id: string,
  updates: Partial<Pick<Notice, "title" | "content" | "category" | "is_active">>
): Promise<{ success: boolean; notice?: Notice; error?: string }> {
  const { data, error } = await supabase
    .from("notices")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating notice:", error);
    return { success: false, error: error.message };
  }

  return { success: true, notice: data };
}

export async function deleteNotice(
  id: string
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from("notices").delete().eq("id", id);

  if (error) {
    console.error("Error deleting notice:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}