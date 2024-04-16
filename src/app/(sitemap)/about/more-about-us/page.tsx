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
        <p className='font-bold text-num-indigo'> About Numbertree</p>
      </div>
      <div className='relative '>
        <Image
          src={`/about/BG.png`}
          width={2046}
          height={768}
          alt='Insights'
          className='object-cover bg-num-indigo'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center  text-white'>
          <div className='ml-10'>
            {/* <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Explore
            </h2> */}
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                About Numbertree
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Connecting Communities. Enriching Lives
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
        <div className='w-2/3 flex flex-col items-center '>
          <div className='w-3/4'>
            <p className='text-lg text-justify mb-6'>
              Numbertree is a consulting engineering and audit services firm
              working with top infrastructure companies in the world. We are
              committed to shaping a brighter future. Over close to two decades
              of operations, we have earned the trust of diverse businesses.
              From construction to transportation, energy, water, and the
              environment, our clientele reflects our ability to cater to a wide
              range of needs.
            </p>
            <p className='text-lg text-justify mb-6'>
              {`With our range of transformative services, we help businesses
              unlock their full potential by empowering them with the essential
              tools for effective decision-making. Drawing on our extensive
              expertise we assist in overcoming the challenges that arise in
              today's business landscape.`}
            </p>
            <div className='  border-2 font-xl  border-wilmer-orange  p-10  mb-6 text-wilmer-orange '>
              <div className='flex  '>
                <FaQuoteLeft size={40} className='text-wilmer-orange mb-4' />
              </div>
              <p className='text-xl font-medium  mb-2 '>
                <em>
                  {' '}
                  {`Our expert & dedicated on-site teams bring invaluable support to the projects, ensuring a smooth and controlled execution`}
                </em>
              </p>
            </div>
            <p className='text-lg text-justify mb-6'>
              {`Our commitment extends beyond providing services. We are here to empower businesses. By providing the necessary tools, expertise, and support, we enable them to make a meaningful impact in their industry and beyond.`}
            </p>

            <div>
              <h2 className='text-2xl flex  font-semibold text-black mb-4'>
                Our comprehensive ranges of services include
              </h2>
              <div className='flex flex-col w-2/3 mr-10 gap-2'>
                <p className='text-xl'>
                  <span className='flex items-center'>
                    <FaArrowRight size={16} className='mr-1 text-num-orange' />
                    {` Project techno-commercial audit`}
                  </span>
                </p>
                <p className='text-xl'>
                  <span className='flex items-center'>
                    <FaArrowRight size={16} className='mr-1 text-num-orange' />
                    {` Project management consultancy`}
                  </span>
                </p>
                <p className='text-xl'>
                  <span className='flex items-center'>
                    <FaArrowRight size={16} className='mr-1 text-num-orange' />
                    {` Cost Management`}
                  </span>
                </p>
                <p className='text-xl'>
                  <span className='flex items-center'>
                    <FaArrowRight size={16} className='mr-1 text-num-orange' />
                    {` Quantity take-off`}
                  </span>
                </p>
                <p className='text-xl'>
                  <span className='flex items-center'>
                    <FaArrowRight size={16} className='mr-1 text-num-orange' />
                    {` Contract Administration & Bill Verification`}
                  </span>
                </p>
                <p className='text-xl'>
                  <span className='flex items-center'>
                    <FaArrowRight size={16} className='mr-1 text-num-orange' />
                    {` Claim management & Delay Analysis`}
                  </span>
                </p>
                <p className='text-xl'>
                  <span className='flex items-center'>
                    <FaArrowRight size={16} className='mr-1 text-num-orange' />
                    {` 3D/4D BIM`}
                  </span>
                </p>
                <p className='text-xl'>
                  <span className='flex items-center'>
                    <FaArrowRight size={16} className='mr-1 text-num-orange' />
                    {` Transaction advisory`}
                  </span>
                </p>
              </div>
              <p className='text-lg text-justify mt-6 mb-6'>
                We believe in the power of transformation, which is reflected in
                our array of Business Transformation services such as{' '}
                <span className='font-bold'>
                  5D BIM, Digital Twin, Digital Project Monitoring, SOP & ERP
                  integration.{' '}
                </span>
                These services enable our clients to stay ahead of the curve and
                gain a competitive edge.
              </p>
              <p className='text-lg text-justify mb-6'>
                {`We are fully equipped to address the most pressing challenges facing our cities and communities. We ensure that our clients business thrives but at the same time adheres to demands of responsible practices. Our comprehensive range of services is dedicated to fostering a harmonious equilibrium between economic growth and sustainability.`}
              </p>
              <p className='text-lg text-justify mb-6'>
                {`We collaborate closely with our clients, functioning as a unified team with a common goal of achieving positive outcomes reshaping industries.`}
              </p>
              <p className='text-lg text-justify font-bold mb-6'>
                {`Our infrastructure domain expertise is enhanced by a dynamic team of professionals, ensuring the delivery of superior, efficient, and long-lasting outcomes. Our team of experts includes - Engineers, Chartered Accountants, Planners & Schedulers, Quantity Surveyors, Billing engineers, BIM modellers, business transformation experts & other consulting, construction management professionals and environmental experts.`}
              </p>
            </div>

            <div className='flex  flex-col '>
              <h1 className='text-xl font-bold mb-2'> Follow Us</h1>

              <div className='flex gap-4 mb-8'>
                <Link
                  href={`https://www.facebook.com/p/NumberTree-Assurance-Services-100066721811439/`}
                >
                  <Image
                    src={`/images/facebook.png`}
                    width={32}
                    height={32}
                    alt='logo'
                  />
                </Link>
                <Link
                  href={`https://in.linkedin.com/company/numbertree-advisor-pvt-ltd`}
                >
                  <Image
                    src={`/images/linkedin-1.png`}
                    width={32}
                    height={32}
                    alt='logo'
                  />
                </Link>
                <Link
                  href={`https://twitter.com/numbertreellp?s=21&t=5IMHdP5ykmmz3QRuWsHNaQ`}
                >
                  <Image
                    src={`/images/twitter.png`}
                    width={32}
                    height={32}
                    alt='logo'
                  />
                </Link>
                <Link href={``}>
                  <Image
                    src={`/images/instagram.png`}
                    width={32}
                    height={32}
                    alt='logo'
                  />
                </Link>
              </div>
            </div>
            <div className='flex mt-10 gap-x-2 mb-20'>
              <h1 className='text-xl font-medium '>Tags:</h1>
              <h2 className='border border-num-orange text-base tracking-widest p-1'>
                Article
              </h2>
              <h2 className='border border-num-orange text-base tracking-widest  p-1'>
                Artificial Intelligence
              </h2>
              <h2 className='border border-num-orange text-base tracking-widest  p-1'>
                BIM
              </h2>
              <h2 className='border border-num-orange text-base tracking-widest p-1'>
                Future
              </h2>
            </div>
          </div>
        </div>
        <div className='w-1/3 flex flex-col gap-8'>
          <Link href={`/about/client-ethics`}>
            <Image
              src={`/about/L1.png`}
              width={400}
              height={360}
              alt='Insights'
              className='object-fill bg-num-indigo'
            />
          </Link>
          <Link href={`/about/leadership-people`}>
            <Image
              src={`/about/L2.png`}
              width={400}
              height={360}
              alt='Insights'
              className='object-fill bg-num-indigo'
            />
          </Link>
          <Link href={`/about/leadership-people`}>
            <Image
              src={`/about/L3.png`}
              width={400}
              height={360}
              alt='Insights'
              className='object-fill bg-num-indigo'
            />
          </Link>
          {/* <Link href={`/about/csr-esg`}> */}
          <Link href={`#`}>
            <Image
              src={`/about/socialSquare.png`}
              width={400}
              height={360}
              alt='Insights'
              className='object-fill bg-num-indigo'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page;
