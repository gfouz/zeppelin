import { z } from 'zod';

// Definición del esquema de validación con Zod
export const CheckUpSchema = z.object({
  last_name: z.string().min(1, 'Los dos apellidos es requerido'),
  booking_code: z.string().min(1, 'El código de reserva es requerido'),
});

export type CheckUpFormData = z.infer<typeof CheckUpSchema>;
