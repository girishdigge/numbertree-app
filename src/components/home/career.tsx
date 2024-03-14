import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
const Career = () => {
  return (
    <div className='md:flex items-center justify-center bg-num-indigo'>
      <div className='md:w-2/5'>
        <Image
          width={1920}
          height={600}
          src={'/resource/career.png'}
          alt={'career'}
        />
      </div>

      <div className='md:flex items-center justify-center md:w-3/5  mt-5 '>
        <div className='flex flex-col md:mt-10 md:w-2/3'>
          <h1 className='md:text-2xl  text-white  mb-4'>
            We promise growth, inclusion and diversity
          </h1>
          <p className='text-white md:text-base text-sm w-4/5'>
            People are at the heart of our services. At Numbertree, you can
            create relationships that support your development and a career path
            that fits your goals. Come explore a world of opportunities in
            various functions and roles.
          </p>
          <Button className='w-1/3 bg-num-orange mt-8 mb-2 border-0'>
            Explore Career{`>`}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Career;
