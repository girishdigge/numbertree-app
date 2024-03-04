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
      image: '/projects/newParliment.webp', // replace with the actual image path
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
    <div>
      <div className='mt-10 ml-28'>
        <h1 className='text-7xl text-num-watermark font-medium'>Projects</h1>

        <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
          Projects
        </h2>

        <h3 className='-translate-y-10 text-2xl text-num-indigo font-light ml-1 mt-2'>
          {'Commited To Excellence Across Infra Projects'}
        </h3>
      </div>
      <Carousel className='flex items-center justify-center ml-12 w-11/12 relative'>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className='relative'>
                <Image
                  className='object-cover hover:scale-105 transform transition-all duration-500 ease-in-out'
                  src={project.image}
                  height={768}
                  width={1600}
                  alt='image'
                />
                <div className='absolute inset-0 flex items-center  mt-5'>
                  <div className='bg-black bg-opacity-70 w-2/5 h-4/5 p-5'>
                    <div className='flex flex-row mt-10 ml-2'>
                      <h1 className='text-num-orange text-lg ml-1 mt-1 font-semibold'>
                        OUR LATEST WORK
                      </h1>
                    </div>
                    <div className='text-white ml-2'>
                      <h2 className='md:text-xl text-sm  mb-2'>
                        {project.heading}
                      </h2>
                      <h3 className='text-4xl font-bold '>
                        {project.location}
                      </h3>
                      <hr className='w-3/5 border-num-orange border-2 mt-3 mb-3' />
                      <h2 className='md:text-md mb-5 w-4/5 text-sm'>
                        {project.content}
                      </h2>
                      <Button className='w-40 bg-num-indigo mt-5 border-0 hover:bg-num-orange'>
                        Read More{`>`}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='h-10 w-10 hover:bg-num-orange bg-num-indigo ' />
        <CarouselNext className='h-10 w-10 hover:bg-num-orange bg-num-indigo ' />
      </Carousel>
    </div>
  );
};
export default Projects;