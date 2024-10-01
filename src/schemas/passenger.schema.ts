import { z } from 'zod';

// Definimos el esquema de validación con Zod
export const PassengerSchema = z.object({
  first_name: z.string().min(1, 'El nombre es obligatorio'),
  last_name: z.string().min(1, 'El apellido es obligatorio'),
  passport: z.string().min(1, 'El pasaporte es obligatorio'),
});
export type PassengerFormData = z.infer<typeof PassengerSchema>;
