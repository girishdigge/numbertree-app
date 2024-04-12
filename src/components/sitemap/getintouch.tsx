'use client';
import { FaSquarePhone } from 'react-icons/fa6';

import { IoMdCall } from 'react-icons/io';
import { MdMailOutline } from 'react-icons/md';
import { ConnectInputForm } from './connectInput';
const GetInTouch = () => {
  return (
    <div className='mr-4'>
      <div className='flex flex-col w-full mr-6'>
        <div className='bg-white  bg-opacity-50 w-full font-medium border-2 border-num-pink pl-4 pr-16'>
          <h2 className='text-xl flex text tracking-widest text-num-blue  pt-2'>
            Get In Touch
          </h2>
          <h3 className='text-num-blue text-lg mt-4 tracking-widest mb-2'>
            Contact
          </h3>
          <span className='flex mb-2'>
            <IoMdCall size={24} className='text-num-indigo mr-1' />
            {` 022-49617073`}
          </span>
          <span className='flex mb-4'>
            <IoMdCall size={24} className='text-num-indigo mr-1' />
            {` 011-41458409`}
          </span>
          <h3 className='text-num-blue text-lg tracking-widest mb-2'>
            Enquiries
          </h3>
          <div
            onClick={() => (window.location.href = `mailto:info@numbertree.in`)}
          >
            <span className='flex mb-2 hover:cursor-pointer'>
              <MdMailOutline size={24} className='text-num-indigo mr-1' />
              {`info@numbertree.in`}
            </span>
          </div>
          <div
            onClick={() =>
              (window.location.href = `mailto:services@numbertree.in`)
            }
          >
            <span className='flex mb-4 hover:cursor-pointer'>
              <MdMailOutline size={24} className='text-num-indigo mr-1' />
              {`services@numbertree.in`}
            </span>
          </div>
        </div>
      </div>
      <div className='mt-10  bg-num-indigo'>
        <div className='flex '>
          <h1 className='text-xl tracking-widest text-white ml-4 pt-2'>
            Request a call from us
          </h1>
        </div>
        <ConnectInputForm />
      </div>
    </div>
  );
};
export default GetInTouch;
