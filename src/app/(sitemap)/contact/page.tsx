import Image from 'next/image';
import Link from 'next/link';
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
          <p className='font-bold text-num-indigo'>Contact Us</p>
        </Link>
        {/* <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Business Transformation</p> */}
      </div>
      <div className='relative '>
        <Image
          src={`/services/BusinessTransformation2.jpg`}
          width={2046}
          height={768}
          alt='business transformation'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col items-start '>
          <h1 className='font-bold md:text-5xl text-3xl mt-2 ml-2 flex border-l-4 border-num-orange justify-center text-white'>
            Contact us
          </h1>
          <p className='text-lg text-white w-1/3 mt-4 ml-4'>
            Get in touch with our global experts to discover how NumberTree can
            help you realize your vision. Please choose an option below and we
            will get back to you shortly.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page;
