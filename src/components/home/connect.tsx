import Image from 'next/image';
import { Button } from '../ui/button';

const Connect = () => {
  return (
    <div className='bg-num-blue bg-opacity-10 md:p-8 md:mt-0 mt-10'>
      <div className='md:flex flex-row gap-2 md:ml-4 mr-4'>
        <div className='flex flex-row relative h-96  mb-10 md:mb-0 md:ml-1'>
          <Image
            src={`/connect/linkedin.png`}
            height={540}
            width={960}
            alt='linkedin'
            className='object-cover'
          />
          <div className=' absolute inset-0 bg-black bg-opacity-55'>
            <div className='ml-6'>
              <h1 className='text-num-orange text-4xl font-bold md:mt-4 mb-1'>
                Linkedin
              </h1>
              <h2 className=' md:text-3xl text-3xl font-medium md:mb-3 mb-1 text-white'>
                Empowering Tomorrow{`'`}s infrastructure
              </h2>
              <p className=' text-white md:text-lg'>
                We perform Construction Site Audits of EPC & BOT Road Projects,
                Tunnel & Bridge Projects, Industrial Projects, Metro & Rail
                Projects, Water Treatment Plants, Transmission and Distribution
                projects, Oil & Gas projects, Power Projects, Real Estate –
                Residential...
              </p>
              <div className='flex flex-row-reverse mt-24 mr-4'>
                <Button className='w-40 mt-2 text-base bg-num-indigo border-0 hover:bg-num-orange'>
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='z-1 flex flex-row relative h-96'>
          <Image
            src={`/connect/insignts.png`}
            height={540}
            width={960}
            alt='insights'
            className='object-cover'
          />
          <div className=' absolute inset-0 bg-black bg-opacity-50'>
            <div className='ml-6'>
              <h1 className='text-num-orange text-4xl font-bold md:mt-4 mb-1'>
                Insights
              </h1>
              <h2 className='md:text-3xl text-xl  md:mb-3 mb-1 font-medium text-white'>
                Without Boundaries
              </h2>
              <p className='w-4/5 text-white md:text-lg'>
                Pioneering intellectual direction focused on the significant
                issues shaping both the present and the future.
              </p>
              <div className='flex flex-row-reverse mr-4 md:mt-36'>
                <Button className='w-40 mt-3 bg-num-indigo  border-0 hover:bg-num-orange'>
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Connect;
