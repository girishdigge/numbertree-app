'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Textarea } from '@/components/ui/textarea';
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
import { ApplyFormMessage } from './applyFormMessage';
const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'reason is required.',
  }),
  lastName: z.string().min(2, {
    message: 'Name is required.',
  }),

  email: z
    .string()
    .min(2, {
      message: 'Email is required.',
    })
    .email('enter valid email'),

  phone: z.string().min(2, {
    message: 'Number is required.',
  }),

  city: z.string().min(2, {
    message: 'Contry name is required.',
  }),
  role: z.string().min(2, {
    message: 'Role is required.',
  }),
  message: z.string().min(2, {
    message: 'Message is required.',
  }),
  where: z.string().min(2, {
    message: 'required.',
  }),
  check: z.boolean().default(true).optional(),
});

export function Apply() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      role: '',
      message: '',
      where: '',
      check: true,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      className: 'bg-num-orange text-white text-xl',
      title: 'Your application sent successfully',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-num-orange text-xl gap-2 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    ApplyFormMessage(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-3/4 grid grid-col gap-8'
      >
        <div className='grid grid-cols-2 gap-8'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className=' text-lg'>First Name</FormLabel>
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
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className=' text-lg '>Last Name</FormLabel>
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
        </div>
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
          name='city'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-lg'>City</FormLabel>
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
          name='role'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-lg'>Role you want apply?</FormLabel>
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
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-lg'>Brief about yourself</FormLabel>
              <FormControl>
                <Textarea
                  className='bg-gray-100 shadow-md'
                  placeholder='Type your message here.'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='where'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-lg'>
                Where did you hear about us?
              </FormLabel>
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
