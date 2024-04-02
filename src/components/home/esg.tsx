// import Image from 'next/image';
// import { Button } from '../ui/button';

// const ESG = () => {
//   return (
//     <div>
//       <div className='md:grid grid-cols-2 mt-10 p-0'>
//         <div className='flex flex-col justify-center border border-t-1 border-r-1 border-b-1  border-num-indigo p-2'>
//           <div className=' ml-14 '>
//             <h1 className='text-7xl text-num-watermark text-opacity-50 font-medium'>
//               ESG
//             </h1>

//             <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
//               ESG
//             </h2>

//             <h3 className='-translate-y-10 md:text-xl text-num-indigo font-medium ml-1'>
//               {`Strategic Consulting`}
//             </h3>
//             <p className='text-num-blue md:text-lg text-sm  w-3/4 '>
//               Navigating Excellence:Your Gateway to Sustainable Living and
//               Responsible Business Practices.
//             </p>
//             <Button className='w-40 bg-num-indigo mt-10 border-0 hover:bg-num-orange'>{`Read More>`}</Button>
//           </div>
//         </div>
//         <div className='flex flex-row-reverse ml-0'>
//           <Image
//             src={'/images/esg-flip.jpg'}
//             height={1000}
//             width={1000}
//             alt='ESG image'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ESG;
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const ESG = () => {
  return (
    <div className='w-11/12 ml-16 mt-20 '>
      <div className='relative'>
        <Image
          src={'/images/esg1.jpg'}
          height={2048}
          width={786}
          alt='ESG image'
          className='w-full'
        />
        <div className='absolute inset-0 flex  '>
          <div className='bg-black md:bg-opacity-50 bg-opacity-40 w-full md:p-5'>
            <div className=' text-white ml-2 w-1/2'>
              <h2 className='md:text-5xl   text-sm  mb-2'>{'ESG'}</h2>
              <hr className='w-1/6 border-num-orange border-2 md:mt-3 md:mb-3' />
              <h3 className='md:text-3xl mb-2 '>{`Strategic Consulting`}</h3>
              <h3 className='md:text-lg  w-3/5'>{`Navigating Excellence:Your Gateway to Sustainable Living and
               Responsible Business Practices.`}</h3>
              <Link href={`/about/csr-esg`}>
                <Button className='w-40 bg-num-indigo md:mt-5  border-0 hover:bg-num-orange'>
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
