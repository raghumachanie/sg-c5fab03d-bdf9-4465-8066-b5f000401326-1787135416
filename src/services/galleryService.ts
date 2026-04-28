import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type GalleryImage = Tables<"gallery_images">;

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  const { data, error } = await supabase
    .from("gallery_images")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }

  return data || [];
}

export async function getGalleryImagesByCategory(
  category: string
): Promise<GalleryImage[]> {
  const { data, error } = await supabase
    .from("gallery_images")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching gallery images by category:", error);
    return [];
  }

  return data || [];
}

export async function uploadImage(
  file: File,
  category: string,
  caption?: string
): Promise<{ success: boolean; image?: GalleryImage; error?: string }> {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `gallery/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("gallery")
      .upload(filePath, file);

    if (uploadError) {
      console.error("Error uploading image:", uploadError);
      return { success: false, error: uploadError.message };
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("gallery").getPublicUrl(filePath);

    const { data, error } = await supabase
      .from("gallery_images")
      .insert({ image_url: publicUrl, category, caption })
      .select()
      .single();

    if (error) {
      console.error("Error saving image metadata:", error);
      return { success: false, error: error.message };
    }

    return { success: true, image: data };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

export async function deleteImage(
  id: string,
  imageUrl: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const filePath = imageUrl.split("/gallery/")[1];

    if (filePath) {
      const { error: storageError } = await supabase.storage
        .from("gallery")
        .remove([`gallery/${filePath}`]);

      if (storageError) {
        console.error("Error deleting file from storage:", storageError);
      }
    }

    const { error } = await supabase.from("gallery_images").delete().eq("id", id);

    if (error) {
      console.error("Error deleting image record:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}