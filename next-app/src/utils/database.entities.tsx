export type Classes = {
  id: number;
  name: string;
  description: string;
  exercise_type: string;
  image: string;
  duration: string;
  requirements: string;
  address: string;
  credits_required: number;
  instagram: string;
  website: string;
  distance: string;
  misc: string;
  priority: number;
  hide_class: boolean;
};

export type ClassAvailability = {
  id: number;
  class_id: Partial<Classes>; // foreign key
  weekday: number; // weekday enum
  time: Date;
};
