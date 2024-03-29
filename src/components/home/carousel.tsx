'use client';
// pages/index.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';

const slides = [
  {
    heading: "Empowering Tomorrow's infrastructure",
    weAre: 'We are',
    title: 'Numbertree ',
    content:
      'We are a consulting engineering & audit services firm. We partner with businesses that advance the world, to overcome challenges they face and unlock their full potential.',
    link: '/numbertree',
    video: '/carousel/video6.mp4', // replace with the actual video path
  },
  {
    heading: "Empowering Tomorrow's infrastructure",
    weAre: 'WE ARE',
    title: 'Techno-Commercial Auditors',
    content:
      'We are India’s foremost techno commercial audit firm with close to two decades of expertise.',
    link: '/techno-commercial-project',
    video: '/carousel/video1.mp4', // replace with the actual video path
  },
  {
    heading: "Empowering Tomorrow's infrastructure",
    weAre: 'We are',
    title: 'Quantity Surveyors',
    content:
      'Our quantity surveyors play a vital role in ensuring accurate cost estimation and effective resource allocation.',
    link: '/quantity-survey',
    video: '/carousel/video2.mp4', // replace with the actual video path
  },
  {
    heading: "Empowering Tomorrow's infrastructure",
    weAre: 'We are',
    title: 'Contract Administrators ',
    content:
      'Our comprehensive services in Contract Administration and Bill Checking ensure transparency, compliance and cost optimization.',
    link: '/contract-administration',
    video: '/carousel/video3.mp4', // replace with the actual video path
  },
  {
    heading: "Empowering Tomorrow's infrastructure",
    weAre: 'We are',
    title: 'Cost Consultants ',
    content:
      'We provide cost management services on wide range of construction projects across sectors in infrastructure.',
    link: '/cost-consultants',
    video: '/carousel/video4.mp4', // replace with the actual video path
  },
  {
    heading: "Empowering Tomorrow's infrastructure",
    weAre: 'We are',
    title: 'Building Information Modellers ',
    content:
      'Digitization of infrastructure operations & projects is our forte, we help in digital transformation of construction through BIMfirst, Digital twin.',
    link: '/numbertree',
    video: '/carousel/video5.mp4', // replace with the actual video path
  },
];

const Carousel = () => {
  const settings = {
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Change slide every 5 seconds
    dots: false, // Hide navigation dots
    arrows: false, // Hide navigation arrows
    infinite: true, // Enable continuous looping
    speed: 1000, // Transition speed (adjust for smoothness)
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease', // Transition effect (optional)
  };

  return (
    <div className='text-white z-1 relative bg-white'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='relative md:-translate-y-16'>
            <video
              autoPlay
              muted
              loop
              width='w-full'
              height='h-full'
              className='object-cover w-full h-full'
            >
              <source src={slide.video} type='video/mp4' />
            </video>

            <div className='absolute inset-0  flex items-center  md:pl-16 md:pt-40 pt-2   bg-black bg-opacity-30'>
              <div className='bg-opacity-50 md:w-4/5 h-full md:p-5'>
                <div className='text-white'>
                  {/* <div className='text-xl'>{slide.heading}</div> */}
                  <h2 className='md:text-sm font-light text-sm ml-4 '>
                    {`WE ARE`}
                  </h2>

                  <div className=' border-l-4 border-num-orange'>
                    <h2 className='md:text-7xl w-5/6 pl-2  text-sm '>
                      {slide.title}
                    </h2>
                    <p className='md:text-lg ml-4  md:pt-5  text-xs md:w-1/3 w-3/4'>
                      {slide.content}
                    </p>
                  </div>
                  <Button className='w-40 ml-4  bg-num-indigo md:mt-5 mt-2 border-0 hover:bg-num-orange'>
                    Read More
                  </Button>
                </div>
                {/* <div className='hidden md:flex items-end justify-end md:mt-4 mt-2 md:text-xl text-sm '>
                  {`#`}
                  {slide.heading}
                </div> */}
              </div>
            </div>
            {/* <div className='z-100 text-3xl font-semibold bg-num-indigo pb-2 pr-2 text-wilmer-orange flex justify-end'>
              {`#Empowering Tomorrow's infrastructure`}
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
