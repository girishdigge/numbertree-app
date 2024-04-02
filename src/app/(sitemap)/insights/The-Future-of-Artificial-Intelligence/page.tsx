import GetInTouch from '@/components/sitemap/getintouch';
import { Button } from '@/components/ui/button';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import LatestInsights from '@/components/sitemap/latest-insights4';
import BlogCTA from '@/components/sitemap/blog-cta';
import BlogCard from '@/components/sitemap/blog-card';
import { ExploreArticles } from '@/data/Insights';
const Page = () => {
  return (
    <div className=''>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={`/insights`}>
          <p className='font-bold text-num-indigo'>Insights</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>
          The Future of Artificial Intelligence
        </p>
      </div>
      <div className='flex flex-row'>
        <div className='md:w-3/4 flex justify-center'>
          <div className='w-4/5 mt-2'>
            <Image
              src={`/projects/merc.jpg`}
              width={2046}
              height={768}
              alt='Airports & Aviation'
              className='object-contain'
            />
            <div className=' flex flex-col items-center  text-justify'>
              <h1 className='text-3xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black mb-2 mt-12'>
                The Future of Artificial Intelligence
              </h1>
              <p className='text-gray-600 mb-4 '>10 Mar 2024</p>
              <div className='flex flex-col '>
                <p className=' md:text-lg text-xs flex mb-8'>
                  As populations grow, so do demands for safe, expedient and
                  cost-effective transportation. We work with clients in India &
                  abroad to achieve cost optimization, digitization/BIM and
                  efficiency in processes and control in transportation
                  projects.
                </p>{' '}
                <br />
                <p className='    md:text-lg text-xs flex mb-8'>
                  We use our extensive knowledge in techno commercial audit,
                  project planning, digital project monitoring, 5D/4D/3D BIM and
                  managing transportation systems — to help our clients find
                  smarter, more advanced ways to move people from one place to
                  another.
                </p>{' '}
                <p className='    md:text-lg text-xs flex mb-8'>
                  As populations grow, so do demands for safe, expedient and
                  cost-effective transportation. We work with clients in India &
                  abroad to achieve cost optimization, digitization/BIM and
                  efficiency in processes and control in transportation
                  projects.
                </p>{' '}
                <br />
                <p className='    md:text-lg text-xs flex mb-8'>
                  We use our extensive knowledge in techno commercial audit,
                  project planning, digital project monitoring, 5D/4D/3D BIM and
                  managing transportation systems — to help our clients find
                  smarter, more advanced ways to move people from one place to
                  another.
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/4 hidden md:flex flex-col  ml-2'>
          <div>
            {' '}
            <LatestInsights /> <BlogCTA />
          </div>
        </div>
      </div>
      <div className='md:w-11/12 md:ml-20'>
        <div className='flex pl-4 flex-col ml-4'>
          <h1 className='text-xl font-bold mb-2'> Share this page</h1>

          <div className='flex gap-4 mb-4'>
            <FaFacebookF
              size={30}
              className='bg-num-orange p-1 text-white  rounded-xl'
            />
            <FaLinkedinIn
              size={31}
              className='bg-num-orange text-white p-1 rounded-xl'
            />
            <FaXTwitter
              size={30}
              className='bg-num-orange text-white p-1 rounded-xl'
            />
          </div>
        </div>
        <div className='md:flex hidden mt-10 ml-6 gap-x-2 tracking-widest'>
          <h1 className='text-xl font-medium  p-1'>Tags:</h1>
          <h2 className='border border-num-orange text-base  p-1'>Article</h2>
          <h2 className='border border-num-orange text-base   p-1'>
            Artificial Intelligence
          </h2>
          <h2 className='border border-num-orange text-base   p-1'>BIM</h2>
          <h2 className='border border-num-orange text-base  p-1'>Future</h2>
        </div>
        <div>
          <div className='flex  mt-20'>
            <h2 className=' md:text-3xl text-black  hover:text-white p-2 font-medium md:ml-4'>
              You may also like
            </h2>
          </div>
          <div className='container mx-auto px-4 py-8'>
            {/* <h1 className='text-3xl font-bold mb-4'>Latest Blogs</h1> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
              {ExploreArticles.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
