import Image from 'next/image';
import { FaFacebookF, FaSquarePhone } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
const Footer = () => {
  return (
    <div>
      <div className='md:grid hidden grid-col-2 pb-4 h-auto bg-num-indigo '>
        <div className='  flex flex-col-2 '>
          <div className='flex flex-col-4 w-4/5 mt-12 pl-2 text-white '>
            <div className='flex flex-col w-1/5 pl-10'>
              <h1 className='mb-2 text-xl font-semibold '>Pages</h1>
              <Link href={`/sectors`}>
                <p>Sectors</p>
              </Link>
              <Link href={`/services`}>
                <p>Services</p>
              </Link>
              <Link href={`/projects`}>
                <p>Projects</p>
              </Link>
            </div>
            <div className='flex flex-col w-1/5 '>
              <Link href={`/about`}>
                <h1 className='mb-2 text-xl font-semibold'>About Numbertree</h1>
              </Link>
              <Link href={`/bim`}>
                <p>BIM First</p>
              </Link>
              <Link href={`/insights`}>
                <p>Insights</p>
              </Link>
              <Link href={`/career`}>
                <p>Career</p>
              </Link>
              <Link href={`/contact`}>
                <p>Contact Us</p>
              </Link>
            </div>
            <div className='flex flex-col w-3/5 '>
              {/* <h1 className='mb-2 text-xl font-semibold'>Offices</h1> */}
              <div className='grid grid-cols-3'>
                {/* <h1 className='mb-2 text-xl font-semibold '>Contacts</h1> */}
                <div>
                  <h2 className='font-bold text-lg'>Mumbai Office</h2>
                  <span className='flex'>
                    <FaSquarePhone size={20} className='text-white' />
                    {`022-49617073`}
                  </span>
                  <p className='mb-4 mt-2 text-sm w-5/6'>
                    502 Town Centre-1,Andheri Kurla Road,Andheri East, Mumbai,
                    400059
                  </p>
                </div>
                <div>
                  <h2 className='font-bold text-lg'>Delhi Office </h2>
                  <span className='flex'>
                    <FaSquarePhone size={20} className='text-white' />
                    {`011-41458409`}
                  </span>
                  <p className='mb-4 mt-2 text-sm w-3/5'>
                    A-99, 3rd Floor, Lajpat Nagar 2, New Delhi, 110018
                  </p>
                </div>
                <div>
                  <h2 className='font-bold text-lg'>Dubai Office </h2>
                  <span className='flex'>
                    <FaSquarePhone size={20} className='text-white' />
                    {`+971 50 815 4933`}
                  </span>
                  <p className='mb-4 mt-2 text-sm w-3/5'>
                    Office No.1043-0, Dawood Building, Hor AL ANZ, Al Barsha PO
                    Box 80080, United Arab Emirates
                  </p>
                </div>
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
          <div className='md:flex hidden flex-col items-center w-1/5 '>
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
        <div className='flex text-white'>
          <div className='flex flex-col w-1/2 ml-12'>
            <h1 className='mb-2 text-xl font-semibold'>Enquiry</h1>
            <div className='grid grid-cols-2 '>
              <div>
                <p className='text-base mb-3 font-normal '>
                  Press.enquiries@numbertree.in
                </p>
              </div>
              <div>
                <p className='text-base mb-3 font-normal '>
                  services@numbertree.in
                </p>
              </div>
              <div>
                <p className='text-base mb-3 font-normal  '>
                  info@numbertree.in
                </p>
              </div>
              <div>
                <p className='text-base font-normal '>career@numbertree.in</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-1/2 ml-12 mt-10'>
            <div className='grid grid-cols-3 '>
              <div>
                <Link href={`/footer/privacy`}>
                  <p className='text-base mb-3 font-normal '>Privacy Policy</p>
                </Link>
              </div>
              <div>
                <Link href={`/footer/cookies`}>
                  <p className='text-base mb-3 font-normal '>Cookie Policy</p>
                </Link>
              </div>
              <div>
                <Link href={`/footer/terms`}>
                  <p className='text-base mb-3 font-normal  '>
                    Terms and Conditions
                  </p>
                </Link>
              </div>
              <div>
                <Link href={`/footer/licences`}>
                  <p className='text-base font-normal '>Business licenses</p>
                </Link>
              </div>
              <div>
                <Link href={`/footer/security`}>
                  <p className='text-base font-normal '>Security</p>
                </Link>
              </div>
              <div>
                <Link href={`/footer/accessibility`}>
                  <p className='text-base font-normal '>Accessibility</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
