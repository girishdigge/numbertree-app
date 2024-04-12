'use client';
import Image from 'next/image';
import { IoMdCall } from 'react-icons/io';

import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
const Footer = () => {
  return (
    <div>
      <div className='grid  md:grid-col-2  pb-4 h-auto bg-num-indigo '>
        <div className='  flex md:flex-col-2 '>
          <div className='flex md:flex-col-4 md:w-4/5 mt-12 pl-2 text-white '>
            <div className='flex flex-col gap-2 md:w-1/5 pl-10'>
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
              <Link href={`/sitemap`}>
                <p>Site Map</p>
              </Link>
            </div>
            <div className='flex flex-col gap-2 md:w-1/5 md:pl-0 pl-10'>
              <Link href={`/about`}>
                <h1 className='mb-2 text-xl font-semibold'>About Numbertree</h1>
              </Link>
              <Link href={`/bim`}>
                <p>BIMfirst</p>
              </Link>
              <Link href={`/insights`}>
                <p>Insights</p>
              </Link>
              <Link href={`/career`}>
                <p>Careers</p>
              </Link>
              <Link href={`/contact`}>
                <p>Contact Us</p>
              </Link>
            </div>
            <div className='md:flex hidden flex-col w-3/5 '>
              {/* <h1 className='mb-2 text-xl font-semibold'>Offices</h1> */}
              <div className='grid grid-cols-3'>
                {/* <h1 className='mb-2 text-xl font-semibold '>Contacts</h1> */}
                <div>
                  <h2 className='font-bold text-lg mb-4'>Mumbai Office</h2>
                  <span className='flex '>
                    <IoMdCall size={20} className='text-white ' />
                    {`022-49617073`}
                  </span>

                  <p className='mt-2 text-sm w-5/6'>502 Town Centre-1,</p>
                  <p className=' text-sm w-5/6'>Andheri Kurla Road,</p>
                  <p className=' text-sm w-5/6'>Andheri East,</p>
                  <p className=' text-sm w-5/6'>Mumbai-400059.</p>
                </div>
                <div>
                  <h2 className='font-bold text-lg mb-4'>Delhi Office </h2>
                  <span className='flex'>
                    <IoMdCall size={20} className='text-white' />
                    {`011-41458409`}
                  </span>
                  <p className='mt-2 text-sm w-4/5'>A-99, 3rd Floor,</p>
                  <p className=' text-sm w-4/5'>Lajpat Nagar 2,</p>
                  <p className=' text-sm w-4/5'>New Delhi-110018.</p>
                </div>
                <div>
                  <h2 className='font-bold text-lg mb-4'>Dubai Office </h2>
                  <span className='flex'>
                    <IoMdCall size={20} className='text-white' />
                    {`+971 50 815 4933`}
                  </span>
                  <p className='mt-2 text-sm w-5/6'>Office No.1043-0,</p>
                  <p className=' text-sm w-5/6'>Dawood Building,Hor AL ANZ,</p>
                  <p className=' text-sm w-5/6'>Al Barsha PO Box-80080,</p>
                  <p className=' text-sm w-5/6'>United Arab Emirates.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='md:flex hidden flex-col items-center md:w-1/5 '>
            <div className='flex w-auto h-auto mr-8 mt-6'>
              <Image
                src={`/logo/numbertree-logo.png`}
                width={300}
                height={200}
                alt='logo'
              />
            </div>
            <div className='flex flex-row-5 gap-4'>
              <Link
                href={`https://www.facebook.com/p/NumberTree-Assurance-Services-100066721811439/`}
              >
                <Image
                  src={`/images/facebook.png`}
                  width={32}
                  height={32}
                  alt='logo'
                />
                {/* <FaFacebookF size={30} className='bg-white p-1  rounded-xl' /> */}
              </Link>
              <Link href={``}>
                <Image
                  src={`/images/instagram.png`}
                  width={32}
                  height={32}
                  alt='logo'
                />
                {/* <FaInstagram size={30} className='bg-white p-1  rounded-xl' /> */}
              </Link>
              <Link
                href={`https://in.linkedin.com/company/numbertree-advisor-pvt-ltd`}
              >
                <Image
                  src={`/images/linkedin-1.png`}
                  width={32}
                  height={32}
                  alt='logo'
                />
                {/* <FaLinkedinIn size={30} className='bg-white p-1 rounded-xl' /> */}
              </Link>
              <Link href={``}>
                <Image
                  src={`/images/youtube.png`}
                  width={32}
                  height={32}
                  alt='logo'
                />
                {/* <FiYoutube size={30} className='bg-white p-1 rounded-xl' /> */}
              </Link>
              <Link
                href={`https://twitter.com/numbertreellp?s=21&t=5IMHdP5ykmmz3QRuWsHNaQ`}
              >
                <Image
                  src={`/images/twitter.png`}
                  width={32}
                  height={32}
                  alt='logo'
                />
                {/* <FaXTwitter size={30} className='bg-white p-1 rounded-xl' /> */}
              </Link>
            </div>

            <p className='text-white ml-8 font-md w-2/3 mr-10 mt-4'>
              &copy; 2024 Numbertree LLP.
            </p>
            <p className='text-white ml-8 font-md w-2/3 mr-10 '>
              All Rights Reserved.
            </p>
          </div>
        </div>
        <div className='flex md:hidden flex-col '>
          <div className='flex w-auto h-auto mr-8 mt-6'>
            <Image
              src={`/logo/numbertree-logo.png`}
              width={300}
              height={200}
              alt='logo'
            />
          </div>
          <div className='flex flex-row-5 gap-4 ml-10'>
            <Link
              href={`https://www.facebook.com/p/NumberTree-Assurance-Services-100066721811439/`}
            >
              <FaFacebookF size={30} className='bg-white p-1  rounded-xl' />
            </Link>
            <Link href={``}>
              <FaInstagram size={30} className='bg-white p-1  rounded-xl' />
            </Link>
            <Link
              href={`https://in.linkedin.com/company/numbertree-advisor-pvt-ltd`}
            >
              <FaLinkedinIn size={30} className='bg-white p-1 rounded-xl' />
            </Link>
            <Link href={``}>
              <FiYoutube size={30} className='bg-white p-1 rounded-xl' />
            </Link>
            <Link
              href={`https://twitter.com/numbertreellp?s=21&t=5IMHdP5ykmmz3QRuWsHNaQ`}
            >
              <FaXTwitter size={30} className='bg-white p-1 rounded-xl' />
            </Link>
          </div>
          <p className='text-white font-md ml-10 mr-10 mt-4'>
            &copy; 2024 Numbertree. All Rights Reserved.
          </p>
        </div>
        <div className='flex text-white mt-8'>
          <div className='md:flex hidden flex-col w-1/2 ml-12'>
            <h1 className='mb-2 text-xl font-semibold'>Enquiry</h1>
            <div className='grid grid-cols-2'>
              <div
                onClick={() =>
                  (window.location.href = `mailto:Press.enquiries@numbertree.in`)
                }
              >
                <p className='text-base mb-3 font-normal  hover:cursor-pointer'>
                  Press.enquiries@numbertree.in
                </p>
              </div>
              <div
                onClick={() =>
                  (window.location.href = `mailto:services@numbertree.in`)
                }
              >
                <p className='text-base mb-3 font-normal hover:cursor-pointer '>
                  services@numbertree.in
                </p>
              </div>
              <div
                onClick={() =>
                  (window.location.href = `mailto:info@numbertree.in`)
                }
              >
                <p className='text-base mb-3 font-normal hover:cursor-pointer  '>
                  info@numbertree.in
                </p>
              </div>
              <div
                onClick={() =>
                  (window.location.href = `mailto:careers@numbertree.in`)
                }
              >
                <p className='text-base font-normal hover:cursor-pointer '>
                  careers@numbertree.in
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:w-1/2 ml-12 mt-10'>
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
