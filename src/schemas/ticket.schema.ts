import { z } from 'zod';

/*const lastReservationDateSchema = z.object({
  calendar: z.object({
    identifier: z.string(),
  }),
  era: z.string(),
  year: z.number().min(0),
  month: z.number().min(1).max(12),
  day: z.number().min(1).max(31),
});*/

export const TicketSchema = z.object({
  first_name: z.string().min(1, 'Nombre completo es obligatorio'),
  last_name: z.string().min(1, 'Nombre completo es obligatorio'),
  passport: z.string().min(1, 'Pasaporte es obligatorio'),
  booking_code: z.string().min(1, 'Número de boleto es requerido'),
  //last_reservation_date: lastReservationDateSchema
});

export type TicketFormData = z.infer<typeof TicketSchema>;
