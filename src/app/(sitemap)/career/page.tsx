import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RxSlash } from 'react-icons/rx';
import { IoHomeSharp } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import BlogCard from '@/components/sitemap/blog-card';
import { ExploreArticles } from '@/data/Insights';

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
        {/* <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Business Transformation</p> */}
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

      <div className='flex flex-col bg-gray-100 '>
        <div className='ml-10  w-4/5'>
          <div>
            <h1 className='text-7xl text-num-watermark font-medium'>Career</h1>

            <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
              Career
            </h2>

            <h3 className='-translate-y-10 text-2xl text-num-indigo font-light mt-2'>
              {'We promise growth, inclusion and diversity'}
            </h3>
          </div>
          <h3 className='-translate-y-8 md:text-lg text-sm text-num-blue mb-8'>
            People are at the heart of our services. At Numbertree, you can
            create relationships that support your development and a career path
            that fits your goals. Come explore a world of opportunities in
            various functions and roles.
          </h3>
        </div>
      </div>
      <div className='grid md:grid-cols-2 '>
        <div className='flex flex-col justify-center pl-8 '>
          <h1 className='md:text-4xl text-2xl mb-2'>Career at Numbertree</h1>

          <p className='md:text-lg text-sm mt-2 mb-4 w-3/4'>
            Discover a rewarding career at Numbertree. Join a dynamic team of
            professionals dedicated to delivering excellence in engineering and
            audit services We believe we are as good as our team. We are here to
            make difference in the way infrastructure projects operate. We offer
            opportunities for growth, collaboration, and innovation in a
            supportive environment. Explore your potential and make a meaningful
            impact with us.
          </p>
          <Link href={`/career/jobs`}>
            <Button className='w-40 text-lg bg-num-indigo  hover:bg-num-orange'>
              Apply Now
            </Button>
          </Link>
        </div>
        <Image src={'/career/career2.jpg'} height={600} width={800} alt='img' />
      </div>
      <div className=' pt-10'>
        <div className='md:relative w-11/12'>
          <Image
            src={`/career/office1.jpg`}
            width={1500}
            height={600}
            alt='business transformation'
            className='object-contain md:inline hidden'
          />
          <div className='md:absolute md:-inset-20 flex flex-col justify-center items-end'>
            <div className=' bg-num-indigo p-20 gap-4 flex flex-col md:w-1/3  text-white'>
              <h1 className='text-xl'>Explore career</h1>
              <h2 className='text-4xl font-bold'>Life at Numbertree</h2>
              <p className='text-justify text-lg'>
                Experience our culture at, where collaboration thrives in a
                supportive and fun environment, fostering innovation, diversity
                and professional growth. Join us!
              </p>
              <Link href={`/career/life-at-numbertree`}>
                <Button className='w-40 text-lg bg-num-orange  hover:bg-white hover:text-num-orange'>
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 bg-gray-20 pt-8 pb-8'>
        <div className='flex flex-col justify-center '>
          <div className='ml-10   w-4/5'>
            <div>
              <h1 className='text-7xl text-num-watermark font-medium'>
                Our Vision
              </h1>

              <h2 className='-translate-y-12 ml-1 text-4xl text-num-indigo font-medium'>
                Our Vision
              </h2>

              <h3 className='-translate-y-10 text-lg text-justify  text-num-indigo font-light mt-2'>
                {
                  'We are enablers of change, for our clients, for our environment & our people such that progress, growth and sustainability go hand in hand.'
                }
              </h3>
            </div>
            <Link href={`/about`}>
              <Button className='w-40 text-lg bg-num-indigo  hover:bg-num-orange'>
                Read More
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src={'/career/vision.jpg'}
          height={600}
          width={800}
          alt='img'
          className=''
        />
      </div>
      <div className='grid md:grid-cols-2 bg-gray-20 pt-8 pb-8'>
        <Image
          src={'/career/mission.jpg'}
          height={600}
          width={800}
          alt='img'
          className=''
        />
        <div className='flex flex-col justify-center '>
          <div className='ml-10   w-4/5'>
            <div>
              <h1 className='text-7xl text-num-watermark font-medium'>
                Our Mission
              </h1>

              <h2 className='-translate-y-12 ml-1 text-4xl text-num-indigo font-medium'>
                Our Mission
              </h2>

              <h3 className='-translate-y-10 text-lg text-justify text-num-indigo font-light mt-2'>
                {
                  'Our mission is to empower businesses with decision making insights to unlock their full potential and help them realize their objective to unlock their full potential.'
                }
              </h3>
            </div>
            <Link href={`/about`}>
              <Button className='w-40 text-lg bg-num-indigo  hover:bg-num-orange'>
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className='md:relative '>
          <Image
            src={'/career/values.jpg'}
            height={800}
            width={1920}
            alt='img'
            className=''
          />
          <div className='md:absolute md:inset-10 flex flex-col justify-end items-center'>
            <Link href={`/about/values`}>
              <Button className='w-40 text-lg bg-num-indigo  hover:bg-white hover:text-num-orange'>
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className='flex  mt-20'>
          <h2 className=' md:text-2xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium ml-14 mb-2'>
            Latest Insights
          </h2>
        </div>
        <div className='container mx-auto px-4 py-8'>
          {/* <h1 className='text-3xl font-bold mb-4'>Latest Blogs</h1> */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
            {ExploreArticles.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>

        {/* <div className='flex justify-center items-center mb-20'>
          <div className='grid grid-cols-3 '>
            <div className='  flex flex-col items-center justify-center'>
              <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
                <Image
                  src={`/career/blog.jpg`}
                  width={400}
                  height={400}
                  alt='business transformation'
                  className='object-contain mt-10'
                />
                <Link href={`/career`}>
                  <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                    <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                      <div className='ml-8'>
                        <h1 className='text-num-orange ml-1'>Insight</h1>
                        <h2 className='font-bold pb-2  md:text-2xl'>
                          Insight Title
                        </h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <h2 className='text-xl w-3/4 font-bold mt-2 mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h2>
              <p className='w-3/4 text-justify mb-10'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                fugit magnam dolorem commodi. adipisicing elit.
              </p>
            </div>
            <div className='  flex flex-col items-center justify-center'>
              <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
                <Image
                  src={`/career/blog.jpg`}
                  width={400}
                  height={400}
                  alt='business transformation'
                  className='object-contain mt-10'
                />
                <Link href={`/career`}>
                  <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                    <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                      <div className='ml-8'>
                        <h1 className='text-num-orange ml-1'>Insight</h1>
                        <h2 className='font-bold pb-2  md:text-2xl'>
                          Insight Title
                        </h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <h2 className='text-xl w-3/4 font-bold mt-2 mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h2>
              <p className='w-3/4 text-justify mb-10'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                fugit magnam dolorem commodi. adipisicing elit.
              </p>
            </div>
            <div className='  flex flex-col items-center justify-center'>
              <div className=' group relative hover:scale-110 transition duration-500 ease-in-out'>
                <Image
                  src={`/career/blog.jpg`}
                  width={400}
                  height={400}
                  alt='business transformation'
                  className='object-contain mt-10'
                />
                <Link href={`/career`}>
                  <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                    <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                      <div className='ml-8'>
                        <h1 className='text-num-orange ml-1'>Insight</h1>
                        <h2 className='font-bold pb-2  md:text-2xl'>
                          Insight Title
                        </h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <h2 className='text-xl w-3/4 font-bold mt-2 mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h2>
              <p className='w-3/4 text-justify mb-10'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                fugit magnam dolorem commodi. adipisicing elit.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Page;
