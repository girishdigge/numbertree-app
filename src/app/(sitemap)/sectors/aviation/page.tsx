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
      name: 'Red Sea Airport ',
      location: 'Saudi Arabia',
      link: '/#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Kushok Bakula Rimpochee Airport',
      location: 'Leh',
      link: '/#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Manohar Parrikar International Airport',
      location: 'Goa',
      link: '/#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Lokpriya Gopinath Bordoloi International Airport ',
      location: 'Guwahati',
      link: '/#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'The Kempe Gowda International Airport',
      location: 'Bangalore ',
      link: '/#',
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
        <p className='font-bold text-num-indigo'>Airports & Aviation</p>
      </div>
      <div className='relative '>
        <Image
          src={`/sectors/Aviation.jpg`}
          width={2046}
          height={768}
          alt='Airports & Aviation'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-50 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              TRANSPORTATION
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Airports & Aviation
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Our expert services balances objectives with the pragmatic
                issues of development in aviation sector.
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
        <div className=' flex flex-col items-center  text-justify'>
          <h1 className='text-3xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black mb-4'>
            <em>Helping people move faster, safer and sustainably</em>
          </h1>
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-8'>
              As populations grow, so do demands for safe, expedient and
              cost-effective transportation. We work with clients in India &
              abroad to achieve cost optimization, digitization/BIM and
              efficiency in processes and control in transportation projects.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-8'>
              We use our extensive knowledge in techno commercial audit, project
              planning, digital project monitoring, 5D/4D/3D BIM and managing
              transportation systems — to help our clients find smarter, more
              advanced ways to move people from one place to another.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '></p>{' '}
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
            <div className='flex flex-col p-12 bg-wilmer-orange  m-4 mr-2 text-white '>
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
          <h2 className='text-3xl   font-bold  mb-4'>Airports & Aviation</h2>
          <p className='md:text-3xl text-xs mt-4 mb-8 flex '>
            Pairing expert knowledge with more than 15 years’ experience, our
            teams have provided construction management and consultancy services
            to many aviation projects.
          </p>{' '}
          <p className='   md:text-lg text-xs mt-4 mb-8 flex '>
            Our teams have extensive, first-hand experience in delivering
            airport projects, combining with an exceptional commitment to
            quality, digital construction management methods like 3D BIM and a
            collaborative, client-focused approach to ensure success. We have
            worked in some of the most prestigious projects like Red Sea
            Airport, Bangalore international Airport, The Leh Airport. Whether
            new build, airport
          </p>{' '}
          <br />
          <p className='   md:text-lg text-xs flex mb-8'>
            expansion or renovation, we offer a full range of digital services &
            engineering audit services to help our clients deliver challenging,
            high-profile projects efficiently and on time, every time.
          </p>{' '}
          <br />
          <p className='   md:text-lg text-xs flex '>
            Our specialists and subject matter experts work closely with airport
            developers to improve processes , controls , SOP & MIS management to
            ensure operations of projects in the right manner We provide prompt
            and customised services that meet client expectations and airport
            and industry needs.
          </p>{' '}
          <br />
        </div>
        <div className='md:flex relative hidden w-2/5'>
          <div className='  border-2 font-xl  border-wilmer-orange mt-20 p-10 pt-36  text-wilmer-orange '>
            <p className='text-xl font-medium  mb-2 '>
              <em>
                {' '}
                {`Our expertise drives innovation, efficiency and value into every project. Our teams have extensive, first-hand experience in delivering airport projects.`}
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
          <CarouselPrevious className=' h-14 w-12 text-white  bg-num-orange hover:bg-num-indigo ' />
          <CarouselNext className=' h-14 w-12 text-white bg-num-orange hover:bg-num-indigo ' />
        </Carousel>
      </div>

      <div className='flex  mt-24'>
        <h2 className=' md:text-xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
          Explore More
        </h2>
      </div>
      <div className='md:grid md:grid-cols-2 gap-1'>
        <div className='flex overflow-hidden'>
          <div className=' group relative hover:scale-110 transform transition duration-500 ease-in-out overflow:hidden'>
            <Image
              src={`/bim/arup.jpg`}
              height={800}
              width={800}
              alt='bim'
              className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
            />
            <Link href={`/bim`}>
              <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                <div className=' text-white bg-black bg-opacity-50 flex flex-col pb-5'>
                  <div className='ml-8'>
                    <h1 className='text-num-orange ml-1'>Service</h1>
                    <h2 className='font-bold  md:text-2xl'>5D/4D/3D BIM</h2>
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
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Image
                src={`/services/ClaimManagement.jpg`}
                height={400}
                width={400}
                alt='claim management'
                className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/services/claim-management`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Claim Management
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
                src={`/services/ProjectMonCon.jpg`}
                height={400}
                width={400}
                alt=''
                className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/services/project-monitoring-and-control`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Service</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Project Monitoring & Control
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
