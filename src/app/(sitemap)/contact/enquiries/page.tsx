'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RxSlash } from 'react-icons/rx';
import { IoHomeSharp } from 'react-icons/io5';
import { FaSquarePhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
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
        <RxSlash color='gray' className='mt-1' />

        <p className='font-bold text-num-indigo'>Enquiries</p>
      </div>
      <div className='relative '>
        <Image
          src={`/images/contact1.jpg`}
          width={2046}
          height={768}
          alt='business transformation'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-50 bg-black  text-white'>
          <div className='ml-10'>
            {/* <h2 className='md:text-xl font-light text-sm ml-4 mb-2'>EXPLORE</h2> */}
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Contact us
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Get in touch with our global experts to discover how Numbertree
                can help you realize your vision. Please choose an option below
                and we will get back to you shortly.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col m-20 '>
        <h1 className='text-2xl mb-10'>What can we help you with?</h1>
        <div className='flex gap-10'>
          <Link href={`/contact/proposal`}>
            <Button className='w-64 text-lg h-12 bg-num-indigo text-white hover:bg-num-orange'>
              Request for Proposal
            </Button>
          </Link>
          <Link href={`/contact/message`}>
            <Button className='w-64 h-12 text-lg bg-num-indigo text-white hover:bg-num-orange'>
              Send a Message
            </Button>
          </Link>
          <Link href={`/contact/expert`}>
            <Button className='w-64 h-12 text-lg bg-num-indigo text-white hover:bg-num-orange'>
              Find an Expert
            </Button>
          </Link>
          <Button className='w-64 h-12 text-lg bg-num-orange text-white hover:bg-num-orange'>
            Enquiries
          </Button>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-8 m-20'>
        <div className='flex-flex-col'>
          <h1 className='text-num-blue text-2xl mb-2'>Mumbai Office</h1>
          <span className='flex text-lg'>
            <FaSquarePhone size={24} className='text-num-indigo ' />
            {`022-49617073`}
          </span>
          <span className='flex text-lg mt-2'>
            <FaLocationDot size={22} className='text-num-indigo mr-1' />
            <p className='text-black w-2/3 text-justify '>
              502 Town Centre-1, Andheri Kurla Road, Andheri East, Mumbai,
              400059
            </p>
          </span>
        </div>
        <div className='flex-flex-col'>
          <h1 className='text-num-blue text-2xl mb-2'>Delhi Office</h1>
          <span className='flex text-lg'>
            <FaSquarePhone size={24} className='text-num-indigo ' />
            {`011-41458409`}
          </span>
          <span className='flex text-lg mt-2'>
            <FaLocationDot size={22} className='text-num-indigo mr-1' />
            <p className='text-black w-2/3 text-justify '>
              A-99, 3rd Floor, Lajpat Nagar 2, New Delhi, 110018
            </p>
          </span>
        </div>
        <div className='flex-flex-col'>
          <h1 className='text-num-blue text-2xl mb-2'>Dubai Office</h1>
          <span className='flex text-lg'>
            <FaSquarePhone size={24} className='text-num-indigo ' />
            {`+971`}
          </span>
          <span className='flex text-lg mt-2'>
            <FaLocationDot size={22} className='text-num-indigo mr-1' />
            <p className='text-black w-2/3 text-justify'>
              Office No.1043-0, Dawood Building, Hor AL ANZ, Al Barsha PO Box
              80080, United Arab Emirates
            </p>
          </span>
        </div>
      </div>
      <div className='grid grid-cols-4  gap-4 m-20'>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-2xl'>For Press Enquiry</h1>
            <h2 className=' text-num-blue underline font-semibold'>
              <div
                onClick={() =>
                  (window.location.href = `mailto:Press.enquiries@numbertree.in`)
                }
              >
                <span className='flex mt-2'>
                  <IoIosMail size={24} className='text-num-indigo mr-1' />

                  <p className='text-base hover:cursor-pointer'>
                    Press.enquiries@numbertree.in
                  </p>
                </span>
              </div>
            </h2>
          </div>
        </div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-2xl'>Service Related</h1>

            <h2 className=' text-num-blue underline font-semibold'>
              <div
                onClick={() =>
                  (window.location.href = `mailto:services@numbertree.in`)
                }
              >
                <span className='flex mt-2'>
                  <IoIosMail
                    size={24}
                    className='text-num-indigo mr-1 hover:cursor-pointer'
                  />
                  services@numbertree.in
                </span>
              </div>
            </h2>
          </div>
        </div>

        <div className='flex flex-col '>
          <div>
            <h1 className='text-2xl'>General Query</h1>
            <h2 className=' text-num-blue underline font-semibold'>
              <div
                onClick={() =>
                  (window.location.href = `mailto:info@numbertree.in`)
                }
              >
                <span className='flex mt-2'>
                  <IoIosMail
                    size={24}
                    className='text-num-indigo mr-1 hover:cursor-pointer'
                  />
                  info@numbertree.in
                </span>
              </div>
            </h2>
          </div>
        </div>
        <div className='flex flex-col '>
          <div>
            <h1 className='text-2xl'>Career Related</h1>
            <h2 className=' text-num-blue underline font-semibold'>
              <div
                onClick={() =>
                  (window.location.href = `mailto:careers@numbertree.in`)
                }
              >
                <span className='flex mt-2'>
                  <IoIosMail
                    size={24}
                    className='text-num-indigo mr-1 hover:cursor-pointer'
                  />
                  careers@numbertree.in
                </span>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
