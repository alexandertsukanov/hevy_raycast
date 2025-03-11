/**
 * Represents a workout routine with exercises and metadata.
 * This interface defines the structure of a workout routine in the application.
 */
import { Exercise } from './Exercise';

export interface Routine {
  /** Unique identifier for the routine */
  id: string;
  
  /** Title/name of the workout routine */
  title: string;
  
  /** Timestamp of when the routine was last updated */
  updated_at: string;
  
  /** Timestamp of when the routine was created */
  created_at: string;
  
  /** Array of exercises included in this routine */
  exercises: Exercise[];
}