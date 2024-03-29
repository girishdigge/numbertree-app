import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const KeyFacts = () => {
  return (
    <div className='w-full '>
      <div className='mt-20 md:ml-14'>
        <h1 className='text-7xl text-num-watermark text-opacity-50 font-medium'>
          KeyFacts
        </h1>

        <h2 className='-translate-y-12 ml-1 text-5xl text-num-orange font-medium'>
          KeyFacts
        </h2>

        <h3 className='-translate-y-10 md:text-3xl w-1/2  ml-1'>
          {
            'We are commited to working with you collaboratively to understand your goals and create a strategy that will achieve them. '
          }
        </h3>
        {/* <h4 className='w-1/2 -translate-y-8 md:text-lg text-sm text-justify ml-2 mb-4 mt-4'>
          We 
        </h4> */}
        <div className='bg-num-indigo mr-20'>
          <div className='grid grid-cols-3 gap-y-20 p-20'>
            <div className='flex flex-col  text-white items-center justify-center gap-y-2 p-4'>
              <Image
                src={`/keyfacts/road.png`}
                width={100}
                height={100}
                alt='road'
                className='object-cover bg-num-indigo'
              />
              <h1 className='text-4xl'>6600+</h1>
              <h1 className='text-xl '>Roads & Highway Project(km)</h1>
            </div>
            <div className='flex flex-col text-white items-center gap-y-2 p-4 '>
              <Image
                src={`/keyfacts/oil.png`}
                width={100}
                height={100}
                alt='aim'
                className='object-cover bg-num-indigo'
              />
              <h1 className='text-4xl'>1230+</h1>
              <h1 className='text-xl'>Oil & Gas Pipeline(km)</h1>
            </div>
            <div className='flex flex-col text-white items-center gap-y-2 p-4'>
              <Image
                src={`/keyfacts/construction.png`}
                width={100}
                height={100}
                alt='integrity'
                className='object-cover bg-num-indigo'
              />
              <h1 className='text-4xl'>900+</h1>
              <h1 className='text-xl'>
                Civil Construction Projects (Mil Sq ft)
              </h1>
            </div>
            <div className='flex flex-col text-white items-center gap-y-2 p-4 '>
              <Image
                src={`/keyfacts/subway.png`}
                width={100}
                height={100}
                alt='social impact'
                className='object-cover bg-num-indigo'
              />
              <h1 className='text-4xl'>2000+</h1>
              <h1 className='text-xl'>Railways& Metro Projects (km)</h1>
            </div>
            <div className='flex flex-col text-white items-center gap-y-2 p-4'>
              <Image
                src={`/keyfacts/electricity.png`}
                width={100}
                height={100}
                alt='integrity'
                className='object-cover bg-num-indigo'
              />
              <h1 className='text-4xl'>3500+</h1>
              <h1 className='text-xl'>Power Transmission Towers</h1>
            </div>
            <div className='flex flex-col text-white items-center gap-y-2 p-4  '>
              <Image
                src={`/keyfacts/airplane.png`}
                width={100}
                height={100}
                alt='construction'
                className='object-cover bg-num-indigo'
              />
              <h1 className='text-4xl'>3500+</h1>
              <h1 className='text-xl'>Airport Projects</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KeyFacts;
