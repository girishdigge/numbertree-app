'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosMail } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

const Page = () => {
  const team = [
    {
      image: '/testimonials/profile.png',
      name: 'Syed Mahtab Alam',
      title: 'Founder & CEO',
      mail: 'Mahtab.syed@numbertree.in',
      linkedin: 'https://in.linkedin.com/in/syed-mahtab-alam-007b5244',
    },
    {
      image: '/testimonials/profile.png',
      name: 'Ajay Shekhar',
      title: 'Partner',
      mail: 'ajay.shekhar@numbertree.in',
      linkedin: 'https://in.linkedin.com/in/ca-ajay-shekhar-45660037',
    },
    {
      image: '/testimonials/profile.png',
      name: 'Rashmi Anand',
      title: 'Director',
      mail: '',
      linkedin: 'https://in.linkedin.com/in/rashmi-anand-24742028',
    },
    {
      image: '/testimonials/profile.png',
      name: 'Sulagna Bisoi',
      title: 'Head Sales',
      mail: 'sulagna@numbertree.in',
      linkedin: 'https://in.linkedin.com/in/sulagna-bisoi-9b9484131',
    },
    {
      image: '/testimonials/profile.png',
      name: 'Md. Obaidullah ',
      title: 'Head Technical ',
      mail: '',
      linkedin: 'https://in.linkedin.com/in/mohd-obaid-690063179',
    },
    {
      image: '/testimonials/profile.png',
      name: 'Govinda Tamang',
      title: 'Head Operations',
      mail: '',
      linkedin: 'https://in.linkedin.com/in/govindatamang',
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
        <Link href={`/about`}>
          <p className='font-bold text-num-indigo'>About Us</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'> Leadership & People</p>
      </div>
      <div className='relative '>
        <Image
          src={`/about/LeadershipBanner.jpg`}
          width={2046}
          height={768}
          alt='Leadership'
          className='object-cover bg-num-indigo'
        />
        <div className='absolute inset-0 flex flex-col md:justify-center  text-white'>
          <div className='ml-10'>
            {/* <h2 className='md:text-base font-light text-sm ml-4 md:mb-2 animate-fadeInLeft'>
              Explore
            </h2> */}
            <div className='border-l-4 md:w-1/2 border-num-orange'>
              <h1 className='font-bold md:text-7xl text-2xl md:mb-2 border-num-orange ml-2 flex animate-fadeIn animate-fadeInRight'>
                Our Leadership & People
              </h1>
              {/* <p className='md:text-lg text-xs font-medium ml-4 md:mb-2 animate-fadeInUp'>
                The compass that guides our ship
              </p> */}
            </div>

            <Link href={`/contact/proposal`} className='animate-fadeInUp'>
              <Button className='md:w-40 ml-4 bg-num-orange text-white mt-2 hover:bg-white hover:text-black animate-fadeInUp'>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex  mt-20'>
        <div className=' flex flex-col ml-10 '>
          <h1 className='text-5xl font-medium  mb-3'>Our Leadership</h1>
          <hr className='w-40 border-2 border-num-orange' />
          <div className='w-5/6'>
            <h2 className='text-2xl font-medium mt-4 mb-4'>
              We build relationships that creates value
            </h2>
            <h3 className='text-lg text-justify  mb-8'>
              We are a leading engineering and audit services firm with
              extensive industry expertise in transportation and infrastructure,
              power and energy, and resources industries.
            </h3>
            <h3 className='text-lg text-justify'>
              Our Leadership & team of experts have a deep understanding of the
              unique challenges and opportunities that these industries face. A
              core team of Chartered accountants, ex bankers, industry stalwarts
              from infrastructure – together we ensure that our clients needs
              are not just met but we exceed expectations.
            </h3>
          </div>
        </div>
      </div>

      <div className='relative items-center justify-center mr-20'>
        <div className='grid md:grid-cols-3 gap-4 p-12 '>
          {team.map((person, index) => (
            <div key={index}>
              <div className='border shadow-lg flex gap-y-2 flex-col md:w-4/5 rounded-lg p-4'>
                <Image
                  src={person.image}
                  height={150}
                  width={150}
                  alt='team'
                  className='rounded-lg'
                />
                <h1 className='text-2xl font-medium'>{person.name}</h1>
                <h1 className='text-lg'>{person.title}</h1>
                <div className='flex gap-2 hover:cursor-pointer'>
                  {/* <div
                    onClick={() =>
                      (window.location.href = `mailto:${person.mail}`)
                    }
                  >
                    <IoIosMail size={24} />
                  </div> */}
                  <div
                    onClick={() =>
                      (window.location.href = `${person.linkedin}`)
                    }
                  >
                    <FaLinkedin size={22} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex  mt-20'>
        <div className=' flex flex-col ml-10 '>
          <h1 className='text-5xl font-medium  mb-3'>Our People</h1>
          <hr className='w-40 border-2 border-num-orange' />
          <div className='w-5/6'>
            <h2 className='text-2xl font-medium mt-4 mb-4'>
              We build relationships that creates value
            </h2>
            <h3 className='text-lg text-justify  mb-8'>
              At Numbertree, our people are at the heart of everything we do. We
              value our team and our reputation, and make it a priority to
              attract and retain the best professionals in our fields of
              expertise
            </h3>
            <h3 className='text-lg text-justify mb-20'>
              {` Our strength lies in our ability to adapt to our clients' culture
              and local markets. We provide personalized services as a
              specialist firm while leveraging our domain expertise to undertake
              the most complex projects and help our clients realize their
              ambitions`}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
