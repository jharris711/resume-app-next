import * as z from 'zod';

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: 'Too short' }),
  username: z
    .string()
    .min(5, { message: 'Too short' })
    .max(20, { message: 'Too long' }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
});
