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
      name: 'Magdechhu Hydroelectric Project',
      location: 'Bhutan',
      link: '/projects/magdechhu-bhutan',
      image: '/featuredProjects/bhutan-magadechhu.jpg',
    },
    {
      name: 'Nuclear Fuel Complex, Kota',

      location: 'Kota',
      link: '/projects/nuclear-fuel-kota',
      image: '/projects/NuclearFuelKota.jpg',
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
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-40 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Energy
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Renewable Energy
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                The future is renewables, the world is slowly shifting to
                environment friendly energy sources and we are here to support
                that transition.
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
            <em>Powering Progress in Infrastructure Development</em>
          </h1>
          <div className='flex flex-col items-center '>
            <h2 className='text-2xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black '>
              With rising global energy demand and evolving environmental
              policies, oil and gas as well as power & utilities are faced with
              delivering reliable, affordable, and secure energy supplies, all
              while transitioning to cleaner energy in the long term.
            </h2>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              Our strategic insight while working on various projects in the
              sector helps these companies address the challenges of today and
              turn their focus to a more sustainable future.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs  '>
              We provide a range of services to energy clients, including
              project and programme management, project controls, digital
              project management, construction management and advisory services.
              It is through the breadth of our services and expertise that we
              add value to our clients.
            </p>{' '}
          </div>
          <br />
          <div className='w-4/5 '>
            <div className='flex flex-col p-12 bg-wilmer-orange mb-20 m-4 mr-2 text-white '>
              <FaQuoteLeft size={30} className='text-white ' />
              <p className='text-xl font-medium ml-6 mr-4 mb-2 w-11/12'>
                <em>
                  {' '}
                  {`We guide our clients in making informed decisions to build business resilience that will ultimately drive a positive impact – on their business, people and the environment."`}
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
          <h2 className='text-3xl   font-bold  mb-4'>Renewable Energy</h2>
          <hr className='border-b-2  border-num-orange' />
          <p className='md:text-2xl text-xs mt-4  flex '>
            At NumberTree, we are passionately committed to making a
            contribution towards sustainable and environment friendly energy
            sector, through our professional skills and expertise.
          </p>{' '}
          <p className='   md:text-lg text-xs mt-4  flex '>
            The world needs a clear path towards environment friendly energy
            transition. The decarbonization of electricity systems and expansion
            of renewable energy across the world is a critical step toward this
            goal. This energy transition is underway and irreversible and, as a
            result, many of our clients are seeking to harness the opportunities
            it creates while grappling with the new and hitherto unknown
            challenges.
          </p>{' '}
          <br />
          <p className='   md:text-lg text-xs flex '>
            We help our clients succeed. Our innovative and integrated portfolio
            of services covering financial, strategic and risk management and
            support help organization achieve effective results for
            organizations.
          </p>
          <br />
          <p className=' md:text-lg text-xs flex'>
            Power generation is now made accessible and easy with the
            introduction of solar energy. Solar energy is now installed in homes
            and other premises. The solar panels get charge from sunlight and
            provide power to the places. The demand for solar panels is now
            increasing as people are shifting towards solar energy.
          </p>
          <br />
          <p className=' md:text-lg text-xs flex'>
            The governments of countries are promoting solar energy for a
            sustainable future. The involvement of the private sector is also
            helping the global energy and power industry to develop. Governments
            are partnering with private companies to boost the growth and
            fulfill the energy and power needs of the countries.
          </p>
          <br />
          <h2 className='text-2xl md:w-3/4 w-11/12 flex  justify-center font-semibold text-black mb-4'>
            Renewable energy sectors we serve
          </h2>
          <div className='flex flex-col w-2/3 mr-10'>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Solar Energy`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Wind Energy`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Hydropower`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Biofuels`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Geothermal Energy`}
              </span>
            </p>
          </div>
        </div>
        <div className='md:inline relative mt-20 hidden w-2/5'>
          <div className='  border-2 font-xl  border-wilmer-orange mt-20 p-10   text-wilmer-orange '>
            <p className='text-xl font-medium  mb-2 '>
              <em>
                {' '}
                {`One of the top trends in the renewable energy sector is increasing emphasis on green energy. One of the key developments is increasing utilization of solar energy.`}
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
        <Link href={`/services`}>
          <h2 className=' md:text-xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
            Explore More
          </h2>
        </Link>
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
              <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                <div className=' text-white bg-black bg-opacity-50 flex flex-col pb-5'>
                  <div className='ml-8'>
                    <h1 className='text-num-orange ml-1'>Service</h1>
                    <h2 className='font-bold  md:text-2xl'>
                      Techno-Commercial Audit
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
                        Project Management Consultancy
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
        </div>
      </div>
    </div>
  );
};
export default Page;
