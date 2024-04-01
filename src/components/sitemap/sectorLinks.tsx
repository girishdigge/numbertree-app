import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
const SectorLinks = () => {
  return (
    <div className='md:flex w-1/4 hidden  pl-4 flex-col'>
      <h1 className='text-xl font-bold mb-2'> Share this page</h1>

      <div className='flex gap-4 mb-12'>
        <FaFacebookF
          size={30}
          className='bg-num-orange p-1 text-white  rounded-xl'
        />
        <FaLinkedinIn
          size={31}
          className='bg-num-orange text-white p-1 rounded-xl'
        />
        <FaXTwitter
          size={30}
          className='bg-num-orange text-white p-1 rounded-xl'
        />
      </div>
      <div>
        <h2 className='text-xl font-bold flex  text-black mt-2 mb-2 '>
          Our Sectors
        </h2>
        <div className='flex flex-col gap-2'>
          <div className='w-1/2'>
            <Link href={`/sectors/aviation`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Aviation
              </Button>
            </Link>
            <Link href={`/sectors/bridges-structures`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Bridges & Structures
              </Button>
            </Link>
            <Link href={`/sectors/commercial`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Commercial
              </Button>
            </Link>
            <Link href={`/sectors/industrial`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Industrial
              </Button>
            </Link>
            <Link href={`/sectors/institutional`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Institutional
              </Button>
            </Link>
            <Link href={`/sectors/oil-gas`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Oil & Gas
              </Button>
            </Link>
            <Link href={`/sectors/power-transmission`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Power Transmission
              </Button>
            </Link>
            <Link href={`/sectors/ports`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Ports
              </Button>
            </Link>
            <Link href={`/sectors/renewable-energy`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Renewable Energy
              </Button>
            </Link>
            <Link href={`/sectors/residential`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Residential
              </Button>
            </Link>
            <Link href={`/sectors/roads-highways`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Roads & Highways
              </Button>
            </Link>
            <Link href={`/sectors/railways-metro`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Railways & Metro
              </Button>
            </Link>
            <Link href={`/sectors/thermal-power-plant`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Thermal Power Plant
              </Button>
            </Link>
            <Link href={`/sectors/water-infrastructure`}>
              <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
                Water Infrastructure
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectorLinks;
