import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

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
      <div className='absolute -inset-28 flex items-end justify-center'>
        <h1 className='font-bold md:text-5xl text-3xl flex justify-center text-white'>
          Techno Commercial Audit
        </h1>
      </div>

      <br />
      <div className='flex flex-row '>
        <div className='w-1/4'></div>
        <div className='w-1/2 '>
          <h1 className='text-xl flex justify-center font-semibold text-num-indigo mb-4'>
            We pride ourselves as India’s foremost techno commercial audit firm
            with over two decades of experience across varied industries.
          </h1>
          <p>
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
          <ul className='list-disc ml-6 '>
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
                <p className=' text-xl text-white flex justify-center font-bold text-center'>
                  New Parliment
                </p>
              </div>
            </div>
            <div className='w-1/3 group relative '>
              <Link href={`/projects/merc`}>
                <Image
                  src={`/projects/merc.jpg`}
                  height={200}
                  width={200}
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
          <h2 className='text-lg flex font-semibold text-num-indigo mb-4'>
            Other Services
          </h2>
          <ul className='list-disc ml-6 '>
            <li> Business Transformation</li>
            <li> Claim Management</li>
            <li> Contract Administration</li>
            <li> Project Monitoring & Control </li>
            <li> Quantity Survey </li>
            <li>Transaction Advisory </li>
            {/* <li> Techno Commercial Audit</li> */}
          </ul>
        </div>
        <div className='w-1/4 flex justify-center'>
          <h2 className='text-lg flex font-bold text-num-indigo mb-4'>
            Get in touch
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Page;
