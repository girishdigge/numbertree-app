import GetInTouch from '@/components/sitemap/getintouch';
import { Button } from '@/components/ui/button';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

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
      name: 'IIM Kashipur Construction Project',
      location: 'Uttarakhand',
      link: '/projects/iim-kashipur',
      image: '/projects/iim-kashipur.jpg',
    },
    {
      name: ' ITPO Convention Center,Bharat Mandapam.',
      location: 'New Delhi',
      link: '/projects/ITPO',
      image: '/projects/itpo.jpg',
    },
    {
      name: 'Maruti Suzuki Plant India Limited Sonipat',
      location: 'Haryana',
      link: '/projects/maruti-suzuki-sonipat',
      image: '/projects/maruti-suzuki-plant-sonipat.jpeg',
    },
    {
      name: 'Buddha Smriti Stupa & Buddha Sangrahlaya',

      location: 'Bihar',
      link: '/projects/buddha-smriti',
      image: '/projects/Buddha-Smriti-Stupa.png',
    },
    {
      name: 'Indian Institute of Technology Hyderabad',
      location: 'Hyderabad',
      link: '/projects/iit-hyd',
      image: '/projects/iit-hyd.jpg',
    },
    {
      name: 'International Standard Modern Cricket Stadium',
      location: 'Rajgir, Nalanda ,Bihar',
      link: '/projects/sports-academy-bihar',
      image: '/projects/sports-academy-bihar.jpg',
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
        <p className='font-bold text-num-indigo'>Techno-Commercial Audit</p>
      </div>
      <div className='relative '>
        <Image
          src={`/services/TechnoComAudit.jpg`}
          width={2046}
          height={768}
          alt='Techno-com Audit'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-50 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Service
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Techno-commercial Audit
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Steering projects through resilience & profitability, our
                service empowers you to make informed decision with real time
                insights of the project
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
          <h1 className='text-3xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black mb-4'>
            <em>
              Moving infrastructure projects , from complexity to profitability
            </em>
          </h1>
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
              We understand that infrastructure projects are plagued with time &
              cost overrun that threatens to derail a company’s strategic
              vision. We take a systematic and controlled approach to audit,
              with a view to facilitating decision-making and improving
              operating efficiency.
            </p>{' '}
          </div>
          <div className='flex flex-col w-4/5 pr-8   mr-2 m-10 '>
            <hr className='border-2 border-num-orange mb-6' />
            <FaQuoteLeft size={30} className='text-num-orange mb-2 ml-2' />
            <p className='md:text-lg  ml-2 mr-4 mb-2 w-11/12'>
              <em>
                {' '}
                {`Every infrastructure assignment we work on , is an opportunity for us to bring our unique thinking to solve problems, innovate and collaborate with our clients and beyond. We are here to hand hold our clients through various stages of development so that they can focus on important issues.”`}
              </em>
            </p>
            <hr className='border-2 border-num-orange mt-4' />
          </div>
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            We pride ourselves on delivering unparalleled audit solutions. Our
            professionals employ a risk-based approach to audit, with a view to
            help improve performance and operating efficiency.
          </p>
          <br />
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            We help our clients establish and assess internal controls, standard
            operating procedures, and financial processes Our services
            particularly - time & cost overrun focussed audit help reduce client
            risk, improve value and deliver positive outcomes in all sectors of
            the built environment.
          </p>
          <br />
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            We align ourselves around clients’ sectors to provide
            industry-relevant advice and specialized expertise. We create
            custom-made client teams that bring together technical delivery
            experts, strategists and other specialists. We work together to
            achieve viable developments that capture client objectives through
            value-driven and efficient consulting engineering and audit
            services. We manage costs through rigorous change management and
            risk-management processes.
          </p>

          <br />
          <h1 className='  md:w-3/4 w-11/12 md:text-xl font-bold text-xs flex mb-2 '>
            <span className='border-b-2 border-num-orange'>
              From Insights to Actionables
            </span>
          </h1>

          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            In today’s world, we cannot over emphasise the importance of
            insights derived from financial numbers. It helps businesses take
            informed and critical decisions which can transform businesses. Our
            audit-based insights serves as a valuable asset, enabling informed
            decision-making, optimizing operations, enhancing project
            management, streamline processes, mitigating risks and identifying
            opportunities for improvement.
          </p>
          <div className='w-4/5 '>
            {/* <div className='flex flex-col p-8   m-4 mr-2 mb-20 '>
              <hr className='border-2 border-num-orange mb-6' />
              <FaQuoteLeft size={30} className='text-num-orange mb-2' />
              <p className='md:text-lg  ml-2 mr-4 mb-2 w-11/12'>
                <em>
                  {' '}
                  {`Every infrastructure assignment we work on , is an opportunity for us to bring our unique thinking to solve problems, innovate and collaborate with our clients and beyond. We are here to hand hold our clients through various stages of development so that they can focus on important issues.”`}
                </em>
              </p>
              <hr className='border-2 border-num-orange mt-4' />
            </div> */}
          </div>
        </div>

        <div className='hidden w-1/4 md:flex flex-col justify-between '>
          <GetInTouch />
        </div>
      </div>
      <div className='flex flex-row text-justify pr-8 ml-8 mt-20'>
        <div className='w-1/4'></div>
        <div className='flex flex-col w-3/5  mr-14'>
          <div>
            <h2 className='text-3xl font-bold  mb-4'>
              Techno-commercial Audit
            </h2>
            <hr className='border-b-2  border-num-orange' />
          </div>
          <p className='md:text-2xl text-xs mt-4 mb-0 flex '>
            We are india’s foremost techno commercial audit firm with close to
            two decades years of experience across varied industries. This
            specialized audit examines both the technical and commercial aspects
            of infrastructure ventures, providing a comprehensive evaluation of
            their feasibility, efficiency, and financial viability.{' '}
          </p>{' '}
          <br />
          <p className='md:text-lg text-xs mt-4 mb-0 flex '>
            Our dedicated team of engineers & auditors work collaboratively to
            present a meticulous analysis of project plans, contracts, cost
            estimates, procurement processes, and financial controls. We are
            well equipped to use our processes and identify potential risks,
            cost-saving opportunities, and areas for improvement.{' '}
          </p>{' '}
          <br />
          <p className='md:text-lg text-xs flex mb-0'>
            With our multidimensional approach, this audit serves as a valuable
            tool for project managers and top management in navigating the
            complex landscape of infrastructure development, ensuring
            transparency, accountability, and successful project delivery. The
            scope of audit extends to capturing financial fraud and addressing
            project mismanagement in the construction and infrastructure
            industry. By leveraging on audit findings , businesses can{' '}
          </p>{' '}
          <br />
          <p className='md:text-lg text-xs flex mb-0'>
            proactively detect anomalies and irregularities that may indicate
            fraudulent activities or project mismanagement.
          </p>{' '}
          <br />
          <p className='md:text-lg text-xs flex mb-0'>
            Our audits enable early intervention and corrective actions,
            safeguarding financial resources and ensuring project success. It
            empowers businesses to maintain transparency, accountability, and
            integrity, fostering trust among stakeholders.
          </p>{' '}
          <br />
          <p className='md:text-lg text-xs flex mb-0'>
            With a team of experienced engineers and auditors, we conduct
            thorough assessments that evaluate the technical and commercial
            feasibility of your infrastructure plans.
          </p>{' '}
          <br />
          <p className='md:text-lg text-xs flex mb-0'>
            We meticulously assess critical factors such as Men, Machine,
            Material, Methods, and Money at the project level.
          </p>{' '}
          <br />
          <p className='md:text-lg text-xs flex mb-0'>
            We provide detailed breakdowns of our service activities, which are
            categorized into pre-construction, early stage of construction,
            significant construction, and project closure. Our services cater to
            the entire project lifecycle, spanning from the conceptual proposal
            stage to active construction, substantial completion, and even after
            closeout.
          </p>{' '}
          <br />
          <p className='md:text-lg text-xs flex mb-0'>
            Committed to providing valuable insights, we strive to empower you
            to make informed decisions and enhance your project outcomes. Let
            our expert team and comprehensive services elevate your
            infrastructure projects to the next level and help you achieve your
            goals. We also identify and assess the risks of material
            misstatement, with an emphasis on accounts that have a high
            probability of containing errors.
          </p>{' '}
          <br />
          <h1 className='  md:w-3/4 w-11/12 md:text-xl font-bold text-xs flex mb-2 '>
            Some of the specialized Techno commercial audits that we provide
            are:
          </h1>
          <li>Techno Commercial Internal Audit</li>
          <li>Project Concurrent Audit</li>
          <li>Project Closure Audit</li>
          <li>Functional Audits/P2P Audits/Process Audits</li>
          <li>Revenue Assurance Audit of Toll Plaza</li>
          <li>Energy Audit- Renewables</li>
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
                          <h3 className=' text-xl font-bold '>
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
        <Link href={`/sectors`}>
          <h2 className=' md:text-xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
            Explore More
          </h2>
        </Link>
      </div>
      <div className='md:grid md:grid-cols-2 gap-1 '>
        <div className='flex overflow-hidden pb-4'>
          <div className=' group relative hover:scale-110 transform transition duration-500 ease-in-out overflow:hidden'>
            <Image
              src={`/sectors/Aviation2.jpg`}
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

        <div className='grid grid-cols-2 gap-2 pb-4 align-center ml-1 '>
          <div className='flex overflow-hidden'>
            <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
              <Image
                src={`/sectors/OilGas2.jpg`}
                height={400}
                width={400}
                alt='project'
                className=' object-contain group-hover:opacity-90 ' // Fade image slightly on hover
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
                src={`/sectors/Commercial2.jpg`}
                height={400}
                width={400}
                alt='project'
                className='object-contain group-hover:opacity-90 ' // Fade image slightly on hover
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
                src={`/sectors/Industrial2.jpg`}
                height={400}
                width={400}
                alt='project'
                className='object-contain group-hover:opacity-90 ' // Fade image slightly on hover
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
                src={`/sectors/Institutional2.jpg`}
                height={400}
                width={400}
                alt='project'
                className='object-contain group-hover:opacity-90 ' // Fade image slightly on hover
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
