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
const SectorLinks = () => {
  return (
    <div className='md:flex w-1/4 hidden  pl-4 flex-col'>
      <h1 className='text-xl font-bold mb-2'>Follow Us</h1>

      <div className='flex gap-4 mb-12'>
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
        <h2 className='text-xl font-bold flex  text-black mt-2 mb-2 '>
          Our Sectors
        </h2>
        <div>
          {' '}
          <Accordion type='single' collapsible className='w-full '>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Transportation</AccordionTrigger>
              <Link href={`/sectors/aviation`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Airport & Aviation
                </AccordionContent>
              </Link>
              <Link href={`/sectors/roads-highways`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Roads & Highways
                </AccordionContent>
              </Link>
              <Link href={`/sectors/railways-metro`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Railways & Metro
                </AccordionContent>
              </Link>
              <Link href={`/sectors/ports`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Ports & Maritime
                </AccordionContent>
              </Link>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                <div className='flex items-start justify-start mr-2'>
                  <p>Urban </p>
                  <p> -</p> <p>Infrastructure</p>
                </div>
              </AccordionTrigger>
              <Link href={`/sectors/institutional`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Institutional
                </AccordionContent>
              </Link>
              <Link href={`/sectors/industrial`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Industrial
                </AccordionContent>
              </Link>
              <Link href={`/sectors/commercial`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Commercial
                </AccordionContent>
              </Link>
              <Link href={`/sectors/residential`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Residential
                </AccordionContent>
              </Link>
              <Link href={`/sectors/water-infrastructure`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Water Infrastructure
                </AccordionContent>
              </Link>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Energy</AccordionTrigger>
              <Link href={`/sectors/oil-gas`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Oil gas
                </AccordionContent>
              </Link>
              <Link href={`/sectors/power-transmission`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Power Transmission
                </AccordionContent>
              </Link>
              <Link href={`/sectors/renewable-energy`}>
                <AccordionContent className='bg-gray-100 mb-2 text-lg items-center justify-center hover:border-2 hover:border-wilmer-orange'>
                  Renewable Energy
                </AccordionContent>
              </Link>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default SectorLinks;

// <div className='flex flex-col gap-2'>
//   <div className='w-1/2'>
//     <Link href={`/sectors/aviation`}>
//       <Button className='w-52 items-start justify-start  mb-2 text-black bg-gray-100 hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Airport & Aviation
//       </Button>
//     </Link>
//     {/* <Link href={`/sectors/bridges-structures`}>
//               <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//                 Bridges & Structures
//               </Button>
//             </Link> */}
//     <Link href={`/sectors/commercial`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Commercial
//       </Button>
//     </Link>
//     <Link href={`/sectors/industrial`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Industrial
//       </Button>
//     </Link>
//     <Link href={`/sectors/institutional`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Institutional
//       </Button>
//     </Link>
//     <Link href={`/sectors/oil-gas`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Oil & Gas
//       </Button>
//     </Link>
//     <Link href={`/sectors/power-transmission`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Power Transmission
//       </Button>
//     </Link>
//     <Link href={`/sectors/ports`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Ports
//       </Button>
//     </Link>
//     <Link href={`/sectors/renewable-energy`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Renewable Energy
//       </Button>
//     </Link>
//     <Link href={`/sectors/residential`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Residential
//       </Button>
//     </Link>
//     <Link href={`/sectors/roads-highways`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Roads & Highways
//       </Button>
//     </Link>
//     <Link href={`/sectors/railways-metro`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Railways & Metro
//       </Button>
//     </Link>
//     {/* <Link href={`/sectors/thermal-power-plant`}>
//               <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//                 Thermal Power Plant
//               </Button>
//             </Link> */}
//     <Link href={`/sectors/water-infrastructure`}>
//       <Button className='w-52 items-start justify-start bg-gray-100 mb-2 text-black  hover:border-2 hover:border-wilmer-orange hover:bg-num-gray'>
//         Water Infrastructure
//       </Button>
//     </Link>
//   </div>
// </div>;
