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
      <div className=''>
        <h1 className='text-7xl text-num-indigo opacity-10 font-medium'>
          Testimonials
        </h1>

        <h2 className='-translate-y-12 ml-28 text-4xl text-num-orange font-medium'>
          Testimonials
        </h2>
      </div>
      <div className='relative mb-14 w-4/5 border border- rounded-sm shadow-xl'>
        <Slider {...settings}>
          {testimonials.map((test, index) => (
            <div key={index} className='flex mt-10 mb-5 '>
              <div className='md:grid grid-cols-2'>
                <div className='w-3/5 flex flex-row-reverse pr-4  border-dotted border-r border-r-1 pb-1 border-num-indigo '>
                  <Image
                    src={test.image}
                    height={200}
                    width={200}
                    alt='img'
                    className='w-72 '
                  />
                </div>
                <div className='flex items-center mr-12'>
                  <div className='mb-2'>
                    <h1 className='h-4 text-8xl  text-left text-num-indigo'>
                      “
                    </h1>
                    <p className='px-8 py-4 text-xl text-center text-num-indigo'>
                      {test.content}
                    </p>
                    <div className='h-3 text-8xl text-right text-num-indigo'>
                      ”
                    </div>
                  </div>
                </div>
                <div className='w-4/5 flex flex-col ml-4'>
                  <h1 className='text-4xl text-num-indigo'>{test.name}</h1>
                  <h2 className='text-md ml-12'>{test.role}</h2>
                </div>
                <div className='flex justify-center items-center mr-10'>
                  <Image
                    src={`/logo/star.png`}
                    height={200}
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
