import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RxSlash } from 'react-icons/rx';
import { IoHomeSharp } from 'react-icons/io5';

import { Slider } from '@/components/sitemap/slider';
const Page = () => {
  return (
    <div className=''>
      <div className='relative flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href={'/'}>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={'/contact'}>
          <p className='font-bold text-num-indigo'>Career</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Life at Numbertree</p>
      </div>
      <div className='relative '>
        <Image
          src={`/career/career.jpg`}
          width={1920}
          height={768}
          alt='career'
          className='object-contain'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-0 bg-black  text-white'>
          <div className='ml-10'>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight '>
                Career
              </h1>
              <p className=' md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Get in touch with our global experts to discover how NumberTree
                can help you realize your vision. Please choose an option below
                and we will get back to you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex mt-0 flex-col items-center justify-center'>
        <div className=' flex w-11/12 mt-20 flex-col items-center justify-center mb-10 '>
          <div>
            <Tabs defaultValue='1' className='w-[full]'>
              <TabsList className='grid grid-cols-4 mb-4 gap-2'>
                <TabsTrigger value='1'>
                  Design & production automation
                </TabsTrigger>
                <TabsTrigger value='2'>Data management</TabsTrigger>
                <TabsTrigger value='3'>Digital asset management</TabsTrigger>
                <TabsTrigger value='4'>Collabration</TabsTrigger>
              </TabsList>

              <TabsContent value='1'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>Featured project 1</h1>
                    <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempora asperiores consequuntur repellendus reprehenderit
                      modi nam incidunt totam aperiam, perspiciatis praesentium
                      voluptates dolores velit, suscipit animi veritatis
                      possimus molestiae tenetur ut illo earum quasi voluptas
                      maiores odio blanditiis. Asperiores,
                    </p>
                    <Link href={'/bim'}>
                      <h4 className='text-sm mt-4 font-medium underline'>{`Find out more about our work ->`}</h4>
                    </Link>
                  </div>
                  <Image
                    src={'/images/tab1.jpg'}
                    height={600}
                    width={600}
                    alt='img'
                  />
                </div>
              </TabsContent>
              <TabsContent value='2'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>Featured project 2</h1>
                    <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempora asperiores consequuntur repellendus reprehenderit
                      modi nam incidunt totam aperiam, perspiciatis praesentium
                      voluptates dolores velit, suscipit animi veritatis
                      possimus molestiae tenetur ut illo earum quasi voluptas
                      maiores odio blanditiis. Asperiores,
                    </p>
                    <Link href={'/bim'}>
                      <h4 className='text-sm mt-4 font-medium underline'>{`Find out more about our work ->`}</h4>
                    </Link>
                  </div>
                  <Image
                    src={'/images/tab2.jpg'}
                    height={600}
                    width={600}
                    alt='img'
                  />
                </div>{' '}
              </TabsContent>
              <TabsContent value='3'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>Featured project 3</h1>
                    <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempora asperiores consequuntur repellendus reprehenderit
                      modi nam incidunt totam aperiam, perspiciatis praesentium
                      voluptates dolores velit, suscipit animi veritatis
                      possimus molestiae tenetur ut illo earum quasi voluptas
                      maiores odio blanditiis. Asperiores,
                    </p>
                    <Link href={'/bim'}>
                      <h4 className='text-sm mt-4 font-medium underline'>{`Find out more about our work ->`}</h4>
                    </Link>
                  </div>
                  <Image
                    src={'/images/tab3.jpg'}
                    height={600}
                    width={600}
                    alt='img'
                  />
                </div>
              </TabsContent>
              <TabsContent value='4'>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                    <h1 className='text-sm mb-2'>Featured project 4</h1>
                    <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2>
                    <p className='text-xl mt-2 mb-4 w-3/4'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempora asperiores consequuntur repellendus reprehenderit
                      modi nam incidunt totam aperiam, perspiciatis praesentium
                      voluptates dolores velit, suscipit animi veritatis
                      possimus molestiae tenetur ut illo earum quasi voluptas
                      maiores odio blanditiis. Asperiores,
                    </p>
                    <Link href={'/bim'}>
                      <h4 className='text-sm mt-4 font-medium underline'>{`Find out more about our work ->`}</h4>
                    </Link>
                  </div>
                  <Image
                    src={'/images/tab4.jpg'}
                    height={600}
                    width={600}
                    alt='img'
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <h1 className='text-4xl pt-20 pb-6'>
          Learn more from Numbertree Professionals
        </h1>
        <div className='flex mb-20'>
          <Slider />
        </div>
      </div>
    </div>
  );
};
export default Page;
