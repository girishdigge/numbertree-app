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
        <Link href={`/services`}>
          <p className='font-bold text-num-indigo'>Services</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Techno Commercial Audit</p>
      </div>
      <div className='relative '>
        <Image
          src={`/services/TechoComAudit2.jpg`}
          width={2046}
          height={768}
          alt='Techno Commercial Audit'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-50 bg-black  text-white'>
          <div className=''>
            <h2 className='md:text-2xl font-light text-sm ml-4 mb-2'>
              EXPLORE
            </h2>
            <h1 className='font-bold md:text-5xl text-3xl mb-2 border-num-orange ml-2 flex '>
              Techno Commercial Audit
            </h1>
            <p className='text-lg font-medium ml-4 mb-2 w-1/2'>
              We provide cost management services on a wide range of
              construction projects across sectors in infrastructure.
            </p>
          </div>
          <Button className='w-40 ml-4  bg-num-indigo text-white mt-2 hover:bg-wilmer-orange hover:text-white'>
            Connect
          </Button>
        </div>
      </div>

      <br />
      <div className='flex flex-row'>
        <div className='flex w-1/4 pl-4 flex-col'>
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
              Our Services
            </h2>
            <div className='flex flex-col gap-2'>
              <div className='w-1/2'>
                <Button className='bg-num-indigo mb-2  text-white hover:bg-wilmer-orange hover:text-white'>
                  Claim Management
                </Button>
                <Button className='bg-num-indigo mb-2  text-white hover:bg-wilmer-orange hover:text-white'>
                  Contract Administration
                </Button>
                <Button className='bg-num-indigo mb-2  text-white hover:bg-wilmer-orange hover:text-white'>
                  Project Monitoring & Control
                </Button>
                <Button className='bg-num-indigo mb-2  text-white hover:bg-wilmer-orange hover:text-white'>
                  {' '}
                  Quantity Survey
                </Button>
                <Button className='bg-num-indigo mb-2  text-white hover:bg-wilmer-orange hover:text-white'>
                  Transaction Advisory
                </Button>
                <Button className='bg-num-indigo mb-2  text-white hover:bg-wilmer-orange hover:text-white'>
                  {' '}
                  Techno Commercial Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2 flex flex-col items-center  text-justify'>
          <h1 className='text-3xl flex justify-center font-normal w-3/4 text-black mb-4'>
            We pride ourselves as India’s foremost techno commercial audit firm
            with over two decades of experience across varied industries.
          </h1>
          <div className='flex flex-col items-center '>
            <p className='  w-3/4 md:text-lg text-xs flex '>
              Our offering of Techno commercial Audit – helps businesses
              harnesses the power of financial insights with great clarity, it
              transforms not just the way businesses operate but also unlocks
              their full potential and propels them to growth This specialized
              audit examines both the technical and commercial aspects of
              infrastructure ventures, providing a comprehensive evaluation of
              their feasibility, efficiency, and financial viability.
            </p>{' '}
            <br />
            <p className='  w-3/4 md:text-lg text-xs '>
              Our dedicated team of engineers & auditors work collaboratively to
              present a meticulous analysis of project plans, contracts, cost
              estimates, procurement processes, Quantity Survey and financial
              controls. We are well equipped to use our processes and identify
              potential risks, cost-saving opportunities, and areas for
              improvement.
            </p>{' '}
            <br />
            <p className='  w-3/4 md:text-lg text-xs'>
              With our multidimensional approach, Techno-Commercial Audit serves
              as a valuable tool for project managers & senior management in
              navigating the complex landscape of infrastructure development,
              ensuring transparency, accountability, and successful project
              delivery.
            </p>
          </div>
          <br />
          <div className='  ml-8'>
            <div className='flex flex-col pl-2 pt-2 bg-wilmer-orange  m-4 mr-2 text-white '>
              <FaQuoteLeft size={18} className='text-white ' />
              <p className='text-lg font-medium ml-6 mr-4 w-11/12'>
                {`We offer seamless and integrated service, from inception
                  through to completion and handover, we are the right hand of
                  project managers. We listen to our clients needs and strive
                  to provide them the best service."`}
              </p>
            </div>
          </div>
          <h2 className='text-2xl w-3/4 flex  justify-center font-semibold text-black mb-4'>
            Some of the specialized services provided under Techno commercial
            audit are
          </h2>
          <div className='flex flex-col w-2/3 mr-10'>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Techno Commercial Internal Audit`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Project Concurrent Audit`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Project Closure Audit`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Functional Audits/P2P Audits/Process Audits`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Revenue Assurance Audit of Toll Plaza`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Energy Audit- Renewables`}
              </span>
            </p>
          </div>
          <br />
          {/* <h2 className='text-lg flex font-semibold text-num-indigo mt-4 mb-4 '>
            Explore More
          </h2>
          <div className='grid grid-cols-3 gap-2 mb-4'>
            <Link href={`/sectors/aviation`}>
              <div className='w-full grid-rows-2  relative hover:scale-105 transition duration-500 ease-in-out'>
                <Image
                  src={`/sectors/Aviation.jpg`}
                  height={200}
                  width={400}
                  alt='sector'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
                <div className=' flex justify-center bg-gray-50 shadow-lg border-gray-800 items-end border border-l-1 border-r-1 border-b-1'>
                  <p className=' md:text-base text-xs text-num-indigo  flex justify-center font-bold text-center'>
                    Aviation
                  </p>
                </div>
              </div>
            </Link>
            <Link href={`/sectors/bridges-structures`}>
              <div className='w-full grid-rows-2  relative hover:scale-105 transition duration-500 ease-in-out'>
                <Image
                  src={`/sectors/BridgesStructure.jpg`}
                  height={200}
                  width={400}
                  alt='sector'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
                <div className=' flex justify-center bg-gray-50 shadow-lg border-gray-800 items-end border border-l-1 border-r-1 border-b-12'>
                  <p className=' md:text-base text-xs text-num-indigo  flex justify-center font-bold text-center'>
                    Bridges Structures
                  </p>
                </div>
              </div>
            </Link>
            <Link href={`/sectors/commercial`}>
              <div className='w-full grid-rows-2  relative hover:scale-105 transition duration-500 ease-in-out'>
                <Image
                  src={`/sectors/Commercial.jpg`}
                  height={200}
                  width={400}
                  alt='sector'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
                <div className=' flex justify-center bg-gray-50 shadow-lg border-gray-800 items-end border border-l-1 border-r-1 border-b-12'>
                  <p className=' md:text-base text-xs text-num-indigo  flex justify-center font-bold text-center'>
                    Commercial
                  </p>
                </div>
              </div>
            </Link>
          </div> */}
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
        <div className='flex justify-center mt-20 mb-2'>
          <h2 className='  text-2xl text-black font-medium'>
            Related Projects
          </h2>
        </div>
        <div className='flex gap-2 mb-4'>
          <div className=' group relative'>
            <Link href={`/projects/MumbaiDelhiExpressway`}>
              <Image
                src={`/projects/mumbaiDelhiExpressway.jpg`}
                height={400}
                width={600}
                alt='project'
                className='group-hover:opacity-90' // Fade image slightly on hover
              />
              <div className='z-2 absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 '>
                <div className=' text-white flex flex-col '>
                  <div className='ml-8'>
                    <h2 className='font-bold  text-2xl'>
                      Mumbai Delhi Expressway
                    </h2>
                    <h1 className='text-num-pink font-semibold ml-1'>
                      Mumbai-Delhi
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
            {/* <Link href={`/projects/MumbaiDelhiExpressway`}>
              <div className='absolute flex justify-center items-end inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-500 ease-in-out'>
                <p className=' text-xl text-white flex justify-center font-bold text-center'>
                  Mumbai Delhi Expressway
                </p>
              </div>
            </Link> */}
          </div>
          <div className=' group relative'>
            <Link href={`/projects/new-parliment`}>
              <Image
                src={`/projects/newParliment.jpg`}
                height={400}
                width={600}
                alt='project'
                className='group-hover:opacity-90' // Fade image slightly on hover
              />
              <div className='z-2 absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30'>
                <div className=' text-white  flex flex-col '>
                  <div className='ml-8'>
                    <h2 className='font-bold  text-2xl'>New Parliment</h2>
                    <h1 className='text-num-pink font-semibold ml-1'>Delhi</h1>
                  </div>
                </div>
              </div>
            </Link>
            {/* <Link href={`/projects/new-parliment`}>
              <div className='absolute flex justify-center items-end inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-500 ease-in-out'>
                <p className=' text-xl text-white flex justify-center font-bold text-center w-3/4'>
                  New Parliment, new Delhi
                </p>
              </div>
            </Link> */}
          </div>

          <div className=' group relative '>
            <Link href={`/projects/merc-pune`}>
              <Image
                src={`/projects/merc.jpg`}
                height={400}
                width={600}
                alt='project'
                className='object-cover group-hover:opacity-90' // Fade image slightly on hover
              />
              <div className='z-2 absolute inset-0 flex flex-col justify-end  bg-black bg-opacity-30 '>
                <div className=' text-white  flex flex-col '>
                  <div className='ml-8'>
                    <h2 className='font-bold  text-2xl'>Mercedes Benz</h2>
                    <h1 className='text-num-pink font-semibold ml-1'>Pune</h1>
                  </div>
                </div>
              </div>
            </Link>
            {/* <Link href={`/projects/merc-pune`}>
              <div className='absolute flex justify-center items-end inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-500 ease-in-out'>
                <p className=' text-xl text-white flex justify-center font-bold text-center'>
                  Mercedes Benz,Pune
                </p>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
      {/* <h1 className='text-7xl translate-y-4 translate-x-2 text-num-watermark font-medium'>
        Explore More
      </h1> */}
      <div className='flex justify-center mt-20'>
        <h2 className=' text-2xl text-black font-medium mb-2'>
          Explore Sectors
        </h2>
      </div>
      <div className='grid grid-cols-2 gap-1'>
        <div className='flex overflow-hidden'>
          <div className=' group relative hover:scale-110 transform transition duration-500 ease-in-out overflow:hidden'>
            <Link href={`/sectors/aviation`}>
              <Image
                src={`/sectors1/Aviation.jpg`}
                height={800}
                width={800}
                alt='sector'
                className='object-contain group-hover:opacity-95' // Fade image slightly on hover
              />
            </Link>
            <div className='z-2 absolute inset-0 flex flex-col justify-end mb-5 bg-black bg-opacity-30 '>
              <div className=' text-white  flex flex-col '>
                <div className='ml-8 mb-2'>
                  <h2 className='mb-2 font-bold  text-2xl'>Aviation</h2>
                  {/* <h1 className='text-num-pink ml-1'>Sector</h1> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-1 pb-4 align-middle '>
          <div className='flex overflow-hidden'>
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Link href={`/sectors/bridges-structures`}>
                <Image
                  src={`/sectors1/BridgesStructure.jpg`}
                  height={400}
                  width={400}
                  alt='project'
                  className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
                />
              </Link>
              <div className='z-2 absolute inset-0 flex flex-col justify-end bg-black bg-opacity-40 '>
                <div className=' text-white flex flex-col '>
                  <div className='ml-8'>
                    <h2 className='mb-2 font-bold  text-2xl'>
                      Bridges Structures
                    </h2>
                    {/* <h1 className='text-num-pink ml-1'>Sector</h1> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex overflow-hidden'>
            <div className='group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Link href={`/sectors/commercial`}>
                <Image
                  src={`/sectors1/Commercial.jpg`}
                  height={400}
                  width={400}
                  alt='project'
                  className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
                />
              </Link>
              <div className='z-2 absolute inset-0 flex flex-col justify-end bg-black bg-opacity-40 '>
                <div className=' text-white  flex flex-col '>
                  <div className='ml-8'>
                    <h2 className='mb-2 font-bold  text-2xl'>Commercial</h2>
                    {/* <h1 className='text-num-pink ml-1'>Sector</h1> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex overflow-hidden'>
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Link href={`/sectors/industrial`}>
                <Image
                  src={`/sectors1/Industrial.jpg`}
                  height={400}
                  width={400}
                  alt='project'
                  className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
                />
              </Link>
              <div className='z-2 absolute inset-0 flex flex-col justify-end bg-black bg-opacity-40'>
                <div className=' text-white  flex flex-col '>
                  <div className='ml-8'>
                    <h2 className='mb-2 font-bold  text-2xl'>Industrial</h2>
                    {/* <h1 className='text-num-pink ml-1'>Sector</h1> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex overflow-hidden'>
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Link href={`/sectors/institutional`}>
                <Image
                  src={`/sectors1/Institutional.jpg`}
                  height={400}
                  width={400}
                  alt='project'
                  className='object-cover group-hover:opacity-90 ' // Fade image slightly on hover
                />
              </Link>
              <div className='z-2 absolute inset-0 flex flex-col justify-end  bg-black bg-opacity-40 '>
                <div className=' text-white flex flex-col '>
                  <div className='ml-8'>
                    <h2 className='mb-2 font-bold  text-2xl'>Institutional</h2>
                    {/* <h1 className='text-num-pink ml-1'>Sector</h1> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
