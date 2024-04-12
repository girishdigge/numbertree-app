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
import ServiceMobileLinks from '@/components/sitemap/serviceMobileLinks';
import ServiceLinks from '@/components/sitemap/serviceLinks';

const Page = () => {
  const projects = [
    {
      id: 10,
      name: 'LEH airport Construction of terminal building',
      services: ['1'],
      sectors: ['3'],
      locations: ['35'],
      types: ['1'],
      location: 'leh',
      link: '/projects/leh-airport',
      image: '/projects/leh.jpg',
    },
    {
      name: 'IIM Kashipur Construction Project',
      location: 'Uttarakhand',
      link: '/projects/iim-kashipur',
      image: '/featuredProjects/iim-kashipur.jpg',
    },
    {
      name: ' ITPO Convention Center,Bharat Mandapam.',
      location: 'Delhi',
      link: '/projects/ITPO',
      image: '/projects/itpo.jpg',
    },
    {
      name: 'Maruti Suzuki Plant India Limited Sonipat',
      location: 'Haryana',
      link: '/projects/maruti-suzuki-sonipat',
      image: '/projects/maruti-suzuki-plant-sonipat.jpeg',
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
        <Link href={`/services`}>
          <p className='font-bold text-num-indigo'>Services</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Transaction Advisory </p>
      </div>
      <div className='relative '>
        <Image
          src={`/services/TransactionAdvisory.jpg`}
          width={2046}
          height={768}
          alt='Transaction Advisory  '
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-50 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Service
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Transaction Advisory
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                We provide expert advisory services
              </p>
            </div>
            <Link href={`/services`} className=''>
              <Button className='md:w-40 ml-4  bg-num-orange text-white mt-2 hover:bg-num-indigo hover:text-white animate-fadeInUp'>
                All services
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
        <ServiceMobileLinks />
      </div>
      <div className='flex flex-row'>
        <ServiceLinks />
        <div className=' flex flex-col items-center  text-justify'>
          {/* <h1 className='text-3xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black mb-4'>
            <em>Adding value beyond what is expected </em>
          </h1> */}
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
              {` We offer expert advisory services such as Debt Intermediation, M&A, SME IPO, Infrastructure advisory, Project Consultancy and Structured Finance.`}
            </p>{' '}
            <br />
          </div>
          {/* <div className='flex flex-col w-4/5 pr-8   mr-2 m-10 '>
            <hr className='border-2 border-num-orange mb-6' />
            <FaQuoteLeft size={30} className='text-num-orange mb-2 ml-2' />
            <p className='md:text-lg  ml-2 mr-4 mb-2 w-11/12'>
              <em>
                {' '}
                {`Every infrastructure assignment we work on , is an opportunity for us to bring our unique thinking to solve problems, innovate and collaborate with our clients and beyond. We are here to hand hold our clients through various stages of development so that they can focus on important issues.”`}
              </em>
            </p>
            <hr className='border-2 border-num-orange mt-4' />
          </div> */}
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            We pride ourselves on providing high-quality advisory services to
            our clients. With a focus on debt intermediation, M&A, SME IPO,
            infrastructure advisory, project consultancy, and structured
            finance, we bring a wealth of expertise and experience to the table.
          </p>
          <br />

          <br />
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {` At our company, we are committed to a partner-led service approach, which ensures that our clients receive personalized attention and the best possible outcome for their business needs. Our team of experts is highly respected for their ability to initiate, structure, and project manage both unquoted and quoted company transactions.`}
          </p>
          <br />

          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {`We have a competitive advantage in serving infrastructure sector clients, thanks to our extensive network of relationships with bankers, institutional investors, and corporate entities both in India and abroad. Additionally, we offer advisory services to several corporations across a wide spectrum of industries, backed by diligent research and value-added analysis processes for debt, equity, and convertible markets. Our senior management team comprises former bankers and fund experts with experience at many PSU, private, and MNC banks and leading fund houses. They are supported by an advisory panel of senior bankers and industry professionals from diverse industry clusters who provide insightful analysis and advice.`}
          </p>
          <br />
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {`Our value-added solutions come in various financial options. We understand the risks and stress associated with financial decisions. We provide business experience and act as a sounding board for ideas, ensuring our clients make informed decisions.`}
          </p>
          <br />
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {`Our track record speaks for itself, as we have prepared professional business plans, performed objective valuations, advised on the allocation of purchase amount or sale proceeds, negotiated deals, liaised with legal advisors, and completed financial verification/due diligence work for numerous clients.`}
          </p>
          <br />
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {`When it comes to debt syndication, we cover the entire process of hand-holding for fund raising through fund-based as well as non-fund based bank/institutional borrowings. We advise clients on the optimal capital structure depending on their cash flows, growth prospects, industry-specific issues, and nature of assets. `}
          </p>
          <br />
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {`As a close-knit team with a rich variety of skills, experiences, and perspectives, we recognize that our diversity is a vital strategic advantage. We actively seek to build on it by attracting talented individuals from a wide range of cultural, geographic, and educational backgrounds. `}
          </p>
          <br />
        </div>

        <div className='hidden w-1/4 md:flex flex-col justify-between '>
          <GetInTouch />
        </div>
      </div>
      {/* <div className='flex flex-row text-justify pr-8 ml-8 mt-20'>
        <div className='w-1/4'></div>
        <div className='flex flex-col w-3/5  mr-14'>
          <div>
            <h2 className='text-3xl font-bold  mb-4'>ERP & SOP Integration</h2>
            <hr className='border-b-2  border-num-orange' />
          </div>
          <p className='md:text-2xl text-xs mt-4 mb-0 flex '>
            We offer specialized ERP and SOP implementation services tailored
            for infrastructure projects. We empower clients to effectively
            manage and optimize their project operations, ensuring seamless
            coordination, improved efficiency, and regulatory compliance. Our
            service entails:
          </p>{' '}
          <br />
          <div className='text-lg'>
            <li>ERP Selection and Customization</li>
            <li>SOP Development and Implementation</li>
            <li>Data Managementand Integration</li>
            <li>Project Performance Monitoring and Reporting</li>
            <li>Change Management and User Training</li>
            <li>Compliance and Audit Readiness</li>
          </div>
          <p className='md:text-lg text-xs mt-4 mb-0 flex '>
            Our technical expertise, coupled with industry-specific knowledge,
            enables us to deliver solutions that streamline operations, optimize
            resource utilization, and drive the success of
            infrastructure projects.
          </p>{' '}
          <br />
        </div>
        <div className='md:inline relative hidden mt-20 w-2/5'>
          <div className='  border-2 font-xl  border-wilmer-orange mt-20 p-10   text-wilmer-orange '>
            <p className='text-xl font-medium  mb-2 '>
              <em>
                {' '}
                {`Our Techno-Commercial Audit, has earned the trust of industry leaders seeking transformation and growth.With a wealth of experience spanning close to two decades, we specialize in providing expert audits that drive optimal results for infrastructure projects`}
              </em>
            </p>
            <div className='flex justify-end '>
              <FaQuoteLeft size={40} className='text-wilmer-orange ' />
            </div>
          </div>
        </div> 
        <div className='w-1/4'></div>
      </div> */}
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
        <h2 className=' md:text-xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
          Explore More
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
              <div className='z-2 absolute inset-0 flex flex-col justify-end mb-0'>
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
                src={`/sectors/Industrial1.jpg`}
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
