'use client';
import { FaSquarePhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { ConnectInputForm } from './connectInput';
const GetInTouch = () => {
  return (
    <div>
      <div className='flex flex-col w-full mr-6'>
        <div className='bg-white  bg-opacity-50 w-full font-medium border-2 border-num-pink pl-16 pr-16'>
          <h2 className='text-xl flex font-bold text-num-blue  p-2'>
            Get in touch
          </h2>
          <h3 className='text-num-blue text-lg'>Contact</h3>
          <span className='flex mb-2'>
            <FaSquarePhone size={24} className='text-num-indigo' />
            {`022-49617073`}
          </span>
          <span className='flex mb-4'>
            <FaSquarePhone size={24} className='text-num-indigo' />
            {`011-41458409`}
          </span>
          <h3 className='text-num-blue text-lg'>Enquiries</h3>
          <div
            onClick={() => (window.location.href = `mailto:info@numbertree.in`)}
          >
            <span className='flex mb-2 hover:cursor-pointer'>
              <IoIosMail size={24} className='text-num-indigo' />
              {`info@numbertree.in`}
            </span>
          </div>
          <div
            onClick={() =>
              (window.location.href = `mailto:services@numbertree.in`)
            }
          >
            <span className='flex mb-4 hover:cursor-pointer'>
              <IoIosMail size={24} className='text-num-indigo' />
              {`services@numbertree.in`}
            </span>
          </div>
        </div>
      </div>
      <div className='mt-10 border-2 border-num-pink'>
        <div className='flex justify-center'>
          <h1 className='text-xl font-bold text-num-blue  p-1'>
            Request a call from us
          </h1>
        </div>
        <ConnectInputForm />
      </div>
    </div>
  );
};
export default GetInTouch;
