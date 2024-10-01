import { Ticket } from './tickets.types.ts';

export interface Passenger {
  id?: string;
  role?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  passport?: string;
  booking_code?: string;
  ticket?: Ticket;
}
