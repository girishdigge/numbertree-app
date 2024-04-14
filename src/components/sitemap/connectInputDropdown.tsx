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
import { ConnectForm } from '@/components/sitemap/connectInputMessage';
const FormSchema = z.object({
  name: z.string(),
  mailNum: z.string().min(5, {
    message: 'provide valid email or number',
  }),
});

export function ConnectInputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      mailNum: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-num-orange p-4'>
          <code className='text-white text-lg'>
            {JSON.stringify(data, null, 2)}
          </code>
          <h1 className='text-lg'>{`We'll get back to you shortly.`}</h1>
        </pre>
      ),
    });
    ConnectForm(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='p-4 px-4'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-base '>Name</FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 shadow-md '
                  placeholder=''
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
          name='mailNum'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base '>
                Contact Number / Email Id
              </FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 shadow-md'
                  placeholder=''
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>This is your email or number</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center justify-center'>
          <Button
            className='mt-4 w-40 bg-num-orange hover:bg-num-indigo '
            type='submit'
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
