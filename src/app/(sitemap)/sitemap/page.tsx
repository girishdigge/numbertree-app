// pages/sitemap.tsx

import Link from 'next/link';
import React from 'react';

const services = [
  {
    title: 'Techno-Commercial Audit',
    href: '/services/techno-commercial-audit',
  },
  {
    title: 'Contract Administration & Bill Verification',
    href: '/services/contract-administration',
  },
  {
    title: 'Project Management Consultancy',
    href: '/services/project-monitoring-and-control',
  },
  {
    title: 'Quantity Survey & Cost Control',
    href: '/services/quantity-survey',
  },
  {
    title: 'Construction Claim Management',
    href: '/services/claim-management',
  },
  {
    title: 'Business Transformation',
    href: '/services/business-transformation',
  },
  {
    title: 'Transaction Advisory',
    href: '/services/transaction-advisory',
  },
];

const sectors = [
  {
    title: 'Roads & Highways',
    href: '/sectors/roads-highways',
  },
  {
    title: 'Railways & Metro',
    href: '/sectors/railways-metro',
  },
  {
    title: 'Airports & Aviation',
    href: '/sectors/aviation',
  },
  {
    title: 'Ports & Maritime',
    href: '/sectors/ports',
  },
  {
    title: 'Institutional',
    href: '/sectors/institutional',
  },
  {
    title: 'Commercial',
    href: '/sectors/commercial',
  },
  {
    title: 'Industrial',
    href: '/sectors/industrial',
  },

  {
    title: 'Residential',
    href: '/sectors/residential',
  },
  {
    title: 'Water Infrastructure',
    href: '/sectors/water-infrastructure',
  },
  {
    title: 'Oil & Gas',
    href: '/sectors/oil-gas',
  },

  {
    title: 'Power & Transmission',
    href: '/sectors/power-transmission',
  },

  {
    title: 'Renewable Energy',
    href: '/sectors/renewable-energy',
  },
];

const projects = [
  {
    title: 'Featured Projects',
    href: '/projects',
  },
  {
    title: 'Latest Projects',
    href: '/projects',
  },
  {
    title: 'Other projects',
    href: '/projects',
  },
];

const careers = [
  {
    title: 'Jobs',
    href: '/career/jobs',
  },
  {
    title: 'Life at numbertree',
    href: '/career/life-at-numbertree',
  },
];
const aboutUs = [
  { href: '/about/more-about-us', title: 'About Numbertree' },
  { href: '/about', title: 'Our Vision' },
  { href: '/about', title: 'Our Mission' },
  { href: '/about', title: 'Our Approach' },
  { href: '/about/values', title: 'Our Values' },
  { href: '/about/client-ethics', title: 'Our Ethics' },
  { href: '/about', title: 'Our Purpose' },
  { href: '/about/leadership-people', title: 'Our People' },
  { href: '/about/leadership-people', title: 'Our Leadership' },
  { href: '/about/client-ethics', title: 'Our Clients' },
  { href: '/about/csr-esg', title: 'ESG & CSR' },
];

const SitemapPage: React.FC = () => {
  return (
    <div className='md:px-32'>
      <h1 className='text-3xl font-bold  px-4 py-4  '>Site Map</h1>

      <div className='container flex flex-row mx-auto px-4 py-8'>
        <div className='flex flex-col '>
          <section className='mb-8'>
            <Link href={`/about`}>
              <h2 className='text-xl font-semibold mb-2 hover:underline'>
                About us
              </h2>
            </Link>
            <ul className='list-disc ml-6'>
              {aboutUs.map((about, index) => (
                <li key={index}>
                  <a
                    href={about.href}
                    className='text-blue-600 hover:underline'
                  >
                    {about.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section className='mb-8'>
            <Link href={`/services`}>
              <h2 className='text-xl font-semibold mb-2 hover:underline'>
                Services
              </h2>
            </Link>
            <ul className='list-disc ml-6'>
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className='text-blue-600 hover:underline'
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className='mb-8'>
            <Link href={`/sectors`}>
              <h2 className='text-xl font-semibold mb-2 hover:underline'>
                Sectors
              </h2>
            </Link>
            <ul className='list-disc ml-6'>
              {sectors.map((sector, index) => (
                <li key={index}>
                  <a
                    href={sector.href}
                    className='text-blue-600 hover:underline'
                  >
                    {sector.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className='flex flex-col md:ml-40 '>
          <section className='mb-8'>
            <Link href={`/projects`}>
              <h2 className='text-xl font-semibold mb-2 hover:underline'>
                Projects
              </h2>
            </Link>
            <ul className='list-disc ml-6'>
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.href}
                    className='text-blue-600 hover:underline'
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Link href={`/career`}>
              <h2 className='text-xl font-semibold mb-2 hover:underline'>
                Careers
              </h2>
            </Link>
            <ul className='list-disc ml-6'>
              {careers.map((career, index) => (
                <li key={index}>
                  <a
                    href={career.href}
                    className='text-blue-600 hover:underline'
                  >
                    {career.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section className='mt-4'>
            <Link href={`/insights`}>
              <h2 className='text-xl font-semibold mb-2 hover:underline'>
                Insights
              </h2>
            </Link>
          </section>
          <section className='mt-4'>
            <Link href={`/contact`}>
              <h2 className='text-xl font-semibold mb-2 hover:underline'>
                Contact Us
              </h2>
            </Link>
            <ul className='list-disc ml-6'>
              <li>
                <a
                  href={`/contact/proposal`}
                  className='text-blue-600 hover:underline'
                >
                  Request for Proposal
                </a>
              </li>
              <li>
                <a
                  href={`/contact/message`}
                  className='text-blue-600 hover:underline'
                >
                  Send a Message
                </a>
              </li>
              <li>
                <a
                  href={`/contact/expert`}
                  className='text-blue-600 hover:underline'
                >
                  Find an Expert
                </a>
              </li>
              <li>
                <a
                  href={`/contact/enquiries`}
                  className='text-blue-600 hover:underline'
                >
                  Enquiries
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
