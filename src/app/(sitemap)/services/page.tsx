import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

const Page = () => {
  const services = [
    {
      id: 0,
      name: 'Business Transformation',
      imageUrl: '/services/BusinessTransformation1.jpg',
      content: {
        heading: 'Business Transformation',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '/services/business-transformation',
      },
    },
    {
      id: 1,
      name: 'Contract Adiministration',
      imageUrl: '/services/ContractAdminstration1.jpg',
      content: {
        heading: 'Contract Adiministration',
        paragraph: `As a consulting engineering firm, we understand the importance of
            efficient contract administration and accurate bill checking in
            maintaining financial integrity and control of infrastructure &
            construction projects.`,
        link: '/services/contract-administration',
      },
    },
    {
      id: 2,
      name: 'Quantity Survey',
      imageUrl: '/services/QuantitySurvey1.jpg',
      content: {
        heading: 'Quantity Survey',
        paragraph: `In the infrastructure industry, precise and comprehensive
            quantification of materials, labour, and resources is crucial for
            successful project planning and budgeting.`,
        link: '/services/quantity-survey',
      },
    },
    {
      id: 3,
      name: 'Claim Management',
      imageUrl: '/services/ClaimManagement1.jpg',
      content: {
        heading: 'Claim Management',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '/services/claim-management',
      },
    },
    {
      id: 4,
      name: 'Project Monitoring & Control',
      imageUrl: '/services/ProjectMonCon1.jpg',
      content: {
        heading: 'Project Monitoring & Control',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '/services/project-monitoring-and-control',
      },
    },
    {
      id: 5,
      name: 'Techno Commercial Audit',
      imageUrl: '/services/TechoComAudit1.jpg',
      content: {
        heading: 'Techno Commercial Audit',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '/services/techno-commercial-audit',
      },
    },
    {
      id: 6,
      name: 'Transction Advisory',
      imageUrl: '/services/TransactionAdvisory1.jpg',
      content: {
        heading: 'Transction Advisory',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '/services/transaction-advisory',
      },
    },
  ];
  return (
    <div>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='/services/1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>Services</p>
      </div>
      <div className='flex w-full '>
        <Image
          src={'/services/banner.png'}
          height={768}
          width={1920}
          alt='services banner'
        />
      </div>
      <div className='flex flex-col bg-gray-100'>
        <div className='ml-10  w-4/5'>
          <div>
            <h1 className='text-7xl text-num-watermark font-medium'>
              Services
            </h1>

            <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
              Services
            </h2>

            <h3 className='-translate-y-10 text-2xl text-num-indigo font-light mt-2'>
              {'Empowering decision making to transform '}
            </h3>
          </div>
          <h3 className='-translate-y-8 text-base text-num-blue mb-8'>
            We partner with clients across the infrastructure landscape to help
            them deliver projects, of varying of complexity and at various
            stages of development, with ease. At the same time, we help them
            adopt solutions that make a positive & lasting impact in their field
            of operations.
          </h3>
        </div>
        <div className='grid grid-cols-2 gap-8 '>
          {services.map((service, index) => (
            <div key={index}>
              <div className='z-1 flex flex-row relative hover:scale-115 transform transition-all duration-500 ease-in-out'>
                <Link href={service.content.link}>
                  <Image
                    src={service.imageUrl}
                    width={600}
                    height={600}
                    alt={service.name}
                  />
                  <div className='ml-6 z-10 absolute flex flex-col-reverse inset-0 '>
                    <span className='text-white font-bold'>
                      Find out more
                      <Button className='w-10 ml-2 mb-2 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                        {`+`}
                      </Button>
                    </span>
                    <h1 className='text-white text-2xl font-bold '>
                      {service.name}
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-center text-num-indigo font-bold mt-10 mb-4'>
        <h1 className='text-2xl'>Explore more</h1>
      </div>
      <div className='w-11/12  flex flex-rows items-center justify-center ml-10 gap-6 mb-10'>
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
        <div className='flex flex-col w-1/2 border border-1 border-b-4 border-b-num-orange shadow-xl bg-white text-num-indigo hover:bg-num-indigo hover:border-b-0 hover:text-white'>
          <Link href={`/projects`}>
            <div className='flex flex-row '>
              <Image
                src={'/images/sector.jpg'}
                height={120}
                width={120}
                alt='sector'
                className='m-4'
              />
              <div className='flex-flex-cols'>
                <h1 className='text-4xl mt-4 font-bold'>Projects</h1>
                <h2 className='text-lg'>
                  Committed to Excellence across infra projects
                </h2>
              </div>
            </div>
            <div className='w-11/12 flex flex-row-reverse ml-4 mb-4'>
              We are experts at handling and serving projects which are
              multidimensional, large scale and complex.We approach each project
              with an aim to positively impact communities around us and help
              them prosper.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page;
