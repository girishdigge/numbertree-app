'use client';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const testimonials = [
    {
      name: 'Saqlain Shaikh',
      role: 'CEO Osker Tech',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere quia consequuntur rem quaerat fuga voluptas. Laboriosam, fugit! Aperiam, quos.',
      rating: '⭐⭐⭐⭐⭐',
      image: '/testimonials/saqlain.png', // replace with the actual image path
    },
    {
      name: 'Chetan Chavan',
      role: 'CMO Osker Tech',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere quia consequuntur rem quaerat fuga voluptas. Laboriosam, fugit! Aperiam, quos.',
      rating: '⭐⭐⭐⭐⭐',
      image: '/testimonials/chetan.png', // replace with the actual image path
    },
    {
      name: 'Girish Digge',
      role: 'CTO Osker Tech',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere quia consequuntur rem quaerat fuga voluptas. Laboriosam, fugit! Aperiam, quos.',
      rating: '⭐⭐⭐⭐⭐',
      image: '/testimonials/girish.png', // replace with the actual image path
    },
  ];

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
        <p className='font-bold text-num-indigo'> Clients & Ethics</p>
      </div>
      <div className='relative '>
        <Image
          src={`/about/client-ethics.jpg`}
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
                Our Clients & Ethics
              </h1>
              {/* <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                The compass that guides our ship
              </p> */}
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
        <div className='w-3/4 flex flex-col ml-10 '>
          <h1 className='text-5xl font-medium  mb-3'>Our Clients</h1>
          <hr className='w-40 border-2 border-num-orange' />
          <div className='w-5/6'>
            <h2 className='text-2xl mt-4 mb-4'>
              We build relationships that creates value
            </h2>
            <h3 className='text-lg text-justify '>
              CEOs and board members see us as their natural partner. Thanks to
              our long-term, trust-based relationships, they know that they can
              turn to us any time to discuss any situation or challenge that
              arises while executing a project. It is a source of immense pride
              for us that most of our customers are also our repeat customer.
            </h3>
            <div className='border border-num-orange mt-6 mb-6 p-8'>
              <FaQuoteLeft size={40} className='text-wilmer-orange mb-2' />
              <p className='text-lg text-num-orange ml-12 w-3/4'>
                {`A relationship, built and nurtured with mutual respect, shared
                goals & thorough understanding of business needs.`}
              </p>
            </div>
            <h2 className='text-lg'>
              In addition to our audit Services, we also offer our clients the
              services of BIMfirst and transaction advisory, that reflects our
              commitment to meet our clients’ evolving needs.
            </h2>
            <h2 className='font-medium text-xl mt-8 '>
              Here’s what some of our clients have to say about us
            </h2>
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
      <div className='relative mb-14 w-3/4 border ml-8 border-1 border-b-0 mt-4 border-num-orange rounded-sm shadow-xl'>
        <Slider {...settings}>
          {testimonials.map((test, index) => (
            <div key={index} className='flex mt-10 mb-5 '>
              <div className='flex flex-col'>
                <div className='flex items-center justify-center'>
                  <div className='mb-2 w-1/2'>
                    <h1 className='h-4 text-8xl  text-left text-num-indigo'>
                      “
                    </h1>
                    <p className='px-8 py-4 text-lg text-center  text-num-indigo'>
                      {test.content}
                    </p>
                    <div className='h-3 text-8xl text-right text-num-indigo'>
                      ”
                    </div>
                  </div>
                </div>
                <div className=' flex flex-col items-center mt-4 ml-4'>
                  <h1 className='md:text-4xl text-2xl  text-num-indigo'>
                    {test.name}
                  </h1>
                  <h2 className='text-base mt-4'>{test.role}</h2>
                </div>
                <div className='flex justify-center items-center mt-4'>
                  <Image
                    src={`/logo/star.png`}
                    height={50}
                    width={200}
                    alt='img'
                    className='w-28 '
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='grid grid-cols-2 m-8'>
        <div className='border-2 border-num-orange border-r-0 p-10 flex flex-col items-center justify-center'>
          <div>
            <h1 className='text-5xl font-medium  mb-3'>Our Clients</h1>
            <hr className='w-40 border-2 border-num-orange' />
            <h2 className='text-2xl mt-4 mb-4 w-2/3'>
              Committed to doing the right thing, every time
            </h2>
          </div>
        </div>
        <Image
          src={`/about/Ethics.png`}
          height={800}
          width={800}
          alt='ethics'
          className=' '
        />
      </div>
      <div className='flex flex-col text-lg p-8 text-justify gap-6 mr-4'>
        <p>
          Integrity & Transparency lies at the heart of all our endeavours. All
          our financial processes and practices are conducted with utmost
          clarity, enabling our clients to have a comprehensive understanding of
          the strategies and actions we undertake on their behalf. We believe
          that transparency breeds accountability, and we hold ourselves
          accountable for the advice and guidance we provide.
        </p>
        <p>
          We not only foster an environment of trust and collaboration but we
          also maintain highest standard of business integrity in our work. we
          continuously review and update our internal controls and procedures to
          align with industry best practices and regulatory requirements. These
          measures serve as additional safeguards to protect the integrity of
          our financial operations, ensuring that we operate in a manner that is
          ethical, responsible, and in compliance with applicable laws and
          regulations.
        </p>
        <h1 className='text-2xl font-medium'>Code of Conduct</h1>
        <p>
          Our Code of Conduct document, underlines our commitment to integrity.
          It outlines both essential legal parameters and ethical principles
          guiding our conduct in serving our clients. It addresses our company’s
          professional, ethical, financial and social values. It outlines
          expected behaviour for all employees across our operations. This code
          reflects our pledge to uphold the trust of clients, partners, and the
          communities we serve, aligning our actions with the highest standards
          of accountability and responsibility.
        </p>

        <div>
          <div className=' mb-8'>
            <span className='flex mb-4 text-xl font-medium hover:underline'>
              <FaCloudDownloadAlt size={24} className='text-num-orange mr-2' />
              Download Code of conduct document here
            </span>
          </div>
          <h1 className='text-2xl font-medium'>Anti-Corruption</h1>
          <p>
            Numbertree is committed to integrity, and we adhere to the highest
            standards of ethics and compliance while delivering excellence to
            our clients. We continue to earn our clients’ trust by delivering
            outstanding customer service and acting ethically in all that we do.
            We train our employees on anti-corruption, anti-bribery and related
            policies & processes.
          </p>
        </div>
        <div>
          <div className=' mb-8'>
            <span className='flex mb-4 text-xl font-medium hover:underline'>
              <FaCloudDownloadAlt size={24} className='text-num-orange mr-2' />
              Download our Anti-Corruption policy here
            </span>
          </div>
          <h1 className='text-2xl font-medium'>Data Integrity</h1>
          <p>
            We prioritize data security and compliance with industry standards
            and regulations. Our digital infrastructure includes robust
            encryption protocols, access controls, and secure data storage. We
            use proprietary software tools for our audit service ensuring no
            data leakage or parking of information with any third party. We
            adhere to data privacy regulations and maintain strict
            confidentiality of client information. We train our on-site teams on
            rules and processes pertaining to data integrity.
          </p>
        </div>
        <div>
          <div className=' mb-8'>
            <span className='flex mb-4 text-xl font-medium hover:underline '>
              <FaCloudDownloadAlt size={24} className='text-num-orange mr-2' />
              Download Code of conduct document here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
