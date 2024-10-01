import { Flight } from './flights.types';
import { User } from './users.types';
export type Method = 'POST' | 'PUT';

export type Ticket = {
  id?: string;
  status?: string;
  airline?: string;
  first_name?: string;
  last_name?: string;
  passport?: string;
  created_at?: string;
  booking_code?: string;
  adult_price?: number | string;
  child_price?: number | string;
  infant_price?: number | string;
  description?: string;
  flight?: Flight;
  ticket_issuer?: User;
  last_reservation_date?: string;
};

export type TicketFetchFunction = (
  payload: Ticket,
  url: string,
  method: Method,
  token?: string,
) => Promise<any>;

/*export interface TicketObject {
  id: number;
  status: string;
  airline: string;
  booking_code: string;
  description: string;
}

export interface OriginFlight {
  id: number;
  status: string;
  role: string;
  departure_place: string;
  arrival_place: string;
  flight_number: string;
  departure_time: string;
  arrival_time: string;
  departure_date: string;
  luggage: number;
  connected_flight?: Flight;
  tickets: Ticket[];
}

export interface FlightConnected {
  flight_number: string;
  departure_place: string;
  arrival_place: string;
  departure_time: string;
  arrival_time: string;
  departure_date: string;
}

export interface TicketIssuer {
  id: number;
  username: string;
}

export interface FullTicket {
  id: number;
  price: number | string;
  status: string;
  airline: string;
  booking_code: string;
  description: string;
  ticket_issuer: TicketIssuer;
  flight: OriginFlight;
  created_at: string;
}

export interface TicketI {
  ticket: FullTicket;
}*/
