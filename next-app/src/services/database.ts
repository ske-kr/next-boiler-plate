import {
  ClassDetails,
  classDetailsTableName,
  Classes,
  classesTableName,
} from "../utils/entities";
import { supabaseClient } from "../utils/supabase";

export async function getClassesList(): Promise<Classes[]> {
  let { data, error } = await supabaseClient
    .from<Classes>(classesTableName)
    .select("*");
  if (error) throw new Error(`GET / classesList error: ${error.message}`);
  if (!data?.length) throw new Error("Data is empty");
  return data;
}

export async function getClassDetails(classId: number): Promise<ClassDetails> {
  let { data, error } = await supabaseClient
    .from<ClassDetails>(classDetailsTableName)
    .select(
      `
        *,
        ${classesTableName} (
          name, exercise_type
        )
      `
    )
    .eq("classes_id", classId);

  if (error)
    throw new Error(
      `GET / classDetails error: ${(error.message, error.details, error.hint)}`
    );
  if (!data?.length) throw new Error("Data is empty");
  return data[0];
}
