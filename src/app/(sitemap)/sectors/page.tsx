import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

const Page = () => {
  const sectors = [
    {
      title: 'Aviation',
      href: '/sectors/aviation',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
      image: '/sectors/Aviation.jpg',
    },
    {
      title: 'Bridges Structures',
      href: '/sectors/bridges-structures',
      description:
        'For sighted users to preview content available behind a link.',
      image: '/sectors/BridgesStructure.jpg',
    },
    {
      title: 'Commercial',
      href: '/sectors/commercial',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      image: '/sectors/Commercial.jpg',
    },
    {
      title: 'Industrial',
      href: '/sectors/industrial',
      description: 'Visually or semantically separates content.',
      image: '/sectors/Industrial.jpg',
    },
    {
      title: 'Institutional',
      href: '/sectors/institutional',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      image: '/sectors/Institutional.jpg',
    },
    {
      title: 'Oil Gas',
      href: '/sectors/oil-gas',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      image: '/sectors/OilGas.jpg',
    },
    {
      title: 'Ports',
      href: '/sectors/ports',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      image: '/sectors/Ports.jpg',
    },
    {
      title: 'Power Transmission',
      href: '/sectors/power-transmission',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
      image: '/sectors/PowerTransmission.jpg',
    },
    {
      title: 'Railways Metro',
      href: '/sectors/railways-metro',
      description:
        'For sighted users to preview content available behind a link.',
      image: '/sectors/RailwaysMetro.jpg',
    },
    {
      title: 'Renewable Energy',
      href: '/sectors/renewable-energy',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      image: '/sectors/RenewableEnergy.jpg',
    },
    {
      title: 'Residential',
      href: '/sectors/residential',
      description: 'Visually or semantically separates content.',
      image: '/sectors/Residential.jpg',
    },
    {
      title: 'Roads Highways',
      href: '/sectors/roads-highways',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      image: '/sectors/RoadsHighways.jpg',
    },
    {
      title: 'Thermal Power Plant',
      href: '/sectors/thermal-power-plant',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      image: '/sectors/ThermalPowerPlant.jpg',
    },
    {
      title: 'Water Infrastructure',
      href: '/sectors/water-infrastructure',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      image: '/sectors/WaterInfrastructure.jpg',
    },
  ];

  return (
    <div>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='/sectors/1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Sectors</p>
      </div>
      <div className='flex h-96'>
        <Image
          src={'/sectors/banner.png'}
          height={600}
          width={1200}
          alt='services banner'
        />
      </div>
      <div className='flex flex-col bg-gray-100'>
        <div className='ml-10 w-4/5'>
          <div>
            <h1 className='text-7xl text-num-watermark font-medium'>Sectors</h1>

            <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
              Sectors
            </h2>

            <h3 className='-translate-y-10 text-2xl text-num-indigo font-light mt-2'>
              {'Empowering decision making to transform.'}
            </h3>
          </div>
          <h3 className='-translate-y-8 text-base text-num-blue mb-8'>
            We partner with clients across the infrastructure landscape to help
            them deliver projects, of varying of complexity and at various
            stages of development, with ease. At the same time, we help them
            adopt solutions that make a positive & lasting impact in their field
            of operations.
          </h3>
        </div>
        <div className='grid grid-cols-2 gap-8 '>
          {sectors.map((sector, index) => (
            <div key={index}>
              <div className='z-1 flex flex-row relative hover:scale-115 transform transition-all duration-500 ease-in-out'>
                <Link href={sector.href}>
                  <Image
                    src={sector.image}
                    width={600}
                    height={600}
                    alt={sector.title}
                  />
                  <div className='ml-6 z-10 absolute flex flex-col-reverse inset-0 '>
                    <span className='text-white font-bold'>
                      Find out more
                      <Button className='w-10 ml-2 mb-2 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                        {`+`}
                      </Button>
                    </span>
                    <h1 className='text-white text-2xl font-bold '>
                      {sector.title}
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
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
          <Link href={`/projects`}>
            <div className='flex flex-row '>
              <Image
                src={'/images/sector.jpg'}
                height={120}
                width={120}
                alt='sector'
                className='m-4'
              />
              <div className='flex-flex-cols'>
                <h1 className='text-4xl mt-4 font-bold'>Projects</h1>
                <h2 className='text-lg'>
                  Committed to Excellence across infra projects
                </h2>
              </div>
            </div>
            <div className='w-11/12 flex flex-row-reverse ml-4 mb-4'>
              We are experts at handling and serving projects which are
              multidimensional, large scale and complex.We approach each project
              with an aim to positively impact communities around us and help
              them prosper.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page;
