import { Toaster } from '@/components/ui/toaster';
const NavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col'>
      {children}
      <Toaster />
    </div>
  );
};
export default NavBar;
