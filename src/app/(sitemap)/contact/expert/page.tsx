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

        <p className='font-bold text-num-indigo'>Find an Expert</p>
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
                Get in touch with our global experts to discover how NumberTree
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
          <Button className='w-64 h-12 text-lg bg-num-orange text-white hover:bg-num-orange'>
            Find an Expert
          </Button>
          <Link href={`/contact/enquiries`}>
            <Button className='w-64 h-12 text-lg bg-num-indigo text-white hover:bg-num-orange'>
              Enquiries
            </Button>
          </Link>
        </div>
      </div>
      <div className='flex m-10'>
        <div className='grid grid-cols-3 gap-10'>
          <div className='grid grid-cols-2'>
            <Image
              src={`/testimonials/saqlain.png`}
              width={200}
              height={250}
              alt='1'
            />
            <div className='flex flex-col ml-2 gap-1 justify-center'>
              <h1 className='text-2xl font-semibold'>John Doe</h1>
              <h2 className='text-lg font-light text-num2-blue'>CEO</h2>
              <span className='flex'>
                <IoIosMail size={24} className='text-num-indigo' />
                {`info@numbertree.in`}
              </span>
              <span className='flex'>
                <FaSquarePhone size={24} className='text-num-indigo' />
                {`+91-9988776655`}
              </span>
              <Link href={`/contact/expert/exp1`}>
                <Button className='bg-num-indigo text-lg hover:bg-num-orange'>
                  Send Message
                </Button>
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <Image
              src={`/testimonials/chetan.png`}
              width={200}
              height={250}
              alt='1'
            />
            <div className='flex flex-col ml-2 gap-1 justify-center'>
              <h1 className='text-2xl font-semibold'>John Doe</h1>
              <h2 className='text-lg font-light text-num2-blue'>Director</h2>
              <span className='flex'>
                <IoIosMail size={24} className='text-num-indigo' />
                {`info@numbertree.in`}
              </span>
              <span className='flex'>
                <FaSquarePhone size={24} className='text-num-indigo' />
                {`+91-9988776655`}
              </span>
              <Link href={`/contact/expert/exp2`}>
                <Button className='bg-num-indigo text-lg hover:bg-num-orange'>
                  Send Message
                </Button>
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <Image
              src={`/testimonials/girish.png`}
              width={200}
              height={250}
              alt='1'
            />
            <div className='flex flex-col ml-2 gap-1 justify-center'>
              <h1 className='text-2xl font-semibold'>John Doe</h1>
              <h2 className='text-lg font-light text-num2-blue'>Manager</h2>
              <span className='flex'>
                <IoIosMail size={24} className='text-num-indigo' />
                {`info@numbertree.in`}
              </span>
              <span className='flex'>
                <FaSquarePhone size={24} className='text-num-indigo' />
                {`+91-9988776655`}
              </span>
              <Link href={`/contact/expert/exp3`}>
                <Button className='bg-num-indigo text-lg hover:bg-num-orange'>
                  Send Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
