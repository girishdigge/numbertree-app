import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const ESG = () => {
  return (
    <div className='md:w-11/12 md:ml-16 mt-20 md:pb-0 pb-20'>
      <div className='relative'>
        <Image
          src={'/images/esg1.jpg'}
          height={2048}
          width={786}
          alt='ESG image'
          className='w-full md:h-auto h-48'
        />
        <div className='absolute inset-0 flex  '>
          <div className='bg-black md:bg-opacity-50 bg-opacity-40 w-full md:p-5'>
            <div className=' text-white ml-2 md:w-1/2'>
              <h2 className='md:text-5xl   text-sm  mb-2'>{'ESG'}</h2>
              <hr className='w-1/6 border-num-orange border-2 md:mt-3 md:mb-3' />
              <h3 className='md:text-3xl md:mb-2 '>{`Strategic Consulting`}</h3>
              <h3 className='md:text-lg text-sm md:w-11/12'>{`By integrating ESG considerations into project planning, execution, and management, infrastructure companies can create lasting positive impact, while also building resilience in this rapidly changing world.`}</h3>
              {/* <Link href={`/about/csr-esg`}> */}
              <Link href={`#`}>
                <Button className='w-40 bg-num-indigo md:mt-5 mt-1 border-0 hover:bg-num-orange'>
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ESG;
