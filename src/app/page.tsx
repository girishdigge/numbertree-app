import Navbar from './navbar/page';
import AboutUs from '../components/home/aboutUs';
import Carousel from '../components/home/carousel';
import Services from '../components/home/services';
import Sectors from '../components/home/sectors';
import Projects from '../components/home/projects';
import Career from '../components/home/career';
import Experience from '@/components/home/experience';
import KeyFacts from '@/components/home/keyFacts';
import ESG from '@/components/home/esg';
import Footer from '@/components/home/footer';
import Connect from '@/components/home/connect';
import Testimonials from '@/components/home/testimonials';
import FloatingButton from '@/components/ui/floatingButton';
import WhatsAppCTA from '@/components/ui/whatsAppCTA';
import Services1 from '@/components/home/services1';
export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <FloatingButton /> */}
      {/* <WhatsAppCTA /> */}
      <Carousel />
      <Experience />
      <AboutUs />
      <Sectors />
      <Services1 />
      {/* <Services /> */}
      <KeyFacts />
      <Projects />
      <Testimonials />
      <Career />
      <ESG />
      <Connect />
      <Footer />
    </div>
  );
}
