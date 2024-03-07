'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';
import { projects } from '@/data/projectsData';
import { featuredProjects } from '@/data/projectsData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from '@/components/ui/select';

import { useEffect, useState } from 'react';

const Page = () => {
  const [service, setService] = useState('');
  const [sector, setSector] = useState('');

  return (
    <div>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Projects</p>
      </div>
      <div className='flex w-full'>
        <Image
          src={'/projects/banner.png'}
          height={768}
          width={1920}
          alt='services banner'
        />
      </div>
      <div className='flex flex-col bg-gray-100'>
        <div className='ml-10 w-4/5'>
          <div>
            <h1 className='text-7xl text-num-watermark font-medium'>
              Projects
            </h1>

            <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
              Projects
            </h2>

            <h3 className='-translate-y-10 text-2xl text-num-indigo font-light mt-2'>
              {'Commited To Excellence Across Infra Projects'}
            </h3>
          </div>
          <h3 className='-translate-y-8 text-base text-num-blue mb-8'>
            At NumberTree, we are experts at handling and serving projects which
            are multidimensional, large scale and complex. From the challenging
            Tsunami Rehabilitation Project at Nicobar Island to the New
            parliament building, New Delhi. We approach each project with an aim
            to positively impact communities around us and help them prosper.
          </h3>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-xl text-num-indigo font-medium m-2'>Explore By:</h1>
        <div className='flex gap-2'>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Services' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Services</SelectLabel>
                <SelectItem value='1'>Business Transformation</SelectItem>
                <SelectItem value='2'>Claim Management</SelectItem>
                <SelectItem value='3'>Contract Adminstration</SelectItem>
                <SelectItem value='4'>Project Monitoring & Control</SelectItem>
                <SelectItem value='5'>Quantity Survey</SelectItem>
                <SelectItem value='6'>Techno Commercial Audit</SelectItem>
                <SelectItem value='7'>Transaction Advisory</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue
                placeholder='Sectors'
                onChange={(e: any) => setSector(e.target.value)}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>Aviation</SelectItem>
              <SelectItem value='2'>bridges structures</SelectItem>
              <SelectItem value='3'>commercial</SelectItem>
              <SelectItem value='4'>industrial</SelectItem>
              <SelectItem value='5'>institutional</SelectItem>
              <SelectItem value='6'>oil & gas</SelectItem>
              <SelectItem value='7'>ports</SelectItem>
              <SelectItem value='8'>power transmission</SelectItem>
              <SelectItem value='9'>railways & metro</SelectItem>
              <SelectItem value='10'>renwable energy</SelectItem>
              <SelectItem value='11'>residential</SelectItem>
              <SelectItem value='12'>roads & highways</SelectItem>
              <SelectItem value='13'>thermal power plant</SelectItem>
              <SelectItem value='14'>water infrastructure</SelectItem>
            </SelectContent>
          </Select>
          <Button className='font-bold' variant={'secondary'}>
            Reset
          </Button>
        </div>
      </div>
      <h1 className='text-2xl text-num-orange flex justify-center mt-2'>
        Featured Projects
      </h1>
      {!service && !sector && (
        <div className='grid grid-cols-2 gap-8 mt-4 mb-4'>
          {featuredProjects.map((projects, index) => (
            <div key={index}>
              <div className='flex flex-row  relative hover:scale-115 transform transition-all duration-500 ease-in-out'>
                <Link href={projects.link}>
                  <Image
                    src={projects.image}
                    width={800}
                    height={400}
                    alt={projects.location}
                    className='object-contain'
                  />

                  <div className='ml-6 z-10 absolute flex flex-col-reverse inset-0 '>
                    <span className='text-white font-bold'>
                      Find out more
                      <Button className='w-10 ml-2 mb-2 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                        {`+`}
                      </Button>
                    </span>
                    <h1 className='text-white text-2xl font-bold '>
                      {projects.location}
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <h1 className='text-2xl text-num-orange flex justify-center mt-2'>
        All Projects
      </h1>
      <div className='grid grid-cols-2 gap-8 mt-4 mb-4'>
        {projects.map((projects, index) => (
          <div key={index}>
            <div className='flex flex-row  relative hover:scale-115 transform transition-all duration-500 ease-in-out'>
              <Link href={projects.link}>
                <Image
                  src={projects.image}
                  width={800}
                  height={400}
                  alt={projects.location}
                  className='object-contain'
                />

                <div className='ml-6 z-10 absolute flex flex-col-reverse inset-0 '>
                  <span className='text-white font-bold'>
                    Find out more
                    <Button className='w-10 ml-2 mb-2 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                      {`+`}
                    </Button>
                  </span>
                  <h1 className='text-white text-2xl font-bold '>
                    {projects.location}
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-row justify-center text-num-indigo font-bold mt-10 mb-4'>
        <h1 className='text-2xl'>Explore more</h1>
      </div>
      <div className='w-11/12  flex flex-rows items-center justify-center ml-10 gap-6 mb-10'>
        <div className='flex flex-col w-1/2 border border-1 border-b-4 border-b-num-orange shadow-xl bg-white text-num-indigo hover:bg-num-indigo hover:border-b-0 hover:text-white'>
          <Link href={`/services`}>
            <div className='flex flex-row '>
              <Image
                src={'/images/service.jpg'}
                height={120}
                width={120}
                alt='services'
                className='m-4'
              />
              <div className='flex-flex-cols'>
                <h1 className='text-4xl mt-4 font-bold'>Services</h1>
                <h2 className='text-lg'>
                  Empowering decision making to transform
                </h2>
              </div>
            </div>
            <div className='w-11/12 flex flex-row-reverse ml-4 mb-4'>
              We partner with clients across the infrastructure landscape to
              help them deliver projects, of varying of complexity and at
              various stages of development. At the same time, we help them
              adopt solutions that make a positive & lasting impact in their
              field of operations.
            </div>
          </Link>
        </div>
        <div className='flex flex-col w-1/2 border border-1 border-b-4 border-b-num-orange shadow-xl bg-white text-num-indigo hover:bg-num-indigo hover:border-b-0 hover:text-white'>
          <Link href={`/sectors`}>
            <div className='flex flex-row '>
              <Image
                src={'/images/sector.jpg'}
                height={120}
                width={120}
                alt='sector'
                className='m-4'
              />
              <div className='flex-flex-cols'>
                <h1 className='text-4xl mt-4 font-bold'>Sectors</h1>
                <h2 className='text-lg'>
                  Expertise across the infrastructure spectrum
                </h2>
              </div>
            </div>
            <div className='w-11/12 flex flex-row-reverse ml-4 mb-4'>
              We are infrastructure experts. Adapting to the needs of the
              companies we serve, is our forte.With close to two decades of
              experience, we have earned the trust of diverse businesses across
              the infrastructure spectrum.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page;
