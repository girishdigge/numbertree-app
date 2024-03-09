'use client';

import Image from 'next/image';
import { Tabs } from '@/components/ui/tabAceternity';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Services1 = () => {
  const tabs = [
    {
      title: 'Techno-Commercial Audit',
      value: 'Techno-Commercial Audit',
      content: (
        <div className=' overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-num-indigo to-num-orange'>
          <p>Techno Commercial Audit</p>
          <TechnoCommercial />
        </div>
      ),
    },
    {
      title: 'Business Transformation',
      value: 'Business Transformation',
      content: (
        <div className=' overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-num-indigo to-num-orange'>
          <p>Business Transformation</p>
          <BusinessTransformation />
        </div>
      ),
    },
    {
      title: 'Contract Adiministration',
      value: 'Contract Adiministration',
      content: (
        <div className='overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-num-indigo to-num-orange'>
          <p>Contract Adiministration</p>
          <ContractAdiministration />
        </div>
      ),
    },
    {
      title: 'Quantity Survey',
      value: 'Quantity Survey',
      content: (
        <div className=' overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-num-indigo to-num-orange'>
          <p>Quantity Survey</p>
          <QuantitySurvey />
        </div>
      ),
    },
    {
      title: 'Claim Management',
      value: 'Claim Management',
      content: (
        <div className=' overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-num-indigo to-num-orange'>
          <p>Claim Management</p>
          <ClaimManagement />
        </div>
      ),
    },
    {
      title: 'Project Monitoring & Control',
      value: 'Project Monitoring & Control',
      content: (
        <div className=' overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-num-indigo to-num-orange'>
          <p>Project Monitoring & Control</p>
          <ProjectMonitoring />
        </div>
      ),
    },

    {
      title: 'Transction Advisory',
      value: 'Transction Advisory',
      content: (
        <div className=' overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-num-indigo to-num-orange'>
          <p>Transction Advisory</p>
          <TransctionAdvisory />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className='mt-20 md:ml-14'>
        <h1 className='text-7xl text-num-watermark font-medium'>Services</h1>

        <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
          Services
        </h2>

        <h3 className='-translate-y-10 md:text-xl text-num-indigo  ml-1'>
          {'Empowering Decision Making To Transform'}
        </h3>
      </div>

      <div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start '>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

const BusinessTransformation = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col md:w-1/2'>
          <h1 className='md:w-4/5 md:text-base text-sm mb-2'>
            We help businesses harness the power of financial insights with
            great clarity, it transforms not just the way businesses operate but
            also unlocks their full potential and propels them to growth.
          </h1>
          <Link href={'/services/business-transformation'}>
            <Button className='w-40 bg-num-indigo hover:bg-num-orange'>{`Read more>`}</Button>
          </Link>
        </div>
        <Image
          src='/services/BusinessTransformation.jpg'
          alt='business transformation'
          width='1000'
          height='1000'
          className=' h-[60%]  md:h-[90%]  -bottom-10 w-[50%] rounded-xl mx-auto'
        />
      </div>
    </div>
  );
};
const ContractAdiministration = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col w-1/2'>
          <h1 className='w-4/5 text-base mb-2'>
            As a consulting engineering firm, we understand the importance of
            efficient contract administration and accurate bill checking in
            maintaining financial integrity and control of infrastructure &
            construction projects.
          </h1>
          <Link href={'/services/contract-administration'}>
            <Button className='w-40 bg-num-indigo hover:bg-num-orange '>{`Read more>`}</Button>
          </Link>
        </div>
        <Image
          src='/services/ContractAdminstration.jpg'
          alt='Contract Adminstration'
          width='1000'
          height='1000'
          className=' h-[60%]  md:h-[90%]  -bottom-10 w-[50%] rounded-xl mx-auto'
        />
      </div>
    </div>
  );
};
const QuantitySurvey = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col w-1/2'>
          <h1 className='w-4/5 text-base mb-2'>
            In the infrastructure industry, precise and comprehensive
            quantification of materials, labour, and resources is crucial for
            successful project planning and budgeting.
          </h1>
          <Link href={'/services/quantity-survey'}>
            <Button className='w-40 bg-num-indigo hover:bg-num-orange '>{`Read more>`}</Button>
          </Link>
        </div>
        <Image
          src='/services/QuantitySurvey.jpg'
          alt='Quantity Survey'
          width='1000'
          height='1000'
          className=' h-[60%]  md:h-[90%]  -bottom-10 w-[50%] rounded-xl mx-auto'
        />
      </div>
    </div>
  );
};
const ClaimManagement = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col w-1/2'>
          <h1 className='w-4/5 text-base mb-2'>
            We are proud of the work we do at NumberTree, solving problems &
            helping our clients across sector in overcoming their business
            challenges.
          </h1>
          <Link href={'/services/claim-management'}>
            <Button className='w-40 bg-num-indigo hover:bg-num-orange '>{`Read more>`}</Button>
          </Link>
        </div>
        <Image
          src='/services/ClaimManagement.jpg'
          alt='Claim Management'
          width='1000'
          height='1000'
          className=' h-[60%]  md:h-[90%]  -bottom-10 w-[50%] rounded-xl mx-auto'
        />
      </div>
    </div>
  );
};
const ProjectMonitoring = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col w-1/2'>
          <h1 className='w-4/5 text-base mb-2'>
            NumberTree offers advanced digital project monitoring services to
            enhance project oversight, efficiency, and transparency. Leveraging
            cutting-edge technologies and data-driven insights, our digital
            solutions provide clients with real-time monitoring and actionable
            intelligence
          </h1>
          <Link href={'/services/project-monitoring-and-control'}>
            <Button className='w-40 bg-num-indigo hover:bg-num-orange '>{`Read more>`}</Button>
          </Link>
        </div>
        <Image
          src='/services/ProjectMonCon.jpg'
          alt='Project Monitoring & Control'
          width='1000'
          height='1000'
          className=' h-[60%]  md:h-[90%]  -bottom-10 w-[50%] rounded-xl mx-auto'
        />
      </div>
    </div>
  );
};
const TechnoCommercial = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col w-1/2'>
          <h1 className='w-4/5 text-base mb-2'>
            We pride ourselves as India{`'`}s foremost techno commercial audit
            firm with over two decades of experience across varied industries.
          </h1>
          <Link href={'/services/techno-commercial-audit'}>
            <Button className='w-40 bg-num-indigo hover:bg-num-orange '>{`Read more>`}</Button>
          </Link>
        </div>
        <Image
          src='/services/TechoComAudit.jpg'
          alt='Techno Com Audit'
          width='1000'
          height='1000'
          className=' h-[60%]  md:h-[90%]  -bottom-10 w-[50%] rounded-xl mx-auto'
        />
      </div>
    </div>
  );
};
const TransctionAdvisory = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col w-1/2'>
          <h1 className='w-4/5 text-base mb-2'>
            Our team ensures that your financial transactions are accurately
            processed, risks are minimized, and resources are optimized. We are
            experienced in navigating the field of complex contracts & terms,
            cost control & risk mitigation, Compliance & regulatory
            requirements, vendor management & bill verification.
          </h1>
          <Link href={'/services/transaction-advisory'}>
            <Button className='w-40 bg-num-indigo hover:bg-num-orange '>{`Read more>`}</Button>
          </Link>
        </div>
        <Image
          src='/services/TransactionAdvisory.jpg'
          alt=' Transaction Advisory'
          width='1000'
          height='1000'
          className=' h-[60%]  md:h-[90%]  -bottom-10 w-[50%] rounded-xl mx-auto'
        />
      </div>
    </div>
  );
};
export default Services1;
