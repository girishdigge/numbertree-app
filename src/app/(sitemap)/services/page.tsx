import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

const Page = () => {
  const services = [
    {
      id: 0,
      name: 'Techno-Commercial Audit',
      imageUrl: '/services/TechnoComAudit.jpg',
      content: {
        heading: 'Techno-Commercial Audit',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '/services/techno-commercial-audit',
      },
    },

    {
      id: 1,
      name: 'Contract Administration & Bill Verification',
      imageUrl: '/services/ContractAdministration.jpg',
      content: {
        heading: 'Contract Administration & Bill Verification',
        paragraph: `As a consulting engineering firm, we understand the importance of
            efficient contract administration and accurate bill checking in
            maintaining financial integrity and control of infrastructure &
            construction projects.`,
        link: '/services/contract-administration',
      },
    },
    {
      id: 2,
      name: 'Project Management Consultancy',
      imageUrl: '/services/ProjectMonCon.jpg',
      content: {
        heading: 'Project Management Consultancy',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '/services/project-monitoring-and-control',
      },
    },
    {
      id: 3,
      name: 'Quantity Survey & Cost Control',
      imageUrl: '/services/QuantitySurvey.jpg',
      content: {
        heading: 'Quantity Survey & Cost Control',
        paragraph: `In the infrastructure industry, precise and comprehensive
            quantification of materials, labour, and resources is crucial for
            successful project planning and budgeting.`,
        link: '/services/quantity-survey',
      },
    },
    {
      id: 4,
      name: 'Construction Claim Management',
      imageUrl: '/services/ClaimManagement.jpg',
      content: {
        heading: 'Construction Claim Management',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '/services/claim-management',
      },
    },

    {
      id: 5,
      name: 'Business Transformation',
      imageUrl: '/services/BusinessTransformation.jpg',
      content: {
        heading: 'Business Transformation',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '/services/business-transformation',
      },
    },
    {
      id: 6,
      name: 'Transaction Advisory',
      imageUrl: '/services/TransactionAdvisory.jpg',
      content: {
        heading: 'Transaction Advisory',
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
          src={'/services/banner1.jpg'}
          width={1920}
          height={768}
          alt='services banner'
          className='contain'
        />
        <div className='absolute inset-0 flex flex-col justify-center bg-opacity-40 bg-black  text-white'>
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

            <h2 className='-translate-y-12 ml-1 text-5xl text-num-orange font-medium'>
              Services
            </h2>

            <h3 className='-translate-y-10 text-3xl text-num-indigo  mt-2'>
              {'Empowering decision making to transform businesses'}
            </h3>
          </div>
          <h3 className='-translate-y-8 text-lg w-2/3 text-num-blue mb-8'>
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
                <div className='z-1 flex flex-row  hover:scale-115 transform transition-all duration-500 ease-in-out'>
                  <Link href={service.content.link}>
                    <Image
                      src={service.imageUrl}
                      width={800}
                      height={600}
                      alt={service.name}
                      className='contain'
                    />
                    <div className='z-2 absolute inset-0 flex flex-col justify-end '>
                      <div className=' text-white bg-black bg-opacity-50 flex flex-col '>
                        <div className='md:ml-8'>
                          <h1 className='text-white md:text-2xl text-xl font-bold '>
                            {service.name}
                          </h1>
                          <span className='text-white font-bold'>
                            <Button className='w-40 ml-2 mb-2 mt-2 bg-num-indigo border-0 hover:bg-num-orange'>
                              {`Read More`}
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
      <div className='flex  justify-center  text-num-indigo font-bold mt-32 mb-10'>
        <Link href={`/projects`}>
          <h2 className=' md:text-2xl text-black border-2 border-num-orange hover:bg-num-orange hover:text-white p-2 font-medium  mb-4'>
            Explore More
          </h2>
        </Link>
      </div>
      <div className='  flex md:flex-row flex-col items-center  justify-center   gap-6 mb-10'>
        <div className='md:flex flex-row gap-2 md:ml-4 mr-4'>
          <div className='flex flex-row relative h-96  mb-10 md:mb-0 md:ml-1'>
            <Image
              src={`/images/sector.png`}
              height={350}
              width={718}
              alt='linkedin'
              className='object-cover'
            />
            <div className=' absolute inset-0 bg-black bg-opacity-55'>
              <div className='ml-6'>
                <h1 className='text-num-orange text-4xl font-medium md:mt-4 mb-2'>
                  Sectors
                </h1>
                <h2 className=' md:text-3xl text-3xl font-medium md:mb-3 mb- text-white'>
                  Uplifting communities, improving access
                </h2>
                <p className=' text-white md:text-lg'>
                  We are infrastructure experts. Adapting to the needs of the
                  companies we serve, is our forte. With close to two decades of
                  experience, we have earned the trust of diverse businesses
                  across sectors.
                </p>
                <div className='flex flex-row-reverse mt-16  mr-4'>
                  <Link href={`/sectors`}>
                    <Button className='w-40 md:mt-4 text-base bg-num-orange border-0 hover:bg-num-indigo'>
                      All Sectors
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row relative h-96  mb-10 md:mb-0 md:ml-1'>
            <Image
              src={`/images/project.png`}
              height={350}
              width={718}
              alt='linkedin'
              className='object-cover'
            />
            <div className=' absolute inset-0 bg-black bg-opacity-55'>
              <div className='ml-6'>
                <h1 className='text-num-orange text-4xl font-medium md:mt-4 mb-2'>
                  Projects
                </h1>
                <h2 className=' md:text-3xl text-3xl font-medium md:mb-3 mb- text-white'>
                  Taking projects from complexity to profitability
                </h2>
                <p className=' text-white md:text-lg'>
                  We are experts at handling projects which are
                  multidimensional, large scale and complex. Our commitment is
                  to ensure that each project is completed within budgeted cost
                  and time.
                </p>
                <div className='flex flex-row-reverse mt-8 mr-4'>
                  <Link href={`projects`}>
                    <Button className='w-40 md:mt-14 text-base bg-num-orange  border-0 hover:bg-num-indigo'>
                      All Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
