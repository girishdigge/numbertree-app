import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RxSlash } from 'react-icons/rx';
import { IoHomeSharp } from 'react-icons/io5';

import { Slider } from '@/components/sitemap/slider';
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
        <Link href={'/contact/proposal'}>
          <p className='font-bold text-num-indigo'>Career</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Life at Numbertree</p>
      </div>
      <div className='relative '>
        <Image
          src={`/career/career.jpg`}
          width={1920}
          height={768}
          alt='career'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-0 bg-black  text-white'>
          <div className='ml-10'>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight '>
                Career
              </h1>
              <p className=' md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Get in touch with our global experts to discover how Numbertree
                can help you realize your vision. Please choose an option below
                and we will get back to you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex mt-10 flex-col items-center justify-center'>
        <div className='flex mt-0 flex-col items-center justify-center'>
          <div className=' flex w-11/12 mt-2 flex-col items-center justify-center mb-10 '>
            <div>
              <Tabs defaultValue='1' className='w-[full]'>
                <TabsList className='grid md:grid-cols-4 grid-cols-2  md:mb-4 mb-10 gap-2'>
                  <TabsTrigger value='1'>5D BIM</TabsTrigger>
                  <TabsTrigger value='2'>3D BIM</TabsTrigger>
                  <TabsTrigger value='3'>Digital Twin</TabsTrigger>
                  <TabsTrigger value='4'>
                    Digital Project Monitoring
                  </TabsTrigger>
                  {/* <TabsTrigger value='4'>IoT</TabsTrigger> */}
                </TabsList>
                <hr className='border-b-2 border-num-orange' />
                <TabsContent value='1'>
                  <div className='grid md:grid-cols-2 bg-num-blue bg-opacity-10'>
                    <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                      <h1 className='text-sm mb-2'>
                        The Power of Cost Optimization
                      </h1>
                      {/* <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2> */}
                      <p className='text-xl mt-2 mb-4 w-3/4'>
                        BIM 5D model integrates cost data into the digital
                        models, empowering decision makers to make financially
                        accurate decisions throughout the project lifecycle. By
                        linking the 3D models with accurate material quantities,
                        labor costs, and resource allocations, we enable precise
                        cost estimations and cost tracking. Our BIM 5D services
                        facilitate real-time cost analysis, enabling businesses
                        to identify cost-saving opportunities, evaluate
                        alternative design options, and ultimately maximize ROI.
                      </p>
                    </div>
                    <Image
                      src={'/bim/b1.png'}
                      height={600}
                      width={600}
                      alt='img'
                      className='p-4'
                    />
                  </div>
                </TabsContent>
                <TabsContent value='2'>
                  <div className='grid md:grid-cols-2'>
                    <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                      <h1 className='text-sm mb-2'>
                        The Foundation of Exceptional Design
                      </h1>

                      <p className='text-xl mt-2 mb-4 w-3/4'>
                        The BIM model lays the groundwork for exceptional
                        infrastructure design. We employ the latest software and
                        techniques to create highly accurate and detailed 3D
                        models of the project. These models allow stakeholders
                        to visualize and analyse every aspect of the project
                        with remarkable clarity. We ensure that the 3D models
                        are not only visually appealing but also meticulously
                        aligned with the project requirements and
                        industry standards.
                      </p>
                    </div>
                    <Image
                      src={'/bim/b2.png'}
                      height={600}
                      width={600}
                      alt='img'
                    />
                  </div>{' '}
                </TabsContent>
                <TabsContent value='3'>
                  <div className='grid md:grid-cols-2'>
                    <div className='flex flex-col justify-center pl-8 bg-gray-100'></div>
                    <Image
                      src={'/bim/b3.png'}
                      height={600}
                      width={600}
                      alt='img'
                    />
                  </div>
                </TabsContent>
                <TabsContent value='4'>
                  <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                      <h1 className='text-sm mb-2'>
                        Digital Project Monitoring{' '}
                      </h1>

                      <p className='text-xl mt-2 mb-4 w-3/4'>
                        {`Numbertree offers advanced digital project monitoring
                      services to enhance project oversight, efficiency, and
                      transparency. 
                       The scope includes- `}
                        <li>Integrated project management</li>
                        <li> Automated data collection and analysis </li>
                        <li>Real time monitoring and reporting</li>
                        <li>Performance & risk analytics </li>
                        <li>Document Management and Version Control</li>
                        <li>Mobile Applications and Field Data Capture </li>
                        <li>Data Security and Compliance</li>
                        With our digital project monitoring services, clients
                        can benefit from enhanced project visibility, proactive
                        decision-making, and improved collaboration among
                        stakeholders.
                      </p>
                    </div>
                    <Image
                      src={'/bim/b4.png'}
                      height={600}
                      width={600}
                      alt='img'
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <h1 className='text-4xl pt-20 pb-6'>
          Learn more from Numbertree Professionals
        </h1>
        <div className='flex mb-20'>
          <Slider />
        </div>
      </div>
    </div>
  );
};
export default Page;
