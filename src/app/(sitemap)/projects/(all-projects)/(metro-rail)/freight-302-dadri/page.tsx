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
        <p className='font-bold text-num-indigo'>
          Eastern Dedicated Freight Corridor Lot 302 Dadri Uttar Pradesh
        </p>
      </div>
      <div className='relative '>
        <Image
          src={`/projects/EasternDedicateFreightCorridor302.jpg`}
          width={2046}
          height={768}
          alt='maruti suzuki'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-50 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Project
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Eastern Dedicated Freight Corridor
              </h1>
              <h1 className='font-bold md:text-5xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Lot 302 Dadri, Uttar Pradesh
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
              Eastern Dedicated Freight Corridor Lot 302 Dadri, Uttar Pradesh
            </h3>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Location</h2>
            <h3>Dadri, Uttar Pradesh</h3>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Value </h2>
            <h3>511 Cr(INR) </h3>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Client </h2>
            <h3> </h3>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Completion Date</h2>
            <h3>Oct 2020 </h3>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Sector </h2>
            <Link href={`/sectors/railways-metro`} className='hover:underline'>
              <h3>Railways & Metro </h3>
            </Link>
            <hr className='border-b-1 border-num-indigo' />
            <h2 className='text-num-orange '>Service provided </h2>
            <Link
              href={`/services/quantity-survey`}
              className='hover:underline'
            >
              <h3>Cost over-run investigation audit</h3>
            </Link>
            <Link
              href={`/services/contract-administration`}
              className='hover:underline'
            >
              <h3> Bill verification </h3>
            </Link>
            <Link
              href={`/services/contract-administration`}
              className='hover:underline'
            >
              <h3> Contract Administration</h3>
            </Link>
          </div>
        </div>
        <div className='md:w-3/5 flex flex-col items-center text-justify'>
          {/* <h1 className='text-3xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black'>
            <em>Helping people move faster, safer and sustainably</em>
          </h1> */}
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              {`India is undergoing a rail infrastructure revolution. The dedicated Freight corridors (western & eastern) have been conceptualized to support the vision of this revolution. This rail infrastructure rehaul, is already witnessing many positive outcomes like`}
            </p>{' '}
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              {`-3X increase in speed of freight trains enabling faster movement of goods`}
            </p>{' '}
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              {`-decongest the existing train network by 70%`}
            </p>{' '}
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              {`-create capabilities for double container freight trains`}
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>
              {`The EDFC and the Western Dedicated Freight Corridor (WDFC) are high-capacity, high-speed railway corridors that are exclusively used for transporting freight.The EDFC runs from Punjab to West Bengal, while the WDFC runs from Dadri, Uttar Pradesh to JNPT (Navi Mumbai). The EDFC and WDFC are designed decongest the railway network by moving 70% of India's goods trains to these two corridors`}
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>
              {`The Eastern -DFC spans 1337KM from Sahenwal near Ludhiana in Punjab, crossing through Haryana, Uttar Pradesh, and terminating at Sonnagar in Bihar.`}
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>
              {`The Western-DFC, connecting Dadri in Uttar Pradesh to Jawaharlal Nehru Port in Mumbai, passes through five states Uttar Pradesh, Haryana, Rajasthan, Gujarat and Maharashtra`}
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>
              {`Significant improvement has been made in the existing carrying capacity by modifying basic design features. The permanent way is  constructed with significantly higher design features that will enable it to withstand heavier loads at higher speeds. Simultaneously, in order to optimize productive use of the right of way, dimensions of the rolling stock has been enlarged`}
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>
              {`The Eastern Dedicated Freight Corridor (EDFC) is all set to transform the landscape of freight transportation in the country. A successful trial on the New Pilkhani-New Shambhu section of the corridor has taken place, informed Ministry of Railways, on Tuesday. As on March 2024, 88% of the Eastern Dedicated Freight Corridor (EDFC) has been completed, and 95% is ready. The EDFC is 1,337 KM long, stretching from Ludhiana to Sonnagar. As of August 2023, 86% of the EDFC has been completed, and 99% of the required land has been acquired. The Ministry of Railways announced a successful trial on the New Pilkhani-New Shambhu section of the Eastern dedicated freight corridor (Eastern-DFC), marking a significant milestone in its development.`}
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>
              {`Numbertree was engaged as contractor bill verification and contract administration for 2 packages of Eastern Dedicated Freight Corridor. Our services cater to entire landscape of Infrastructure and to every stage of infrastructure development.`}
            </p>{' '}
            <br />
            <h1 className='md:w-3/4 w-11/12 md:text-xl flex text-sm underline mb-2  font-medium'>{`India's Rail Infrastructure`}</h1>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>{`The DFC project is strategically aligned with the National Rail Plan, which sets a bold objective - to increase the railway's modal share in India from the existing 28 per cent to an impressive 44 per cent by the year 2051.`}</p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>{`Crucially, the DFC is not just a railway project; it's a linchpin of the National Logistics Policy, aiming to reduce logistics costs from the current 15 per cent of GDP to a more sustainable 8 per cent by 2030.Furthermore, the DFC's capacity expansion is instrumental in realising Indian Railways' ambitious objective of achieving a freight loading capacity of 3,000 MT by 2030`}</p>{' '}
            <br />
            <h1 className='md:w-3/4 w-11/12 md:text-xl flex text-sm underline mb-2 font-medium'>{`Green Impact`}</h1>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex'>{`DFCCIL will decongest already saturated road network & promote shifting of freight transport to more efficient rail transport. This shift is expected to offer significant reduction of Green House Gas (GHG) emissions in transport sector in India. It is expected that DFC will save more than 450 million ton of CO2 in first 30 years of operation`}</p>{' '}
            <br />
          </div>
          <div className='flex  mt-10  gap-x-2 tracking-widest'>
            <h1 className='text-xl font-medium  p-1'>Tags:</h1>

            <h2 className='border border-num-orange text-sm  p-1'>
              Railways & Metros
            </h2>
            <h2 className='border border-num-orange text-sm   p-1'>
              Contract administration & Bill verification
            </h2>
          </div>
          <div className='flex  mt-2 gap-x-2 tracking-widest mb-10'>
            <h2 className='border border-num-orange text-sm  p-1'>
              Featured Project
            </h2>
            <h2 className='border border-num-orange text-sm  p-1'>
              Latest Project
            </h2>
            <h2 className='border border-num-orange text-sm  p-1'>Dadri</h2>
            <h2 className='border border-num-orange text-sm  p-1'>
              Uttar Pradesh
            </h2>
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
