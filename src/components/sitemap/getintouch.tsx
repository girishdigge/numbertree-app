import { FaSquarePhone } from 'react-icons/fa6';
import { FaQuoteLeft } from 'react-icons/fa';
const GetInTouch = () => {
  return (
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
      <div className='  border-t-2 border-cyan-400 ml-2 mt-4 mr-4 w-4/5 bg-cyan-100 bg-opacity-50'>
        <div className='m-4 mr-2 font-sans text-cyan-400 '>
          <FaQuoteLeft size={30} className='text-cyan-400 mt-4 mb-2' />
          <p className='font-semibold font-lg'>
            {`We offer seamless and integrated service, from inception
                  through to completion and handover, we are the right hand of
                  project managers. We listen to our clients needs and strive
                  to provide them the best service."`}
          </p>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
