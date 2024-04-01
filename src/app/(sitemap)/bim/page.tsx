'use client';
import { FaArrowRight } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';

import GetInTouch from '@/components/sitemap/getintouch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/sitemap/blog-card';
import { ExploreArticles } from '@/data/Insights';
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
          src={'carousel/bim1.mp4'}
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-50 bg-black  text-white'>
          <div className='ml-10'>
            <h2 className='md:text-lg font-light text-sm ml-4 mb-2 animate-fadeInLeft'>
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
                  Business Transformation
                </Button>
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
                  Quantity Survey
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
        <div className='md:flex w-1/4  hidden  pl-4 flex-col'>
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
                <Button className='w-72 bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                  Business Transformation
                </Button>
                <Button className='w-72 bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                  Claim Management
                </Button>
                <Button className='w-72 bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                  Contract Administration
                </Button>
                <Button className='w-72 bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                  Project Monitoring & Control
                </Button>
                <Button className='w-72 bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                  {' '}
                  Quantity Survey
                </Button>
                <Button className='w-72 bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                  Transaction Advisory
                </Button>
                <Button className='w-72 bg-gray-100 mb-2 text-black   hover:border hover:border-wilmer-orange hover:bg-num-gray'>
                  {' '}
                  Techno Commercial Audit
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-center text-justify'>
          <div className='md:w-3/4 flex flex-col justify-center text-justify'>
            <h1 className='font-medium text-3xl mt-2 mb-1'>
              3D/4D/5D BIM services
            </h1>
            <p className='text-xl mt-2 mb-4'>
              {` At NumberTree, we take pride in offering cutting-edge Building Information Modeling (BIM) services to our clients. Our team of highly skilled professionals combines industry expertise with advanced technological tools to deliver comprehensive BIM solutions. With our BIM 3D/4D/5D services, we bring a new era of efficiency, collaboration, and cost-effectiveness to infrastructure projects..`}
            </p>
            <br />
            <h2 className='font-medium text-3xl mt-2 mb-1'>
              BIM 3D Services: The Foundation of Exceptional Design
            </h2>

            <p className='text-xl mt-2 mb-4'>{`Our BIM 3D services lay the groundwork for exceptional infrastructure design. We employ the latest software and techniques to create highly accurate and detailed 3D models of the project. These models serve as a virtual representation of the physical structure, allowing stakeholders to visualize and analyse every aspect with remarkable clarity. Our team ensures that the 3D models are not only visually appealing but also meticulously aligned with the project requirements and industry standards`}</p>
            <br />
            <h2 className='font-medium text-3xl mt-2 mb-1'>
              BIM 4D Services: Adding the Dimension of Time
            </h2>
            <p className='text-xl mt-2 mb-4'>{` With our BIM 4D services, we transcend traditional design boundaries and incorporate the element of time into the infrastructure projects. By linking the 3D models with project schedules and timelines, we create dynamic visualizations that showcase the construction process in a time-based sequence. This enables stakeholders to gain valuable insights into project phasing, identify potential clashes, optimize construction sequences, and make informed decisions to enhance project efficiency and reduce delays.`}</p>
            <br />
            <h2 className='font-medium text-3xl mt-2 mb-1'>
              BIM 5D Services: The Power of Cost Optimization
            </h2>

            <p className='text-xl mt-2 mb-4'>{`Taking BIM, a step further, our BIM 5D services integrate cost data into the digital models, empowering you to make financially sound decisions throughout the project lifecycle. By linking the 3D models with accurate material quantities, labor costs, and resource allocations, we enable precise cost estimations and cost tracking. Our BIM 5D services facilitate real-time cost analysis, enabling you to identify cost-saving opportunities, evaluate alternative design options, and ultimately maximize your return on investment.`}</p>
            <br />
            <h1 className='font-medium text-3xl mt-2 '>BIM showcase</h1>
            <p className='mb-8  text-xl '>
              These four recent projects demonstrate how NumberTree pushes BIM
              to achieve a wider range of client goals:
            </p>
          </div>
        </div>

        <div className='hidden w-1/4 md:flex '>
          <GetInTouch />
        </div>
      </div>

      <div className='flex mt-0 flex-col items-center justify-center'>
        <div className=' flex w-11/12 mt-2 flex-col items-center justify-center mb-10 '>
          <div>
            <Tabs defaultValue='1' className='w-[full]'>
              <TabsList className='grid grid-cols-4 mb-4 gap-2'>
                <TabsTrigger value='1'>5D BIM</TabsTrigger>
                <TabsTrigger value='2'>3D BIM</TabsTrigger>
                <TabsTrigger value='3'>Digital Twin</TabsTrigger>
                <TabsTrigger value='4'>Digital Project Monitoring</TabsTrigger>
                {/* <TabsTrigger value='4'>IoT</TabsTrigger> */}
              </TabsList>
              <hr className='border-b-2 border-num-orange' />
              <TabsContent value='1'>
                <div className='grid grid-cols-2 bg-num-blue bg-opacity-10'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>
                      The Power of Cost Optimization
                    </h1>
                    {/* <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2> */}
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      BIM 5D model integrates cost data into the digital models,
                      empowering decision makers to make financially accurate
                      decisions throughout the project lifecycle. By linking the
                      3D models with accurate material quantities, labor costs,
                      and resource allocations, we enable precise cost
                      estimations and cost tracking. Our BIM 5D services
                      facilitate real-time cost analysis, enabling businesses to
                      identify cost-saving opportunities, evaluate alternative
                      design options, and ultimately maximize ROI.
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
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>
                      The Foundation of Exceptional Design
                    </h1>

                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      The BIM model lays the groundwork for exceptional
                      infrastructure design. We employ the latest software and
                      techniques to create highly accurate and detailed 3D
                      models of the project. These models allow stakeholders to
                      visualize and analyse every aspect of the project with
                      remarkable clarity. We ensure that the 3D models are not
                      only visually appealing but also meticulously aligned with
                      the project requirements and industry standards.
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
                <div className='grid grid-cols-2'>
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
                      {`NumberTree offers advanced digital project monitoring
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
                      With our digital project monitoring services, clients can
                      benefit from enhanced project visibility, proactive
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
      <div className='flex mt-0 flex-col items-center justify-center'>
        <div className=' flex w-11/12 mt-2 flex-col items-center justify-center mb-10 '>
          <div>
            <Tabs defaultValue='1' className='w-[full]'>
              <TabsContent value='1'>
                <div className='grid grid-cols-2 bg-num-blue bg-opacity-10'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>UAE</h1>
                    <h2 className='text-2xl mb-2 w-3/4'>
                      The Etihad Rail Stage-2 project
                    </h2>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      Core Services -To develop BIM models (LOD 500) for Civil,
                      Structural and MEP discipline Etihad Rail is being
                      developed in line with the Abu Dhabi Economic Vision 2030
                      and the UAE Vision 2021, which in turn contributes to
                      economic diversification through strategic initiatives set
                      to bolster UAE socio-economic growth and diversification
                    </p>
                  </div>
                  <Image
                    src={'/bim/etihad.png'}
                    height={800}
                    width={800}
                    alt='img'
                    className='p-4'
                  />
                </div>
              </TabsContent>
              <TabsContent value='2'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>SAUDI ARABIA</h1>
                    <h2 className='text-2xl mb-2 w-3/4'>
                      Red Sea International Airport Project
                    </h2>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      The Red Sea International Airport received its first
                      flight last year .The airport serves as a gateway to the
                      Red Sea Resort - a dedicated luxury regenerative tourism
                      spot being developed in Saudi Arabia.
                    </p>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      As part of vision2030 initiative, Saudi Arabia is
                      developing several exciting tourist destinations. The
                      development of tourism industry is being done as part of a
                      strategic roadmap, to develop the country’s non-oil
                      economy...
                    </p>
                  </div>
                  <Image
                    src={'/featuredProjects/Red-Sea.jpg'}
                    height={800}
                    width={800}
                    alt='img'
                  />
                </div>{' '}
              </TabsContent>
              <TabsContent value='3'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>
                      Shurayrah Island Central Hotel 3 Project - Red Sea
                    </h1>

                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      The project involved the development of Shurayrah Island
                      which is composed of 13 luxury resorts located on the
                      untouched island in the Red Sea Area. The Shurayrah Island
                      master plan also included Shurayrah Central Hotel 3. Our
                      services included BIM LOD-350-500 MEP Services Integration
                      of PODs MEP Services Modeling & Coordination & Sheet
                      Production of Hotel PODs BIM Clash Detection As-Built
                      Model Visualizatio
                    </p>
                  </div>
                  <Image
                    src={'/bim/shurayrah.png'}
                    height={800}
                    width={800}
                    alt='img'
                  />
                </div>
              </TabsContent>
              <TabsContent value='4'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>
                      SeaWorld Entertainment Park
                    </h1>

                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      The project involved the development of Shurayrah Island
                      which is composed of 13 luxury resorts located on the
                      untouched island in the Red Sea Area. The Shurayrah Island
                      master plan also included Shurayrah Central Hotel 3. Our
                      services included BIM LOD-350-500 MEP Services Integration
                      of PODs MEP Services Modeling & Coordination & Sheet
                      Production of Hotel PODs BIM Clash Detection As-Built
                      Model Visualizatio Our scope of work included , BIM
                      LOD-400 and Services Integration MEPF Modeling &
                      Coordination & Sheet Production of Various Oceans of the
                      project. BIM Clash Detection BOQ’s from BIM Model As-Built
                      Model Visualization
                    </p>
                  </div>
                  <Image
                    src={'/bim/seaWorld.jpg'}
                    height={800}
                    width={800}
                    alt='img'
                  />
                </div>
              </TabsContent>
              <TabsContent value='5'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>Grand Bleu Tower</h1>
                    {/* <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2> */}
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      BIM Consultancy: Building Maintenance Unit Package Dubai
                      Marina Grand Bleu Tower is a skyscraper located on the
                      first line of the beach of the Emaar Beach front Island.
                      Emaar Beachfront is the part of new peninsula which will
                      be used for building skyscrapers for residential and
                      investment purposes. Scope of Work included BIM LOD-350
                      and LOD-500 BIM Works of the BMU (Building Maintenance
                      Unit) Package for Facility Management
                    </p>
                  </div>
                  <Image
                    src={'/bim/emmar.jpg'}
                    height={800}
                    width={800}
                    alt='img'
                  />
                </div>
              </TabsContent>
              <div className='grid grid-cols-2'>
                <div></div>
                <TabsList className='grid grid-cols-5 mb-4  bg-white'>
                  <TabsTrigger value='1'>
                    <Image
                      src={'/bim/etihad.png'}
                      height={100}
                      width={120}
                      alt='img'
                    />
                  </TabsTrigger>
                  <TabsTrigger value='2'>
                    {' '}
                    <Image
                      src={'/featuredProjects/Red-Sea.jpg'}
                      height={100}
                      width={120}
                      alt='img'
                    />
                  </TabsTrigger>
                  <TabsTrigger value='3'>
                    {' '}
                    <Image
                      src={'/bim/shurayrah.png'}
                      height={100}
                      width={120}
                      alt='img'
                    />
                  </TabsTrigger>
                  <TabsTrigger value='4'>
                    {' '}
                    <Image
                      src={'/bim/seaWorld.jpg'}
                      height={100}
                      width={120}
                      alt='img'
                    />
                  </TabsTrigger>
                  <TabsTrigger value='5'>
                    {' '}
                    <Image
                      src={'/bim/emmar.jpg'}
                      height={100}
                      width={120}
                      alt='img'
                    />
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </div>
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
