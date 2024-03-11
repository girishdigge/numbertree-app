import { FaSquarePhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
const GetInTouch = () => {
  return (
    <div className='flex flex-col w-full mr-6'>
      <div className='bg-num-orange  bg-opacity-50 w-full font-medium border-2 border-num-indigo pl-16 pr-16'>
        <h2 className='text-xl flex font-bold text-black  p-2'>Get in touch</h2>
        <h3 className='text-num-blue text-lg'>Mumbai Office</h3>
        <span className='flex mb-4'>
          <FaSquarePhone size={24} className='text-num-indigo' />
          {`+91-9988776655`}
        </span>
        <h3 className='text-num-blue text-lg'>Delhi Office</h3>
        <span className='flex mb-4'>
          <IoIosMail size={24} className='text-num-indigo' />
          {`info@numbertree.in`}
        </span>
        <h3 className='text-num-blue text-lg'>Dubai Office</h3>
        <span className='flex  mb-4'>
          <FaLocationDot size={24} className='text-num-indigo ' />
          United Arab Emirates
        </span>
      </div>
      {/* <h2 className='text-lg flex font-bold text-num-indigo mt-4 mb-4'>
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
      </div> */}
      {/* <div className='  border-t-2 border-cyan-400 ml-2 mt-4 mr-4 w-4/5 bg-cyan-100 bg-opacity-50'>
        <div className='m-4 mr-2 font-sans text-cyan-400 '>
          <FaQuoteLeft size={30} className='text-cyan-400 mt-4 mb-2' />
          <p className='font-semibold font-lg'>
            {`We offer seamless and integrated service, from inception
                  through to completion and handover, we are the right hand of
                  project managers. We listen to our clients needs and strive
                  to provide them the best service."`}
          </p>
        </div>
      </div> */}
    </div>
  );
};
export default GetInTouch;
