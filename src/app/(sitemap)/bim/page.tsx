'use client';
import { FaArrowRight } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import GetInTouch from '@/components/sitemap/getintouch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Image from 'next/image';
import Link from 'next/link';
const Page = () => {
  return (
    <div>
      <div className='relative text-white z-1'>
        <video
          autoPlay
          muted
          loop
          src={'carousel/bim480.mp4'}
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0  flex items-center justify-center  bg-black bg-opacity-30'>
          <div className='text-white w-1/2 flex flex-col items-center justify-center '>
            <h1 className='md:text-7xl font-bold  text-2xl '>
              Building Information Modelling (BIM)
            </h1>

            <h2 className=' mt-4 pr-4 mr-10 md:text-xl text-xs'>
              We push BIM harder, enhancing collaboration, creativity and
              knowledge sharing on every project
            </h2>
          </div>
        </div>
      </div>

      <div className='flex flex-row text-justify'>
        <div className='hidden md:flex w-1/5 items-center md:flex-col mt-2'></div>

        <div className='flex w-3/5 mt-0 flex-col items-center justify-center'>
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
        </div>
      </div>
      <div className='grid grid-cols-2'>
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
      </div>
      <div className='flex mt-0 flex-row'>
        <div className='hidden md:flex w-1/5 items-center md:flex-col mt-2'></div>
        <div className=' flex w-3/5 mt-10 flex-col items-center justify-center mb-10 '>
          <h1 className='font-medium text-3xl mt-2 mb-1 '>
            Increased coordination, improved collaboration
          </h1>
          <p className='text-xl text-justify mt-2 mb-10'>
            BIM’s ability to coordinate multiple types of information is driving
            up expectations in the industry, particularly around level of
            information and quality of collaboration. Our BIM models are
            collaborative to the core, allowing designers and engineers to
            collaborate and achieve the work-from-anywhere approach that is
            vital on major international projects.
          </p>
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
      <div className='flex mt-0 flex-col items-center'>
        <div className=' flex w-11/12 mt-10 flex-col items-center justify-center mb-10 '>
          <h1 className='font-medium text-3xl mt-2 mb-1 '>BIM showcase</h1>
          <p className='mb-8 text-xl'>
            These four recent projects demonstrate how NumberTree pushes BIM to
            achieve a wider range of client goals:
          </p>
          <div>
            <Tabs defaultValue='1' className='w-[full]'>
              <TabsList className='grid w-full grid-cols-4 mb-4'>
                <TabsTrigger value='1'>
                  Design and production automation
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
                    src={'/bim/arup.jpg'}
                    height={600}
                    width={800}
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
                    src={'/bim/arup.jpg'}
                    height={600}
                    width={800}
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
                    src={'/bim/arup.jpg'}
                    height={600}
                    width={800}
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
                    src={'/bim/arup.jpg'}
                    height={600}
                    width={800}
                    alt='img'
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <div className='flex mt-0 flex-row'>
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
      </div>
    </div>
  );
};

export default Page;
