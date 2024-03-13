'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Sectors = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className='w-full'>
      <div className='mt-10 md:ml-14 ml-2'>
        <h1 className='text-7xl text-num-watermark text-opacity-50 font-medium'>
          Sectors
        </h1>

        <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
          Sectors
        </h2>

        <h3 className='-translate-y-10 text-2xl text-num-indigo font-light ml-1 mr-1'>
          {'Expertise across the infrastructure spectrum'}
        </h3>
        <h4 className='w-11/12 -translate-y-4 md:text-xl text-justify mb-4'>
          We are infrastructure experts. Adapting to the needs of the companies
          we serve, is our forte. With close to two decades of experience, we
          have earned the trust of diverse businesses across the infrastructure
          spectrum.
        </h4>
      </div>
      <div className='flex md:flex-row flex-col items-baseline justify-center md:ml-14 md:mr-14 space-x-5 space-y-2'>
        <Link
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          href={`/`}
          className='md:w-1/3 border flex flex-col text-num-indigo md:hover:bg-num2-blue md:hover:text-white'
        >
          <h1 className='ml-4 mt-2  md:text-4xl text-2xl font-light w-1/2'>
            Energy
          </h1>
          <p className='flex w-4/5  ml-4 mt-2 md:text-lg '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ea officiis sint deleniti delectus perspiciatis inventore.
          </p>
          <div className='flex flex-row mt-16'>
            <div className='w-1/2 flex flex-col-reverse ml-4 mb-4'>{`Read More>`}</div>
            <div className='hidden md:flex w-1/2'>
              {isHovered1 ? (
                <Image
                  height={212}
                  width={232}
                  src={`/logo/s01.png`}
                  alt='hovered image'
                />
              ) : (
                <div className='p-4 pb-0'>
                  <Image
                    height={212}
                    width={232}
                    src={`/logo/s0.png`}
                    alt='logo'
                  />
                </div>
              )}
            </div>
          </div>
        </Link>
        <Link
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          href={`/`}
          className='md:w-1/3 border flex flex-col text-num-indigo md:hover:bg-num2-blue md:hover:text-white'
        >
          <h1 className='ml-4 mt-2  md:text-4xl text-2xl font-light w-1/2'>
            Urban Development
          </h1>
          <p className='flex w-4/5 ml-4 mt-2 md:text-lg '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ea officiis sint deleniti delectus perspiciatis inventore.
          </p>
          <div className='flex flex-row mt-6'>
            <div className='w-1/2 flex flex-col-reverse ml-4 mb-4'>{`Read More>`}</div>
            <div className='hidden md:flex w-1/2'>
              <div>
                {isHovered2 ? (
                  <Image
                    height={212}
                    width={232}
                    src={`/logo/s02.png`}
                    alt='hovered image'
                  />
                ) : (
                  <div className='p-4 pb-0'>
                    <Image
                      height={212}
                      width={232}
                      src={`/logo/s1.png`}
                      alt='logo'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
        <Link
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          href={`/`}
          className='md:w-1/3 border flex flex-col text-num-indigo md:hover:bg-num2-blue md:hover:text-white'
        >
          <h1 className='ml-4 mt-2  md:text-4xl text-2xl font-light w-1/2'>
            Transportation
          </h1>
          <p className='flex w-4/5 ml-4 mt-2 md:text-lg '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ea officiis sint deleniti delectus perspiciatis inventore.
          </p>
          <div className='flex flex-row mt-16'>
            <div className='w-1/2 flex flex-col-reverse ml-4 mb-4'>{`Read More>`}</div>
            <div className='hidden md:flex w-1/2'>
              <div>
                {isHovered3 ? (
                  <Image
                    height={212}
                    width={232}
                    src={`/logo/s03.png`}
                    alt='hovered image'
                  />
                ) : (
                  <div className='p-4 pb-0'>
                    <Image
                      height={212}
                      width={232}
                      src={`/logo/s2.png`}
                      alt='logo'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sectors;
