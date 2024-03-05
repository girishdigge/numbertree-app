import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';
const Page = () => {
  const featuredProjects = [
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Guwahati Airport',
      content:
        'Quantity surveying plays a vital role in ensuring accurate cost estimation and effective resource allocation.',
      link: '/quantity-survey',
      image: '/projects/GuwahatiAirport.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Parliment,New Delhi',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/projects/new-parliment',
      image: '/projects/newParliment1.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Mercedes Benz,Pune',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/merc.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Leh Airport',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/leh.jpg', // replace with the actual image path
    },
  ];
  const projects = [
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Bharat Mandapam G20',
      content:
        'Quantity surveying plays a vital role in ensuring accurate cost estimation and effective resource allocation.',
      link: '/quantity-survey',
      image: '/projects/bm-g20.webp', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Pune Metro',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/puneMetro1.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'mumbai Delhi Expressway',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/mumbaiDelhiExpressway.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'purvanchal Expressway',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/purvanchalExpressway.jpeg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'STP Kanpur',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/STP_Kanpur.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'transmission Distribution Bihar',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/transmission_Bihar.jpg', // replace with the actual image path
    },
  ];
  return (
    <div>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Projects</p>
      </div>
      <div className='flex w-full'>
        <Image
          src={'/projects/banner.png'}
          height={768}
          width={1920}
          alt='services banner'
        />
      </div>
      <div className='flex flex-col bg-gray-100'>
        <div className='ml-10 w-4/5'>
          <div>
            <h1 className='text-7xl text-num-watermark font-medium'>
              Projects
            </h1>

            <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
              Projects
            </h2>

            <h3 className='-translate-y-10 text-2xl text-num-indigo font-light mt-2'>
              {'Commited To Excellence Across Infra Projects'}
            </h3>
          </div>
          <h3 className='-translate-y-8 text-base text-num-blue mb-8'>
            At NumberTree, we are experts at handling and serving projects which
            are multidimensional, large scale and complex. From the challenging
            Tsunami Rehabilitation Project at Nicobar Island to the New
            parliament building, New Delhi. We approach each project with an aim
            to positively impact communities around us and help them prosper.
          </h3>
        </div>
      </div>
      <h1 className='text-2xl text-num-orange flex justify-center mt-2'>
        Featured Projects
      </h1>
      <div className='grid grid-cols-2 gap-8 mt-4 mb-4'>
        {featuredProjects.map((projects, index) => (
          <div key={index}>
            <div className='flex flex-row  relative hover:scale-115 transform transition-all duration-500 ease-in-out'>
              <Link href={projects.link}>
                <Image
                  src={projects.image}
                  width={800}
                  height={400}
                  alt={projects.location}
                  className='object-contain'
                />

                <div className='ml-6 z-10 absolute flex flex-col-reverse inset-0 '>
                  <span className='text-white font-bold'>
                    Find out more
                    <Button className='w-10 ml-2 mb-2 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                      {`+`}
                    </Button>
                  </span>
                  <h1 className='text-white text-2xl font-bold '>
                    {projects.location}
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <h1 className='text-2xl text-num-orange flex justify-center mt-2'>
        All Projects
      </h1>
      <div className='grid grid-cols-2 gap-8 mt-4 mb-4'>
        {projects.map((projects, index) => (
          <div key={index}>
            <div className='flex flex-row  relative hover:scale-115 transform transition-all duration-500 ease-in-out'>
              <Link href={projects.link}>
                <Image
                  src={projects.image}
                  width={800}
                  height={400}
                  alt={projects.location}
                  className='object-contain'
                />

                <div className='ml-6 z-10 absolute flex flex-col-reverse inset-0 '>
                  <span className='text-white font-bold'>
                    Find out more
                    <Button className='w-10 ml-2 mb-2 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                      {`+`}
                    </Button>
                  </span>
                  <h1 className='text-white text-2xl font-bold '>
                    {projects.location}
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-row justify-center text-num-indigo font-bold mt-10 mb-4'>
        <h1 className='text-2xl'>Explore more</h1>
      </div>
      <div className='w-11/12  flex flex-rows items-center justify-center ml-10 gap-6 mb-10'>
        <div className='flex flex-col w-1/2 border border-1 border-b-4 border-b-num-orange shadow-xl bg-white text-num-indigo hover:bg-num-indigo hover:border-b-0 hover:text-white'>
          <Link href={`/services`}>
            <div className='flex flex-row '>
              <Image
                src={'/images/service.jpg'}
                height={120}
                width={120}
                alt='services'
                className='m-4'
              />
              <div className='flex-flex-cols'>
                <h1 className='text-4xl mt-4 font-bold'>Services</h1>
                <h2 className='text-lg'>
                  Empowering decision making to transform
                </h2>
              </div>
            </div>
            <div className='w-11/12 flex flex-row-reverse ml-4 mb-4'>
              We partner with clients across the infrastructure landscape to
              help them deliver projects, of varying of complexity and at
              various stages of development. At the same time, we help them
              adopt solutions that make a positive & lasting impact in their
              field of operations.
            </div>
          </Link>
        </div>
        <div className='flex flex-col w-1/2 border border-1 border-b-4 border-b-num-orange shadow-xl bg-white text-num-indigo hover:bg-num-indigo hover:border-b-0 hover:text-white'>
          <Link href={`/sectors`}>
            <div className='flex flex-row '>
              <Image
                src={'/images/sector.jpg'}
                height={120}
                width={120}
                alt='sector'
                className='m-4'
              />
              <div className='flex-flex-cols'>
                <h1 className='text-4xl mt-4 font-bold'>Sectors</h1>
                <h2 className='text-lg'>
                  Expertise across the infrastructure spectrum
                </h2>
              </div>
            </div>
            <div className='w-11/12 flex flex-row-reverse ml-4 mb-4'>
              We are infrastructure experts. Adapting to the needs of the
              companies we serve, is our forte.With close to two decades of
              experience, we have earned the trust of diverse businesses across
              the infrastructure spectrum.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page;
