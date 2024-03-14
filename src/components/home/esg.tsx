import Image from 'next/image';
import { Button } from '../ui/button';

const ESG = () => {
  return (
    <div>
      <div className='md:grid grid-cols-2 mt-10 p-0'>
        <div className='flex flex-col justify-center border border-t-1 border-r-1 border-b-1 bg-num-blue bg-opacity-10 border-num-indigo p-2'>
          <div className=' ml-14 '>
            <h1 className='text-7xl text-num-watermark text-opacity-50 font-medium'>
              ESG
            </h1>

            <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
              ESG
            </h2>

            <h3 className='-translate-y-10 md:text-2xl text-num-indigo font-light ml-1'>
              {`Strategic Consulting`}
            </h3>
            <p className='text-num-blue md:text-base text-sm  w-3/4 '>
              Navigating Excellence:Your Gateway to Sustainable Living and
              Responsible Business Practices.
            </p>
            <Button className='w-40 bg-num-indigo mt-10 border-0 hover:bg-num-orange'>{`Read More>`}</Button>
          </div>
        </div>
        <div className='flex flex-row-reverse ml-0'>
          <Image
            src={'/images/esg-flip.jpg'}
            height={1000}
            width={1000}
            alt='ESG image'
          />
        </div>
      </div>
    </div>
  );
};
export default ESG;
