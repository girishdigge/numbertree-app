'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Label } from '@radix-ui/react-dropdown-menu';

import { ConnectInputForm } from './connectInput';
const GetCallDropDown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Label className='rounded-sm p-2 px-4 text-white bg-num-indigo hover:bg-num-orange'>
            Connect
          </Label>{' '}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className='text-lg bg-gray-100'>
            Request a call from us
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ConnectInputForm />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default GetCallDropDown;
