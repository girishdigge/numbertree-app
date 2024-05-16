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
import SectorMobileLinks from '@/components/sitemap/sectorMobileLinks';

const Page = () => {
  const projects = [
    {
      name: 'Mumbai Metro Line 5',
      location: 'Mumbai',
      link: '/projects/mumbai-metro-line-5',
      image: '/projects/MumbaiMetroThaneBhiwandiKalyan.jpg',
    },
    {
      name: 'Mumbai Metro Line 9',
      location: 'Mumbai',
      link: '/projects/mumbai-metro-dahisar-mira',
      image: '/projects/MumbaiMetro2.jpg',
    },
    {
      name: 'Pune Metro Corridor 1 & 2',
      location: 'Pune',
      link: '/projects/pune-metro-corridor-1-2',
      image: '/projects/PuneMetro.jpg',
    },
    {
      name: 'Delhi Metro ',
      location: 'New Delhi',
      link: '/projects/delhi-metro',
      image: '/projects/Delhi-Metro.jpg',
    },
    {
      name: 'Eastern Dedicate Freight Corridor 301',
      location: 'Punjab',
      link: '/projects/freight-301-ambala',
      image: '/projects/EasternDedicateFreightCorridor301.jpg',
    },
    {
      name: 'Eastern Dedicate Freight Corridor 302',
      location: 'Uttar Pradesh',
      link: '/projects/freight-302-dadri',
      image: '/projects/EasternDedicateFreightCorridor302.jpg',
    },
    {
      name: 'Express Freight Railway Consortium Project',
      location: 'Uttar Pradesh',
      link: '/projects/freight-agra',
      image: '/projects/Freight-Agra.jpg',
    },
    {
      name: 'Multimodal Transport System',
      location: 'Hyderabad',
      link: '/projects/multimodel-transport-hyderabad',
      image: '/projects/HyderabadMetro.jpg',
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
        <p className='font-bold text-num-indigo'>Railways & Metro</p>
      </div>
      <div className='relative '>
        <Image
          src={`/sectors/RailwaysMetro.jpg`}
          width={2046}
          height={768}
          alt='Railways & Metro'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-50 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              TRANSPORTATION
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Railways & Metro
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Driving development through consulting and audit services for
                railways and metros, vital lifelines shaping modern
                infrastructure and economic progress.
              </p>
            </div>
            <Link href={`/sectors`} className=''>
              <Button className='md:w-40 ml-4  bg-num-orange text-white mt-2 hover:bg-num-indigo hover:text-white animate-fadeInUp'>
                All sectors
              </Button>
            </Link>
            <Link href={`/contact/proposal`} className='animate-fadeInUp'>
              <Button className='md:w-40 ml-4 bg-num-indigo text-white mt-2 hover:bg-wilmer-orange hover:text-white animate-fadeInUp'>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <br />
      <div className='md:hidden flex flex-col items-center justify-center'>
        <SectorMobileLinks />
      </div>
      <div className='flex flex-row'>
        <SectorLinks />
        <div className=' flex flex-col items-center  text-justify'>
          <h1 className='text-3xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black mb-4'>
            <em>Helping people move faster, safer and sustainably</em>
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
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs  '>
              Our work across{' '}
              <span>
                <Link
                  href={'#'}
                  className='text-num-blue font-medium underline'
                >
                  Eastern
                </Link>
              </span>{' '}
              &{' '}
              <span>
                <Link
                  href={'#'}
                  className='text-num-blue font-medium underline'
                >
                  Western
                </Link>
              </span>{' '}
              dedicated freight corridors,{' '}
              <span>
                <Link
                  href={'#'}
                  className='text-num-blue font-medium underline'
                >
                  Pune Metro
                </Link>
              </span>{' '}
              ,
              <span>
                <Link
                  href={'#'}
                  className='text-num-blue font-medium underline'
                >
                  Mumbai Metro
                </Link>
              </span>{' '}
              ,
              <span>
                <Link
                  href={'#'}
                  className='text-num-blue font-medium underline'
                >
                  Etihad Railways
                </Link>
              </span>{' '}
              ,{' '}
              <span>
                <Link
                  href={'#'}
                  className='text-num-blue font-medium underline'
                >
                  Red Sea Airport – Saudi Arabia
                </Link>
              </span>{' '}
              ,{' '}
              <span>
                <Link
                  href={'#'}
                  className='text-num-blue font-medium underline'
                >
                  Leh Airport
                </Link>
              </span>{' '}
              ,
              <span>
                <Link
                  href={'#'}
                  className='text-num-blue font-medium underline'
                >
                  Expressways & Roads
                </Link>
              </span>{' '}
              has helped these clients connect people and places in
              forward-thinking ways.
            </p>{' '}
          </div>
          <br />
          <div className='w-4/5 '>
            <div className='flex flex-col p-12 bg-wilmer-orange  mb-20 m-4 mr-2 text-white '>
              <FaQuoteLeft size={30} className='text-white ' />
              <p className='text-xl font-medium ml-6 mr-4 mb-2 w-11/12'>
                <em>
                  {' '}
                  {`Our integrated and collaborative approach has helped us serve all
              major transport systems. Our unique expertise enables us to
              deliver high-quality solutions for our clients that pave the way
              for long-lasting benefits to society."`}
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
          <h2 className='text-3xl   font-bold  mb-4'>Railways & Metro</h2>
          <hr className='border-b-2  border-num-orange' />
          <p className='md:text-2xl text-xs mt-4  flex '>
            Rapid urbanization and increasing traffic congestion, has
            necessitated investment in rail and metro infrastructure in the
            development of a country.
          </p>{' '}
          <p className='   md:text-lg text-xs mt-4  flex '>
            Rail networks efficiently move both goods and people, thereby
            minimizing the strain on congested roadways. The emergence of rapid
            urban mass transit options like metro systems, has further provided
            alternative modes of transportation and reduced pressure on surface
            transport networks.
          </p>{' '}
          <br />
          <p className='   md:text-lg text-xs flex '>
            At Numbertree, we combine engineering techniques with commercial
            aspects of project to arrive at the best solutions for the
            challenges faced by this sector.
          </p>{' '}
          <br />
          <p className='   md:text-lg text-xs flex '>
            We have vast experience in handling issues pertaining to development
            of railway corridor. Furthermore, our quality assurance services
            have earned accolades for optimizing the systems and processes of
            numerous multinational corporations, cementing our reputation as a
            trusted partner in the advancement of infrastructure development.
          </p>{' '}
          <br />
        </div>
        <div className='md:inline relative hidden mt-20 w-2/5'>
          <div className='  border-2 font-xl  border-wilmer-orange mt-20 p-10   text-wilmer-orange '>
            <p className='text-xl font-medium  mb-2 '>
              <em>
                By leveraging our technical acumen, strategic insights, and
                state-of-the-art methodologies, we empower clients to make
                informed decisions in real-time, ensuring seamless project
                progression.
              </em>
            </p>
            <div className='flex justify-end '>
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
                    className='object-cover h-96 hover:scale-105 transform transition-all duration-500 ease-in-out'
                    src={project.image}
                    height={800}
                    width={1200}
                    alt='image'
                  />
                  <div className='absolute inset-0 flex items-end  md:mt-5 mt-2'>
                    <div className='bg-black md:bg-opacity-70 bg-opacity-40 w-full  md:h-1/4 md:p-5'>
                      <div className=' text-white ml-2 flex justify-around'>
                        <div>
                          <h3 className='text-xl font-bold '>{project.name}</h3>
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
        <Link href={`/services`}>
          <h2 className=' md:text-xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
            Explore More
          </h2>
        </Link>
      </div>
      <div className='md:grid md:grid-cols-2 gap-1 '>
        <div className='flex overflow-hidden pb-4'>
          <div className=' group relative hover:scale-110 transform transition duration-500 ease-in-out overflow:hidden'>
            <Image
              src={`/services/TechnoComAudit3.jpg`}
              height={800}
              width={800}
              alt='services'
              className='object-contain group-hover:opacity-95' // Fade image slightly on hover
            />
            <Link href={`/services/techno-commercial-audit`}>
              <div className='z-2 absolute inset-0 flex flex-col justify-end mb-0'>
                <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                  <div className='ml-8'>
                    <h1 className='text-num-orange ml-1'>Service</h1>
                    <h2 className='font-bold pb-2 md:text-2xl'>
                      Techno-Commercial Audit
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-2 pb-4 align-center ml-1 '>
          <div className='flex overflow-hidden'>
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Image
                src={`/services/ClaimManagement3.jpg`}
                height={400}
                width={400}
                alt='project'
                className=' object-contain group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/services/claim-management`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Construction Claim Management
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
                src={`/services/bim.jpg`}
                height={400}
                width={400}
                alt='bim'
                className='object-contain group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/bim`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>BIMfirst</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex overflow-hidden'>
            <div className='group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Image
                src={`/services/ContractAdministration4.jpg`}
                height={400}
                width={400}
                alt='Contract Administration'
                className='object-contain group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/services/contract-administration`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Contract Administration & Bill Verification
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
                src={`/services/ProjectMonCon3.jpg`}
                height={400}
                width={400}
                alt='project'
                className='object-contain group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/services/project-monitoring-and-control`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Project Management Consultancy
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
