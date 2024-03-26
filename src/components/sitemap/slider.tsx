'use client';
import * as React from 'react';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  SliderNext,
  SliderPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

export function Slider() {
  const dataSet = [
    {
      image: '/career/c1.jpg',
      title: 'Title 1',
      heading: 'Heading 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam quisquam sed, minima maiores ducimus consectetur vero iste cumque tempora.',
    },
    {
      image: '/career/c3.jpg',
      title: 'Title 2',
      heading: 'Heading 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam quisquam sed, minima maiores ducimus consectetur vero iste cumque tempora.',
    },
    {
      image: '/career/c1.jpg',
      title: 'Title 3',
      heading: 'Heading 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam quisquam sed, minima maiores ducimus consectetur vero iste cumque tempora.',
    },
    {
      image: '/career/c3.jpg',
      title: 'Title 4',
      heading: 'Heading 4',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam quisquam sed, minima maiores ducimus consectetur vero iste cumque tempora.',
    },
  ];
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent>
          {dataSet.map((data, index) => (
            <CarouselItem key={index}>
              <Card className='flex justify-center'>
                <CardContent className='flex w-3/4 items-center justify-center p-6'>
                  <div className='flex flex-col items-center justify-center shadow-xl'>
                    <div className=''>
                      <div className='flex'>
                        <div className='flex flex-col gap-4 ml-10 justify-center text-justify '>
                          <h1 className='text-3xl font-medium'>{data.title}</h1>
                          <h2 className='text-2xl'>{data.heading}</h2>
                          <h3 className='text-lg w-3/4'>{data.content}</h3>
                        </div>
                        <Image
                          src={data.image}
                          height={400}
                          width={400}
                          alt='image'
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex flex-row-reverse mr-44'>
          <SliderPrevious />
          <SliderNext />
        </div>
      </Carousel>
      <div className='flex ml-52 mt-6'>
        {/* Slide {current} of {count} */}
        <div className='w-2/3 h-2 bg-num2-gray '>
          <div
            className='bg-num-blue  h-full transition-all '
            style={{ width: `${(current / count) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
