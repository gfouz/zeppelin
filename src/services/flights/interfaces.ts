import { Flight } from '../../flights.types';

export type FetchApiType = (data: Flight, token?: string) => Promise<any>;
