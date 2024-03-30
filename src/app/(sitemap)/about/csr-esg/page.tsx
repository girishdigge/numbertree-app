import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosMail } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

const Page = () => {
  return (
    <div>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={`/about`}>
          <p className='font-bold text-num-indigo'>About Us</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'> CSR & ESG</p>
      </div>
      <div className='relative '>
        <Image
          src={`/about/socialResponce.png`}
          width={2046}
          height={768}
          alt='Leadership'
          className='object-cover bg-num-indigo'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center  text-white'>
          <div className='ml-10'>
            {/* <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Explore
            </h2> */}
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                ESG & Corporate Social Responsibility
              </h1>
              {/* <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                The compass that guides our ship
              </p> */}
            </div>

            <Link href={`/contact`} className='animate-fadeInUp'>
              <Button className='md:w-40 ml-4 bg-num-orange text-white mt-2 hover:bg-white hover:text-black animate-fadeInUp'>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='relative p-20'>
        <Image
          src={`/about/esgBanner2.png`}
          width={2046}
          height={768}
          alt='Leadership'
          className='object-cover bg-num-indigo'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center  text-white'>
          <div className='ml-10 items-center  flex flex-col'>
            <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 w-1/2'>
              ESG Strategic
            </h1>
            <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 w-1/2'>
              Consulting
            </h1>
          </div>
        </div>
      </div>
      <div className='ml-20 mr-20 mb-20 text-justify'>
        <h1 className='text-2xl font-medium mt-4 mb-4'>
          Lorem ipsum dolor sit amet
        </h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='grid grid-cols-2 mt-10'>
          <div className='flex flex-col gap-y-8 w-11/12'>
            <h1 className='text-xl font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitatio
            </h1>
            <h2 className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in vo
            </h2>
            <h3 className='text-xl font-bold'>– Lorem ipsum dolor sit amet</h3>
          </div>
          <div>
            <Image
              src={`/about/csr1.png`}
              width={2046}
              height={768}
              alt='Leadership'
              className='object-cover'
            />
          </div>
        </div>
      </div>
      <div className='ml-20 mr-20 mb-20 text-justify'>
        <h1 className='text-2xl font-medium mt-4 mb-4'>
          Lorem ipsum dolor sit amet
        </h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='grid grid-cols-2 mt-10'>
          <div>
            <Image
              src={`/about/csr2.png`}
              width={2046}
              height={768}
              alt='Leadership'
              className='object-cover'
            />
          </div>
          <div className='flex flex-col ml-12 gap-y-8 w-11/12'>
            <h1 className='text-xl font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitatio
            </h1>
            <h2 className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in vo
            </h2>
            <h3 className='text-xl font-bold'>– Lorem ipsum dolor sit amet</h3>
          </div>
        </div>
      </div>
      <div className='relative p-20'>
        <Image
          src={`/about/esgBanner3.png`}
          width={2046}
          height={768}
          alt='Leadership'
          className='object-cover '
        />
        <div className='absolute inset-0 flex flex-col md:justify-center  text-white'>
          <div className='ml-10 items-center  flex flex-col'>
            <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 w-1/2'>
              Corporate Social
            </h1>
            <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 w-1/2'>
              Responsibility
            </h1>
          </div>
        </div>
      </div>
      <div className='ml-20 mr-20 mb-20 text-justify'>
        <h1 className='text-2xl font-medium mt-4 mb-4'>
          Lorem ipsum dolor sit amet
        </h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='grid grid-cols-2 mt-10'>
          <div className='flex flex-col gap-y-8 w-11/12'>
            <h1 className='text-xl font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitatio
            </h1>
            <h2 className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in vo
            </h2>
            <h3 className='text-xl font-bold'>– Lorem ipsum dolor sit amet</h3>
          </div>
          <div>
            <Image
              src={`/about/csr3.png`}
              width={2046}
              height={768}
              alt='Leadership'
              className='object-cover'
            />
          </div>
        </div>
      </div>
      <div className='ml-20 mr-20 mb-20 text-justify'>
        <h1 className='text-2xl font-medium mt-4 mb-4'>
          Lorem ipsum dolor sit amet
        </h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='grid grid-cols-2 mt-10'>
          <div>
            <Image
              src={`/about/csr4.png`}
              width={2046}
              height={768}
              alt='Leadership'
              className='object-cover'
            />
          </div>
          <div className='flex flex-col ml-12 gap-y-8 w-11/12'>
            <h1 className='text-xl font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitatio
            </h1>
            <h2 className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in vo
            </h2>
            <h3 className='text-xl font-bold'>– Lorem ipsum dolor sit amet</h3>
          </div>
        </div>
      </div>
      <div className='ml-20 mr-20 mb-20 text-justify'>
        <h1 className='text-2xl font-medium mt-4 mb-4'>
          Lorem ipsum dolor sit amet
        </h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='grid grid-cols-2 mt-10'>
          <div className='flex flex-col gap-y-8 w-11/12'>
            <h1 className='text-xl font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitatio
            </h1>
            <h2 className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in vo
            </h2>
            <h3 className='text-xl font-bold'>– Lorem ipsum dolor sit amet</h3>
          </div>
          <div>
            <Image
              src={`/about/csr5.png`}
              width={2046}
              height={768}
              alt='Leadership'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
