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

const Page = () => {
  return (
    <div className=''>
      <div className='relative flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href={'/'}>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={'/services'}>
          <p className='font-bold text-num-indigo'>Services</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Business Transformation</p>
      </div>
      <div className='relative '>
        <Image
          src={`/services/BusinessTransformation2.jpg`}
          width={2046}
          height={768}
          alt='business transformation'
          className='object-contain'
        />
        <div className='absolute inset-0 flex items-start '>
          <h1 className='font-bold md:text-5xl text-3xl mt-2 ml-2 flex border-l-2 border-num-orange justify-center text-white'>
            Business Transformation
          </h1>
        </div>
      </div>
      <br />
      <div className='flex flex-row'>
        <div className='flex w-1/4 pl-4 flex-col'>
          <h1 className='text-lg font-bold '> share this page</h1>
          <hr className=' w-1/2 border border-num-pink mb-2' />
          <div className='flex gap-2 mb-12'>
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
          <h2 className='text-lg font-bold flex  text-num-indigo mt-2  '>
            Other Services
          </h2>
          <hr className=' w-1/2 border border-num-pink mb-2' />
          <ul className='list-disc ml-4  flex flex-col mb-12 '>
            {/* <Link href={'/services/business-transformation'}>
              <li className='hover:text-num-blue hover:underline'>
                {' '}
                Business Transformation
              </li>
            </Link> */}
            <Link href={'/services/claim-management'}>
              <li className='hover:text-num-blue hover:underline'>
                {' '}
                Claim Management
              </li>
            </Link>
            <Link href={'/services/contract-administration'}>
              <li className='hover:text-num-blue hover:underline'>
                {' '}
                Contract Administration
              </li>
            </Link>
            <Link href={'/services/project-monitoring-and-control'}>
              <li className='hover:text-num-blue hover:underline'>
                {' '}
                Project Monitoring & Control{' '}
              </li>
            </Link>
            <Link href={'/services/quantity-survey'}>
              <li className='hover:text-num-blue hover:underline'>
                {' '}
                Quantity Survey{' '}
              </li>
            </Link>
            <Link href={'/services/transaction-advisory'}>
              <li className='hover:text-num-blue hover:underline'>
                Transaction Advisory{' '}
              </li>
            </Link>
            <Link href={'/services/techno-commercial-audit'}>
              <li className='hover:text-num-blue hover:underline'>
                {' '}
                Techno Commercial Audit
              </li>
            </Link>
          </ul>
          <div className='mb-12'>
            <h1 className='text-xl font-bold text-num-indigo mb-2'>Tags</h1>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <Button className='bg-num-indigo text-white hover:bg-wilmer-orange hover:text-white'>
                  Service
                </Button>
                <Button className='bg-num-indigo text-white hover:bg-wilmer-orange hover:text-white'>
                  Sectors
                </Button>
              </div>
              <div className='flex gap-2'>
                <Button className='bg-num-indigo text-white hover:bg-wilmer-orange hover:text-white'>
                  Service
                </Button>
                <Button className='bg-num-indigo text-white hover:bg-wilmer-orange hover:text-white'>
                  Sectors
                </Button>
              </div>
              <div className='flex gap-2'>
                <Button className='bg-num-indigo text-white hover:bg-wilmer-orange hover:text-white'>
                  Service
                </Button>
                <Button className='bg-num-indigo text-white hover:bg-wilmer-orange hover:text-white'>
                  Sectors
                </Button>
              </div>
              <div className='flex gap-2'>
                <Button className='bg-num-indigo text-white hover:bg-wilmer-orange hover:text-white'>
                  Service
                </Button>
                <Button className='bg-num-indigo text-white hover:bg-wilmer-orange hover:text-white'>
                  Sectors
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-lg font-bold'>Why we are here?</h1>
            <p className='w-3/4 text-base'>
              Lorem ipsum dolor sit amet eros, conse ctetuer adipiscing elit,
              sed diami nonum nibhie vixtu eget.
            </p>
          </div>
        </div>
        <div className='w-1/2 '>
          <h1 className='text-xl flex justify-center font-semibold text-num-indigo mb-4'>
            We pride ourselves as India’s foremost techno commercial audit firm
            with over two decades of experience across varied industries.
          </h1>
          <p className='  md:text-base text-xs'>
            Our offering of Techno commercial Audit – helps businesses harnesses
            the power of financial insights with great clarity, it transforms
            not just the way businesses operate but also unlocks their full
            potential and propels them to growth This specialized audit examines
            both the technical and commercial aspects of infrastructure
            ventures, providing a comprehensive evaluation of their feasibility,
            efficiency, and financial viability. Our dedicated team of engineers
            & auditors work collaboratively to present a meticulous analysis of
            project plans, contracts, cost estimates, procurement processes,
            Quantity Survey and financial controls. We are well equipped to use
            our processes and identify potential risks, cost-saving
            opportunities, and areas for improvement. With our multidimensional
            approach, Techno-Commercial Audit serves as a valuable tool for
            project managers & senior management in navigating the complex
            landscape of infrastructure development, ensuring transparency,
            accountability, and successful project delivery.
          </p>
          <br />
          <div className='  mt-4 w-full bg-wilmer-orange  p-4 mb-4'>
            <div className='flex m-4 mr-2  text-white '>
              <p className='font-semibold font-lg ml-2 mr-4 w-11/12'>
                {`We offer seamless and integrated service, from inception
                  through to completion and handover, we are the right hand of
                  project managers. We listen to our clients needs and strive
                  to provide them the best service."`}
              </p>
              <FaQuoteLeft size={40} className='text-white ' />
            </div>
          </div>
          <h2 className='text-lg flex justify-center font-semibold text-num-indigo mb-4'>
            Some of the specialized services provided under Techno commercial
            audit are
          </h2>
          <ul className='list-disc ml-6 '>
            <li> Techno Commercial Internal Audit</li>
            <li> Project Concurrent Audit</li>
            <li> Project Closure Audit</li>
            <li>Functional Audits/P2P Audits/Process Audits </li>
            <li>Revenue Assurance Audit of Toll Plaza</li>
            <li> Energy Audit- Renewables</li>
          </ul>
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
        <div className='hidden w-1/4 md:flex pl-10 '>
          <GetInTouch />
        </div>
      </div>
      <div>
        {' '}
        <h1 className='text-7xl translate-y-6 translate-x-2 text-num-watermark font-medium'>
          Related Projects
        </h1>
        <h2 className='-translate-y-6 ml-1 text-4xl text-num-orange font-medium'>
          Related Projects
        </h2>
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
              <div className='z-2 absolute -translate-y-10 flex items-end justify-end'>
                <h1 className='font-bold md:text-2xl text-3xl flex justify-end text-white bg-black bg-opacity-50'>
                  Mumbai expressway
                </h1>
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
              <div className='z-2 absolute -translate-y-10 flex items-end justify-end'>
                <h1 className='font-bold md:text-2xl text-3xl flex justify-end text-white bg-black bg-opacity-50'>
                  New Parliment,Delhi
                </h1>
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
              <div className='z-2 absolute -translate-y-10 flex items-end justify-end'>
                <h1 className='font-bold md:text-2xl text-3xl flex justify-end text-white bg-black bg-opacity-50'>
                  Mercedes, Pune
                </h1>
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
      <h1 className='text-7xl translate-y-4 translate-x-2 text-num-watermark font-medium'>
        Explore More
      </h1>

      <h2 className='-translate-y-8 ml-1 text-4xl text-num-orange font-medium'>
        Explore More
      </h2>
      <div className='grid grid-cols-2 gap-1'>
        <div className='flex'>
          <div className=' group relative '>
            <Link href={`/sectors/aviation`}>
              <Image
                src={`/sectors1/Aviation.jpg`}
                height={800}
                width={800}
                alt='sector'
                className='object-contain group-hover:opacity-95 hover:scale-105 transition duration-500 ease-in-out' // Fade image slightly on hover
              />
            </Link>
            <div className='z-2 absolute -translate-y-10 flex items-end justify-end'>
              <h1 className='font-bold md:text-2xl text-3xl flex justify-end text-white bg-black bg-opacity-50'>
                Aviation
              </h1>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-1 pb-4 align-middle'>
          <div>
            <div className=' group relative '>
              <Link href={`/sectors/bridges-structures`}>
                <Image
                  src={`/sectors1/BridgesStructure.jpg`}
                  height={400}
                  width={400}
                  alt='project'
                  className='object-cover group-hover:opacity-90 hover:scale-105 transition duration-500 ease-in-out' // Fade image slightly on hover
                />
              </Link>
              <div className='z-2 absolute -translate-y-10 flex items-end justify-end'>
                <h1 className='font-bold md:text-2xl text-3xl flex justify-end text-white bg-black bg-opacity-50'>
                  Bridges Structures
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className='group relative '>
              <Link href={`/sectors/commercial`}>
                <Image
                  src={`/sectors1/Commercial.jpg`}
                  height={400}
                  width={400}
                  alt='project'
                  className='object-cover group-hover:opacity-90 hover:scale-105 transition duration-500 ease-in-out' // Fade image slightly on hover
                />
              </Link>
              <div className='z-2 absolute -translate-y-10 flex items-end justify-end'>
                <h1 className='font-bold md:text-2xl text-3xl flex justify-end text-white bg-black bg-opacity-50'>
                  Commercial
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className=' group relative '>
              <Link href={`/sectors/industrial`}>
                <Image
                  src={`/sectors1/Industrial.jpg`}
                  height={400}
                  width={400}
                  alt='project'
                  className='object-cover group-hover:opacity-90 hover:scale-105 transition duration-500 ease-in-out' // Fade image slightly on hover
                />
              </Link>
              <div className='z-2 absolute -translate-y-10 flex items-end justify-end'>
                <h1 className='font-bold md:text-2xl text-3xl flex justify-end text-white bg-black bg-opacity-50'>
                  Industrial
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className=' group relative'>
              <Link href={`/sectors/institutional`}>
                <Image
                  src={`/sectors1/Institutional.jpg`}
                  height={400}
                  width={400}
                  alt='project'
                  className='object-cover group-hover:opacity-90 hover:scale-105 transition duration-500 ease-in-out' // Fade image slightly on hover
                />
              </Link>
              <div className='z-2 absolute -translate-y-10 flex items-end justify-end'>
                <h1 className='font-bold md:text-2xl text-3xl flex justify-end text-white bg-black bg-opacity-50'>
                  Institutional
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
