import { z } from 'zod';

// Definición del esquema de validación con Zod
export const CheckinSchema = z.object({
  first_name: z.string().min(1, 'El nombre es requerido'),
  last_name: z.string().min(1, 'El apellido es requerido'),
  passport: z.string().min(1, 'El número de pasaporte es requerido'),
  booking_code: z.string().min(1, 'El código de reserva es requerido'),
});

export type CheckinFormData = z.infer<typeof CheckinSchema>;
