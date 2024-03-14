import Navbar from '@/app/navbar/page';
import Footer from '@/components/home/footer';
import { Toaster } from '@/components/ui/toaster';
const BIMLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};
export default BIMLayout;
