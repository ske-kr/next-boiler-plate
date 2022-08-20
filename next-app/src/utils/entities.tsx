export const classesTableName = "classes";
export const classDetailsTableName = "class_details";

export type Classes = {
  id: number;
  inserted_at: Date;
  updated_at: Date;
  required_items: string;
  name: string;
  exercise_type: string;
  location: string;
};

export type ClassDetails = {
  id: string;
  inserted_at: Date;
  updated_at: Date;
  name: string;
  description: string;
  instructor: string;
  start_time: Date;
  duration: number;
  exercise_type: string;
  available_spots: number;
  todays_workout: string;
  classes_id: number;
  classes: Partial<Classes>;
};
