import dayjs from 'dayjs';
import {
  FlightFormData,
  timeSchemaFormData,
} from '../../schemas/flight.schema';

export const url = {
  create_flight: 'http://127.0.0.1:8000/api/flights/create-flight',
};

export function formatDate(data: FlightFormData) {
  const date = dayjs(
    `${data?.departure_date.year}-${data?.departure_date.month}-${data?.departure_date.day}`,
  ).format('YYYY-MM-DD');
  return date;
}

export function formatTime(time: timeSchemaFormData) {
  const addLeadingZero = (num: number) => num.toString().padStart(2, '0');
  return `${addLeadingZero(time.hour)}:${addLeadingZero(time.minute)}:${addLeadingZero(time.second)}`;
}

/*
this is NextUI TimeInput data
{
  "hour": 2,
  "minute": 0,
  "second": 0,
  "millisecond": 0
}

*/
