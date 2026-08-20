import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type SchoolResource = Tables<"school_resources">;
export type ResourceInput = Pick<
  SchoolResource,
  "title" | "description" | "url" | "category" | "audience" | "is_published"
>;

export async function getAllResources(): Promise<SchoolResource[]> {
  const { data, error } = await supabase
    .from("school_resources")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching school resources:", error);
    return [];
  }
  return data || [];
}

export async function createResource(resource: ResourceInput) {
  const { error } = await supabase.from("school_resources").insert(resource);
  return error ? { success: false, error: error.message } : { success: true };
}

export async function updateResource(id: string, resource: Partial<ResourceInput>) {
  const { error } = await supabase.from("school_resources").update(resource).eq("id", id);
  return error ? { success: false, error: error.message } : { success: true };
}

export async function deleteResource(id: string) {
  const { error } = await supabase.from("school_resources").delete().eq("id", id);
  return error ? { success: false, error: error.message } : { success: true };
}

export async function uploadResourceFile(file: File) {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").slice(-80);
  const path = `resources/${Date.now()}-${crypto.randomUUID()}-${safeName}`;
  const { error } = await supabase.storage
    .from("school-files")
    .upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) return { success: false as const, error: error.message };
  const { data } = supabase.storage.from("school-files").getPublicUrl(path);
  return { success: true as const, url: data.publicUrl };
}

