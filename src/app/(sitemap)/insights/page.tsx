'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

import { Articles } from '@/data/Insights';
import BlogCard from '@/components/sitemap/blog-card';
import BlogPagination from '@/components/sitemap/blog-pagination';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Logic to paginate the blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = Articles.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className=''>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        {/* <RxSlash color='gray' className='mt-1' />
        <Link href={`/sectors`}>
          <p className='font-bold text-num-indigo'>Sectors</p>
        </Link> */}
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Insights</p>
      </div>
      <div className='relative '>
        <Image
          src={`/images/insightsBanner.jpg`}
          width={2046}
          height={768}
          alt='Insights'
          className='object-cover'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-50 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Explore
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Insights
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Get in touch with our global experts to discover how NumberTree
                can help you realize your vision.
              </p>
            </div>

            <Link href={`/contact/proposal`} className='animate-fadeInUp'>
              <Button className='md:w-40 ml-4 bg-num-indigo text-white mt-2 hover:bg-wilmer-orange hover:text-white animate-fadeInUp'>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8'>
        {/* <h1 className='text-3xl font-bold mb-4'>Latest Blogs</h1> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {currentBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        <BlogPagination
          totalItems={Articles.length}
          itemsPerPage={blogsPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
      <div className='bg-num-blue bg-opacity-0 md:p-8 md:mt-0 md:pt-20 mt-10'>
        <div className='md:flex flex-row gap-2 md:ml-4 mr-4'>
          <div className='flex flex-row relative h-96  mb-10 md:mb-0 md:ml-1'>
            <Image
              src={`/connect/team.jpg`}
              height={540}
              width={960}
              alt='linkedin'
              className='object-cover'
            />
            <div className=' absolute inset-0 bg-black bg-opacity-5'>
              <div className='ml-6'>
                <h1 className='text-num-orange text-4xl font-medium md:mt-4 mb-1'>
                  Meet With Team
                </h1>
                {/* <h2 className=' md:text-3xl text-3xl font-medium md:mb-3 mb-1 text-white'>
                  Empowering Tomorrow{`'`}s infrastructure
                </h2> */}
                <p className='w-4/5 text-white md:text-lg'>
                  {`We're a high performance, hand-selected team of industry
                  professionals, subject matter experts, career consultants,
                  designers and developers. Building businesses that change the
                  world.`}
                </p>
                <div className='flex flex-row-reverse mt-36 mr-4'>
                  <Link href={'/about'}>
                    <Button className='w-40 mt-2 text-base hover:bg-num-indigo border-0 bg-num-orange'>
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='z-1 flex flex-row relative h-96'>
            <Image
              src={`/connect/linkedin.png`}
              height={540}
              width={960}
              alt='insights'
              className='object-cover'
            />
            <div className=' absolute inset-0 bg-black bg-opacity-50'>
              <div className='ml-6'>
                <h1 className='text-num-orange text-4xl font-medium md:mt-4 mb-1'>
                  Connect Us
                </h1>
                {/* <h2 className='md:text-3xl text-xl  md:mb-3 mb-1 font-medium text-white'>
                  Without Boundaries
                </h2> */}
                <p className='w-4/5 text-white md:text-lg'>
                  {` We work with disruptors. Risk takers. Fearless leaders. Those
                  unafraid to go against the grain. Whether you're interested in
                  what we can do for your business, or you're interested in
                  joining our growing team, get in touch.`}
                </p>
                <div className='flex flex-row-reverse mr-4 md:mt-32'>
                  <Link href={'/contact/proposal'}>
                    <Button className='w-40 mt-3 hover:bg-num-indigo  border-0 bg-num-orange'>
                      Connect
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
