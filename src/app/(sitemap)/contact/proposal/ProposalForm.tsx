'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { sendProposal } from './SendProposal';

const FormSchema = z.object({
  reason: z.string().min(2, {
    message: 'reason is required.',
  }),
  name: z.string().min(2, {
    message: 'Name is required.',
  }),

  email: z
    .string()
    .min(2, {
      message: 'Email is required.',
    })
    .email('enter valid email'),

  phone: z.string().min(6, {
    message: 'Number is required.',
  }),

  company: z.string().min(2, {
    message: 'Firm name is required.',
  }),
  check: z.boolean().default(true).optional(),
});

export function ProposalForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      reason: '',
      name: '',
      email: '',
      phone: '',
      company: '',
      check: true,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      className: 'bg-num-orange text-white text-xl',
      title: 'Your proposal request sent successfully',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-num-orange text-xl gap-2 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    sendProposal(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-3/4 grid grid-cols-2 gap-8'
      >
        <FormField
          control={form.control}
          name='reason'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-lg'>Reason for Enquiry</FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 shadow-md'
                  placeholder=''
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-lg '>Full Name</FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 shadow-md'
                  placeholder=''
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-lg'>Email</FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 shadow-md'
                  placeholder=' '
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-lg'>Phone Number</FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 shadow-md'
                  placeholder=' '
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='company'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-lg'>Company</FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 shadow-md'
                  placeholder=' '
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <FormField
          control={form.control}
          name='check'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  className='bg-gray-100 shadow-md mr-1'
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className=' text-lg'>
                {' '}
                I consent to receiving emails from Numbertree, including
                updates, newsletters, and important notifications.
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <Button
          className='w-80 h-12 text-lg bg-num-indigo hover:bg-num-orange mb-20'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
