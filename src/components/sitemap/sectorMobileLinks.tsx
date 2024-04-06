import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
const SectorMobileLinks = () => {
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

          <div className='flex w-full gap-2'>
            <div className=''>
              <Link href={`/sectors/roads-highways`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Road & Highways
                </Button>
              </Link>
              <Link href={`/sectors/railways-metro`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Railways & Metro
                </Button>
              </Link>
              <Link href={`/sectors/aviation`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Airports & Aviation
                </Button>
              </Link>
              <Link href={`/sectors/ports`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Ports & Maritime
                </Button>
              </Link>
              {/* <Link href={`/sectors/bridges-structures`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Bridges & Structures
                </Button>
              </Link> */}
              <Link href={`/sectors/institutional`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Institutional
                </Button>
              </Link>
              <Link href={`/sectors/commercial`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Commercial
                </Button>
              </Link>
              <Link href={`/sectors/industrial`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Industrial
                </Button>
              </Link>
              <Link href={`/sectors/residential`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Residential
                </Button>
              </Link>
              <Link href={`/sectors/water-infrastructure`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Water Infrastructure
                </Button>
              </Link>
              <Link href={`/sectors/oil-gas`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Oil & Gas
                </Button>
              </Link>
              <Link href={`/sectors/power-transmission`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Power Transmission
                </Button>
              </Link>

              <Link href={`/sectors/renewable-energy`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Renewable Energy
                </Button>
              </Link>

              {/* <Link href={`/sectors/thermal-power-plant`}>
                <Button className='bg-num-indigo mb-2 mr-2 text-white hover:bg-wilmer-orange hover:text-white'>
                  Thermal Power Plant
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectorMobileLinks;
