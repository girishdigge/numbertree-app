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
import SectorLinks from '@/components/sitemap/sectorLinks';

const Page = () => {
  const projects = [
    {
      name: 'IOCL Technip',
      location: 'Paradip, Odisha',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Maruti Suzuki Plant India Limited',
      location: 'Sonipat, Haryana',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Maruti Suzuki Plant',
      location: 'Gujarat',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Factory Building',
      location: 'Dehradun, Uttarakhand ',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'IOCL N-Butanol Refinery',
      location: 'Gujarat',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Mekong Silk Factory',
      location: 'Valsad, Gujarat ',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },

    {
      name: 'Heinz Factory',
      location: 'Noida',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
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
        <p className='font-bold text-num-indigo'>Industrial</p>
      </div>
      <div className='relative '>
        <Image
          src={`/sectors/Industrial.jpg`}
          width={2046}
          height={768}
          alt='Industrial'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-40 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              URBAN INFRASTRUCTURE
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Industrial
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                In this sector, delivering projects on time and within budget is
                of utmost importance in the face of challenges like scalability,
                precision & sustainability.
              </p>
            </div>
            <Link href={`/sectors`} className=''>
              <Button className='md:w-40 ml-4  bg-num-orange text-white mt-2 hover:bg-num-indigo hover:text-white animate-fadeInUp'>
                All sectors
              </Button>
            </Link>
            <Link href={`/contact`} className='animate-fadeInUp'>
              <Button className='md:w-40 ml-4 bg-num-indigo text-white mt-2 hover:bg-wilmer-orange hover:text-white animate-fadeInUp'>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <br />
      <div className='md:hidden flex flex-col items-center justify-center'>
        <div className='flex  pl-4 flex-col'>
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
                <Link href={`/sectors/industrial`}>
                  <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                    Industrial
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
        <SectorLinks />
        <div className=' flex flex-col items-center  text-justify'>
          <h1 className='text-3xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black mb-4'>
            <em>Urban Infrastructure is the foundation of society</em>
          </h1>
          <div className='flex flex-col items-center '>
            <h2 className='text-2xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black mb-8'>
              Infrastructure is the foundation of society. The transport, energy
              and digital networks form the cornerstones of economic growth. And
              the health, education, sports, housing and recreational facilities
              invest in the fabric of society.
            </h2>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-8'>
              Infrastructure development is a global challenge. As businesses
              strive to develop infrastructure, support communities and create
              livelihood, the developing markets as well as developed countries
              are likely to triple the infrastructure investment necessitating
              the need for expert professional services like Numbertree.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '></p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs  '>
              we believe we can add value across different sectors within
              infrastructure. Our value-added services have been developed &
              calibrated over 15 years, to cater to needs and goals of these
              various sectors we serve.
            </p>{' '}
          </div>
          <br />
          <div className='w-4/5 '>
            <div className='flex flex-col p-12 bg-wilmer-orange  m-4 mr-2 text-white '>
              <FaQuoteLeft size={30} className='text-white ' />
              <p className='text-xl font-medium ml-6 mr-4 mb-2 w-11/12'>
                <em>
                  {' '}
                  {`As a consulting engineering & audit services firm, we help public and private sector organizations involved in infrastructure to deliver the outcomes they are seeking, whether for society or for business, or both, as efficiently as effectively as possible. "`}
                </em>
              </p>
            </div>
          </div>
        </div>

        <div className='hidden w-1/4 md:flex flex-col justify-between '>
          <GetInTouch />
        </div>
      </div>
      <div className='flex flex-row text-justify pr-8 ml-8'>
        <div className='w-1/4'></div>
        <div className='flex flex-col w-3/5  mr-14'>
          <h2 className='text-3xl   font-bold  mb-4'>Industrial</h2>
          <p className='   md:text-lg text-xs mt-4 mb-8 flex '>
            At NumberTree, we understand the industrial lifecycle and we deliver
            comprehensive range of solutions that create the best outcomes at
            every stage. Our clients are supported by an agile team with leading
            consulting engineering & audit services, digital project monitoring,
            quality surveying, cost management, bill verification and contract
            administration services that are unmatched by any firm competing in
            the industrial landscape today.
          </p>{' '}
          <br />
          <p className='   md:text-lg text-xs flex mb-8'>
            We bring a unique perspective of cost optimization using BIM
            modelling services at various stages – we bring time and cost
            efficiency along with a single and straightforward source of
            accountability to increase productivity, conserve resources,
            optimize life-cycle costs, and reduce risks.
          </p>
          <br />
          <p className='   md:text-lg text-xs flex mb-8'>
            We are reputed for accelerating project schedules through our
            project management consultancy services and enhancing project level,
            onsite productivity through efficient process controls. We make sure
            stakeholder management at project site where our team integrates
            with client’s team and work collaboratively to achieve objectives.
          </p>
          <br />
          <p className='   md:text-lg text-xs flex mb-8'>
            We offer informed, customized services for all our clients. Our
            teams have the knowledge and expertise to approach any challenge
            with keen insights, demonstrating flexibility to accommodate
            client’s unique needs.
          </p>
          <br />
        </div>
        <div className='md:inline relative hidden w-2/5'>
          <div className='  border-2 font-xl  border-wilmer-orange mt-20 p-10 pt-36  text-wilmer-orange '>
            <p className='text-xl font-medium  mb-2 '>
              <em>
                {' '}
                {`Our integrated team serves clients by driving technological innovation in planning, project execution, and operations. Our best-in-class technical teams help clients achieve robust, cost-effective solutions through process led audit`}
              </em>
            </p>
            <div className='flex justify-end pt-40'>
              <FaQuoteLeft size={40} className='text-wilmer-orange ' />
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden p-16 flex  justify-center '>
        <GetInTouch />
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
                          <h3 className='md:text-2xl text-xl font-bold '>
                            {project.name}
                          </h3>
                          <h2 className='text-num-orange ml-1 text-lg font-semibold'>
                            {project.location}
                          </h2>
                        </div>
                        <Link href={project.link}>
                          <Button className='w-40 bg-num-indigo mt-2 border-0 hover:bg-num-orange'>
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=' h-14 w-12 text-white  bg-num-orange hover:bg-num-indigo ' />
          <CarouselNext className=' h-14 w-12 text-white bg-num-orange hover:bg-num-indigo ' />
        </Carousel>
      </div>

      <div className='flex  mt-24'>
        <h2 className=' md:text-xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
          Explore More
        </h2>
      </div>
      <div className='md:grid md:grid-cols-2 gap-1 bg-black  bg-opacity-10'>
        <div className='flex overflow-hidden'>
          <div className=' group relative hover:scale-110 transform transition duration-500 ease-in-out overflow:hidden'>
            <Image
              src={`/services/ProjectMonCon.jpg`}
              height={800}
              width={800}
              alt=''
              className='object-cover group-hover:opacity-95 ' // Fade image slightly on hover
            />
            <Link href={`/services/project-monitoring-and-control`}>
              <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                <div className=' text-white bg-black bg-opacity-50 flex flex-col pb-5'>
                  <div className='ml-8'>
                    <h1 className='text-num-orange ml-1'>Service</h1>
                    <h2 className='font-bold  md:text-2xl'>
                      Project Monitoring and Control
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-2  align-end '>
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
                      <h2 className='font-bold mb-2  md:text-2xl'>
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
                src={`/services/TechnoComAudit.jpg`}
                height={400}
                width={400}
                alt='techno-commercial-audit'
                className='object-contain group-hover:opacity-95 ' // Fade image slightly on hover
              />
              <Link href={`/services/TechnoComAudit.jpg`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Techno Commercial Audit
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
        </div>
      </div>
    </div>
  );
};
export default Page;
