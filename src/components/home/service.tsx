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
      content: ` With this audit, we help promoters, owners and management of businesses engaged in infrastructure projects to reduce the project cost and achieve cost savings while improving the quality within the budgeted timeframe.`,
      link: '/services/techno-commercial-audit',
    },

    {
      id: 1,
      name: 'Contract Administration & Bill Verification',
      imageUrl: '/services/ContractAdministration.jpg',
      content: ` We help clients, navigate complex contracts, control costs, ensure compliance, manage vendors, and maintain financial transparency through this service. With this we contribute to successful project outcomes, stakeholder satisfaction, and the long-term sustainability of infrastructure developments`,
      link: '/services/contract-administration',
    },
    {
      id: 2,
      name: 'Project Management Consultancy',
      imageUrl: '/services/ProjectMonCon.jpg',
      content: `We take ownership of the entire project and chart a roadmap for our PMC Clients. We improve efficiency, reduce costs and time, and maximize value by managing the supply chain, making timely decisions, and operating in a proactive manner.`,
      link: '/services/project-monitoring-and-control',
    },
    {
      id: 3,
      name: 'Quantity Survey & Cost Control',
      imageUrl: '/services/QuantitySurvey.jpg',
      content: ` With this service, we enable project stakeholders to make informed decisions, manage risks, and optimize project budgets. We deliver accurate and detailed quantity calculations, supporting our clients in achieving successful project outcomes.`,
      link: '/services/quantity-survey',
    },

    {
      id: 4,
      name: 'Construction Claim Management',
      imageUrl: '/services/ClaimManagement.jpg',
      content: ` Our expertise, meticulous approach, and dedication to delivering results make us the ideal choice for resolving project delays. We help businesses successfully navigate the complexities of delay analysis and claim management with confidence and efficiency. `,
      link: '/services/claim-management',
    },
    {
      id: 5,
      name: 'Business Transformation',
      imageUrl: '/services/BusinessTransformation.jpg',
      content: `Construction businesses have a primary need for improved efficiency in project delivery. Traditional construction processes often suffer from delays, cost overruns, and quality issues, which can be mitigated by adopting innovative approaches and methodologies. With transformative technologies, construction firms can streamline their operations leading to improved profitability.`,
      link: '/services/business-transformation',
    },
    {
      id: 6,
      name: 'Transaction Advisory',
      imageUrl: '/services/TransactionAdvisory.jpg',
      content: `We provide high-quality advisory services. With focus on debt intermediation, M&A, SME IPO, infrastructure advisory, project consultancy, and structured finance, we bring a wealth of expertise and experience to the table.`,
      link: '/services/transaction-advisory',
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

      <div className='flex md:flex-row flex-col md:ml-16 items-center md:w-11/12'>
        <div className='flex md:w-3/5'>
          <div className=' mt-0'>
            <div className='relative'>
              <Image
                width={1200}
                height={600}
                src={tabs[activeTab].imageUrl}
                alt={`Image for ${tabs[activeTab].name}`}
                className='w-full h-auto'
              />
              <div className='absolute inset-0 flex  '>
                <div className='bg-black  bg-opacity-40  md:p-5'>
                  <div className=' text-white ml-2 md:w-1/2 w-2/3'>
                    <h2 className='md:text-4xl  font-bold flex   md:mb-2'>
                      {tabs[activeTab].name}
                    </h2>
                    <hr className='w-2/5 border-num-orange border-2 md:mt-3 md:mb-3' />
                    <h3 className='md:text-lg text-sm bg-black bg-opacity-5 '>
                      {tabs[activeTab].content}
                    </h3>
                    <Link href={tabs[activeTab].link}>
                      <Button className='w-40 bg-num-indigo md:mt-5  border-0 hover:bg-num-orange'>
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:flex hidden flex-col w-2/5 font-bold bg-num-blue bg-opacity-10 text-num-orange pb-3 '>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer  px-4 py-5  ${
                activeTab === tab.id
                  ? 'text-white   bg-num-indigo'
                  : 'text-black border-b-2 border-num2-gray-dark'
              }`}
              onMouseEnter={() => handleTabChange(tab.id)}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className=' md:hidden flex-wrap w-full font-bold bg-num-blue bg-opacity-10 text-num-orange  '>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer py-1 ${
                activeTab === tab.id
                  ? 'text-white   bg-num-indigo'
                  : 'text-black border-b-2 border-num2-gray-dark'
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
