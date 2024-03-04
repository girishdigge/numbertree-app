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
    title: 'We are',
    titleMain: 'Techno-Commercial Auditors',
    content:
      "We are India's foremost techno-commercial audit firm with close to two decades of expertise.",
    link: '/techno-commercial-project',
    video: '/carousel/v1.mp4', // replace with the actual video path
  },
  {
    heading: "Empowering Tomorrow's infrastructure",
    title: 'We are',
    titleMain: 'Quantity Surveyors',
    content:
      'Quantity surveying plays a vital role in ensuring accurate cost estimation and effective resource allocation.',
    link: '/quantity-survey',
    video: '/carousel/v2.mp4', // replace with the actual video path
  },
  {
    heading: "Empowering Tomorrow's infrastructure",
    title: 'We are',
    titleMain: 'Contract Administrators',
    content:
      'Our comprehensive services in Contract Administration and Bill Checking ensure transparency, compliance, and cost optimization.',
    link: '/contract-administration',
    video: '/carousel/v3.mp4', // replace with the actual video path
  },
  {
    heading: "Empowering Tomorrow's infrastructure",
    title: 'We are',
    titleMain: 'Cost Consultants',
    content:
      'We provide cost management services on a wide range of construction projects across sectors in infrastructure.',
    link: '/cost-consultants',
    video: '/carousel/v4.mp4', // replace with the actual video path
  },
  {
    heading: "Empowering Tomorrow's infrastructure",
    title: 'We are',
    titleMain: 'NumberTree',
    content:
      'We are a consulting engineering & audit services firm, partnering with businesses that advance the world... ',
    link: '/numbertree',
    video: '/carousel/v5.mp4', // replace with the actual video path
  },
];

const Carousel = () => {
  const settings = {
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Change slide every 5 seconds
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
          <div key={index} className='relative md:h-96'>
            <video
              autoPlay
              muted
              loop
              width='w-full'
              height='40'
              className='object-cover'
            >
              <source src={slide.video} type='video/mp4' />
            </video>

            <div className='absolute -inset-2  flex items-center md:pl-16 pt-5  bg-black bg-opacity-30'>
              <div className='bg-opacity-50 md:w-4/5 h-full p-5'>
                <div className='text-white'>
                  {/* <div className='text-xl'>{slide.heading}</div> */}
                  <h2 className='md:text-xl font-bold text-sm ml-4 '>
                    {slide.title}
                  </h2>
                  {/* <Separator
                    orientation='vertical'
                    className='bg-num-orange w-1 h-10'
                  /> */}
                  <h2 className='md:text-5xl pl-2  text-sm  border-l-4 border-num-orange'>
                    {slide.titleMain}
                  </h2>
                  <p className='md:text-lg ml-4 md:pt-5 md:pb-2 text-xs md:w-2/5'>
                    {slide.content}
                  </p>
                  <Button className='w-40 ml-4 bg-num-indigo md:mt-5 mt-2 border-0 hover:bg-num-orange'>
                    Read More{`>`}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;