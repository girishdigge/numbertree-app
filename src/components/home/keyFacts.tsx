'use client';
import Marquee from 'react-fast-marquee';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    url: '/keyfacts/road.png',
    alt: '6600+',
    title: 'Roads & Highway',
    title2: ' Project ',
    unit: '(km)',
  },
  {
    url: '/keyfacts/oil.png',
    alt: '1230+',
    title: 'Oil & Gas Pipeline',
    unit: '(km)',
  },
  {
    url: '/keyfacts/construction.png',
    alt: '900+',
    title: 'Civil Construction',
    title2: ' Project ',
    unit: '(Mil Sq ft)',
  },
  {
    url: '/keyfacts/subway.png',
    alt: '2000+',
    title: 'Railways & Metro',
    title2: ' Project ',
    unit: '(km)',
  },
  {
    url: '/keyfacts/electricity.png',
    alt: '3500+',
    title: 'Power Transmission ',
    title2: ' Towers ',
    unit: '(units)',
  },
  // {
  //   url: '/keyfacts/airplane.png',
  //   alt: '2782+',
  //   title: 'Airport Projects',
  //   unit: '(Cr INR)',
  // },
];

const Keyfacts = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='w-11/12 '>
      <div className='mt-20 md:ml-14'>
        <h1 className='text-7xl text-num-watermark text-opacity-50 font-medium'>
          Key Facts
        </h1>

        <h2 className='-translate-y-12 ml-1 text-5xl text-num-orange font-medium'>
          Key Facts
        </h2>

        <h3 className='-translate-y-10 md:text-3xl font-medium w-1/2  mt-2  ml-1'>
          {
            'We are committed to working collaboratively to understand business goals and create a strategy to achieve them. '
          }
        </h3>
        <div className='grid  bg-num-indigo text-white'>
          <Marquee pauseOnHover={true} speed={75}>
            <div className=' grid grid-cols-5 p-4 '>
              {images.map((image, index) => (
                <div key={index} className='p-8'>
                  <div className='flex flex-col items-center justify-center  '>
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={100}
                      height={100}
                      className='object-contain'
                    />
                    <h1 className='text-4xl font-bold'>{image.alt}</h1>
                    <h1 className='text-lg  font-bold'>{image.unit}</h1>
                    <h1 className='text-lg  '>{image.title}</h1>
                    <h1 className='text-lg  '>{image.title2}</h1>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Keyfacts;
