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
import { Services } from '@/data/services';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Page = () => {
  return (
    <div className=''>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={`/projects`}>
          <p className='font-bold text-num-indigo'>Projects</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Kartavya Path</p>
      </div>
      <div className='relative '>
        <Image
          src={`/projects/kartavyaPath.jpg`}
          width={2046}
          height={768}
          alt='mumbaiDelhiExpressway'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-50 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Project
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Kartavya Path
              </h1>
              <h1 className='font-bold md:text-5xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Redevelopment as part of central Vista Redevelopment project
              </h1>
            </div>
            <Link href={`/projects`} className=''>
              <Button className='md:w-40 ml-4  bg-num-orange text-white mt-2 hover:bg-num-indigo hover:text-white animate-fadeInUp'>
                All Projects
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

      <div className='flex md:flex-row flex-col'>
        <div className='md:flex md:w-1/5   pl-4 flex-col'>
          <h1 className='text-xl font-bold mb-2'> Share this page</h1>

          <div className='flex gap-4 mb-12'>
            <Link href={'#'}>
              <FaFacebookF
                size={30}
                className='bg-num-orange p-1 text-white  rounded-xl'
              />
            </Link>
            <Link href={'#'}>
              <FaLinkedinIn
                size={31}
                className='bg-num-orange text-white p-1 rounded-xl'
              />
            </Link>
            <Link href={'#'}>
              <FaXTwitter
                size={30}
                className='bg-num-orange text-white p-1 rounded-xl'
              />
            </Link>
          </div>
          <div className='flex flex-col gap-y-2  tracking-widest'>
            <h1 className='text-xl font-bold'>Project Details</h1>
            <hr className='border-b-1 border-num-indigo mb-2' />
            <h2 className='text-num-orange '>Project Name</h2>
            <h3>
              Kartavya Path - Redevelopment as part of central Vista
              Redevelopment project{' '}
            </h3>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Location</h2>
            <h3>New Delhi</h3>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Value </h2>
            <h3>477 Cr(INR) </h3>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Client </h2>
            <h3> </h3>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Completion Date</h2>
            <h3>Nov 2021 </h3>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Sector </h2>
            <Link href={`/sectors/roads-highways`} className='hover:underline'>
              <h3>Roads & Highway </h3>
            </Link>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Service provided </h2>
            <Link
              href={`/services/techno-commercial-audit`}
              className='hover:underline'
            >
              <h3>Techno-Commercial Audit </h3>
            </Link>
          </div>
        </div>
        <div className='md:w-3/5 flex flex-col items-center text-justify'>
          {/* <h1 className='text-3xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black mb-4'>
            <em>Helping people move faster, safer and sustainably</em>
          </h1> */}
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-4'>
              {`The Kartavya Path, a 3km long tree lined path, which extends from the Rashtrapati Bhawan to the India Gate, is one of the most visited tourist places in Delhi, India. Indian Republic Day parade and many other ceremonial functions takes place at this path.`}
            </p>{' '}
            <br />
            <h1 className='md:w-3/4 w-11/12 md:text-xl flex text-sm underline mb-2  font-medium'>{`Early Design`}</h1>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>{`It was designed using exemplary urban planning instruments, including: a strong axis (from the ridge of Raisina Hill towards the Jamuna river), an emphasised focal point, formation of important nodes, and a definitive termination point.The Viceroy’s House became the Rashtrapati Bhavan and the All India War Memorial became the India Gate. These buildings in the Central Vista stand apart as iconic monuments of the Republic of India.`}</p>{' '}
            <br />
            <h1 className='md:w-3/4 w-11/12 md:text-xl flex text-sm underline mb-2  font-medium'>{`Current use and Limitations `}</h1>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>{`The original stretch of the Kartavya Path has undergone multiple changes over the course of time. Despite the evolution, the Path remains to be an important public space for the citizens of our nation. Several modifications were made to the Kartavya Path, post-independence.`}</p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>{`Despite multitude of efforts to preserve the space, essential facilities of Kartavya Path had degraded over the years, since the original landscape was not designed for heavy use. The public spaces and facilities for civic users, including pathways and street furniture had become increasingly stressed and uncomfortable to use. Further, the Republic Day arrangements needed to be better planned in a less disruptive manner for ensuring minimal restrictions on public movement and less damage to the landscape on an annual basis. Some of the issues that needed attention in the Kartavya Path were heavy traffic , heavy public use , need for better arrangements , not pedestrian friendly and inadequate facility for vendors.`}</p>{' '}
            <br />
            <h1 className='md:w-3/4 w-11/12 md:text-xl flex text-sm underline mb-2  font-medium'>{`Redevelopment `}</h1>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>{`As a part of the Central Vista Master Plan, the Kartavya Path has been revamped, its infrastructure upgraded to suit the growing need of improved recreational spaces for the city. New social amenities have been provided, while retaining its essential character, revamped and refurbished to upgrade it to expected quality.`}</p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>{`Numbertree served as Internal auditor for the Kartavya path redevelopment project.`}</p>{' '}
            <br />
            <div className='flex mt-10  gap-x-2 tracking-widest mb-10'>
              <h1 className='text-xl font-medium  p-1'>Tags:</h1>
              <h2 className='border border-num-orange text-sm  p-1'>
                Roads & Highways
              </h2>
              <h2 className='border border-num-orange text-sm   p-1'>
                techno–commercial audit
              </h2>
              <h2 className='border border-num-orange text-sm   p-1'>
                featured project
              </h2>
              <h2 className='border border-num-orange text-sm  p-1'>
                New Delhi
              </h2>
            </div>
          </div>
        </div>

        <div className='md:w-1/5 mr-4 flex flex-col justify-between '>
          <GetInTouch />
        </div>
      </div>

      <div className='mt-4'>
        {' '}
        {/* <h1 className='text-7xl translate-y-6 translate-x-2 text-num-watermark font-medium'>
          Related Projects
        </h1> */}
        <div className='flex ml-0 mt-20 mb-2'>
          <h2 className=' md:text-xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
            Explore Services
          </h2>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className=' flex items-center justify-center md:ml-14 ml-10 md:w-11/12 w-4/5 relative'
        >
          <CarouselContent>
            {Services.map((service, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/2'>
                <div className='relative'>
                  <Image
                    className='object-fit hover:scale-105 transform transition-all duration-500 ease-in-out'
                    src={service.image}
                    height={600}
                    width={800}
                    alt='image'
                  />
                  <div className='absolute inset-0 flex items-end  md:mt-5 mt-2'>
                    <div className='bg-black md:bg-opacity-70 bg-opacity-40 w-full  md:h-1/4 md:p-5'>
                      <div className=' text-white ml-2 flex justify-around'>
                        <div>
                          <h3 className='md:text-2xl text-xl font-bold '>
                            {service.name}
                          </h3>
                        </div>
                        <Link href={service.link}>
                          <Button className='w-40 bg-num-indigo  border-0 hover:bg-num-orange'>
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

      <div className='flex  mt-20'>
        <h2 className=' md:text-xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
          Explore Sectors
        </h2>
      </div>
      <div className='md:grid md:grid-cols-2 gap-1 bg-black  bg-opacity-10'>
        <div className='flex overflow-hidden'>
          <div className=' group relative hover:scale-110 transform transition duration-500 ease-in-out overflow:hidden'>
            <Image
              src={`/sectors/Aviation.jpg`}
              height={800}
              width={800}
              alt='sector'
              className='object-contain group-hover:opacity-95' // Fade image slightly on hover
            />
            <Link href={`/sectors/aviation`}>
              <div className='z-2 absolute inset-0 flex flex-col justify-end mb-5'>
                <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                  <div className='ml-8'>
                    <h1 className='text-num-orange ml-1'>Sector</h1>
                    <h2 className='font-bold pb-2 md:text-2xl'>Aviation</h2>
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
                src={`/sectors/OilGas1.jpg`}
                height={400}
                width={400}
                alt='project'
                className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/sectors/oil-gas`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Sector</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>Oil & Gas</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex overflow-hidden'>
            <div className='group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Image
                src={`/sectors/Commercial1.jpg`}
                height={400}
                width={400}
                alt='project'
                className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/sectors/commercial`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Sector</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Commercial
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
                src={`/sectors/Industrial.jpg`}
                height={400}
                width={400}
                alt='project'
                className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/sectors/industrial`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Sector</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Industrial
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
                src={`/sectors/Institutional1.jpg`}
                height={400}
                width={400}
                alt='project'
                className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
              />
              <Link href={`/sectors/institutional`}>
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h1 className='text-num-orange ml-1'>Sector</h1>
                      <h2 className='font-bold pb-2  md:text-2xl'>
                        Institutional
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