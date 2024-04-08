import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const Connect = () => {
  return (
    <div className='md:p-8 md:mt-0 md:pt-20 mt-10'>
      <div className='md:flex flex-row gap-2 md:ml-4 mr-4'>
        <div className='flex flex-row relative h-96  mb-10 md:mb-0 md:ml-1'>
          <Image
            src={`/images/linkedin.jpg`}
            height={540}
            width={960}
            alt='linkedin'
            className='object-cover'
          />
          <div className=' absolute inset-0 bg-black bg-opacity-55'>
            <div className='ml-6'>
              <h1 className='text-num-orange text-4xl font-medium md:mt-4 mb-1'>
                Linkedin
              </h1>
              <h2 className=' md:text-3xl text-3xl font-medium md:mb-3 mb-1 text-white'>
                Empowering Tomorrow{`'`}s infrastructure
              </h2>
              <p className=' text-white md:text-lg'>
                We are a professional techno-commercial Audit firm, focussed on
                cost reduction through identification of frauds, theft, wastage,
                Quantity take off etc. We provide high quality construction cost
                consultancy to our clients.
              </p>
              <div className='flex flex-row-reverse md:mt-24 mr-4'>
                <Link
                  href={`https://in.linkedin.com/company/numbertree-advisor-pvt-ltd`}
                >
                  <Button className='w-40 mt-4 text-base bg-num-indigo border-0 hover:bg-num-orange'>
                    Follow us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='z-1 flex flex-row relative h-96'>
          <Image
            src={`/images/insightsBanner.jpg`}
            height={540}
            width={960}
            alt='insights'
            className='object-cover'
          />
          <div className=' absolute inset-0 bg-black bg-opacity-50'>
            <div className='ml-6'>
              <h1 className='text-num-orange text-4xl font-medium md:mt-4 mb-1'>
                Insights
              </h1>
              <h2 className='md:text-3xl text-xl  md:mb-3 mb-1 font-medium text-white'>
                Without Boundaries
              </h2>
              <p className='w-4/5 text-white md:text-lg'>
                Unravelling the meaning behind the news & trends
              </p>
              <div className='flex flex-row-reverse mr-4 md:mt-40'>
                <Link href={'/insights'}>
                  <Button className='w-40 mt-3 bg-num-indigo  border-0 hover:bg-num-orange'>
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Connect;
