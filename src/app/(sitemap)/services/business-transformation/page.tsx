import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

const Page = () => {
  return (
    <div>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='/services/1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={`/services`}>
          <p className='font-bold text-num-indigo'>Services</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Business Transformation</p>
      </div>
      <div className='flex flex-col'>
        <Image
          src={`/services/BusinessTransformation.jpg`}
          width={1200}
          height={400}
          alt='business transformation'
        />
      </div>
      <h1 className='-translate-y-20 font-bold text-7xl flex justify-center text-white'>
        Business Transformation
      </h1>
      <br />
      <div className='flex flex-row'>
        <div className='w-2/3 ml-40'>
          <h1 className='text-xl flex justify-center font-semibold text-num-indigo mb-4'>
            Heading goes here
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam
            pariatur, ipsa amet error, maxime quia placeat quam fugiat enim nemo
            quibusdam accusantium quas aliquid quidem. Excepturi eaque quos
            quidem repellat quas voluptates! Sunt magni cupiditate atque cum
            optio. Expedita totam rem assumenda ipsum, sunt reprehenderit,
            accusantium voluptate labore facilis doloribus sed illum nesciunt
            provident impedit id dolorem minima earum architecto sint
            repudiandae eligendi aliquam quis, maiores vero. Pariatur, dolores
            minima incidunt tempora ipsum animi impedit laboriosam aliquid ipsam
            nisi modi. Eveniet accusantium a repellendus recusandae neque quos?
            Repudiandae impedit numquam doloribus libero quo culpa deleniti
            optio facilis sit, delectus, ratione repellat eos earum nisi natus.
            Ipsa assumenda eligendi blanditiis accusamus sint laborum facere
            dicta fugit quibusdam. Quam ut, laboriosam at, a possimus ex soluta
            perferendis fuga id exercitationem explicabo ad expedita repellat
            alias amet pariatur ipsa laborum? Hic sed earum necessitatibus
            quidem dolore amet doloribus. Aliquam similique distinctio
            aspernatur?
          </p>
        </div>
        <div className='w-1/3 flex justify-center'>CTA</div>
      </div>
    </div>
  );
};
export default Page;
