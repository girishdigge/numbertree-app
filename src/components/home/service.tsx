'use client';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: 'Techno-Commercial Audit',
      imageUrl: '/services/TechnoComAudit.jpg',
      content: ` We pride ourselves as India's foremost techno commercial audit
            firm with over two decades of experience across varied industries.`,
      link: '#',
    },

    {
      id: 1,
      name: 'Contract Adiministration & Bill Verification',
      imageUrl: '/services/ContractAdministration.jpg',
      content: ` As a consulting engineering firm, we understand the importance of
            efficient contract administration and accurate bill checking in
            maintaining financial integrity and control of infrastructure &
            construction projects.`,
      link: '#',
    },
    {
      id: 2,
      name: 'Project Management & Consultancy',
      imageUrl: '/services/ProjectMonCon.jpg',
      content: `NumberTree offers advanced digital project monitoring services to
            enhance project oversight, efficiency, and transparency. Leveraging
            cutting-edge technologies and data-driven insights, our digital
            solutions provide clients with real-time monitoring and actionable
            intelligence`,
      link: '#',
    },
    {
      id: 3,
      name: 'Quantity Survey & Cost Control',
      imageUrl: '/services/QuantitySurvey.jpg',
      content: ` In the infrastructure industry, precise and comprehensive
            quantification of materials, labour, and resources is crucial for
            successful project planning and budgeting.`,
      link: '#',
    },

    {
      id: 4,
      name: 'Construction Claim Management',
      imageUrl: '/services/ClaimManagement.jpg',
      content: ` We are proud of the work we do at NumberTree, solving problems &
            helping our clients across sector in overcoming their business
            challenges.`,
      link: '#',
    },
    {
      id: 5,
      name: 'Transaction Advisory',
      imageUrl: '/services/TransactionAdvisory.jpg',
      content: `Our team ensures that your financial transactions are accurately
            processed, risks are minimized, and resources are optimized. We are
            experienced in navigating the field of complex contracts & terms,
            cost control & risk mitigation, Compliance & regulatory
            requirements, vendor management & bill verification.`,
      link: '#',
    },
    {
      id: 6,
      name: 'Business Transformation',
      imageUrl: '/services/BusinessTransformation.jpg',
      content: `We help businesses harness the power of financial insights with
            great clarity, it transforms not just the way businesses operate but
            also unlocks their full potential and propels them to growth.`,
      link: '#',
    },
    // Add more tabs as needed
  ];

  const handleTabChange = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    <div className='w-full '>
      <div className='mt-20 md:ml-14'>
        <h1 className='text-7xl text-num-watermark text-opacity-50 font-medium'>
          Services
        </h1>

        <h2 className='-translate-y-12 ml-1 text-5xl text-num-orange font-medium'>
          Services
        </h2>

        <h3 className='-translate-y-10 md:text-3xl  ml-1'>
          {'Empowering decision making to transform businesses '}
        </h3>
        <h4 className='w-1/2 -translate-y-8 md:text-lg text-sm text-justify ml-2 mb-4 mt-4'>
          We partner with businesses to help them deliver projects, of varying
          of complexity. We provide services at various stages of construction
          and development. Our comprehensive range of services, help businesses
          deliver positive impact beyond their industries.
        </h4>
      </div>

      <div className='flex ml-16 items-center'>
        <div className='flex w-3/5'>
          <div className=' mt-2'>
            <div className='relative'>
              <Image
                width={1200}
                height={600}
                src={tabs[activeTab].imageUrl}
                alt={`Image for ${tabs[activeTab].name}`}
                className='w-full h-auto'
              />
              <div className='absolute inset-0 flex  '>
                <div className='bg-black md:bg-opacity-50 bg-opacity-40  md:p-5'>
                  <div className=' text-white ml-2 w-1/2'>
                    <h2 className='md:text-4xl  font-bold md:flex hidden text-sm  mb-2'>
                      {tabs[activeTab].name}
                    </h2>
                    <hr className='w-2/5 border-num-orange border-2 md:mt-3 md:mb-3' />
                    <h3 className='md:text-lg  font-bold '>
                      {tabs[activeTab].content}
                    </h3>

                    <Button className='w-40 bg-num-indigo md:mt-5  border-0 hover:bg-num-orange'>
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-1/3 gap-y-2  font-bold bg-num-blue bg-opacity-10 text-num-orange mt-2 pt-0 pb-2'>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer  px-4 py-5 ${
                activeTab === tab.id
                  ? 'text-white p-2  border-num-orange bg-num-indigo'
                  : 'text-num-orange '
              }`}
              onMouseEnter={() => handleTabChange(tab.id)}
            >
              {tab.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
