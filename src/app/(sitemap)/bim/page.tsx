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
          src={'carousel/bim480.mp4'}
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-50 bg-black  text-white'>
          <div className='ml-10'>
            <h2 className='md:text-xl font-light text-sm ml-4 mb-2'>EXPLORE</h2>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex '>
                Building Information Modelling (BIM)
              </h1>
              <p className='md:text-xl text-xs font-medium ml-4 md:mb-2'>
                We push BIM harder, enhancing collaboration, creativity and
                knowledge sharing on every project
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
                <Button className='bg-num-indigo mb-2  text-white hover:bg-wilmer-orange hover:text-white'>
                  Business Transformation
                </Button>
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
        {/* <div className='md:w-1/2 flex flex-col items-center  text-justify'>
          <h1 className='text-3xl flex justify-center font-normal md:w-3/4 w-11/12 text-black mb-4'>
            We pride ourselves as India’s foremost techno commercial audit firm
            with over two decades of experience across varied industries.
          </h1>
          <div className='flex flex-col items-center '>
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs flex '>
              Our offering of Techno commercial Audit – helps businesses
              harnesses the power of financial insights with great clarity, it
              transforms not just the way businesses operate but also unlocks
              their full potential and propels them to growth This specialized
              audit examines both the technical and commercial aspects of
              infrastructure ventures, providing a comprehensive evaluation of
              their feasibility, efficiency, and financial viability.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs '>
              Our dedicated team of engineers & auditors work collaboratively to
              present a meticulous analysis of project plans, contracts, cost
              estimates, procurement processes, Quantity Survey and financial
              controls. We are well equipped to use our processes and identify
              potential risks, cost-saving opportunities, and areas for
              improvement.
            </p>{' '}
            <br />
            <p className='  md:w-3/4 w-11/12 md:text-lg text-xs'>
              With our multidimensional approach, Techno-Commercial Audit serves
              as a valuable tool for project managers & senior management in
              navigating the complex landscape of infrastructure development,
              ensuring transparency, accountability, and successful project
              delivery.
            </p>
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
        </div> */}
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
          </div>
        </div>

        <div className='hidden w-1/4 md:flex '>
          <GetInTouch />
        </div>
      </div>

      {/* <div className='grid grid-cols-2'>
        <div className='flex flex-col justify-center pl-8 bg-gray-100'>
          <h1 className='text-sm mb-2'>Featured service</h1>
          <h2 className='text-2xl mb-2 w-3/4'>
            Connecting the physical and digital worlds
          </h2>
          <p className='text-xl mt-2 mb-4w-3/4'>
            Our digital twin approach, provided as consultants and
            technologists, is to develop a twin that connects disparate
            information sources, building a digital twin that generates valuable
            intelligence every day.
          </p>
          <Link href={'/bim'}>
            <h4 className='text-sm mt-4 font-medium underline'>{`Learn more about our services ->`}</h4>
          </Link>
        </div>
        <Image src={'/bim/arup.jpg'} height={600} width={800} alt='img' />
      </div> */}

      <div className='flex mt-0 flex-col items-center'>
        <p className='mb-8 w-1/2 text-xl ml-4 '>
          These four recent projects demonstrate how NumberTree pushes BIM to
          achieve a wider range of client goals:
        </p>
        <div className=' flex w-11/12 mt-2 flex-col items-center justify-center mb-10 '>
          <div>
            <Tabs defaultValue='1' className='w-[full]'>
              <TabsList className='grid grid-cols-4 mb-4 gap-2'>
                <TabsTrigger value='1'>
                  Design & production automation
                </TabsTrigger>
                <TabsTrigger value='2'>Data management</TabsTrigger>
                <TabsTrigger value='3'>Digital asset management</TabsTrigger>
                <TabsTrigger value='4'>Collabration</TabsTrigger>
              </TabsList>

              <TabsContent value='1'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>Featured project 1</h1>
                    <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempora asperiores consequuntur repellendus reprehenderit
                      modi nam incidunt totam aperiam, perspiciatis praesentium
                      voluptates dolores velit, suscipit animi veritatis
                      possimus molestiae tenetur ut illo earum quasi voluptas
                      maiores odio blanditiis. Asperiores,
                    </p>
                    <Link href={'/bim'}>
                      <h4 className='text-sm mt-4 font-medium underline'>{`Find out more about our work ->`}</h4>
                    </Link>
                  </div>
                  <Image
                    src={'/images/tab1.jpg'}
                    height={600}
                    width={600}
                    alt='img'
                  />
                </div>
              </TabsContent>
              <TabsContent value='2'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>Featured project 2</h1>
                    <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempora asperiores consequuntur repellendus reprehenderit
                      modi nam incidunt totam aperiam, perspiciatis praesentium
                      voluptates dolores velit, suscipit animi veritatis
                      possimus molestiae tenetur ut illo earum quasi voluptas
                      maiores odio blanditiis. Asperiores,
                    </p>
                    <Link href={'/bim'}>
                      <h4 className='text-sm mt-4 font-medium underline'>{`Find out more about our work ->`}</h4>
                    </Link>
                  </div>
                  <Image
                    src={'/images/tab2.jpg'}
                    height={600}
                    width={600}
                    alt='img'
                  />
                </div>{' '}
              </TabsContent>
              <TabsContent value='3'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>Featured project 3</h1>
                    <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempora asperiores consequuntur repellendus reprehenderit
                      modi nam incidunt totam aperiam, perspiciatis praesentium
                      voluptates dolores velit, suscipit animi veritatis
                      possimus molestiae tenetur ut illo earum quasi voluptas
                      maiores odio blanditiis. Asperiores,
                    </p>
                    <Link href={'/bim'}>
                      <h4 className='text-sm mt-4 font-medium underline'>{`Find out more about our work ->`}</h4>
                    </Link>
                  </div>
                  <Image
                    src={'/images/tab3.jpg'}
                    height={600}
                    width={600}
                    alt='img'
                  />
                </div>
              </TabsContent>
              <TabsContent value='4'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>Featured project 4</h1>
                    <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempora asperiores consequuntur repellendus reprehenderit
                      modi nam incidunt totam aperiam, perspiciatis praesentium
                      voluptates dolores velit, suscipit animi veritatis
                      possimus molestiae tenetur ut illo earum quasi voluptas
                      maiores odio blanditiis. Asperiores,
                    </p>
                    <Link href={'/bim'}>
                      <h4 className='text-sm mt-4 font-medium underline'>{`Find out more about our work ->`}</h4>
                    </Link>
                  </div>
                  <Image
                    src={'/images/tab4.jpg'}
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
      <div className='grid grid-cols-2'>
        <div className='flex flex-col justify-center pl-8 bg-gray-100'>
          <h1 className='text-sm mb-2'>Featured project</h1>
          <h2 className='text-2xl mb-2 w-3/4'>
            Connecting the physical and digital worlds
          </h2>
          <p className='text-xl mt-2 mb-4 w-3/4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            asperiores consequuntur repellendus reprehenderit modi nam incidunt
            totam aperiam, perspiciatis praesentium voluptates dolores velit,
            suscipit animi veritatis possimus molestiae tenetur ut illo earum
            quasi voluptas maiores odio blanditiis. Asperiores,
          </p>
          <Link href={'/bim'}>
            <h4 className='text-sm mt-4 font-medium underline'>{`Find out more about our work ->`}</h4>
          </Link>
        </div>
        <Image src={'/bim/arup2.jpg'} height={600} width={800} alt='img' />
      </div>
      {/* <div className='flex mt-0 flex-row'>
        <div className='hidden md:flex w-1/5 items-center md:flex-col mt-2'></div>
        <div className=' flex w-3/5 mt-10 flex-col items-center justify-center mb-10 '>
          <h1 className='font-medium text-3xl mt-2 mb-1 '>
            New layers, new insights
          </h1>
          <p className='text-xl text-justify mt-2 mb-10'>
            Drawing on NumberTree breadth of expertise and services, our BIM
            models are now used as the foundation for analytic models, such as
            those evaluating energy use and carbon emissions, fire safety
            implications, acoustic impacts, lighting or airflow. In order to
            exploit the data held in BIM we developed the unique and
            ground-breaking Global Revit and Global Tekla Standards for BIM.
            These are fundamental building blocks to sharing data, providing a
            single global standard that transcends boundaries, such as language,
            measurement units, codes, symbols, and much more.
          </p>
          <br />
          <p className='text-xl text-justify mt-2 mb-10'>
            Given our clients’ growing desire for sustainable operations and
            outcomes, future spatial flexibility, new digital services, greater
            energy efficiency or particular user experiences, BIM’s importance
            as a central intelligence source will also grow.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Page;
