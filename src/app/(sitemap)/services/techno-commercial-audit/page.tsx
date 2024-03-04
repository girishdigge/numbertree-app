import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

const Page = () => {
  return (
    <div>
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
          src={`/services/TechoComAudit.jpg`}
          width={1200}
          height={400}
          alt='Techno Commercial Audit'
        />
      </div>
      <h1 className='-translate-y-20 font-bold text-7xl flex justify-center text-white'>
        Techno Commercial Audit
      </h1>
      <br />
      <div className='flex flex-row'>
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
          <p>
            {' '}
            Some of the specialized services provided under Techno commercial
            audit are
          </p>
          <ul>
            <li> Techno Commercial Internal Audit</li>
            <li> Project Concurrent Audit</li>
            <li> Project Closure Audit</li>
            <li>Functional Audits/P2P Audits/Process Audits </li>
            <li>Revenue Assurance Audit of Toll Plaza</li>
            <li> Energy Audit- Renewables</li>
          </ul>
        </div>
        <div className='w-1/4 flex justify-center'>CTA</div>
      </div>
    </div>
  );
};
export default Page;
