import { ClassAvailability, Classes } from "../utils/database.entities";
import {
  classAvailabilityTableName,
  classesTableName,
} from "../utils/database.table.names";
import { supabaseClient } from "../utils/supabase.key";

export async function getClassesList(): Promise<Classes[]> {
  let { data, error } = await supabaseClient
    .from<Classes>(classesTableName)
    .select("*");
  if (error)
    throw new Error(`GET / ${classesTableName} error: ${error.message}`);
  if (!data?.length) throw new Error("Data is empty");
  return data;
}

export async function getClassAvailability(
  classId: number,
  weekday: number
): Promise<ClassAvailability[]> {
  let { data, error } = await supabaseClient
    .from<ClassAvailability>(classAvailabilityTableName)
    .select("*")
    .eq("class_id", classId)
    .eq("weekday", weekday);

  if (error)
    throw new Error(
      `GET /  ${classAvailabilityTableName} error: ${error.message}`
    );
  if (!data?.length) throw new Error("Data is empty");
  return data;
}

// export async function getClassDetails(classId: number): Promise<ClassDetails> {
//   let { data, error } = await supabaseClient
//     .from<ClassDetails>(classDetailsTableName)
//     .select(
//       `
//         *,
//         ${classesTableName} (
//           name, exercise_type
//         )
//       `
//     )
//     .eq("classes_id", classId);

//   if (error)
//     throw new Error(
//       `GET / classDetails error: ${(error.message, error.details, error.hint)}`
//     );
//   if (!data?.length) throw new Error("Data is empty");
//   return data[0];
// }
