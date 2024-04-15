// 'use client';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

// import { Label } from '@radix-ui/react-dropdown-menu';

// import { ConnectInputForm } from './connectInputDropdown';
// const GetCallDropDown = () => {
//   return (
//     <div>
//       <DropdownMenu>
//         <DropdownMenuTrigger>
//           <Label className='rounded-sm p-2 px-4 text-white bg-num-indigo hover:bg-num-orange'>
//             Connect
//           </Label>{' '}
//         </DropdownMenuTrigger>
//         <DropdownMenuContent>
//           <DropdownMenuLabel className='text-lg bg-num-indigo'>
//             <h1 className='text-xl tracking-widest text-white ml-4 pt-2'>
//               Request a call from us
//             </h1>
//           </DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <ConnectInputForm />
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// };
// export default GetCallDropDown;

'use client';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import { Label } from '@radix-ui/react-dropdown-menu';

import { ConnectInputForm } from './connectInputDropdown';
const GetCallDropDown = () => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          <Label className='rounded-sm p-2 px-4 text-white bg-num-indigo hover:bg-num-orange'>
            Connect
          </Label>
        </HoverCardTrigger>
        <HoverCardContent className=''>
          <h1 className='text-xl tracking-widest p-4 text-white bg-num-indigo'>
            Request a call from us
          </h1>

          <ConnectInputForm />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
export default GetCallDropDown;
