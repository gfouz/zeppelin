export type Method = 'POST' | 'PUT';

export interface Flight {
  isMain?: boolean;
  isConnected?: boolean;
  id?: string;
  status?: string;
  airline?: string;
  adult_price?: number | string;
  child_price?: number | string;
  infant_price?: number | string;
  flight_number?: string;
  departure_place?: string;
  arrival_place?: string;
  departure_time?: string;
  arrival_time?: string;
  departure_date?: string;
  connected_flight?: Flight[];
  luggage?: number | string;
}

export type FetchApiType = (
  payload: Flight,
  url: string,
  method: Method,
  token?: string,
) => Promise<any>;
