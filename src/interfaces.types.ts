export type Method = 'POST' | 'PUT';

export interface Flight {
  id?: string;
  price?: number | string;
  flight_number?: string;
  departure_place?: string;
  arrival_place?: string;
  departure_time?: string;
  arrival_time?: string;
  departure_date?: string;
  luggage?: number | string;
}

export type FetchApiType = (
  payload: Flight,
  url: string,
  method: Method,
  token?: string,
) => Promise<any>;

// ------------------Ticket interfaces-------------------
export type Ticket = {
  airline: string;
  price: number | string;
  description: string;
  last_reservation_date: string;
};

export type TicketFetchFunction = (
  payload: Ticket,
  url: string,
  method: Method,
  token?: string,
) => Promise<any>;

//--------------commom types------------------------//

export type GetListFunction = (url: string) => Promise<Flight[] | Ticket[]>;
