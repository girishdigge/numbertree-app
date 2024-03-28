'use client';
import { useState } from 'react';
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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
        <RxSlash color='gray' className='mt-1' />
        <Link href={`/sectors`}>
          <p className='font-bold text-num-indigo'>Sectors</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Insights</p>
      </div>
      <div className='relative '>
        <Image
          src={`/images/insightsBanner.jpg`}
          width={2046}
          height={768}
          alt='Airports & Aviation'
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

            <Link href={`/contact`} className='animate-fadeInUp'>
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
    </div>
  );
};
export default Page;
