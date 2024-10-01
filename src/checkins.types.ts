import { Ticket } from './tickets.types';

export type Checkin = {
  id?: string;
  status?: string;
  first_name?: string;
  last_name?: string;
  passport?: string;
  ticket?: Ticket;
  reservation_code?: string;
};
