'use client';

import GetInTouch from '@/components/sitemap/getintouch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/sitemap/blog-card';
import { ExploreArticles } from '@/data/Insights';
import ServiceLinks from '@/components/sitemap/serviceLinks';
import ServiceMobileLinks from '@/components/sitemap/serviceMobileLinks';
const Page = () => {
  return (
    <div>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />

        <p className='font-bold text-num-indigo'>BIM</p>

        {/* <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Techno Commercial Audit</p> */}
      </div>
      <div className='relative text-white z-1'>
        <video
          autoPlay
          muted
          loop
          src={'carousel/bim_1.mp4'}
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-50 bg-black  text-white'>
          <div className='ml-10'>
            <h2 className='hidden md:flex md:text-lg font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              EXPLORE
            </h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Building Information Modelling
              </h1>
              <p className='md:text-xl text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                We push BIM harder, enhancing collaboration, creativity and
                knowledge sharing on every project
              </p>
            </div>
            <Button className='w-40 ml-4  bg-num-indigo text-white mt-2 hover:bg-wilmer-orange hover:text-white animate-fadeInUp'>
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <br />
      <div className='md:hidden flex flex-col items-center justify-center'>
        <ServiceMobileLinks />
      </div>
      <div className='flex flex-row'>
        <ServiceLinks />
        <div className='flex flex-row justify-center text-justify'>
          <div className='md:w-3/4 w-11/12 flex flex-col justify-center text-justify'>
            {/* <h1 className='font-medium text-3xl mt-2 mb-1'>
              3D/4D/5D BIM services
            </h1> */}
            <Image
              src={`/logo/bim.png`}
              height={100}
              width={200}
              alt='bim'
              className='mb-2'
            />
            <p className='text-xl mt-2 '>
              {` At Numbertree, we take pride in offering cutting-edge Building Information Modeling (BIM) services to our clients. Our team of highly skilled professionals combines industry expertise with advanced technological tools to deliver comprehensive BIM solutions. With our BIM 3D/4D/5D services, we bring a new era of efficiency, collaboration, and cost-effectiveness to infrastructure projects..`}
            </p>
            <br />
            <h2 className='font-medium text-3xl mt-2 mb-1'>
              BIM 3D Services: The Foundation of Exceptional Design
            </h2>

            <p className='text-xl mt-2 '>{`Our BIM 3D services lay the groundwork for exceptional infrastructure design. We employ the latest software and techniques to create highly accurate and detailed 3D models of the project. These models serve as a virtual representation of the physical structure, allowing stakeholders to visualize and analyse every aspect with remarkable clarity. Our team ensures that the 3D models are not only visually appealing but also meticulously aligned with the project requirements and industry standards`}</p>
            <br />
            <h2 className='font-medium text-3xl mt-2 mb-1'>
              BIM 4D Services: Adding the Dimension of Time
            </h2>
            <p className='text-xl mt-2 '>{` With our BIM 4D services, we transcend traditional design boundaries and incorporate the element of time into the infrastructure projects. By linking the 3D models with project schedules and timelines, we create dynamic visualizations that showcase the construction process in a time-based sequence. This enables stakeholders to gain valuable insights into project phasing, identify potential clashes, optimize construction sequences, and make informed decisions to enhance project efficiency and reduce delays.`}</p>
            <br />
            {/* <h2 className='font-medium text-3xl mt-2 mb-1'>
              BIM 5D Services: The Power of Cost Optimization
            </h2>

            <p className='text-xl mt-2 '>{`Taking BIM, a step further, our BIM 5D services integrate cost data into the digital models, empowering you to make financially sound decisions throughout the project lifecycle. By linking the 3D models with accurate material quantities, labor costs, and resource allocations, we enable precise cost estimations and cost tracking. Our BIM 5D services facilitate real-time cost analysis, enabling you to identify cost-saving opportunities, evaluate alternative design options, and ultimately maximize your return on investment.`}</p>
            <br />
            <h1 className='font-medium text-3xl mt-2 '>BIM showcase</h1>
            <p className='mb-8  text-xl '>
              These four recent projects demonstrate how Numbertree pushes BIM
              to achieve a wider range of client goals:
            </p> */}
          </div>
        </div>

        <div className='hidden w-1/4 md:flex '>
          <GetInTouch />
        </div>
      </div>

      <div className='w-full flex flex-col items-center'>
        <div className='w-11/12 mt-2 mb-10'>
          <Tabs defaultValue='1' className='w-full'>
            {/* Tabs */}
            <TabsList
              className='
          w-full
          grid grid-cols-2 md:grid-cols-4
          gap-2
          h-auto
          bg-transparent
          p-0
          mb-6
        '
            >
              <TabsTrigger
                value='1'
                className='py-3 px-3 text-sm md:text-base whitespace-normal'
              >
                5D BIM
              </TabsTrigger>

              <TabsTrigger
                value='2'
                className='py-3 px-3 text-sm md:text-base whitespace-normal'
              >
                3D BIM
              </TabsTrigger>

              <TabsTrigger
                value='3'
                className='py-3 px-3 text-sm md:text-base whitespace-normal'
              >
                Digital Twin
              </TabsTrigger>

              <TabsTrigger
                value='4'
                className='py-3 px-3 text-sm md:text-base whitespace-normal'
              >
                Digital Project Monitoring
              </TabsTrigger>
            </TabsList>

            <hr className='border-0 border-t-2 border-num-orange mb-6' />

            {/* ==================== 5D BIM ==================== */}
            <TabsContent value='1' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-[42%_58%] bg-gray-100 overflow-hidden'>
                {/* Text */}
                <div className='flex flex-col justify-center p-6 md:p-8'>
                  <h1 className='text-2xl md:text-3xl font-medium mb-3'>
                    The Power of Cost Optimization
                  </h1>

                  <p className='text-base md:text-lg leading-relaxed'>
                    BIM 5D model integrates cost data into the digital models,
                    empowering decision makers to make financially accurate
                    decisions throughout the project lifecycle. By linking the
                    3D models with accurate material quantities, labor costs,
                    and resource allocations, we enable precise cost estimations
                    and cost tracking. Our BIM 5D services facilitate real-time
                    cost analysis, enabling businesses to identify cost-saving
                    opportunities, evaluate alternative design options, and
                    ultimately maximize ROI.
                  </p>
                </div>

                {/* Image */}
                <div className='relative w-full aspect-[4/3] md:aspect-auto md:min-h-[520px]'>
                  <Image
                    src='/bim/b1.jpg'
                    alt='5D BIM'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 58vw'
                  />
                </div>
              </div>
            </TabsContent>

            {/* ==================== 3D BIM ==================== */}
            <TabsContent value='2' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-[42%_58%] bg-gray-100 overflow-hidden'>
                {/* Text */}
                <div className='flex flex-col justify-center p-6 md:p-8'>
                  <h1 className='text-2xl md:text-3xl font-medium mb-3'>
                    The Foundation of Exceptional Design
                  </h1>

                  <p className='text-base md:text-lg leading-relaxed'>
                    The BIM model lays the groundwork for exceptional
                    infrastructure design. We employ the latest software and
                    techniques to create highly accurate and detailed 3D models
                    of the project. These models allow stakeholders to visualize
                    and analyse every aspect of the project with remarkable
                    clarity. We ensure that the 3D models are not only visually
                    appealing but also meticulously aligned with the project
                    requirements and industry standards.
                  </p>
                </div>

                {/* Image */}
                <div className='relative w-full aspect-[4/3] md:aspect-auto md:min-h-[520px]'>
                  <Image
                    src='/bim/b2.jpg'
                    alt='3D BIM'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 58vw'
                  />
                </div>
              </div>
            </TabsContent>

            {/* ==================== DIGITAL TWIN ==================== */}
            <TabsContent value='3' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-[42%_58%] bg-gray-100 overflow-hidden'>
                {/* Text */}
                <div className='flex flex-col justify-center p-6 md:p-8'>
                  <h1 className='text-2xl md:text-3xl font-medium mb-3'>
                    Digital Twin
                  </h1>

                  <p className='text-base md:text-lg leading-relaxed'>
                    A digital twin is a virtual representation of physical
                    assets, systems, or processes, leveraging real-time data and
                    advanced analytics to mirror their behaviour and performance
                    accurately. By creating a digital replica of assets such as
                    buildings, bridges, or roads, stakeholders gain
                    unprecedented insights into their operations and condition,
                    enabling proactive decision-making and optimization of
                    resources. In infrastructure projects, digital twins
                    facilitate detailed planning and simulation of construction
                    processes, allowing project teams to identify potential
                    issues, optimize workflows, and improve safety measures
                    before commencing work on-site. This proactive approach
                    helps mitigate risks, reduce project delays, and enhance
                    overall project outcomes. Digital twins also enable
                    predictive maintenance, allowing infrastructure managers to
                    anticipate equipment failures, optimize maintenance
                    schedules, and extend the lifespan of assets.
                  </p>
                </div>

                {/* Image */}
                <div className='relative w-full aspect-[4/3] md:aspect-auto md:min-h-[520px]'>
                  <Image
                    src='/bim/b3.jpg'
                    alt='Digital Twin'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 58vw'
                  />
                </div>
              </div>
            </TabsContent>

            {/* ==================== DIGITAL PROJECT MONITORING ==================== */}
            <TabsContent value='4' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-[42%_58%] bg-gray-100 overflow-hidden'>
                {/* Text */}
                <div className='flex flex-col justify-center p-6 md:p-8'>
                  <h1 className='text-2xl md:text-3xl font-medium mb-3'>
                    Digital Project Monitoring
                  </h1>

                  <p className='text-base md:text-lg leading-relaxed mb-4'>
                    Numbertree offers advanced digital project monitoring
                    services to enhance project oversight, efficiency, and
                    transparency.
                  </p>

                  <ul className='list-disc pl-6 space-y-2 text-base md:text-lg'>
                    <li>Integrated project management</li>
                    <li>Automated data collection and analysis</li>
                    <li>Real-time monitoring and reporting</li>
                    <li>Performance & risk analytics</li>
                    <li>Document Management and Version Control</li>
                    <li>Mobile Applications and Field Data Capture</li>
                    <li>Data Security and Compliance</li>
                  </ul>

                  <p className='text-base md:text-lg leading-relaxed mt-4'>
                    With our digital project monitoring services, clients can
                    benefit from enhanced project visibility, proactive
                    decision-making, and improved collaboration among
                    stakeholders.
                  </p>
                </div>

                {/* Image */}
                <div className='relative w-full aspect-[4/3] md:aspect-auto md:min-h-[520px]'>
                  <Image
                    src='/bim/b4.jpg'
                    alt='Digital Project Monitoring'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 58vw'
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className='w-11/12 mt-2 mb-10'>
          <Tabs defaultValue='1' className='w-full'>
            {/* ========================================================= */}
            {/* PROJECT 1 */}
            {/* ========================================================= */}
            <TabsContent value='1' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-[42%_58%] bg-gray-100 overflow-hidden'>
                {/* Content */}
                <div className='flex flex-col justify-center p-6 md:p-8'>
                  <span className='text-sm font-medium mb-2'>SAUDI ARABIA</span>

                  <h2 className='text-2xl md:text-3xl font-medium mb-4'>
                    Red Sea International Airport Project
                  </h2>

                  <p className='text-base md:text-lg leading-relaxed mb-4'>
                    The Red Sea International Airport received its first flight
                    last year. The airport serves as a gateway to the Red Sea
                    Resort — a dedicated luxury regenerative tourism destination
                    being developed in Saudi Arabia.
                  </p>

                  <p className='text-base md:text-lg leading-relaxed'>
                    {`As part of Vision 2030 initiative, Saudi Arabia is
                    developing several exciting tourist destinations. The
                    development of the tourism industry is being done as part of
                    a strategic roadmap to develop the country's non-oil
                    economy.`}
                  </p>
                </div>

                {/* Image */}
                <div className='relative w-full aspect-[16/10] md:aspect-auto md:min-h-[520px]'>
                  <Image
                    src='/bim/Red-Sea.jpg'
                    alt='Red Sea International Airport'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 58vw'
                  />
                </div>
              </div>
            </TabsContent>

            {/* ========================================================= */}
            {/* PROJECT 2 */}
            {/* ========================================================= */}
            <TabsContent value='2' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-[42%_58%] bg-gray-100 overflow-hidden'>
                {/* Content */}
                <div className='flex flex-col justify-center p-6 md:p-8'>
                  <span className='text-sm font-medium mb-2'>UAE</span>

                  <h2 className='text-2xl md:text-3xl font-medium mb-4'>
                    The Etihad Rail Stage-2 Project
                  </h2>

                  <p className='text-base md:text-lg leading-relaxed'>
                    Core services included developing BIM models (LOD 500) for
                    Civil, Structural and MEP disciplines. Etihad Rail is being
                    developed in line with the Abu Dhabi Economic Vision 2030
                    and the UAE Vision 2021, contributing to economic
                    diversification through strategic initiatives designed to
                    strengthen socio-economic growth.
                  </p>
                </div>

                {/* Image */}
                <div className='relative w-full aspect-[16/10] md:aspect-auto md:min-h-[520px]'>
                  <Image
                    src='/bim/etihad.jpg'
                    alt='Etihad Rail Stage 2 Project'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 58vw'
                  />
                </div>
              </div>
            </TabsContent>

            {/* ========================================================= */}
            {/* PROJECT 3 */}
            {/* ========================================================= */}
            <TabsContent value='3' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-[42%_58%] bg-gray-100 overflow-hidden'>
                {/* Content */}
                <div className='flex flex-col justify-center p-6 md:p-8'>
                  <h2 className='text-2xl md:text-3xl font-medium mb-4'>
                    Sea & World Entertainment Park
                  </h2>

                  <p className='text-base md:text-lg leading-relaxed'>
                    The project involved the development of Shurayrah Island,
                    which is composed of 13 luxury resorts located on an
                    untouched island in the Red Sea area. The Shurayrah Island
                    master plan also included Shurayrah Central Hotel 3.
                  </p>

                  <p className='text-base md:text-lg leading-relaxed mt-4'>
                    Our services included BIM LOD 350–500, MEP services
                    integration, MEP services modelling and coordination, sheet
                    production of hotel PODs, BIM clash detection, BOQs from BIM
                    models, as-built model development and visualization.
                  </p>
                </div>

                {/* Image */}
                <div className='relative w-full aspect-[16/10] md:aspect-auto md:min-h-[520px]'>
                  <Image
                    src='/bim/seaWorld.jpg'
                    alt='Sea and World Entertainment Park'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 58vw'
                  />
                </div>
              </div>
            </TabsContent>

            {/* ========================================================= */}
            {/* PROJECT 4 */}
            {/* ========================================================= */}
            <TabsContent value='4' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-[42%_58%] bg-gray-100 overflow-hidden'>
                {/* Content */}
                <div className='flex flex-col justify-center p-6 md:p-8'>
                  <h2 className='text-2xl md:text-3xl font-medium mb-4'>
                    Shurayrah Island Central Hotel 3 Project - Red Sea
                  </h2>

                  <p className='text-base md:text-lg leading-relaxed'>
                    The project involved the development of Shurayrah Island,
                    which is composed of 13 luxury resorts located on an
                    untouched island in the Red Sea area. The Shurayrah Island
                    master plan also included Shurayrah Central Hotel 3.
                  </p>

                  <p className='text-base md:text-lg leading-relaxed mt-4'>
                    Our services included BIM LOD 350–500, MEP services
                    integration, POD MEP services modelling and coordination,
                    sheet production, BIM clash detection, as-built model
                    development and visualization.
                  </p>
                </div>

                {/* Image */}
                <div className='relative w-full aspect-[16/10] md:aspect-auto md:min-h-[520px]'>
                  <Image
                    src='/bim/shurayrah.jpg'
                    alt='Shurayrah Island Central Hotel 3'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 58vw'
                  />
                </div>
              </div>
            </TabsContent>

            {/* ========================================================= */}
            {/* PROJECT 5 */}
            {/* ========================================================= */}
            <TabsContent value='5' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-[42%_58%] bg-gray-100 overflow-hidden'>
                {/* Content */}
                <div className='flex flex-col justify-center p-6 md:p-8'>
                  <h2 className='text-2xl md:text-3xl font-medium mb-4'>
                    Grand Bleu Tower
                  </h2>

                  <p className='text-base md:text-lg leading-relaxed'>
                    BIM Consultancy: Building Maintenance Unit Package. Dubai
                    Marina Grand Bleu Tower is a skyscraper located on the first
                    line of the beach of the Emaar Beachfront Island.
                  </p>

                  <p className='text-base md:text-lg leading-relaxed mt-4'>
                    Emaar Beachfront forms part of a new peninsula planned for
                    high-rise residential and investment developments. Our scope
                    included BIM LOD 350 and LOD 500 works for the BMU (Building
                    Maintenance Unit) package supporting Facility Management.
                  </p>
                </div>

                {/* Image */}
                <div className='relative w-full aspect-[16/10] md:aspect-auto md:min-h-[520px]'>
                  <Image
                    src='/bim/emmar.jpg'
                    alt='Grand Bleu Tower'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 58vw'
                  />
                </div>
              </div>
            </TabsContent>

            {/* ========================================================= */}
            {/* THUMBNAIL NAVIGATION */}
            {/* ========================================================= */}
            <div className='grid grid-cols-1 md:grid-cols-[42%_58%] mt-3'>
              {/* Empty left side to align thumbnails with image */}
              <div className='hidden md:block' />

              {/* Thumbnail navigation */}
              <TabsList
                className='
            w-full
            h-auto
            grid grid-cols-5
            gap-2
            p-0
            bg-transparent
          '
              >
                <TabsTrigger
                  value='1'
                  className='h-auto p-1 data-[state=active]:ring-2 data-[state=active]:ring-num-orange'
                >
                  <Image
                    src='/bim/Red-Sea.jpg'
                    width={120}
                    height={80}
                    alt='Red Sea International Airport'
                    className='w-full aspect-[3/2] object-cover'
                  />
                </TabsTrigger>

                <TabsTrigger
                  value='2'
                  className='h-auto p-1 data-[state=active]:ring-2 data-[state=active]:ring-num-orange'
                >
                  <Image
                    src='/bim/etihad.jpg'
                    width={120}
                    height={80}
                    alt='Etihad Rail'
                    className='w-full aspect-[3/2] object-cover'
                  />
                </TabsTrigger>

                <TabsTrigger
                  value='3'
                  className='h-auto p-1 data-[state=active]:ring-2 data-[state=active]:ring-num-orange'
                >
                  <Image
                    src='/bim/seaWorld.jpg'
                    width={120}
                    height={80}
                    alt='Sea and World Entertainment Park'
                    className='w-full aspect-[3/2] object-cover'
                  />
                </TabsTrigger>

                <TabsTrigger
                  value='4'
                  className='h-auto p-1 data-[state=active]:ring-2 data-[state=active]:ring-num-orange'
                >
                  <Image
                    src='/bim/shurayrah.jpg'
                    width={120}
                    height={80}
                    alt='Shurayrah Island'
                    className='w-full aspect-[3/2] object-cover'
                  />
                </TabsTrigger>

                <TabsTrigger
                  value='5'
                  className='h-auto p-1 data-[state=active]:ring-2 data-[state=active]:ring-num-orange'
                >
                  <Image
                    src='/bim/emmar.jpg'
                    width={120}
                    height={80}
                    alt='Grand Bleu Tower'
                    className='w-full aspect-[3/2] object-cover'
                  />
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>
      </div>

      <div className='flex  mt-20'>
        <h2 className=' md:text-2xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
          Latest Insights
        </h2>
      </div>
      <div className='container mx-auto px-4 py-8'>
        {/* <h1 className='text-3xl font-bold mb-4'>Latest Blogs</h1> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {ExploreArticles.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
