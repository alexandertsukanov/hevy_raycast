import { Routine } from './Routine';

export interface Page {
  page: number;
  page_count: number;
  routines: Routine[];
}
