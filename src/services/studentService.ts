import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Student = Tables<"students">;
export type StudentInput = Omit<Student, "id" | "created_at" | "updated_at">;

export async function getAllStudents(): Promise<Student[]> {
  const { data, error } = await supabase.from("students").select("*").order("first_name");
  if (error) { console.error("Error fetching students:", error); return []; }
  return data || [];
}

export async function createStudent(student: StudentInput) {
  const { error } = await supabase.from("students").insert(student);
  return error ? { success: false, error: error.message } : { success: true };
}

export async function updateStudent(id: string, student: Partial<StudentInput>) {
  const { error } = await supabase.from("students").update({ ...student, updated_at: new Date().toISOString() }).eq("id", id);
  return error ? { success: false, error: error.message } : { success: true };
}

export async function deleteStudent(id: string) {
  const { error } = await supabase.from("students").delete().eq("id", id);
  return error ? { success: false, error: error.message } : { success: true };
}

