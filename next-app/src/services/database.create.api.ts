import { ReservationTransactions } from "../utils/database.entities";
import {
  classAvailabilityTable,
  reservationTransactionTable,
} from "../utils/database.table.names";
import { supabaseClient } from "../utils/supabase.key";

export async function createReservation(
  data: Partial<ReservationTransactions>
) {
  const { error } = await supabaseClient
    .from(reservationTransactionTable)
    .insert([
      // { data: "someValue", other_column: "otherValue" }
      data,
    ]);

  if (error) {
    throw new Error(`POST / ${classAvailabilityTable} error: ${error.message}`);
  }

  return "Reservation Successful";
}
