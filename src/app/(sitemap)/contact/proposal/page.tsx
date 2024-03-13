import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RxSlash } from 'react-icons/rx';
import { IoHomeSharp } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { ProposalForm } from '@/app/(sitemap)/contact/proposal/ProposalForm';
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
        <p className='font-bold text-num-indigo'>Request a Proposal</p>
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
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex '>
                Contact us
              </h1>
              <p className='md:text-xl text-xs font-medium ml-4 md:mb-2'>
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
          <Button className='w-64 text-lg h-12 bg-num-orange text-white hover:bg-num-orange '>
            Request for Proposal
          </Button>
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
          <Link href={`/contact/enquiries`}>
            <Button className='w-64 h-12 text-lg bg-num-indigo text-white hover:bg-num-orange'>
              Enquiries
            </Button>
          </Link>
        </div>
      </div>
      <div className='flex flex-col pl-20 pt-10 pb-10 text-justify bg-gray-100'>
        <p className='text-xl w-3/5'>
          We are proud of the work we do at NumberTree, solving problems &
          helping our clients across sector in overcoming their business
          challenges.
        </p>
        <br />
        <p className='text-xl w-3/5'>
          If you would like to know more about what we do and how we can help
          you achieve your objectives , fill out the following form
        </p>
      </div>
      <div className='flex flex-col pl-20 mt-10'>
        <ProposalForm />
      </div>
    </div>
  );
};
export default Page;
