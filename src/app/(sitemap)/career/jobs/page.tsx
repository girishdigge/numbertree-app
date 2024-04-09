'use client';
import Image from 'next/image';
import Link from 'next/link';
import { InputSearchButton } from '@/components/sitemap/inputSearch';
import { RxSlash } from 'react-icons/rx';
import { IoHomeSharp } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { Jobs } from '@/data/jobs';
import { FaLocationDot } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
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
                Get in touch with our global experts to discover how Numbertree
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
        <div className='flex flex-col w-3/4 m-10 '>
          <Suspense>
            <InputSearchButton />
          </Suspense>
          <div className='mt-10'>
            {Jobs.map((job, index) => (
              <div key={index} className='flex flex-col p-4'>
                <div className=' flex border border-num-orange p-2'>
                  <div className='flex flex-col w-11/12'>
                    <h1 className='text-2xl font-medium'>{job.title}</h1>
                    <h2 className='text-num-orange text-lg'>
                      <span className='flex mb-2 mt-2'>
                        <FaLocationDot size={24} color='text-num-orange' />
                        {job.location}
                      </span>
                    </h2>
                    <h3 className='text-xl mb-2 text-num-blue'>
                      Career Area:{job.area}
                    </h3>
                    <h4 className='text-xl text-num-indigo'>
                      Skills Required:{job.skills}
                    </h4>
                  </div>
                  <div className='flex  flex-col-reverse'>
                    <Link href={`/career/jobs/apply`}>
                      <Button className='bg-num-indigo hover:bg-num-orange md:w-40'>
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col w-1/4 mt-24 ml-10'>
          <div className='flex flex-col bg-num-indigo p-10 m-10'>
            <h1 className='text-white'>{`Don't see what you're looking for?`}</h1>
            <h2 className='text-white'>Connect with us:</h2>
            <Button className='bg-num-orange'>Follow us on linkedin</Button>
          </div>
          <div className='flex flex-col border-2 border-num-orange p-10 m-10'>
            <h1>{`Want to know more about Number tree?`}</h1>
            <h2>Explore our:</h2>
            <Button className='bg-num-indigo'>Life at Numbertree</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
