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
      {/* ========================= */}
      {/* SECTION HEADING            */}
      {/* ========================= */}
      <div className='mt-10 md:ml-14 ml-2'>
        <h1 className='text-7xl text-num-watermark text-opacity-50 font-medium'>
          Sectors
        </h1>

        <h2 className='-translate-y-12 ml-1 text-5xl text-num-orange font-medium'>
          Sectors
        </h2>

        <h3 className='-translate-y-10 md:text-3xl text-num-indigo ml-1 mr-1'>
          Uplifting communities, improving access
        </h3>

        <h4 className='w-2/5 -translate-y-8 md:text-lg text-sm text-justify ml-2 mb-4 mt-4'>
          Adapting to the needs of the companies we serve, is our forte.With
          close to two decades of experience, we have earned the trust of
          diverse businesses across sectors.
        </h4>
      </div>

      {/* ========================= */}
      {/* SECTOR CARDS               */}
      {/* ========================= */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:ml-14 md:mr-14 ml-2 mr-2'>
        {/* ========================= */}
        {/* TRANSPORTATION             */}
        {/* ========================= */}
        <Link
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          href='/sectors'
          className='
            border
            flex flex-col
            h-full
            text-num-indigo
            md:hover:bg-num-indigo
            md:hover:text-white
          '
        >
          <h1 className='ml-4 mt-2 md:text-4xl text-2xl font-light w-1/2'>
            Transportation
          </h1>

          <p className='w-4/5 ml-4 mt-2 md:text-lg'>
            As populations grow, so do demands for safe, expedient and
            cost-effective transportation across both developed & developing
            countries. We have expertise in Roads & Highways, multiple metro
            work and railways as well as port & airport projects.
          </p>

          {/* Bottom section */}
          <div className='flex flex-row items-end mt-auto pt-8'>
            <div className='w-1/2 flex items-end ml-4 mb-4'>Read More&gt;</div>

            <div className='hidden md:flex w-1/2 items-end justify-end'>
              {isHovered3 ? (
                <Image
                  height={212}
                  width={232}
                  src='/logo/s33.png'
                  alt='Transportation'
                  className='pb-1'
                />
              ) : (
                <div className='p-4 pb-0'>
                  <Image
                    height={212}
                    width={232}
                    src='/logo/s2.png'
                    alt='Transportation'
                  />
                </div>
              )}
            </div>
          </div>
        </Link>

        {/* ========================= */}
        {/* URBAN INFRASTRUCTURE      */}
        {/* ========================= */}
        <Link
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          href='/sectors'
          className='
            border
            flex flex-col
            h-full
            text-num-indigo
            md:hover:bg-num-indigo
            md:hover:text-white
          '
        >
          <h1 className='ml-4 mt-2 md:text-4xl text-2xl font-light w-1/2'>
            Urban Infrastructure
          </h1>

          <p className='w-4/5 ml-4 mt-2 md:text-lg'>
            Urban Infrastructure is the foundation of society. Water, sewerage,
            health, education, sports, housing and recreational facilities are
            the core of society and its development. Our team is experienced in
            all these crucial sectors.
          </p>

          {/* Bottom section */}
          <div className='flex flex-row items-end mt-auto pt-8'>
            <div className='w-1/2 flex items-end ml-4 mb-4'>Read More&gt;</div>

            <div className='hidden md:flex w-1/2 items-end justify-end'>
              {isHovered2 ? (
                <Image
                  height={212}
                  width={232}
                  src='/logo/s22.png'
                  alt='Urban Infrastructure'
                  className='pb-2'
                />
              ) : (
                <div className='p-4 pb-0'>
                  <Image
                    height={212}
                    width={232}
                    src='/logo/s1.png'
                    alt='Urban Infrastructure'
                  />
                </div>
              )}
            </div>
          </div>
        </Link>

        {/* ========================= */}
        {/* ENERGY                     */}
        {/* ========================= */}
        <Link
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          href='/sectors'
          className='
            border
            flex flex-col
            h-full
            text-num-indigo
            md:hover:bg-num-indigo
            md:hover:text-white
          '
        >
          <h1 className='ml-4 mt-2 md:text-4xl text-2xl font-light w-1/2'>
            Energy
          </h1>

          <p className='w-4/5 ml-4 mt-2 md:text-lg'>
            Energy sector is faced with delivering reliable, affordable, and
            secure supplies, while also transitioning to cleaner energy. Our
            strategic insight while working on various projects in the sector
            address the challenges helps our clients succeed.
          </p>

          {/* Bottom section */}
          <div className='flex flex-row items-end mt-auto pt-8'>
            <div className='w-1/2 flex items-end ml-4 mb-4'>Read More&gt;</div>

            <div className='hidden md:flex w-1/2 items-end justify-end'>
              {isHovered1 ? (
                <Image
                  height={212}
                  width={232}
                  src='/logo/s11.png'
                  alt='Energy'
                  className='pb-1'
                />
              ) : (
                <div className='p-4 pb-0'>
                  <Image
                    height={212}
                    width={232}
                    src='/logo/s0.png'
                    alt='Energy'
                  />
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sectors;
