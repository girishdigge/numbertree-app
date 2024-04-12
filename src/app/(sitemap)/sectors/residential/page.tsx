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
      name: 'Trump Tower ',
      location: 'Mumbai, Maharashtra',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Purva Atmosphere',
      location: 'Bangalore, Karnataka',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Andaman Nicobar Tsunami Rehabilitation',
      location: 'Havelock, Andaman & Nicobar',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Ray Nagar Federation Affordable Mass Housing (30,000 homes',
      location: 'Solapur, Maharashtra',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Nanded Mass Housing Project (11500 homes) ',
      location: 'Nanded, Maharashtra',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Park West',
      location: 'Banglore,Karnataka',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Mumbai Vicinia',
      location: 'Mumbai ',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },

    {
      name: 'Malegaon Mass Housing (12000 Homes)',
      location: 'Maharashtra',
      link: '#',
      image: '/projects/newParliment.jpg', // replace with the actual image path
    },
    {
      name: 'Shukho Brishti',
      location: 'Kolkata, West Bengal',
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
        <p className='font-bold text-num-indigo'>Residential</p>
      </div>
      <div className='relative '>
        <Image
          src={`/sectors/Residential.jpg`}
          width={2046}
          height={768}
          alt='Residential'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-10 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              URBAN INFRASTRUCTURE
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Residential
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Our expertise offers support throughout the project lifecycle,
                ensuring project success through timely delivery, within
                estimated budgets. We are project managers support & partners at
                the site.
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
            <em>Urban Infrastructure is the foundation of society</em>
          </h1>
          <div className='flex flex-col items-center '>
            <h2 className='text-2xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black '>
              Infrastructure is the foundation of society. The transport, energy
              and digital networks form the cornerstones of economic growth. And
              the health, education, sports, housing and recreational facilities
              invest in the fabric of society.
            </h2>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              Infrastructure development is a global challenge. As businesses
              strive to develop infrastructure, support communities and create
              livelihood, the developing markets as well as developed countries
              are likely to triple the infrastructure investment necessitating
              the need for expert professional services like Numbertree.
            </p>{' '}
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
            <div className='flex flex-col p-12 bg-wilmer-orange mb-20 m-4 mr-2 text-white '>
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
          <h2 className='text-3xl   font-bold  mb-4'>Residential</h2>
          <hr className='border-b-2  border-num-orange' />
          <p className='md:text-2xl text-xs mt-4  flex '>
            Globally, the urban population now exceeds the rural population. The
            increasing demand for housing stems from economic development led by
            employment creation in cities. In the emerging economies, aspiring
            middle-class consumers are driving the demand for better living
            conditions.
          </p>{' '}
          <p className='   md:text-lg text-xs mt-4  flex '>
            At NumberTree we provide services across the complete development
            cycle. Our outcome-focused approach ensures our services are
            perfectly aligned to the needs of our clients. Our experience ranges
            from large mixed-use developments, affordable mass housing,
            townships & state of the art realty as well as private housing.
          </p>{' '}
          <br />
          <p className='   md:text-lg text-xs flex '>
            We’ve worked for many years on residential projects in major cities.
            Through Project management consultancy we have brought into reality
            the world’s largest affordable mass housing project comprising of
            30,000 houses for underserved communities of Solapur, Maharashtra,
            India.
          </p>
          <br />
          <p className='   md:text-lg text-xs flex '>
            We work with onsite teams to keep projects on track, and optimize
            cost through value added services using the full proof processes,
            suggesting solutions that add value. We also review lifecycle costs
            and costs-in-use for the procurements done, so balancing capital and
            maintenance expenditure.
          </p>{' '}
          <br />
          <p className='   md:text-lg text-xs flex '>
            Our procurement assistance service creates top-to-bottom consistency
            throughout the entire logistics, delivery, and installation process,
            and our value engineering service achieves the optimum balance
            between function, performance, quality, safety, and cost. Our QS and
            Cost Management service helps deliver projects that meet all the
            functional and operational requirements of our clients within their
            budgets.
          </p>{' '}
          <br />
        </div>
        <div className='md:inline relative hidden mt-20 w-2/5'>
          <div className='  border-2 font-xl  border-wilmer-orange mt-20 p-10   text-wilmer-orange '>
            <p className='text-xl font-medium  mb-2 '>
              <em>
                {' '}
                {`Our expertise supports housing that builds communities where people thrive. Our track record ensures that we deliver clients’ objectives and create long-term sustainable success.`}
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
          <Link href={`/services`}>
            <h2 className='  text-2xl text-black font-medium'>
              Related Projects
            </h2>
          </Link>
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
                      Project Management Consultancy
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
                        Contract Administration & Bill Verification
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
                        Techno-Commercial Audit
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
                        Quantity Survey & Cost Control
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
