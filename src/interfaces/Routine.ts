import { Exercise } from './Exercise';

export interface Routine {
  id: string;
  title: string;
  updated_at: string;
  created_at: string;
  exercises: Exercise[];
}
