'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const testimonials = [
    {
      name: 'Saqlain Shaikh',
      role: 'CEO Osker Tech',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere quia consequuntur rem quaerat fuga voluptas. Laboriosam, fugit! Aperiam, quos.',
      rating: '⭐⭐⭐⭐⭐',
      image: '/testimonials/saqlain.png', // replace with the actual image path
    },
    {
      name: 'Chetan Chavan',
      role: 'CMO Osker Tech',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere quia consequuntur rem quaerat fuga voluptas. Laboriosam, fugit! Aperiam, quos.',
      rating: '⭐⭐⭐⭐⭐',
      image: '/testimonials/chetan.png', // replace with the actual image path
    },
    {
      name: 'Girish Digge',
      role: 'CTO Osker Tech',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere quia consequuntur rem quaerat fuga voluptas. Laboriosam, fugit! Aperiam, quos.',
      rating: '⭐⭐⭐⭐⭐',
      image: '/testimonials/girish.png', // replace with the actual image path
    },
  ];

  return (
    <div className='flex flex-col items-center mt-20 '>
      <div className='flex flex-row items-center justify-center'>
        <div className='ml-36'>
          <h1 className='text-7xl text-num-indigo text-opacity-50 opacity-10 font-medium'>
            Testimonials
          </h1>

          <h2 className='-translate-y-12 ml-2  text-5xl text-num-orange font-medium'>
            Testimonials
          </h2>
          <h3 className='-translate-y-12 md:text-3xl ml-2 font-medium mt-2'>
            {'Striving for excellence in service '}
          </h3>
          <h4 className='w-1/2 ml-2 -translate-y-8 md:text-lg text-sm text-justify mb-4 mt-4'>
            <p>
              We offer seamless and integrated service, from inception through
              to completion and handover, we are managements eyes at the
              project. We listen to our clients’ needs and strive to provide
              them the best service.
            </p>
          </h4>
        </div>
      </div>
      <div className='relative mb-14 w-4/5 border border-1 border-b-0  border-num-orange rounded-sm shadow-xl'>
        <Slider {...settings}>
          {testimonials.map((test, index) => (
            <div key={index} className='flex mt-10 mb-5 '>
              <div className='flex flex-col'>
                <div className='flex items-center justify-center'>
                  <div className='mb-2 w-1/2'>
                    <h1 className='h-4 text-8xl  text-left text-num-indigo'>
                      “
                    </h1>
                    <p className='px-8 py-4 text-lg text-center  text-num-indigo'>
                      {test.content}
                    </p>
                    <div className='h-3 text-8xl text-right text-num-indigo'>
                      ”
                    </div>
                  </div>
                </div>
                <div className=' flex flex-col items-center mt-4 ml-4'>
                  <h1 className='md:text-4xl text-2xl  text-num-indigo'>
                    {test.name}
                  </h1>
                  <h2 className='text-base mt-4'>{test.role}</h2>
                </div>
                <div className='flex justify-center items-center mt-4'>
                  <Image
                    src={`/logo/star.png`}
                    height={50}
                    width={200}
                    alt='img'
                    className='w-28 '
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
