'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaQuoteLeft } from 'react-icons/fa';
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
        {/* <RxSlash color='gray' className='mt-1' />
        <Link href={`/sectors`}>
          <p className='font-bold text-num-indigo'>Sectors</p>
        </Link> */}
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>About Us</p>
      </div>
      <div className='relative '>
        <Image
          src={`/about/aboutBanner.png`}
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
                About Us
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Connecting Communities. Enriching Lives
              </p>
            </div>

            <Link href={`/contact`} className='animate-fadeInUp'>
              <Button className='md:w-40 ml-4 bg-num-orange text-white mt-2 hover:bg-white hover:text-black animate-fadeInUp'>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='w-3/5 flex flex-col items-center mt-20'>
          <div className='w-5/6 text-justify'>
            <h1 className='text-3xl mb-10'>We are enablers of change</h1>
            <p className=' md:text-lg text-xs mb-8'>
              {` NumberTree is a consulting engineering and audit services firm
            working with top infrastructure companies in the world. We are
            committed to shaping a brighter future. Over close to two decades of
            operations, we have earned the trust of diverse businesses. From
            construction to transportation, energy, water, and the environment,
            our clientele reflects our ability to cater to a wide range of
            needs.`}
            </p>
            <p className=' md:text-lg text-xs mb-8'>
              {` With our range of transformative services, we help businesses unlock
            their full potential by empowering them with the essential tools for
            effective decision-making. Drawing on our extensive expertise we
            assist in overcoming the challenges that arise in today's business
            landscape.`}
            </p>
            <Link href={`/about/more-about-us`}>
              <Button className='w-40 bg-num-indigo mb-20 hover:bg-num-orange'>
                Read More
              </Button>
            </Link>
          </div>
        </div>
        <div className='flex w-2/5 mr-2'>
          <div className='flex items-center'>
            <p className='text-3xl p-2 border-l-4 border-num-orange'>
              We catalyse effective & informed decision-making through
              unparalleled insights into the working and execution of large &
              complex infrastructures projects
            </p>
          </div>
        </div>
      </div>
      <div className='flex  items-center justify-center'>
        <div className='w-11/12 '>
          <Tabs defaultValue='vision' className='w-full'>
            <TabsList className='w-full'>
              <TabsTrigger value='vision' className='w-1/3'>
                Our Vision
              </TabsTrigger>
              <TabsTrigger value='mission' className='w-1/3'>
                Our Mission
              </TabsTrigger>
              <TabsTrigger value='purpose' className='w-1/3'>
                Our Purpose
              </TabsTrigger>
            </TabsList>
            <hr className='border mt-6' />
            <TabsContent value='vision'>
              <div className='flex'>
                <div className='w-3/5'>
                  <p className='md:text-lg text-xs mt-4 pt-32 pb-10 mb-8 w-3/5'>
                    We are enablers of change, for our clients, for our
                    environment & our people such that progress, growth and
                    sustainability go hand in hand
                  </p>
                </div>
                <div className='w-2/5 '>
                  <h1 className='text-7xl mb-4 pt-32'>Our Vision</h1>
                  <hr className='w-1/2 border-2 border-num-orange' />
                </div>
              </div>
            </TabsContent>
            <TabsContent value='mission'>
              <div className='flex'>
                <div className='w-3/5 text-justify'>
                  <p className='md:text-lg text-xs mt-8 pt-10  mb-8 w-4/5'>
                    Our mission is to empower businesses with decision making
                    insights to unlock their full potential and help them
                    realize their objective to unlock their full potential.
                  </p>
                  <p className='md:text-lg text-xs mt-4  pb-10 mb-8 w-4/5'>
                    We provide businesses with valuable insights to develop,
                    grow & sustain their infrastructure operations. Our unique
                    services are powered by knowledge and are a result of years
                    of domain expertise, financial acumen and our relentless
                    pursuit of achieving excellence.
                  </p>
                </div>
                <div className='w-2/5 '>
                  <h1 className='text-7xl mb-4 pt-32'>Our Mission</h1>
                  <hr className='w-1/2 border-2 border-num-orange' />
                </div>
              </div>
            </TabsContent>
            <TabsContent value='purpose'>
              <div className='flex'>
                <div className='w-3/5 text-justify'>
                  <h1 className='text-3xl pt-8'>
                    Empowering Tomorrows Infrastructure
                  </h1>
                  <h2 className='text-xl mt-4 w-4/5'>
                    We understand the role businesses play in the world we live
                    in, and we are here to maximize the positive impact.
                  </h2>
                  <p className='md:text-lg text-xs mt-4   mb-4 w-4/5'>
                    Our purpose is to make a real & significant difference in
                    the way infrastructure companies operate and conduct their
                    business. We partner with businesses to achieve their
                    objectives, whether it is delivery of a complex project or
                    their goal of impacting lives of underserved communities.
                  </p>
                  <p className='text-xl font-semibold pb-10'>
                    They can count on us
                  </p>
                </div>
                <div className='w-2/5 '>
                  <h1 className='text-7xl mb-4 pt-32'>Our Purpose</h1>
                  <hr className='w-1/2 border-2 border-num-orange' />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className='flex  items-center justify-center mb-20 mt-10'>
        <div className='flex w-11/12 '>
          <div className='w-1/2 border-2 border-num-orange border-r-0'>
            <div className='flex flex-col gap-8 p-14'>
              <h1 className='text-7xl'>Our Values</h1>
              <hr className='w-1/2 -translate-y-4 border-2 border-num-orange' />
              <h2 className='text-3xl'>The compass that guides our ship</h2>
              <p className='text-lg w-3/4 text-justify'>
                We work on the some of the most complex & challenging projects,
                partnering with great businesses that will shape tomorrow’s
                world in the most positive and sustainable way.{' '}
              </p>
            </div>
          </div>
          <div className='w-1/2 bg-num-indigo p-8'>
            <div className='grid grid-cols-2 gap-y-12'>
              <div className='flex flex-col text-white items-center ml-4'>
                <Image
                  src={`/about/aim.png`}
                  width={80}
                  height={80}
                  alt='aim'
                  className='object-cover bg-num-indigo'
                />
                <h1 className='text-xl'>Client First</h1>
              </div>
              <div className='flex flex-col text-white items-center mr-4'>
                <Image
                  src={`/about/agility.png`}
                  width={80}
                  height={80}
                  alt='aim'
                  className='object-cover bg-num-indigo'
                />
                <h1 className='text-xl '>Agility</h1>
              </div>
              <div className='flex flex-col text-white items-center ml-4'>
                <Image
                  src={`/about/integrity.png`}
                  width={80}
                  height={80}
                  alt='integrity'
                  className='object-cover bg-num-indigo'
                />
                <h1 className='text-xl'>Integrity</h1>
              </div>
              <div className='flex flex-col text-white items-center mr-4'>
                <Image
                  src={`/about/social.png`}
                  width={80}
                  height={80}
                  alt='social impact'
                  className='object-cover bg-num-indigo'
                />
                <h1 className='text-xl '>Social Impact</h1>
              </div>
              <div className='flex flex-col text-white items-center ml-4'>
                <Image
                  src={`/about/auction.png`}
                  width={80}
                  height={80}
                  alt='integrity'
                  className='object-cover bg-num-indigo'
                />
                <h1 className='text-xl'>Law of Land</h1>
              </div>
              <div className='flex flex-col text-white items-center  mr-4'>
                <Image
                  src={`/about/idea.png`}
                  width={80}
                  height={80}
                  alt='social impact'
                  className='object-cover bg-num-indigo'
                />
                <h1 className='text-xl '>Knowledge</h1>
              </div>
            </div>
            <div className='flex justify-center mt-20'>
              <Button className='w-40 bg-num-orange hover:bg-white hover:text-black flex justify-center'>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-row w-11/12'>
          <div className='w-2/5 '>
            <h1 className='text-7xl mb-4 pt-32'>Our Approach</h1>
            <hr className='w-1/2 border-2 border-num-orange' />
          </div>
          <div className='w-3/5 text-justify'>
            <h1 className='text-3xl font-medium pt-8'>
              We are here to amplify leadership’s vision
            </h1>
            <h2 className='text-2xl  mt-4 w-4/5'>
              We handle intricate details of a project with precision and
              efficiency so that top management can concentrate on broader
              strategic vision.
            </h2>
            <p className='md:text-lg text-xs mt-4   mb-4 w-4/5'>
              {`We meticulously customize our services to align with business
              needs. Addressing every strategic need and pain point of the
              leadership is not just a commitment but a cornerstone of our
              approach. We recognize that our findings have significant
              influence over a company's strategic trajectory, we thus act as
              partners to help you navigate the rough seas.`}
            </p>
            <hr className='border border-num-orange w-4/5 mb-8' />
            <div className='w-4/5 flex'>
              <Image
                src={`/about/approach.png`}
                width={130}
                height={130}
                alt='integrity'
                className='object-cover bg-num-indigo'
              />
              <div className='flex flex-col ml-4'>
                <FaQuoteLeft size={18} className=' text-num-orange' />
                <p className='text-xl font-medium  w-11/12'>
                  Our on-site insights act as a navigational beacon for
                  businesses. Ensuring that projects remain well within the
                  budgeted cost and timeline.
                </p>
                <p>Syed Mahtab Alam, Founder & CEO</p>
              </div>
            </div>
            <hr className='border border-num-orange w-4/5 mt-8' />
          </div>
        </div>
      </div>
      <div className='flex mt-20 mb-20'>
        <div className='w-1/12 h-72 flex mt-10 '>
          <div className='w-1/2'></div>
          <div className='w-1/2 bg-num-orange'></div>
        </div>
        <div className='w-11/12'>
          <div className='grid grid-cols-3'>
            <Image
              src={`/about/L1.png`}
              width={400}
              height={340}
              alt='integrity'
              className='object-cover bg-num-indigo'
            />
            <Image
              src={`/about/L2.png`}
              width={400}
              height={340}
              alt='integrity'
              className='object-cover bg-num-indigo'
            />
            <Image
              src={`/about/L3.png`}
              width={400}
              height={340}
              alt='integrity'
              className='object-cover bg-num-indigo'
            />
          </div>
        </div>
      </div>
      <div className='flex mt-20 mb-20'>
        <div className='w-11/12 bg-num-indigo ml-12'>
          <div className='flex flex-col p-12 text-white'>
            <h1 className='text-7xl mb-4 mt-8 '>Our Ethics</h1>
            <hr className='w-1/6 border-2 border-num-orange' />
            <div className='flex '>
              <div className=' flex mt-8'>
                <div className='w-1/2'>
                  <h1 className='text-3xl  mr-4'>
                    Committed to doing the right thing , every time
                  </h1>
                </div>
                <Button className='w-40 bg-num-orange hover:bg-white hover:text-black mt-2 '>
                  Read more{' '}
                </Button>
              </div>
            </div>
            <div className='w-11/12 flex flex-col mt-10'>
              <div className='grid grid-cols-3 gap-12'>
                <div>
                  <Image
                    src={`/about/B1.png`}
                    width={400}
                    height={340}
                    alt='integrity'
                    className='object-cover bg-num-indigo'
                  />
                  <h1 className='text-2xl mt-2'>Code of Conduct</h1>
                </div>
                <div>
                  <Image
                    src={`/about/B2.png`}
                    width={400}
                    height={340}
                    alt='integrity'
                    className='object-cover bg-num-indigo'
                  />
                  <h1 className='text-2xl mt-2'>Anti-Corruption</h1>
                </div>
                <div>
                  <Image
                    src={`/about/B3.png`}
                    width={400}
                    height={340}
                    alt='integrity'
                    className='object-cover bg-num-indigo'
                  />
                  <h1 className='text-2xl mt-2'>Data Integrity</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/12 h-72 flex mt-44'>
          <div className='w-1/2  bg-num-orange'></div>
        </div>
      </div>
      <div className=' flex items-center justify-center mb-20'>
        <div className='relative ml-10 mr-10'>
          <Image
            src={`/about/socialResponce.png`}
            width={1920}
            height={786}
            alt='integrity'
            className='object-cover bg-num-indigo'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50'>
            <div className='flex flex-col items-center justify-center  text-white'>
              <div>
                <h1 className='text-7xl mt-40'>Corporate Social</h1>
                <h1 className='text-7xl ml-8 mt-4 mb-20'>Responsibility</h1>
                <Link href={'#'}>
                  <Button className='bg-num-indigo w-40 hover:bg-num-orange hover:text-black ml-44'>
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
