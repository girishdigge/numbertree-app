import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ServiceLinks = () => {
  return (
    <div className='md:flex w-1/4 hidden  pl-4 flex-col'>
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
        <h2 className='text-xl font-bold flex  text-black mt-2 mb-2 '>
          Other Services
        </h2>
        <div className='flex flex-col gap-2'>
          <div className='w-1/2'>
            <Link href='/services/techno-commercial-audit'>
              <Button className='w-60 items-start justify-start  mb-2 text-black bg-gray-100 hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Techno-Commercial Audit
              </Button>
            </Link>
            <Link href='/services/contract-administration'>
              <Button className='w-60 items-start justify-start h-14 flex flex-col mb-2 text-black bg-gray-100 hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                <h1> Contract Adiministration and</h1>
                <h1> Bill Verification</h1>
              </Button>
            </Link>

            <Link href='/services/project-monitoring-and-control'>
              <Button className='w-60 items-start justify-start h-14 flex flex-col mb-2 text-black bg-gray-100 hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                <h1>Project Management</h1>
                <h1>Consultancy</h1>
              </Button>
            </Link>

            <Link href='/services/quantity-survey'>
              <Button className='w-60 items-start justify-start h-14 flex flex-col mb-2 text-black bg-gray-100 hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                <h1> Quantity Survey and</h1>
                <h1> Cost Control</h1>
              </Button>
            </Link>
            <Link href='/services/claim-management'>
              <Button className='w-60 h-14 items-start justify-start flex flex-col mb-2 text-black bg-gray-100 hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                <h1>Construction Claim </h1>
                <h1>Management</h1>
              </Button>
            </Link>

            <Link href='/services/business-transformation'>
              <Button className='w-60 items-start justify-start  mb-2 text-black bg-gray-100 hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                <h1 className='w-3/4'>Business Transformation</h1>
              </Button>
            </Link>
            <Link href='/services/transaction-advisory'>
              <Button className='w-60 items-start justify-start  mb-2 text-black bg-gray-100 hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Transaction Advisory
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceLinks;
