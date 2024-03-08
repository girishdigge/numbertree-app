import { FaArrowRight } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import GetInTouch from '@/components/sitemap/getintouch';
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
          <div className='text-white w-3/5 flex flex-col items-center justify-center '>
            <h1 className='md:text-6xl font-bold  text-xl '>
              Building Information Modelling (BIM)
            </h1>

            <h2 className=' mt-4 pr-4 md:text-base text-xs'>
              We push BIM harder, enhancing collaboration, creativity and
              knowledge sharing on every project
            </h2>
          </div>
        </div>
      </div>
      {/* <div className='grid grid-flow-col bg-gray-200 shadow-md'>
        <div className='flex items-center'>
          Building Information Modelling (BIM)
        </div>
        <div></div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col '>
            <h1 className='font-medium'>
              Talk to NumberTree about this service
            </h1>
            <span className='flex items-center text-sm'>
              Get in touch <FaArrowRight className='ml-2' />
            </span>
          </div>
        </div>
      </div> */}
      <div className='flex flex-row'>
        <div className='hidden md:flex w-1/5 items-center md:flex-col mt-2'>
          {/* <hr className=' w-1/2' />
          <h1 className='text-sm font-bold mb-2'> share this page</h1>
          <div className='flex gap-2 justify-center items-center'>
            <FaFacebookF
              size={30}
              className='bg-num-orange p-1 text-num-indigo  rounded-xl'
            />
            <FaLinkedinIn
              size={31}
              className='bg-num-orange text-num-indigo p-1 rounded-xl'
            />
            <FaXTwitter
              size={30}
              className='bg-num-orange text-num-indigo p-1 rounded-xl'
            />
          </div> */}
        </div>

        <div className='flex w-3/5 mt-0 flex-col items-center justify-center'>
          <h1 className='font-medium text-2xl mt-2 mb-1'>
            3D/4D/5D BIM services
          </h1>
          <p className=''>
            {` At NumberTree, we take pride in offering cutting-edge Building Information Modeling (BIM) services to our clients. Our team of highly skilled professionals combines industry expertise with advanced technological tools to deliver comprehensive BIM solutions. With our BIM 3D/4D/5D services, we bring a new era of efficiency, collaboration, and cost-effectiveness to infrastructure projects..`}
          </p>
          <br />
          <h2 className='font-medium text-2xl mt-2 mb-1'>
            BIM 3D Services: The Foundation of Exceptional Design
          </h2>

          <p className=''>{`Our BIM 3D services lay the groundwork for exceptional infrastructure design. We employ the latest software and techniques to create highly accurate and detailed 3D models of the project. These models serve as a virtual representation of the physical structure, allowing stakeholders to visualize and analyse every aspect with remarkable clarity. Our team ensures that the 3D models are not only visually appealing but also meticulously aligned with the project requirements and industry standards`}</p>
          <br />
          <h2 className='font-medium text-2xl mt-2 mb-1'>
            BIM 4D Services: Adding the Dimension of Time
          </h2>
          <p className=''>{` With our BIM 4D services, we transcend traditional design boundaries and incorporate the element of time into the infrastructure projects. By linking the 3D models with project schedules and timelines, we create dynamic visualizations that showcase the construction process in a time-based sequence. This enables stakeholders to gain valuable insights into project phasing, identify potential clashes, optimize construction sequences, and make informed decisions to enhance project efficiency and reduce delays.`}</p>
          <br />
          <h2 className='font-medium text-2xl mt-2 mb-1'>
            BIM 5D Services: The Power of Cost Optimization
          </h2>

          <p className=''>{`Taking BIM, a step further, our BIM 5D services integrate cost data into the digital models, empowering you to make financially sound decisions throughout the project lifecycle. By linking the 3D models with accurate material quantities, labor costs, and resource allocations, we enable precise cost estimations and cost tracking. Our BIM 5D services facilitate real-time cost analysis, enabling you to identify cost-saving opportunities, evaluate alternative design options, and ultimately maximize your return on investment.`}</p>
          <br />

          {/* <h2 className='text-lg flex font-semibold text-num-indigo mb-4'>
            Related Projects
          </h2>
          <div className='flex gap-2 mb-4'>
            <div className='w-1/3 group relative'>
              <Link href={`/projects/newParliment`}>
                <Image
                  src={`/projects/mumbaiDelhiExpressway.jpg`}
                  height={300}
                  width={300}
                  alt='project'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
              </Link>
              <div className='absolute flex justify-center items-end inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-500 ease-in-out'>
                <p className=' text-xl text-white flex justify-center font-bold text-center'>
                  Mumbai Delhi Expressway
                </p>
              </div>
            </div>
            <div className='w-1/3 group relative'>
              <Image
                src={`/projects/newParliment.jpg`}
                height={300}
                width={300}
                alt='project'
                className='group-hover:opacity-90' // Fade image slightly on hover
              />
              <Link href={`/projects/new-parliment`}>
                <div className='absolute flex justify-center items-end inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-500 ease-in-out'>
                  <p className=' text-xl text-white flex justify-center font-bold text-center w-3/4'>
                    New Parliment, new Delhi
                  </p>
                </div>
              </Link>
            </div>
            <div className='w-1/3 group relative '>
              <Link href={`/projects/merc`}>
                <Image
                  src={`/projects/merc.jpg`}
                  height={300}
                  width={300}
                  alt='project'
                  className='object-cover group-hover:opacity-90' // Fade image slightly on hover
                />
              </Link>
              <div className='absolute flex justify-center items-end inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-500 ease-in-out'>
                <p className=' text-xl text-white flex justify-center font-bold text-center'>
                  Mercedes Benz,Pune
                </p>
              </div>
            </div>
          </div>
          <h2 className='text-lg flex font-semibold text-num-indigo mt-2 mb-1 '>
            Services offered
          </h2>
          <ul className='list-disc ml-6  '>
            <Link href={'/services/business-transformation'}>
              <li className='hover:text-num-blue hover:underline'>
                {' '}
                Business Transformation
              </li>
            </Link>
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
          <h2 className='text-lg flex font-semibold text-num-indigo mt-4 mb-4 '>
            Explore More
          </h2>
          <div className='grid grid-cols-3 gap-2 mb-4'>
            <div className='w-full grid-rows-2  relative hover:scale-105 transition duration-500 ease-in-out'>
              <Link href={`/sectors/aviation`}>
                <Image
                  src={`/sectors/Aviation.jpg`}
                  height={200}
                  width={300}
                  alt='sector'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
              </Link>
              <div className=' flex justify-center bg-gray-50 shadow-lg border-gray-800 items-end border border-l-1 border-r-1 border-b-1'>
                <p className=' md:text-base text-xs text-num-indigo  flex justify-center font-bold text-center'>
                  Aviation
                </p>
              </div>
            </div>
            <div className='w-full grid-rows-2  relative hover:scale-105 transition duration-500 ease-in-out'>
              <Link href={`/sectors/bridges-structures`}>
                <Image
                  src={`/sectors/BridgesStructure.jpg`}
                  height={200}
                  width={300}
                  alt='sector'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
              </Link>
              <div className=' flex justify-center bg-gray-50 shadow-lg border-gray-800 items-end border border-l-1 border-r-1 border-b-12'>
                <p className=' md:text-base text-xs text-num-indigo  flex justify-center font-bold text-center'>
                  Bridges Structures
                </p>
              </div>
            </div>
            <div className='w-full grid-rows-2  relative hover:scale-105 transition duration-500 ease-in-out'>
              <Link href={`/sectors/commercial`}>
                <Image
                  src={`/sectors/Commercial.jpg`}
                  height={200}
                  width={300}
                  alt='sector'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
              </Link>
              <div className=' flex justify-center bg-gray-50 shadow-lg border-gray-800 items-end border border-l-1 border-r-1 border-b-12'>
                <p className=' md:text-base text-xs text-num-indigo  flex justify-center font-bold text-center'>
                  Commercial
                </p>
              </div>
            </div> 
          </div>*/}
        </div>
        <div className='hidden w-1/4 md:flex pl-10 mt-2'>
          {/* <GetInTouch /> */}
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col justify-center pl-8 bg-gray-100'>
          <h1 className='text-sm mb-2'>Featured service</h1>
          <h2 className='text-2xl mb-2 w-3/4'>
            Connecting the physical and digital worlds
          </h2>
          <p className='w-3/4'>
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
      <div className=' flex align-center justify-center items-center'>
        <div className='w-2/3 mb-4 mt-4'>
          <h1 className='text-2xl mb-2 '>
            Increased coordination, improved collaboration
          </h1>
          <p>
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
          <p className='w-3/4'>
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
      <div className=' flex align-center justify-center items-center'>
        <div className='w-2/3 mb-4 mt-4'>
          <h1 className='text-2xl mb-2 '>BIM showcase</h1>
          <p>
            These four recent projects demonstrate how Arup pushes BIM to
            achieve a wider range of client goals:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
