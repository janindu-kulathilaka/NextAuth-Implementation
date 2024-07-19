'use server';

import { signOut } from '@/auth';

export const logout = async () => {
  // we can some server side logic here
  await signOut();
};
