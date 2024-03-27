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
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Parliment,New Delhi',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/newParliment1.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Guwahati Airport',
      content:
        'Quantity surveying plays a vital role in ensuring accurate cost estimation and effective resource allocation.',
      link: '/quantity-survey',
      image: '/projects/GuwahatiAirport.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Mercedes Benz,Pune',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/merc.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Leh Airport',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/leh.jpg', // replace with the actual image path
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
        <h4 className='w-1/2 -translate-y-10 md:text-lg text-sm text-justify ml-2 mb-6'>
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
                    <div className='bg-black md:bg-opacity-50 bg-opacity-40 md:w-1/2 w-1/2  md:p-5'>
                      <div className='md:flex hidden flex-row mt-4 ml-2'>
                        {/* <h1 className='text-num-orange md:text-2xl  text-xl ml-1 mt-1 md:mb-2 font-semibold'>
                          OUR LATEST WORK
                        </h1> */}
                      </div>
                      <div className=' text-white ml-2'>
                        {/* <h2 className='md:text-xl md:flex hidden font-light text-sm  mb-2'>
                          {project.heading}
                        </h2> */}
                        <h3 className='md:text-4xl text-xl font-bold '>
                          {project.location}
                        </h3>
                        <hr className='w-3/5 border-num-orange border-2 md:mt-3 md:mb-3' />
                        <h2 className='md:text-xl md:mb-5 md:w-4/5 text-xs'>
                          {project.content}
                        </h2>
                        <Button className='w-40 bg-num-indigo md:mt-5  border-0 hover:bg-num-orange'>
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=' h-14 w-12  text-white bg-num-orange hover:bg-num-indigo ' />
          <CarouselNext className=' h-14 w-12  text-num-orange border-num-orange hover:bg-num-orange ' />
        </Carousel>
      </div>
    </div>
  );
};
export default Projects;
