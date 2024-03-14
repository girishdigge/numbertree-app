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
      imageUrl: '/services/ContractAdministration1.jpg',
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
      imageUrl: '/services/TechnoComAudit1.jpg',
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
      <div className='relative '>
        <Image
          src={'/services/banner.png'}
          width={1920}
          height={768}
          alt='services banner'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-50 bg-black  text-white'>
          <div className='ml-10'>
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl mb-2 border-num-orange ml-2 flex '>
                Our Services
              </h1>
            </div>
          </div>
        </div>
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
              {'Empowering decision making to transform businesses'}
            </h3>
          </div>
          <h3 className='-translate-y-8 text-base text-num-blue mb-8'>
            We partner with businesses to help them deliver projects, of varying
            of complexity. We provide services at various stages of construction
            and development. Our comprehensive range of services, help
            businesses deliver positive impact beyond their industries.
          </h3>
        </div>
        <div className='flex items-center justify-center'>
          <div className='grid md:grid-cols-2 gap-8 '>
            {services.map((service, index) => (
              <div key={index}>
                <div className='z-1 flex flex-row relative hover:scale-115 transform transition-all duration-500 ease-in-out'>
                  <Link href={service.content.link}>
                    <Image
                      src={service.imageUrl}
                      width={800}
                      height={400}
                      alt={service.name}
                    />
                    <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                      <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                        <div className='ml-8'>
                          <h1 className='text-white text-2xl font-bold '>
                            {service.name}
                          </h1>
                          <span className='text-white font-bold'>
                            Find out more
                            <Button className='w-10 ml-2 mb-2 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                              {`+`}
                            </Button>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <div className='z-10 absolute  flex flex-col-reverse inset-0 '>
                      <span className='text-white font-bold'>
                        Find out more
                        <Button className='w-10 ml-2 mb-2 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                          {`+`}
                        </Button>
                      </span>
                      <h1 className='text-white text-2xl font-bold '>
                        {service.name}
                      </h1>
                    </div> */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex  justify-center  text-num-indigo font-bold mt-10 mb-4'>
        <h1 className='text-2xl'>Explore more</h1>
      </div>
      <div className='w-11/12  flex md:flex-row flex-col items-center  justify-center md:ml-10 ml-2 gap-6 mb-10'>
        <div className='flex md:flex-col md:w-1/2 border border-1 border-b-4 border-b-num-orange shadow-xl bg-white text-num-indigo hover:bg-num-indigo hover:border-b-0 hover:text-white'>
          <Link href={`/sectors`}>
            <div className='flex flex-row '>
              <Image
                src={'/images/sector.jpg'}
                height={120}
                width={120}
                alt='sector'
                className='m-4'
              />
              <div className=''>
                <h1 className='text-4xl mt-4 font-bold'>Sectors</h1>
                <h2 className='text-lg'>
                  Expertise across the infrastructure spectrum
                </h2>
              </div>
            </div>
            <div className='w-11/12 flex text-justify flex-row-reverse ml-4 mb-4'>
              We are infrastructure experts. Adapting to the needs of the
              companies we serve, is our forte.With close to two decades of
              experience, we have earned the trust of diverse businesses across
              the infrastructure spectrum.
            </div>
          </Link>
        </div>
        <div className='flex flex-col md:w-1/2 border border-1 border-b-4 border-b-num-orange shadow-xl bg-white text-num-indigo hover:bg-num-indigo hover:border-b-0 hover:text-white'>
          <Link href={`/projects`}>
            <div className='flex flex-row '>
              <Image
                src={'/images/sector.jpg'}
                height={120}
                width={120}
                alt='sector'
                className='m-4'
              />
              <div className=''>
                <h1 className='text-4xl mt-4 font-bold'>Projects</h1>
                <h2 className='text-lg'>
                  Committed to Excellence across infra projects
                </h2>
              </div>
            </div>
            <div className='w-11/12 flex text-justify flex-row-reverse ml-4 mb-4'>
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
