import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
const ServiceMobileLinks = () => {
  return (
    <div>
      <div className='flex  pl-4 flex-col'>
        <h1 className='text-xl font-bold mb-2'> Follow Us</h1>

        <div className='flex gap-4 mb-8'>
          <Link
            href={`https://www.facebook.com/p/NumberTree-Assurance-Services-100066721811439/`}
          >
            <Image
              src={`/images/facebook.png`}
              width={32}
              height={32}
              alt='logo'
            />
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
          </Link>
          <Link href={``}>
            <Image
              src={`/images/instagram.png`}
              width={32}
              height={32}
              alt='logo'
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
              <Link href='/services/contract-administration'>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Contract Administration & Bill Verification
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
              <Link href='/services/claim-management'>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Construction Claim Management
                </Button>
              </Link>
              <Link href='/services/business-transformation'>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Business Transformation
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
