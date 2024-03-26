'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';
import { search } from '@/lib/search';
export function InputSearchButton() {
  const searchParams = useSearchParams();
  return (
    <form action={search}>
      <div className='flex w-full items-center space-x-4'>
        <Input
          name='term'
          type='string'
          className='border-num- text-num-orange placeholder:text-num-orange'
          placeholder='Search by keywords'
          defaultValue={searchParams.get('term') || ''}
        />
        <Button type='submit' className='w-1/4 bg-num-indigo'>
          Submit
        </Button>
      </div>
    </form>
  );
}
