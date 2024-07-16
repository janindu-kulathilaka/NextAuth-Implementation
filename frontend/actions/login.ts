'use server';

import * as z from 'zod';

import { LoginSchema } from '@/schemas';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFeilds = LoginSchema.safeParse(values);

  if (!validateFeilds.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Email sent' };
};
