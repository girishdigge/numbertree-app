import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RxSlash } from 'react-icons/rx';
import { IoHomeSharp } from 'react-icons/io5';
import { Expert3 } from './Expert3';
const page = () => {
  return (
    <div>
      <div className='relative flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href={'/'}>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={'/contact'}>
          <p className='font-bold text-num-indigo'>Contact Us</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <Link href={'/contact/expert'}>
          <p className='font-bold text-num-indigo'>Find an Expert</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>John Doe</p>
      </div>
      <div className=' flex flex-col items-center justify-center mt-20 mb-10 ml-12'>
        <div className='flex flex-row mb-4'>
          <span>
            <p className='text-3xl'>Send Message </p>{' '}
          </span>
          <RxSlash size={32} className='mt-1' />
          <span>
            <p className='text-3xl text-num-orange'>John Doe* </p>{' '}
          </span>
        </div>
        <Expert3 />
      </div>
    </div>
  );
};
export default page;
