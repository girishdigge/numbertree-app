import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { RxSlash } from 'react-icons/rx';
import { IoHomeSharp } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
const Page = () => {
  return (
    <div className=''>
      <div className='relative flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href={'/'}>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={'/contact'}>
          <p className='font-bold text-num-indigo'>Career</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Explore Career</p>
      </div>
      <div className='relative '>
        <Image
          src={`/career/career.jpg`}
          width={1920}
          height={768}
          alt='career'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-0 bg-black  text-white'>
          <div className='ml-10'>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight '>
                Career
              </h1>
              <p className=' md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Get in touch with our global experts to discover how NumberTree
                can help you realize your vision. Please choose an option below
                and we will get back to you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col bg-gray-100 p-10'>
        <h1 className='text-7xl text-num-watermark font-medium'>Jobs</h1>
        <h2 className='-translate-y-12 ml-2 text-4xl text-num-orange font-medium'>
          Jobs
        </h2>
      </div>
      <div className='flex flex-rows-2 '>
        <div className='flex flex-col w-3/4 m-10'></div>
        <div className='flex flex-col w-1/4 mt-10 ml-10'>hi</div>
      </div>
    </div>
  );
};
export default Page;
