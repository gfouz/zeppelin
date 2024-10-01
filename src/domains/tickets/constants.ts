//import dayjs from 'dayjs';
//import { TicketFormData } from '../../schemas/ticket.schema';

export const url = {
  create_flight: 'http://127.0.0.1:8000/api/flights/create-flight',
};

/*
export function formatDate(data: TicketFormData) {
  const date = dayjs(
    `${data?.last_reservation_date.year}-${data?.last_reservation_date.month}-${data?.last_reservation_date.day}`,
  ).format('YYYY-MM-DD');
  return date;
}

 export function formatTime(time: timeSchemaFormData) {
  const addLeadingZero = (num: number) => num.toString().padStart(2, '0');
  return `${addLeadingZero(time.hour)}:${addLeadingZero(time.minute)}:${addLeadingZero(time.second)}`;
}
 */
