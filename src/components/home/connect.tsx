import Image from 'next/image';
import { Button } from '../ui/button';

const Connect = () => {
  return (
    <div className='bg-num-blue bg-opacity-10 p-10'>
      <div className='flex flex-row gap-4 ml-4 mr-4'>
        <div className='flex flex-row relative h-80 ml-1'>
          <Image
            src={`/connect/linkedin.png`}
            height={400}
            width={600}
            alt='linkedin'
            className='object-cover'
          />
          <div className=' absolute inset-0 bg-black bg-opacity-55'>
            <div className='ml-6'>
              <h1 className='text-num-orange text-2xl font-bold mt-4 mb-4'>
                Linkedin
              </h1>
              <h2 className=' text-3xl font-medium mb-3 text-white'>
                Empowering Tomorrow{`'`}s infrastructure
              </h2>
              <p className=' text-white'>
                We perform Construction Site Audits of EPC & BOT Road Projects,
                Tunnel & Bridge Projects, Industrial Projects, Metro & Rail
                Projects, Water Treatment Plants, Transmission and Distribution
                projects, Oil & Gas projects, Power Projects, Real Estate –
                Residential & Commercial Projects, Institutional and Civil
                Projects.
              </p>
              <div className='flex flex-row-reverse mr-4'>
                <Button className='w-40 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                  Connect{`>`}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='z-1 flex flex-row relative h-80'>
          <Image
            src={`/connect/insignts.png`}
            height={400}
            width={600}
            alt='insights'
            className='object-cover'
          />
          <div className=' absolute inset-0 bg-black bg-opacity-50'>
            <div className='ml-6'>
              <h1 className='text-num-orange text-2xl font-bold mt-4 mb-4'>
                Insights
              </h1>
              <h2 className='text-3xl  mb-3 font-medium text-white'>
                Without Boundaries
              </h2>
              <p className='w-4/5 text-white'>
                Pioneering intellectual direction focused on the significant
                issues shaping both the present and the future.
              </p>
              <div className='flex flex-row-reverse mr-4 mt-20'>
                <Button className='w-40 mt-3 bg-num-indigo  border-0 hover:bg-num-orange'>
                  Explore{`>`}
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
