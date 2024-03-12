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
        <p className='font-bold text-num-indigo'>Quantity Survey</p>
      </div>
      <div className='relative '>
        <Image
          src={`/services/QuantitySurvey2.jpg`}
          width={2046}
          height={768}
          alt='Quantity Survey'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-50 bg-black  text-white'>
          <div className='ml-10'>
            <h2 className='md:text-2xl font-light text-sm ml-4 mb-2'>
              EXPLORE
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex '>
                Quantity Survey
              </h1>
              <p className='md:text-xl text-xs font-medium ml-4 md:mb-2'>
                We provide cost management services on a wide range of
                construction projects across sectors in infrastructure.
              </p>
            </div>
            <Button className='w-40 ml-4  bg-num-indigo text-white mt-2 hover:bg-wilmer-orange hover:text-white'>
              Contact Us
            </Button>
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
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Claim Management
                </Button>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Contract Administration
                </Button>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Project Monitoring & Control
                </Button>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  {' '}
                  Techno Commercial Audit
                </Button>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Transaction Advisory
                </Button>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  {' '}
                  Techno Commercial Audit
                </Button>
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
                  Techno Commercial Audit
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
        <div className='md:w-1/2 flex flex-col items-center  text-justify'>
          <h1 className='text-3xl flex justify-center font-normal md:w-3/4 w-11/12 text-black mb-4'>
            In the infrastructure industry, precise and comprehensive
            quantification of materials, labour, and resources is crucial for
            successful project planning and budgeting.
          </h1>
          <br />
          <h1 className='text-3xl flex justify-center font-normal md:w-3/4 w-11/12 text-black mb-4'>
            Quantity surveying plays a vital role in ensuring accurate cost
            estimation and effective resource allocation.
          </h1>
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              At NumberTree, quantity survey is our forte and we have completed
              more than 100 projects spanning the last decade. NumberTree
              provides cost management and quantity surveying (QS) services on a
              vast range of construction projects.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs '>
              From accurately estimating costs for construction to providing
              precise quantity calculations for engineering projects, we deliver
              comprehensive solutions tailored to each {`project's`} unique
              requirements.
            </p>{' '}
          </div>
          <br />
          <div className='w-4/5 '>
            <div className='flex flex-col pl-2 pt-2 bg-wilmer-orange  m-4 mr-2 text-white '>
              <FaQuoteLeft size={18} className='text-white ' />
              <p className='text-lg font-medium ml-6 mr-4 mb-2 w-11/12'>
                {`We offer seamless and integrated service, from inception
                  through to completion and handover, we are the right hand of
                  project managers. We listen to our clients needs and strive
                  to provide them the best service."`}
              </p>
            </div>
          </div>
          <h2 className='text-2xl md:w-3/4 w-11/12 flex  justify-center font-semibold text-black mb-4'>
            Our portfolio of offerings ranges from pre-contract and
            post-contract Quantity Surveying to the complete set of cost
            management services.
          </h2>
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              We employ industry-standard measurement methods and advanced
              software tools to provide invaluable insights into the quantities
              of materials needed, the labour required, and the resources
              necessary for construction projects.
            </p>{' '}
            <br />
          </div>
          <h2 className='text-2xl md:w-3/4 w-11/12 flex  justify-center font-semibold text-black mb-4'>
            Our comprehensive range of quantity take off services include
          </h2>
          <div className='flex flex-col w-2/3 mr-10'>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Cost Overrun Investigation`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Cost Consultancy Services/BOQ 	`}
              </span>
            </p>
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`CTC & Budget preparation,BBS`}
              </span>
            </p>
            {/* <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`BBS`}
              </span>
            </p> */}
            <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Preparation,Site Survey & Remeasurement of work`}
              </span>
            </p>
            {/* <p>
              <span className='flex items-center'>
                <FaArrowRight size={16} className='mr-1' />
                {`Site Survey & Remeasurement of work`}
              </span>
            </p> */}
          </div>
          <br />
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
        <div className='flex ml-4 mt-20 mb-2'>
          <h2 className='  text-2xl text-black font-medium'>
            Related Projects
          </h2>
        </div>
        <div className='flex md:flex-row flex-col gap-2 mb-4'>
          <div className='overflow-hidden'>
            <div className=' group relative overflow-hidden hover:scale-110 transform transition duration-500 ease-in-out overflow:hidden'>
              <Link href={`/projects/MumbaiDelhiExpressway`}>
                <Image
                  src={`/projects/mumbaiDelhiExpressway.jpg`}
                  height={400}
                  width={600}
                  alt='project'
                  className='group-hover:opacity-90 hover:scale-110 transition duration-500 ease-in-out' // Fade image slightly on hover
                />
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h2 className='font-bold  md:text-2xl'>
                        Mumbai Delhi Expressway
                      </h2>
                      <h1 className='text-num-orange pb-2 ml-1'>
                        Mumbai-Delhi
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='overflow-hidden'>
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Link href={`/projects/new-parliment`}>
                <Image
                  src={`/projects/newParliment.jpg`}
                  height={400}
                  width={600}
                  alt='project'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h2 className='font-bold  md:text-2xl'>New Parliment</h2>
                      <h1 className='text-num-orange pb-2 ml-1'>Delhi</h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='overflow-hidden'>
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Link href={`/projects/merc-pune`}>
                <Image
                  src={`/projects/merc.jpg`}
                  height={400}
                  width={600}
                  alt='project'
                  className='object-cover group-hover:opacity-90' // Fade image slightly on hover
                />
                <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                  <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                    <div className='ml-8'>
                      <h2 className='font-bold  md:text-2xl'>Mercedes Benz</h2>
                      <h1 className='text-num-orange pb-2 ml-1'>Pune</h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex  mt-20'>
        <h2 className=' md:text-2xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-4 mb-2'>
          Explore More
        </h2>
      </div>
      <div className='md:grid md:grid-cols-2 gap-1'>
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
            <div className='z-2 absolute inset-0 flex flex-col justify-end mb-5'>
              <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                <div className='ml-8'>
                  <h1 className='text-num-orange ml-1'>Sector</h1>
                  <h2 className='font-bold pb-2 md:text-2xl'>Aviation</h2>
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
              <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                  <div className='ml-8'>
                    <h1 className='text-num-orange ml-1'>Sector</h1>
                    <h2 className='font-bold pb-2  md:text-2xl'>
                      Bridges Structures
                    </h2>
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
              <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                  <div className='ml-8'>
                    <h1 className='text-num-orange ml-1'>Sector</h1>
                    <h2 className='font-bold pb-2  md:text-2xl'>Commercial</h2>
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
              <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                  <div className='ml-8'>
                    <h1 className='text-num-orange ml-1'>Sector</h1>
                    <h2 className='font-bold pb-2  md:text-2xl'>Industrial</h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
