import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <div className='grid grid-col-2 pb-4 h-auto bg-num-indigo '>
      <div className='  flex flex-col-2 '>
        <div className='flex flex-col-4 w-4/5 mt-12 pl-2 text-white '>
          <div className='flex flex-col w-1/4 pl-10'>
            <h1 className='mb-2 text-xl font-semibold '>Pages</h1>
            <p>Sectors</p>
            <p>Services</p>
            <p>Projects</p>
          </div>
          <div className='flex flex-col w-1/4 '>
            <h1 className='mb-2 text-xl font-semibold'>About Numbertree</h1>
            <p>Linkedin</p>
            <p>Insights</p>
            <p>About Us</p>
          </div>
          <div className='flex flex-col w-1/2 '>
            <h1 className='mb-2 text-xl font-semibold'>Enquiry</h1>
            <div className='grid grid-cols-2'>
              {/* <h1 className='mb-2 text-xl font-semibold '>Contacts</h1> */}
              <div>
                <h2 className='font-bold'>Mumbai Head Office</h2>
                <p className='mb-4 mt-2 text-sm w-5/6'>
                  5th Floor, 502, Town Centre, 1, Marol Naka, Andheri East,
                  Mumbai, 400059
                </p>
              </div>
              <div>
                <h2 className='font-bold'>Delhi Office </h2>
                <p className='mb-4 mt-2 text-sm w-3/5'>
                  A-99, 3rd Floor, Lajpat Nagar 2, New Delhi, 110024
                </p>
              </div>
              {/* <div>
            <h2 className='font-bold'>Dubai Office</h2>
            <p className='mt-2 text-sm w-3/5'>
              Office No.1043-0, Dawood Building, Hor AL ANZ, Al Barsha PO Box
              80080, United Arab Emirates
            </p>
          </div> */}
            </div>
          </div>
          {/* <div className='flex flex-col w-1/2 '>
            <h1 className='mb-2 text-xl font-semibold'>Enquiry</h1>
            <div className='grid grid-cols-2'>
              <div>
                <h2>Press</h2>
                <p className='text-sm mb-3 font-normal text-num2-blue underline'>
                  Press.enquiries@numbertree.in
                </p>
              </div>
              <div>
                <h2>Services</h2>
                <p className='text-sm mb-3 font-normal text-num2-blue underline'>
                  services@numbertree.in
                </p>
              </div>
              <div>
                <h2>General</h2>
                <p className='text-sm mb-3 font-normal text-num2-blue underline'>
                  info@numbertree.in
                </p>
              </div>
              <div>
                <h2>Career</h2>
                <p className='text-sm font-normal text-num2-blue underline'>
                  career@numbertree.in
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className='flex flex-col items-center w-1/5 '>
          <div className='flex w-auto h-auto mr-8 mt-6'>
            <Image
              src={`/logo/numbertree-logo.png`}
              width={300}
              height={200}
              alt='logo'
            />
          </div>
          <div className='flex flex-row-5 gap-4'>
            <FaFacebookF size={30} className='bg-white p-1  rounded-xl' />
            <FaInstagram size={30} className='bg-white p-1  rounded-xl' />
            <FaLinkedinIn size={30} className='bg-white p-1 rounded-xl' />
            <FiYoutube size={30} className='bg-white p-1 rounded-xl' />
            <FaXTwitter size={30} className='bg-white p-1 rounded-xl' />
          </div>
          <p className='text-white font-md w-2/3 mr-10 mt-4'>
            &copy; 2024 Numbertree. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
