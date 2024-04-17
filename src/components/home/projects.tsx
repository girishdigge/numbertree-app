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
import Link from 'next/link';
import { MainPageProjects } from '@/data/mainPageProjects';
const Projects = () => {
  return (
    <div className=''>
      <div className='mt-20 md:ml-14'>
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
            {MainPageProjects.map((project, index) => (
              <CarouselItem key={index}>
                <Link href={project.link}>
                  <div className='relative'>
                    <Image
                      className='object-cover hover:scale-105 transform transition-all duration-500 ease-in-out'
                      src={project.image}
                      height={853}
                      width={1280}
                      alt='image'
                    />
                    <div className='absolute inset-0 flex  '>
                      <div className='bg-black md:bg-opacity-70  md:w-1/3 w-1/2  '>
                        <div className=' text-white ml-2'>
                          <div className='flex flex-col md:gap-y-2 md:pl-4 tracking-widest'>
                            <h1 className='md:text-2xl font-bold md:inline hidden tracking-widest'>
                              Project Details
                            </h1>
                            <hr className='border-b-1 w-40 border-white mb-2' />
                            <h2 className='text-num-orange md:text-lg '>
                              Project Name
                            </h2>
                            <h3 className='md:text-xl'>{project.name}</h3>
                            <hr className='border-b-1 w-40 border-white mb-2' />
                            <h2 className='text-num-orange md:text-lg '>
                              Location
                            </h2>
                            <h3 className='md:text-xl '>{project.location}</h3>
                            <hr className='border-b-1 w-40 border-white mb-2 ' />
                            <h2 className='text-num-orange md:text-lg  md:inline hidden '>
                              Value{' '}
                            </h2>
                            <h3 className='md:text-xl md:inline hidden '>
                              {project.value}
                            </h3>
                            <hr className='border-b-1 w-40 border-white mb-2 md:inline hidden ' />
                            {/* <h2 className='text-num-orange text-lg '>Client </h2>
                          <h3> </h3>
                         <hr className='border-b-1 w-40 border-white mb-2' /> */}
                            <h2 className='text-num-orange md:text-lg  md:inline hidden '>
                              Completion Date
                            </h2>
                            <h3 className='text-xl md:inline hidden '>
                              {project.date}{' '}
                            </h3>
                            <hr className='border-b-1 w-40 border-white mb-2 md:inline hidden ' />
                            <h2 className='text-num-orange md:text-lg  md:inline hidden '>
                              Sector{' '}
                            </h2>
                            <h3 className='md:text-xl md:inline hidden '>
                              {project.sector}
                            </h3>
                            <hr className='border-b-1 w-40 border-white mb-2 md:inline hidden ' />
                            <h2 className='text-num-orange text-lg  md:inline hidden '>
                              Service provided{' '}
                            </h2>
                            <h3 className='md:text-xl md:inline hidden '>
                              {project.service}
                            </h3>
                            <hr className='border-b-1 w-40 border-white mb-2 md:inline hidden ' />
                            <Button className='w-40 bg-num-indigo md:mt-5  border-0 hover:bg-num-orange'>
                              Read More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
