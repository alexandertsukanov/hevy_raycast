import { Set } from './Set';

export interface Exercise {
  index: number;
  title: string;
  notes: string;
  exercise_template_id: string;
  supersets_id: number;
  sets: Set[];
}
