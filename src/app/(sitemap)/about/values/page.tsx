'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import LatestInsights from '@/components/sitemap/latest-insights4';
import BlogCTA from '@/components/sitemap/blog-cta';
const Page = () => {
  return (
    <div>
      {' '}
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
        <p className='font-bold text-num-indigo'> Values</p>
      </div>
      <div className='relative '>
        <Image
          src={`/about/valueBanner.png`}
          width={2046}
          height={768}
          alt='Value'
          className='object-cover bg-num-indigo'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center  text-white'>
          <div className='ml-10'>
            {/* <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Explore
            </h2> */}
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Our Values
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                The compass that guides our ship
              </p>
            </div>

            <Link href={`/contact/proposal`} className='animate-fadeInUp'>
              <Button className='md:w-40 ml-4 bg-num-orange text-white mt-2 hover:bg-white hover:text-black animate-fadeInUp'>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex  mt-20'>
        <div className='w-3/4 flex flex-col items-center '>
          <div className='w-5/6 flex flex-col'>
            <p className='text-xl font-medium text-justify mb-6'>
              We work on the some of the most complex & challenging projects,
              partnering with great businesses that will shape tomorrow’s world
              in the most positive and sustainable way. We remain committed to
              providing the best that we can offer – all the while guided by our
              values.
            </p>
            <div className='flex mt-20'>
              <div className='w-1/5 flex items-center justify-center'>
                <Image
                  src={`/about/aim1.png`}
                  width={512}
                  height={512}
                  alt='aim'
                  className='object-contain p-5 mr-6'
                />
              </div>
              <div className='w-4/5 flex flex-col text-justify'>
                <h1 className='text-xl font-medium mb-2'>Client First</h1>
                <p className='text-lg'>
                  {` Our unwavering commitment is to always prioritize our clients'
                  interests. Their success is the ultimate measure of our own
                  achievements. We firmly believe that by serving our clients
                  with excellence, our own success naturally follows. To ensure
                  their success, we dedicate ourselves to understanding their
                  genuine needs and objectives, going beyond delivering good
                  work to providing tailored solutions that exceed expectations.
                  We are dedicated to the success of our clients and remain
                  steadfast in our commitment to their prosperous future.
                  Customer centricity is our guiding principle across all our
                  services.`}
                </p>
              </div>
            </div>
            <div className='flex mt-20'>
              <div className='w-1/5 flex items-center justify-center'>
                <Image
                  src={`/about/integrity1.png`}
                  width={512}
                  height={512}
                  alt='aim'
                  className='object-contain p-5 mr-6'
                />
              </div>
              <div className='w-4/5 flex flex-col text-justify'>
                <h1 className='text-xl font-medium mb-2'>Integrity</h1>
                <p className='text-lg'>
                  {` Integrity lies at the heart of our endeavours. We hold ourselves accountable for the advice and guidance we provide. Clients’ confidentiality and transparency in our work forms the cornerstone of our principled approach. We continuously review and update our internal controls and procedures to align with industry best practices and regulatory requirements. These measures serve as additional safeguards and ensures that we operate in a manner that is ethical and in compliance with the applicable laws and regulations.`}
                </p>
              </div>
            </div>
            <div className='flex mt-20'>
              <div className='w-1/5 flex items-center justify-center'>
                <Image
                  src={`/about/agility1.png`}
                  width={512}
                  height={512}
                  alt='aim'
                  className='object-contain p-5 mr-6'
                />
              </div>
              <div className='w-4/5 flex flex-col text-justify'>
                <h1 className='text-xl font-medium mb-2'>Agility</h1>
                <p className='text-lg'>
                  {` We embrace change with Confidence. Agility is at the core of our principles, guiding us to navigate the ever-evolving business landscape with confidence. We believe that adaptability and responsiveness are crucial in delivering effective audit solutions. Our agile approach enables us to swiftly respond to emerging risks, industry trends, and regulatory changes, ensuring that our clients receive timely and relevant insights. Our agile approach ensures seamless service delivery, maintaining the same high standards of excellence and professionalism wherever the clients need us.`}
                </p>
              </div>
            </div>
            <div className='flex mt-20'>
              <div className='w-1/5 flex items-center justify-center'>
                <Image
                  src={`/about/auction1.png`}
                  width={512}
                  height={512}
                  alt='law of land'
                  className='object-contain p-5 mr-6'
                />
              </div>
              <div className='w-4/5 flex flex-col text-justify'>
                <h1 className='text-xl font-medium mb-2'>Law of Land</h1>
                <p className='text-lg'>
                  {` We are dedicated to complying fully with the letter and spirit of the laws, rules and ethical principles that govern us. Our success is built upon the foundation of upholding this standard without compromise. By prioritizing total compliance to legal and regulatory frameworks, we ensure the highest levels of integrity and accountability in all aspects of our work.`}
                </p>
              </div>
            </div>
            <div className='flex mt-20'>
              <div className='w-1/5 flex items-center justify-center'>
                <Image
                  src={`/about/social1.png`}
                  width={512}
                  height={512}
                  alt='aim'
                  className='object-contain p-5 mr-6'
                />
              </div>
              <div className='w-4/5 flex flex-col text-justify'>
                <h1 className='text-xl font-medium mb-2'>Social Impact</h1>
                <p className='text-lg'>
                  {` We seek to have a positive and lasting impact beyond the business domain. We believe we can make the world a better place both directly through our client work and through our indirect efforts. We understand the importance of community cohesion. Whether it's volunteering our expertise, providing financial contributions, or collaborating with charitable organizations, we are committed to making a difference in our own way.`}
                </p>
              </div>
            </div>
            <div className='flex mt-20'>
              <div className='w-1/5 flex items-center justify-center'>
                <Image
                  src={`/about/idea1.png`}
                  width={512}
                  height={512}
                  alt='knowlege'
                  className='object-contain p-5 mr-6'
                />
              </div>
              <div className='w-4/5 flex flex-col text-justify mb-20'>
                <h1 className='text-xl font-medium mb-2'>Knowledge</h1>
                <p className='text-lg'>
                  {` Knowledge forms the base of all our services. We recognize that informed decisions drive success in complex engineering and audit projects. We firmly believe that our knowledge is not just a resource but a distinct advantage for our clients. Our commitment to continuous learning ensures that our team remains at the forefront of industry advancements, ready to deliver solutions that exceed expectations. We understand that each client's needs are unique, and our dedication to expanding our knowledge through ongoing education allows us to offer innovative approaches and effective strategies.`}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-1/4 flex flex-col'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-bold mb-2'> Share this page</h1>

            <div className='flex gap-4 mb-8'>
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
          <div className=' flex flex-col'>
            <div className=''>
              <BlogCTA />
            </div>
          </div>
        </div>
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
                  Ethics
                </h1>
                {/* <h2 className=' md:text-3xl text-3xl font-medium md:mb-3 mb-1 text-white'>
                  Empowering Tomorrow{`'`}s infrastructure
                </h2> */}
                <p className='w-1/2 text-white md:text-xl '>
                  {`Committed to doing the right thing, every time`}
                </p>
                <div className='flex flex-row-reverse md:mt-44 mr-4'>
                  <Link href={'/about/client-ethics'}>
                    <Button className='w-40 mt-2 text-base hover:bg-num-indigo border-0 bg-num-orange'>
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='z-1 flex flex-row relative h-96'>
            <Image
              src={`/about/socialResponce.png`}
              height={540}
              width={960}
              alt='insights'
              className='object-cover'
            />
            <div className=' absolute inset-0 bg-black bg-opacity-50'>
              <div className='ml-6'>
                <h1 className='text-num-orange text-4xl font-medium md:mt-4 mb-4'>
                  Corporate Social Responsibility
                </h1>

                <div className='flex flex-row-reverse mr-4 md:mt-56'>
                  <Link href={'/about/csr-esg'}>
                    <Button className='w-40 mt-3 hover:bg-num-indigo  border-0 bg-num-orange'>
                      Read More
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
