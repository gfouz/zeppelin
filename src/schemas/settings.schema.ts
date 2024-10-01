import * as z from 'zod';

export const settingSchema = z.object({
  whatsapp: z
    .string()
    .min(10, 'Número de WhatsApp debe tener al menos 10 dígitos'),
  available_days: z
    .string()
    .min(1, 'debe tener al menos 1 Número')
    .max(2, 'no puede tener más de 2 Números')
    .transform((val) => parseInt(val, 10)) // Transforma a número entero
    .refine((val) => Number.isInteger(val) && val >= 0 && val <= 30, {
      message: "can't be more than 30 and must be a Number",
    }),
  unavailable_days: z
    .string()
    .min(1, 'debe tener al menos 1 Número')
    .max(2, 'no puede tener más de 2 Números')
    .transform((val) => parseInt(val, 10)) // Transforma a número entero
    .refine((val) => Number.isInteger(val) && val >= 0 && val <= 30, {
      message: "can't be more than 30 and must be a Number",
    }),
  email: z.string().email('Correo electrónico no válido'),
});

export type SettingFormData = z.infer<typeof settingSchema>;
