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
          <p className='font-bold text-num-indigo'>Career</p>
        </Link>
        {/* <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Business Transformation</p> */}
      </div>
      <div className='relative '>
        <Image
          src={`/images/insights.png`}
          width={1920}
          height={768}
          alt='business transformation'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-50 bg-black  text-white'>
          <div className='ml-10'>
            <div className='border-l-4 w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-3xl mb-2 border-num-orange ml-2 flex '>
                Career
              </h1>
            </div>
            <p className='text-xl w-3/5 font-medium ml-4 mb-2'>
              Get in touch with our global experts to discover how NumberTree
              can help you realize your vision. Please choose an option below
              and we will get back to you shortly.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-20 mb-20'>
        <div className='grid grid-cols-3 gap-4  w-3/4'>
          <Image
            src={`/bim/arup.jpg`}
            width={400}
            height={400}
            alt='business transformation'
            className='object-contain'
          />
          <div className='border-b-4 border-num-orange flex flex-col items-center justify-center'>
            <Image
              src={`/logo/s0.png`}
              width={100}
              height={100}
              alt='business transformation'
              className='object-contain'
            />
            <h1 className=''>Explore career</h1>
            <h2 className='text-xl font-bold'>Life at NumberTree</h2>
            <p className='w-3/4 text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              fugit magnam dolorem commodi.
            </p>
          </div>
          <Image
            src={`/bim/arup.jpg`}
            width={400}
            height={400}
            alt='business transformation'
            className='object-contain'
          />
          <div className='border-b-4 border-num-orange flex flex-col items-center justify-center'>
            <Image
              src={`/logo/s1.png`}
              width={100}
              height={100}
              alt='business transformation'
              className='object-contain'
            />
            <h1 className=''>Explore career</h1>
            <h2 className='text-xl font-bold'>Life at NumberTree</h2>
            <p className='w-3/4 text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              fugit magnam dolorem commodi.
            </p>
          </div>
          <Image
            src={`/resource/career.png`}
            width={400}
            height={400}
            alt='business transformation'
            className='object-contain'
          />
          <div className='border-b-4 border-num-orange flex flex-col items-center justify-center'>
            <Image
              src={`/logo/s2.png`}
              width={100}
              height={100}
              alt='business transformation'
              className='object-contain'
            />
            <h1 className=''>Explore career</h1>
            <h2 className='text-xl font-bold'>Life at NumberTree</h2>
            <p className='w-3/4 text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              fugit magnam dolorem commodi.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='relative '>
          <Image
            src={`/career/office.jpg`}
            width={1400}
            height={800}
            alt='business transformation'
            className='object-contain'
          />
          <div className='absolute inset-0 flex flex-col justify-center items-end'>
            <div className=' bg-num-orange p-20 gap-4 flex flex-col w-1/3 h-96 mr-20 text-white'>
              <h1 className='text-xl'>Explore career</h1>
              <h2 className='text-4xl font-bold'>Life at NumberTree</h2>
              <p className='w-3/4 text-justify text-lg'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                fugit magnam dolorem.
              </p>
              <Button className='w-40 text-lg bg-num-indigo hover:bg-white hover:text-num-indigo'>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
