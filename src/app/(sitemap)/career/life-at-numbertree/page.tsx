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
        <Link href={'/contact/proposal'}>
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
              {/* <p className=' md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                Get in touch with our global experts to discover how Numbertree
                can help you realize your vision. Please choose an option below
                and we will get back to you shortly.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className='flex mt-10 flex-col items-center justify-center'>
        <div className='flex mt-0 flex-col items-center justify-center'>
          <div className=' flex w-11/12 mt-2 flex-col items-center justify-center mb-10 '>
            <div>
              <Tabs defaultValue='1' className='w-[full]'>
                <TabsList className='grid md:grid-cols-3 grid-cols-2  md:mb-4 mb-10 gap-2'>
                  <TabsTrigger value='1'>Diversity & Inclusion</TabsTrigger>
                  <TabsTrigger value='2'>#numbertreeDNA</TabsTrigger>
                  <TabsTrigger value='3'>Employee Stories</TabsTrigger>
                </TabsList>
                <hr className='border-b-2 border-num-orange' />
                <TabsContent value='1'>
                  <div className='grid md:grid-cols-2 bg-num-blue bg-opacity-10'>
                    <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                      <h1 className='text-sm mb-2'>Diversity & Inclusion</h1>
                      {/* <h2 className='text-2xl mb-2 w-3/4'>
                      Connecting the physical and digital worlds
                    </h2> */}
                      <p className='text-xl mt-2 mb-4 w-3/4'>
                        {`At Numbertree, diversity and inclusion is an integral
                        part of who we are. We believe in harnessing the power
                        of diverse perspectives, backgrounds, and experiences to
                        drive innovation and collaborative work culture . Our
                        inclusive environment ensures that every voice is not
                        only heard but also valued and respected. Join our team
                        where we're committed to fostering a culture of respect,
                        equality, and collaboration.`}
                      </p>
                    </div>
                    <Image
                      src={'/career/c1.jpg'}
                      height={600}
                      width={600}
                      alt='img'
                      className='p-4'
                    />
                  </div>
                </TabsContent>
                <TabsContent value='2'>
                  <div className='grid md:grid-cols-2'>
                    <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                      <h1 className='text-sm mb-2'>#numbertreeDNA</h1>

                      <p className='text-xl mt-2 mb-4 w-3/4'>
                        Our values are our core while our purpose gives us a
                        strong sense of direction and the path that we take. Our
                        team imbibes the values that we live by and that form
                        the unique #numbertreeDNA , a recognisable feature of
                        our team.
                      </p>
                    </div>
                    <Image
                      src={'/career/c3.jpg'}
                      height={600}
                      width={600}
                      alt='img'
                    />
                  </div>{' '}
                </TabsContent>
                <TabsContent value='3'>
                  <div className='grid md:grid-cols-2'>
                    <div className='flex flex-col justify-center pl-8 bg-gray-100'></div>
                    <Image
                      src={'/career/c1.jpg'}
                      height={600}
                      width={600}
                      alt='img'
                    />
                  </div>
                </TabsContent>
                <TabsContent value='4'>
                  <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-center pl-8 bg-gray-100'>
                      <h1 className='text-sm mb-2'>Employee Stories</h1>

                      <p className='text-xl mt-2 mb-4 w-3/4'></p>
                    </div>
                    <Image
                      src={'/bim/b4.jpg'}
                      height={600}
                      width={600}
                      alt='img'
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <h1 className='text-4xl pt-20 pb-6'>Experience life at Numbertree</h1>
        <div className='flex mb-20'>
          <Slider />
        </div>
      </div>
    </div>
  );
};
export default Page;
