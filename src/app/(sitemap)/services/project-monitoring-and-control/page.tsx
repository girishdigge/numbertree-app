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
      heading: "Empowering Tomorrow's infrastructure",
      name: 'New Parliment',
      location: 'Delhi',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/newParliment1.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      name: 'Guwahati Airport',
      location: 'Guwahati',

      content:
        'Quantity surveying plays a vital role in ensuring accurate cost estimation and effective resource allocation.',
      link: '/quantity-survey',
      image: '/projects/GuwahatiAirport.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      name: 'Mercedes Benz',
      location: 'Pune',

      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/merc.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      name: 'Leh Airport',
      location: 'Leh',

      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/leh.jpg', // replace with the actual image path
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
        <p className='font-bold text-num-indigo'>
          Project Management Consultancy{' '}
        </p>
      </div>
      <div className='relative '>
        <Image
          src={`/services/ProjectMonCon.jpg`}
          width={2046}
          height={768}
          alt='Project Management Consultancy '
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center bg-opacity-50 bg-black text-white'>
          <div className='ml-10'>
            <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Service
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Project Management Consultancy
              </h1>
              <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                We improve efficiency, reduce costs and time, and maximize value
                by managing the supply chain, making timely decisions, and
                operating in a proactive manner.
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
        <ServiceMobileLinks />
      </div>
      <div className='flex flex-row'>
        <ServiceLinks />
        <div className=' flex flex-col items-center  text-justify'>
          <h1 className='text-3xl flex justify-center gap-y-2 font-normal md:w-3/4 w-11/12 text-black mb-4'>
            <em>Adding value beyond what is expected </em>
          </h1>
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
              {` We provide world-class project management services, helping our
              clients achieve their goals with precision, speed, and efficiency.
              We ensure that our clients' projects are delivered on-time and
              within budget, managing every aspect of construction delivery from
              pre-construction to post-construction. We specialize in managing
              sustainable infrastructure projects and meeting the most
              challenging deadlines, delivering predictable cost, schedule, and
              quality`}
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
            At NumberTree, we offer three typical stages of Project Management
            services: Pre-Construction Management, Construction Management, and
            Post-Construction Management.
          </p>
          <br />
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {`During the Pre-Construction Management stage, we take ownership of the entire project and chalk out a roadmap for our customers. We improve efficiency, reduce costs and time, and maximize value by managing the supply chain, making timely decisions, and operating in a proactive and robust environment.`}
          </p>

          <br />
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {` Our Construction Management strategy involves overseeing the general
            contractor's supervision team at the site, monitoring their
            established processes, and doing periodic quality checks. During the
            final design, we conduct constructability and cost-saving reviews,
            make necessary design changes, and ensure environmental compliance.
            We ensure that the project is handed over to the client in a
            controlled and disciplined manner during the Post-Construction Management stage. We coordinate the handover of all documents, including as-built drawings and approved O&M manuals by the contractors/vendors.`}
          </p>
          <br />
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {`Regardless of the scale or complexity of a project, we employ and refine our systems and processes to provide control, governance and transparency from inception to completion. In every decision we make, we challenge and work diligently to find the most efficient and cost-effective outcome. As an agile, focused and flexible partner we adopt a value-driven strategy to define and articulate project objectives, before identifying the most effective means to deliver. Over the last few years our programme management expertise has helped clients to improve performance, drive organisational change and realise efficiencies.We are adept at helping our clients navigate through ambiguity – managing multiple workstreams, interdependencies, and driving and configuring complex programmes from integrated projects.`}
          </p>
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {`Our Procurement Assistance service creates top-to-bottom consistency throughout the entire logistics, delivery, and installation process, and our Value Engineering service achieves the optimum balance between function, performance, quality, safety, and cost. Our QS and Cost Management service helps deliver projects that meet all the functional and operational requirements of our clients within their budgets. We rely on flexible techniques that can be adapted to changing demands, managing the entire life cycle of the project from initiation to  occupancy.`}
          </p>
          <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex mb-0'>
            {`We manage the sustainable infrastructure projects to meet the most challenging deadlines, delivering predictable cost, schedule, and quality.`}
          </p>
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
