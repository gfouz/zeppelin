import { z } from 'zod';

export const UserSchema = z
  .object({
    username: z.string().min(1, 'username is required'),
    first_name: z.string().min(1, 'username is required'),
    last_name: z.string().min(1, 'username is required'),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .min(1, 'Email is required')
      .email('invalid format!'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(1, 'Password is required'),
    confirmPassword: z.string().min(6, 'Confirm Password must be at least 6'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const SignInSchema = z.object({
  username: z.string().min(4, 'username is required'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
});
export const UpdateUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, 'Email is required')
    .email('invalid format!'),
  role: z.array(z.string()),
});

export type UserFormInput = z.infer<typeof UserSchema>;
export type SignInFormInput = z.infer<typeof SignInSchema>;
