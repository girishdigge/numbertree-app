import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RxSlash } from 'react-icons/rx';
import { IoHomeSharp } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import BlogCard from '@/components/sitemap/blog-card';
import { ExploreArticles } from '@/data/Insights';

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
        <Link href={'/contact/proposal'}>
          <p className='font-bold text-num-indigo'>Terms & Conditions</p>
        </Link>
        {/* <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Business Transformation</p> */}
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
                Terms & Conditions
              </h1>
              {/* <p className=' md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>

              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
