import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
const ServiceMobileLinks = () => {
  return (
    <div>
      <div className='flex  pl-4 flex-col'>
        <h1 className='text-xl font-bold mb-2'> Follow Us</h1>

        <div className='flex gap-4 mb-4'>
          <Link
            href={`https://www.facebook.com/p/NumberTree-Assurance-Services-100066721811439/`}
          >
            <FaFacebookF
              size={30}
              className='bg-num-orange p-1 text-white  rounded-xl'
            />
          </Link>
          <Link
            href={`https://in.linkedin.com/company/numbertree-advisor-pvt-ltd`}
          >
            <FaLinkedinIn
              size={31}
              className='bg-num-orange text-white p-1 rounded-xl'
            />
          </Link>
          <Link
            href={`https://twitter.com/numbertreellp?s=21&t=5IMHdP5ykmmz3QRuWsHNaQ`}
          >
            <FaXTwitter
              size={30}
              className='bg-num-orange text-white p-1 rounded-xl'
            />
          </Link>
        </div>
        <div>
          <h2 className='text-xl font-bold flex  text-black mb-2 '>
            Our Services
          </h2>

          <div className='flex w-11/12 gap-2'>
            <div>
              {' '}
              <Link href='/services/techno-commercial-audit'>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Techno-Commercial Audit
                </Button>
              </Link>
              <Link href='/services/business-transformation'>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Business Transformation
                </Button>
              </Link>
              <Link href='/services/claim-management'>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Construction Claim Management
                </Button>
              </Link>
              <Link href='/services/contract-administration'>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Contract Adiministration & Bill Verification
                </Button>
              </Link>
              <Link href='/services/project-monitoring-and-control'>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Project Management Consultancy
                </Button>
              </Link>
              <Link href='/services/quantity-survey'>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Quantity Survey & Cost Control
                </Button>
              </Link>
              <Link href='/services/transaction-advisory'>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Transaction Advisory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceMobileLinks;
