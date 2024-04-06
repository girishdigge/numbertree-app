import Navbar from '@/app/navbar/page';
import Footer from '@/components/home/footer';

const SitemapLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default SitemapLayout;
