import GetInTouch from '@/components/sitemap/getintouch';
import { Button } from '@/components/ui/button';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Page = () => {
  const projects = [
    {
      name: 'Mumbai Metro Project ',
      location: 'Mumbai',
      link: '/#',
      image: '/projects/mumbaiMetro.jpg', // replace with the actual image path
    },
    {
      name: 'Western Freight Corridor',
      location: 'Western',
      link: '/#',
      image: '/projects/westernCorridor.jpg', // replace with the actual image path
    },
    {
      name: 'Eastern Freight Corridor ',
      location: 'Eastern',
      link: '/#',
      image: '/projects/easternCorridor.jpg', // replace with the actual image path
    },
    {
      name: 'Pune Metro Project ',
      location: 'Pune',
      link: '/#',
      image: '/projects/puneMetroa.jpg', // replace with the actual image path
    },
    {
      name: 'Etihad Railways',
      location: 'Etihad',
      link: '/#',
      image: '/projects/etihadRailways.jpg', // replace with the actual image path
    },
    {
      name: 'Red Sea Airport ',
      location: 'Red Sea',
      link: '/#',
      image: '/projects/redSea.jpg', // replace with the actual image path
    },
  ];
  return (
    <div className=''>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={`/sectors`}>
          <p className='font-bold text-num-indigo'>Sectors</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Renewable Energy</p>
      </div>
      <div className='relative '>
        <Image
          src={`/sectors/RenewableEnergy.jpg`}
          width={2046}
          height={768}
          alt='Renewable Energy'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-50 bg-black  text-white'>
          <div className='ml-10'>
            <h2 className='md:text-lg font-light text-sm ml-4 mb-2'>EXPLORE</h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex '>
                Renewable Energy
              </h1>
              <p className='md:text-xl text-xs font-medium ml-4 md:mb-2'>
                We provide cost management services on a wide range of
                construction projects across sectors in infrastructure.
              </p>
            </div>
            <Link href={`/contact`}>
              <Button className='w-40 ml-4  bg-num-indigo text-white mt-2 hover:bg-wilmer-orange hover:text-white'>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <br />
      <div className='md:hidden flex flex-col items-center justify-center'>
        <div className='flex   pl-4 flex-col'>
          <h1 className='text-xl font-bold mb-2'> Share this page</h1>

          <div className='flex gap-4 mb-4'>
            <FaFacebookF
              size={30}
              className='bg-num-orange p-1 text-white  rounded-xl'
            />
            <FaLinkedinIn
              size={31}
              className='bg-num-orange text-white p-1 rounded-xl'
            />
            <FaXTwitter
              size={30}
              className='bg-num-orange text-white p-1 rounded-xl'
            />
          </div>
          <div>
            <h2 className='text-xl font-bold flex  text-black mb-2 '>
              Our Services
            </h2>

            <div className='flex w-full gap-2'>
              <div className=''>
                <Link href={`/sectors/aviation`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Aviation
                  </Button>
                </Link>
                <Link href={`/sectors/bridges-structures`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Bridges & Structures
                  </Button>
                </Link>
                <Link href={`/sectors/commercial`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Commercial
                  </Button>
                </Link>
                <Link href={`/sectors/industrial`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Industrial
                  </Button>
                </Link>
                <Link href={`/sectors/institutional`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Institutional
                  </Button>
                </Link>
                <Link href={`/sectors/oil-gas`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Oil & Gas
                  </Button>
                </Link>
                <Link href={`/sectors/power-transmission`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Power Transmission
                  </Button>
                </Link>
                <Link href={`/sectors/ports`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Ports
                  </Button>
                </Link>
                <Link href={`/sectors/renewable-energy`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Renewable Energy
                  </Button>
                </Link>
                <Link href={`/sectors/residential`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Residential
                  </Button>
                </Link>
                <Link href={`/sectors/roads-highways`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Roads & Highways
                  </Button>
                </Link>
                <Link href={`/sectors/railways-metro`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Railways & Metro
                  </Button>
                </Link>
                <Link href={`/sectors/thermal-power-plant`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Thermal Power Plant
                  </Button>
                </Link>
                <Link href={`/sectors/water-infrastructure`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Water Infrastructure
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='md:flex w-1/4 hidden  pl-4 flex-col'>
          <h1 className='text-xl font-bold mb-2'> Share this page</h1>

          <div className='flex gap-4 mb-12'>
            <FaFacebookF
              size={30}
              className='bg-num-orange p-1 text-white  rounded-xl'
            />
            <FaLinkedinIn
              size={31}
              className='bg-num-orange text-white p-1 rounded-xl'
            />
            <FaXTwitter
              size={30}
              className='bg-num-orange text-white p-1 rounded-xl'
            />
          </div>
          <div>
            <h2 className='text-xl font-bold flex  text-black mt-2 mb-2 '>
              Our Sectors
            </h2>
            <div className='flex flex-col gap-2'>
              <div className='w-1/2'>
                <Link href={`/sectors/aviation`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Aviation
                  </Button>
                </Link>
                <Link href={`/sectors/bridges-structures`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Bridges & Structures
                  </Button>
                </Link>
                <Link href={`/sectors/commercial`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Commercial
                  </Button>
                </Link>
                <Link href={`/sectors/industrial`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Industrial
                  </Button>
                </Link>
                <Link href={`/sectors/institutional`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Institutional
                  </Button>
                </Link>
                <Link href={`/sectors/oil-gas`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Oil & Gas
                  </Button>
                </Link>
                <Link href={`/sectors/power-transmission`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Power Transmission
                  </Button>
                </Link>
                <Link href={`/sectors/ports`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Ports
                  </Button>
                </Link>
                <Link href={`/sectors/renewable-energy`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Renewable Energy
                  </Button>
                </Link>
                <Link href={`/sectors/residential`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Residential
                  </Button>
                </Link>
                <Link href={`/sectors/roads-highways`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Roads & Highways
                  </Button>
                </Link>
                <Link href={`/sectors/railways-metro`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Railways & Metro
                  </Button>
                </Link>
                <Link href={`/sectors/thermal-power-plant`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Thermal Power Plant
                  </Button>
                </Link>
                <Link href={`/sectors/water-infrastructure`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Water Infrastructure
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 flex flex-col items-center  text-justify'>
          <h1 className='text-4xl flex justify-center font-semibold md:w-3/4 w-11/12 text-black mb-4'>
            Transportation
          </h1>
          <br />
          <h1 className='text-3xl flex justify-center font-normal md:w-3/4 w-11/12 text-black mb-4'>
            Helping people move faster, safer and sustainably
          </h1>
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              As populations grow, so do demands for safe, expedient and
              cost-effective transportation. We work with clients in India &
              abroad to achieve cost optimization, digitization/BIM and
              efficiency in processes and control in transportation projects.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              We use our extensive knowledge in techno commercial audit, project
              planning, digital project monitoring, 5D/4D/3D BIM and managing
              transportation systems — to help our clients find smarter, more
              advanced ways to move people from one place to another.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              Our integrated and collaborative approach has helped us serve all
              major transport systems. Our unique expertise enables us to
              deliver high-quality solutions for our clients that pave the way
              for long-lasting benefits to society.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              Our work across Eastern & Western dedicated freight corridors,
              Pune metro, Mumbai metro, Etihad railways, Red Sea Airport – Saudi
              Arabia, Delhi metro has helped us deliver comprehensive solutions
              that connect people and places in forward-thinking ways.
            </p>{' '}
          </div>
          <br />
          <div className='w-4/5 '>
            <div className='flex flex-col pl-2 pt-2 bg-wilmer-orange  m-4 mr-2 text-white '>
              <FaQuoteLeft size={18} className='text-white ' />
              <p className='text-lg font-medium ml-6 mr-4 mb-2 w-11/12'>
                {`"`}
              </p>
            </div>
          </div>
          <h2 className='text-3xl md:w-3/4 w-11/12 flex  justify-center font-semibold text-black mb-4'>
            Railways & Metro
          </h2>
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              Rapid urbanization and increasing traffic congestion, has
              necessitated investment in rail and metro infrastructure in the
              development of a country’s infrastructure. Rail networks
              efficiently move both goods and people, thereby minimizing the
              strain on congested roadways. The emergence of rapid urban mass
              transit options like metro systems, has further provided
              alternative modes of transportation and reduced pressure on
              surface transport networks.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              At Numbertree, we combine engineering techniques with commercial
              aspects of project to arrive at the best solutions for the
              challenges faced by this sector. By leveraging our technical
              acumen, strategic insights, and state-of-the-art methodologies, we
              empower clients to make informed decisions in real-time, ensuring
              seamless project progression.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              We have vast experience in handling issues pertaining to
              development of railway corridor. Furthermore, our quality
              assurance services have earned accolades for optimizing the
              systems and processes of numerous multinational corporations,
              cementing our reputation as a trusted partner in the advancement
              of infrastructure development.
            </p>{' '}
            <br />
          </div>
        </div>

        <div className='hidden w-1/4 md:flex '>
          <GetInTouch />
        </div>
      </div>
      <div className='mt-4'>
        {' '}
        {/* <h1 className='text-7xl translate-y-6 translate-x-2 text-num-watermark font-medium'>
          Related Projects
        </h1> */}
        <div className='flex ml-14 mt-20 mb-2'>
          <h2 className='  text-2xl text-black font-medium'>
            Related Projects
          </h2>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className=' flex items-center justify-center md:ml-14 ml-10 md:w-11/12 w-4/5 relative'
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/2'>
                <div className='relative'>
                  <Image
                    className='object-cover hover:scale-105 transform transition-all duration-500 ease-in-out'
                    src={project.image}
                    height={800}
                    width={1200}
                    alt='image'
                  />
                  <div className='absolute inset-0 flex items-end  md:mt-5 mt-2'>
                    <div className='bg-black md:bg-opacity-70 bg-opacity-40 w-full  md:h-1/4 md:p-5'>
                      <div className=' text-white ml-2 flex justify-around'>
                        <div>
                          <h3 className='md:text-3xl text-xl font-bold '>
                            {project.name}
                          </h3>
                          <h2 className='text-num-orange ml-1 text-lg font-semibold'>
                            {project.location}
                          </h2>
                        </div>
                        <Button className='w-40 bg-num-indigo mt-2 border-0 hover:bg-num-orange'>
                          Read More{`>`}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=' h-10 w-10 hover:bg-num-orange bg-num-indigo ' />
          <CarouselNext className=' h-10 w-10 hover:bg-num-orange bg-num-indigo ' />
        </Carousel>
      </div>

      <div className='flex  mt-20'>
        <h2 className=' md:text-xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
          Explore More
        </h2>
      </div>
      <div className='md:grid md:grid-cols-2 gap-1 bg-black  bg-opacity-10'>
        <div className='flex overflow-hidden'>
          <div className=' group relative hover:scale-110 transform transition duration-500 ease-in-out overflow:hidden'>
            <Image
              src={`/services/TechnoComAudit.jpg`}
              height={800}
              width={800}
              alt='techno-commercial-audit'
              className='object-contain group-hover:opacity-95 ' // Fade image slightly on hover
            />
            <Link href={`/services/techno-commercial-audit`}>
              <div className='z-2 absolute inset-0 flex flex-col justify-end mb-5'>
                <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                  <div className='ml-8'>
                    <h1 className='text-num-orange ml-1'>Service</h1>
                    <h2 className='font-bold pb-2 md:text-2xl'>
                      Techno Commercial Audit
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-1 pb-4 align-middle '>
          <div className='flex overflow-hidden'>
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Image
                src={`/services/ContractAdministration.jpg`}
                height={400}
                width={400}
                alt='contract-administration'
                className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/services/contract-administration`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Contract Administration
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex overflow-hidden'>
            <div className='group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Image
                src={`/services/QuantitySurvey.jpg`}
                height={400}
                width={400}
                alt='quantity-survey'
                className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/services/quantity-survey`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Quantity Survey
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex overflow-hidden'>
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Image
                src={`/bim/arup.jpg`}
                height={400}
                width={400}
                alt='bim'
                className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/bim`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        3D/4D/5D BIM
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex overflow-hidden'>
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Image
                src={`/services/BusinessTransformation.jpg`}
                height={400}
                width={400}
                alt='Business Transformation'
                className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/services/business-transformation`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Business Transformation
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
