'use client';

import * as z from 'zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { NewPasswordSchema } from '@/schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CardWrapper from '@/components/auth/card-wrapper';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { newPassword } from '@/actions/new-password';

const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        // TODO: Add when 2FA is implemented
        setSuccess(data?.success);
      });
    });
  };

  return (
    <>
      <CardWrapper
        headerLabel="Enter a new password"
        backButtonLabel="Back to login"
        backButtonHref="/login"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-xs font-semibold">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.password?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
            {/* need add form error and form success */}
            <FormError message={error} />
            <FormSuccess message={success ?? ''} />
            <Button className="w-full" type="submit" disabled={isPending}>
              Reset Password
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};

export default NewPasswordForm;
