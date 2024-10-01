import { z } from 'zod';
import { InputGeneric } from './types';

export const LoginSchema = z.object({
  username: z.string().min(6, 'Username requires more than 6 values'),
  password: z.string().min(6, 'Password must be at least 6 values'),
});

//RegisterSchema inherits from LoginSchema
export const RegisterSchema = LoginSchema.extend({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(6, 'Email is required')
    .email('invalid format!'),
  confirmPassword: z
    .string()
    .min(6, 'Confirm Password must be at least 6 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export type RegisterType = z.infer<typeof RegisterSchema>;
export type LoginType = z.infer<typeof LoginSchema>;
export type Auth = LoginType | RegisterType;

export type InputProps = InputGeneric<Auth>;
