import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Button } from '../ui/button';

const Projects = () => {
  const projects = [
    {
      name: 'Mumbai Delhi Expressway package 2',
      location: 'Meerut , Uttar Pradesh',
      value: '1057.6 Cr(INR)',
      date: 'Dec 2018',
      client: '',
      sector: 'Roads & Highways',
      service: 'Techno-Commercial Audit',
      image: '/projects/newParliment1.jpg', // replace with the actual image path
      link: '/numbertree',
    },
  ];
  return (
    <div className=''>
      <div className='mt-10 md:ml-28 ml-10'>
        <h1 className='text-7xl text-num-watermark text-opacity-50 font-medium'>
          Projects
        </h1>

        <h2 className='-translate-y-12 ml-1 text-5xl text-num-orange font-medium'>
          Projects
        </h2>

        <h3 className='-translate-y-12 md:text-3xl  font-medium ml-1 mt-2'>
          {'Taking projects from complexity to profitability'}
        </h3>
        <h4 className='w-1/2 -translate-y-10 md:text-lg text-sm text-justify ml-2 mb-6 mt-4'>
          We are experts at handling projects which are multidimensional, large
          scale and complex. Our commitment is to ensure that each project is
          completed within budgeted cost and time. We approach each project with
          an aim to positively impact communities around us and help them
          prosper.
        </h4>
      </div>
      <div className='flex items-center justify-center'>
        <Carousel className='flex items-center justify-center w-5/6 relative'>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className='relative'>
                  <Image
                    className='object-cover hover:scale-105 transform transition-all duration-500 ease-in-out'
                    src={project.image}
                    height={800}
                    width={1400}
                    alt='image'
                  />
                  <div className='absolute inset-0 flex  '>
                    <div className='bg-black md:bg-opacity-70  md:w-1/3 w-1/2  '>
                      <div className='md:flex hidden flex-row mt-4 ml-2'>
                        {/* <h1 className='text-num-orange md:text-2xl  text-xl ml-1 mt-1 md:mb-2 font-semibold'>
                          OUR LATEST WORK
                        </h1> */}
                      </div>
                      <div className=' text-white ml-2'>
                        {/* <h2 className='md:text-xl md:flex hidden font-light text-sm  mb-2'>
                          {project.heading}
                        </h2> */}
                        {/* <h3 className='md:text-4xl text-xl font-bold '>
                          {project.location}
                        </h3>
                        <hr className='w-3/5 border-num-orange border-2 md:mt-3 md:mb-3' />
                        <h2 className='md:text-xl md:mb-5 md:w-4/5 text-xs'>
                          {project.content}
                        </h2> */}
                        <div className='flex flex-col gap-y-2 pl-4 tracking-widest'>
                          <h1 className='text-2xl font-bold  tracking-widest'>
                            Project Details
                          </h1>
                          <hr className='border-b-1 w-40 border-white mb-2' />
                          <h2 className='text-num-orange text-lg '>
                            Project Name
                          </h2>
                          <h3 className='text-xl'>{project.name}</h3>
                          <hr className='border-b-1 w-40 border-white mb-2' />
                          <h2 className='text-num-orange text-lg '>Location</h2>
                          <h3 className='text-xl'>{project.location}</h3>
                          <hr className='border-b-1 w-40 border-white mb-2' />
                          <h2 className='text-num-orange text-lg '>Value </h2>
                          <h3 className='text-xl'>{project.value}</h3>
                          <hr className='border-b-1 w-40 border-white mb-2' />
                          {/* <h2 className='text-num-orange text-lg '>Client </h2>
                          <h3> </h3>
                         <hr className='border-b-1 w-40 border-white mb-2' /> */}
                          <h2 className='text-num-orange text-lg '>
                            completion Date
                          </h2>
                          <h3 className='text-xl'>{project.date} </h3>
                          <hr className='border-b-1 w-40 border-white mb-2' />
                          <h2 className='text-num-orange text-lg '>Sector </h2>
                          <h3 className='text-xl'>{project.sector}</h3>
                          <hr className='border-b-1 w-40 border-white mb-2' />
                          <h2 className='text-num-orange text-lg '>
                            Service provided{' '}
                          </h2>
                          <h3 className='text-xl'>{project.service}</h3>
                          <hr className='border-b-1 w-40 border-white mb-2' />
                          <Button className='w-40 bg-num-indigo md:mt-5  border-0 hover:bg-num-orange'>
                            Read More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=' h-14 w-12  text-white bg-num-orange hover:bg-num-indigo ' />
          <CarouselNext className=' h-14 w-12  text-white bg-num-orange hover:bg-num-indigo' />
        </Carousel>
      </div>
    </div>
  );
};
export default Projects;
