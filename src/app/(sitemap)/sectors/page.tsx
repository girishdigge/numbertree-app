import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

const Page = () => {
  const sectors = [
    {
      title: 'Road & Highways',
      href: '/sectors/roads-highways',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      image: '/sectors/RoadsHighways1.jpg',
    },
    {
      title: 'Railways & Metro',
      href: '/sectors/railways-metro',
      description:
        'For sighted users to preview content available behind a link.',
      image: '/sectors/RailwaysMetro1.jpg',
    },
    {
      title: 'Airports & Aviation',
      href: '/sectors/aviation',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
      image: '/sectors/Aviation1.jpg',
    },
    {
      title: 'Ports & Maritime',
      href: '/sectors/ports',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      image: '/sectors/Ports1.jpg',
    },
    // {
    //   title: 'Bridges Structures',
    //   href: '/sectors/bridges-structures',
    //   description:
    //     'For sighted users to preview content available behind a link.',
    //   image: '/sectors/BridgesStructure1.jpg',
    // },
    {
      title: 'Institutional',
      href: '/sectors/institutional',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      image: '/sectors/Institutional1.jpg',
    },
    {
      title: 'Commercial',
      href: '/sectors/commercial',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      image: '/sectors/Commercial1.jpg',
    },
    {
      title: 'Industrial',
      href: '/sectors/industrial',
      description: 'Visually or semantically separates content.',
      image: '/sectors/Industrial1.jpg',
    },
    {
      title: 'Residential',
      href: '/sectors/residential',
      description: 'Visually or semantically separates content.',
      image: '/sectors/Residential1.jpg',
    },
    {
      title: 'Water Infrastructure',
      href: '/sectors/water-infrastructure',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      image: '/sectors/WaterInfrastructure1.jpg',
    },
    {
      title: 'Oil & Gas',
      href: '/sectors/oil-gas',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      image: '/sectors/OilGas1.jpg',
    },

    {
      title: 'Power Transmission',
      href: '/sectors/power-transmission',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
      image: '/sectors/PowerTransmission1.jpg',
    },

    {
      title: 'Renewable Energy',
      href: '/sectors/renewable-energy',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      image: '/sectors/RenewableEnergy1.jpg',
    },

    // {
    //   title: 'Thermal Power Plant',
    //   href: '/sectors/thermal-power-plant',
    //   description:
    //     'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    //   image: '/sectors/ThermalPowerPlant1.jpg',
    // },
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
      <div className='relative'>
        <Image
          src={'/sectors/OilGas.jpg'}
          height={768}
          width={1920}
          alt='services banner'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-50 bg-black  text-white'>
          <div className='ml-10'>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex '>
                Our Sectors
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col bg-gray-100'>
        <div className='ml-10 w-4/5'>
          <div>
            <h1 className='text-7xl text-num-watermark font-medium'>Sectors</h1>

            <h2 className='-translate-y-12 ml-1 text-5xl text-num-orange font-medium'>
              Sectors
            </h2>

            <h3 className='-translate-y-10 text-3xl text-num-indigo  mt-2'>
              {'Uplifting communities, improving access'}
            </h3>
          </div>
          <h3 className='-translate-y-8 text-lg w-4/5 text-num-blue mb-8'>
            {`In today's dynamic business environment, a company's success is
            intricately linked to its specialized knowledge and expertise within
            the industry. The integration of in-depth domain knowledge with
            unique expertise not only meets customer demands but also ensures a
            thorough understanding of the ever-changing industry trends.`}
          </h3>
          <h3 className='-translate-y-8 w-4/5 text-base text-num-blue mb-8'>
            {`We cater to sectors across infrastructure segments. Our indepth knowledge of the sector coupled with customized approach to each infrastructure project, has made us preferred partners to some of the leading infrastructure companies in India and abroad.`}
          </h3>
        </div>
        <div className='grid grid-cols-2  gap-8 '>
          {sectors.map((sector, index) => (
            <div key={index}>
              <div className='z-1 flex flex-row relative hover:scale-115 transform transition-all duration-500 ease-in-out'>
                <Link href={sector.href}>
                  <Image
                    src={sector.image}
                    width={750}
                    height={460}
                    alt={sector.title}
                  />
                  <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                    <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                      <div className='ml-8'>
                        <h1 className='text-white text-2xl font-bold '>
                          {sector.title}
                        </h1>
                        <span className='text-white font-bold'>
                          <Button className='w-40  mb-2 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                            {`Read more`}
                          </Button>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row  justify-center text-num-indigo font-bold mt-10 mb-4'>
        <h2 className=' md:text-xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium  mb-4'>
          Explore More
        </h2>
      </div>
      <div className='  flex md:flex-row flex-col items-center  justify-center   gap-6 mb-10'>
        <div className='md:flex flex-row gap-2 md:ml-4 mr-4'>
          <div className='flex flex-row relative h-96  mb-10 md:mb-0 md:ml-1'>
            <Image
              src={`/images/service.png`}
              height={350}
              width={718}
              alt='linkedin'
              className='object-cover'
            />
            <div className=' absolute inset-0 bg-black bg-opacity-55'>
              <div className='ml-6'>
                <h1 className='text-num-orange text-4xl font-medium md:mt-4 mb-2'>
                  Services
                </h1>
                <h2 className=' md:text-3xl text-3xl font-medium md:mb-3 mb- text-white'>
                  Empowering decision making to transform businesses
                </h2>
                <p className=' text-white md:text-lg'>
                  We partner with businesses to help them deliver projects, of
                  varying of complexity. We provide services at various stages
                  of construction and development. Our comprehensive range of
                  services, help businesses deliver positive impact beyond their
                  industries.
                </p>
                <div className='flex flex-row-reverse  mr-4'>
                  <Link href={`services`}>
                    <Button className='w-40 mt-4 text-base bg-num-orange border-0 hover:bg-num-indigo'>
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row relative h-96  mb-10 md:mb-0 md:ml-1'>
            <Image
              src={`/images/project.png`}
              height={350}
              width={718}
              alt='linkedin'
              className='object-cover'
            />
            <div className=' absolute inset-0 bg-black bg-opacity-55'>
              <div className='ml-6'>
                <h1 className='text-num-orange text-4xl font-medium md:mt-4 mb-2'>
                  Projects
                </h1>
                <h2 className=' md:text-3xl text-3xl font-medium md:mb-3 mb- text-white'>
                  Taking projects from complexity to profitability
                </h2>
                <p className=' text-white md:text-lg'>
                  We are experts at handling projects which are
                  multidimensional, large scale and complex. Our commitment is
                  to ensure that each project is completed within budgeted cost
                  and time.
                </p>
                <div className='flex flex-row-reverse mt-8 mr-4'>
                  <Link href={`projects`}>
                    <Button className='w-40 mt-4 text-base bg-num-orange border-0 hover:bg-num-indigo'>
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex md:flex-col md:w-1/2 border border-1 border-b-4 border-b-num-orange shadow-xl bg-white text-num-indigo hover:bg-num-indigo hover:border-b-0 hover:text-white'>
          <Link href={`/services`}>
            <div className='flex flex-row '>
              <Image
                src={'/images/service.png'}
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
            <div className='w-11/12 flex flex-row-reverse text-justify ml-4 mb-4'>
              We partner with clients across the infrastructure landscape to
              help them deliver projects, of varying of complexity and at
              various stages of development.We help them adopt solutions that
              make a positive & lasting impact in their field of operations.
            </div>
          </Link>
        </div>
        <div className='flex flex-col md:w-1/2 border border-1 border-b-4 border-b-num-orange shadow-xl bg-white text-num-indigo hover:bg-num-indigo hover:border-b-0 hover:text-white'>
          <Link href={`/projects`}>
            <div className='flex flex-row '>
              <Image
                src={'/images/sector.png'}
                height={750}
                width={350}
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
            <div className='w-11/12 flex flex-row-reverse text-justify ml-4 mb-4'>
              We are experts at handling and serving projects which are
              multidimensional, large scale and complex.We approach each project
              with an aim to positively impact communities around us and help
              them prosper.
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};
export default Page;
