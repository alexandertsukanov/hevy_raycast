import { Routine } from './Routine';

/**
 * Interface representing a paginated response for routines
 * This interface is used for handling paginated data from the API
 */
export interface Page {
  /** Current page number (1-based indexing) */
  page: number;
  
  /** Total number of available pages */
  page_count: number;
  
  /** Array of Routine objects for the current page */
  routines: Routine[];
}
