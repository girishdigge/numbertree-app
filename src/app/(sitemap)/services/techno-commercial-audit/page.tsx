import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';
import { FaSquarePhone } from 'react-icons/fa6';
const Page = () => {
  return (
    <div className=''>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='/services/1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={`/services`}>
          <p className='font-bold text-num-indigo'>Services</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Techno Commercial Audit</p>
      </div>
      <div className='flex flex-col '>
        <Image
          src={`/services/techoComAudit1.jpg`}
          width={2046}
          height={999}
          alt='Techno Commercial Audit'
          className='object-contain'
        />
      </div>
      <div className='absolute md:inset-40 inset-60 md:translate-y-60 flex items-end justify-center'>
        <h1 className='font-bold md:text-5xl text-3xl flex justify-center text-white'>
          Techno Commercial Audit
        </h1>
      </div>

      <br />
      <div className='flex flex-row '>
        <div className='hidden md:flex w-1/4'></div>
        <div className='md:w-1/2 w-full '>
          <h1 className='md:text-xl  flex justify-center font-semibold text-num-indigo mb-4'>
            We pride ourselves as India’s foremost techno commercial audit firm
            with over two decades of experience across varied industries.
          </h1>
          <p className='font-serif md:text-base text-xs '>
            Our offering of Techno commercial Audit – helps businesses harnesses
            the power of financial insights with great clarity, it transforms
            not just the way businesses operate but also unlocks their full
            potential and propels them to growth This specialized audit examines
            both the technical and commercial aspects of infrastructure
            ventures, providing a comprehensive evaluation of their feasibility,
            efficiency, and financial viability. Our dedicated team of engineers
            & auditors work collaboratively to present a meticulous analysis of
            project plans, contracts, cost estimates, procurement processes,
            Quantity Survey and financial controls. We are well equipped to use
            our processes and identify potential risks, cost-saving
            opportunities, and areas for improvement. With our multidimensional
            approach, Techno-Commercial Audit serves as a valuable tool for
            project managers & senior management in navigating the complex
            landscape of infrastructure development, ensuring transparency,
            accountability, and successful project delivery.
          </p>
          <br />
          <h2 className='text-lg flex justify-center font-semibold text-num-indigo mb-4'>
            Some of the specialized services provided under Techno commercial
            audit are
          </h2>
          <ul className='list-disc ml-6 font-serif'>
            <li> Techno Commercial Internal Audit</li>
            <li> Project Concurrent Audit</li>
            <li> Project Closure Audit</li>
            <li>Functional Audits/P2P Audits/Process Audits </li>
            <li>Revenue Assurance Audit of Toll Plaza</li>
            <li> Energy Audit- Renewables</li>
          </ul>
          <br />

          <h2 className='text-lg flex font-semibold text-num-indigo mb-4'>
            Related Projects
          </h2>
          <div className='flex gap-2 mb-4'>
            <div className='w-1/3 group relative'>
              <Link href={`/projects/newParliment`}>
                <Image
                  src={`/projects/mumbaiDelhiExpressway.jpg`}
                  height={200}
                  width={200}
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
              <Link href={`/projects/newParliment`}>
                <Image
                  src={`/projects/newParliment.jpg`}
                  height={200}
                  width={200}
                  alt='project'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
              </Link>
              <div className='absolute flex justify-center items-end inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-500 ease-in-out'>
                <p className=' text-xl text-white flex justify-center font-bold text-center w-3/4'>
                  New Parliment, new Delhi
                </p>
              </div>
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
          <h2 className='text-lg flex font-semibold text-num-indigo mb-4 '>
            Other Services
          </h2>
          <ul className='list-disc ml-6 font-serif '>
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
            {/* <Link href={'/services/techno-commercial-audit'}>
              <li className='hover:text-num-blue hover:underline'> Techno Commercial Audit</li>
            </Link> */}
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
                  width={200}
                  alt='sector'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
              </Link>
              <div className=' flex justify-center bg-gray-10 shadow-lg border-gray-800 items-end border border-l-1 border-r-1 border-b-1'>
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
                  width={200}
                  alt='sector'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
              </Link>
              <div className=' flex justify-center bg-gray-10 shadow-lg border-gray-800 items-end border border-l-1 border-r-1 border-b-12'>
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
                  width={200}
                  alt='sector'
                  className='group-hover:opacity-90' // Fade image slightly on hover
                />
              </Link>
              <div className=' flex justify-center bg-gray-10 shadow-lg border-gray-800 items-end border border-l-1 border-r-1 border-b-12'>
                <p className=' md:text-base text-xs text-num-indigo  flex justify-center font-bold text-center'>
                  Commercial
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/4 flex justify-center'>
          <div className='flex flex-col'>
            <h2 className='text-lg flex font-bold text-num-indigo mb-4'>
              Get in touch
            </h2>
            <div className='text-num-indigo '>
              <h3>Mumbai Office</h3>
              <span className='flex mb-4'>
                <FaSquarePhone size={24} />
                {`+91-9988776655`}
              </span>
              <h3>Delhi Office</h3>
              <span className='flex mb-4'>
                <FaSquarePhone size={24} />
                {`+91-9988776655`}
              </span>
              <h3>Dubai Office</h3>
              <span className='flex mb-4'>
                <FaSquarePhone size={24} />
                {`+971-9988776655`}
              </span>
            </div>
            <h2 className='text-lg flex font-bold text-num-indigo mt-4 mb-4'>
              Enquiries
            </h2>
            <div className='text-num-indigo '>
              <h3>For press enquiry </h3>
              <span className='flex mb-4 text-num-blue underline'>{`Press.enquiries@numbertree.in`}</span>
              <h3>For service related</h3>
              <span className='flex mb-4 text-num-blue underline'>{`services@numbertree.in`}</span>
              <h3>General query </h3>
              <span className='flex mb-4 text-num-blue underline'>{`info@numbertree.in`}</span>
              <h3>Careers related </h3>
              <span className='flex mb-4 text-num-blue underline'>{`careers@numbertree.in`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
