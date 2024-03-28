// components/BlogCard.tsx

import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Blog {
  type: string;
  date: string;
  image: string; // Added image property
  title: string;
  content: string;
  link: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-500 ease-in-out'>
      <Link href={blog.link}>
        <Image
          width={300}
          height={300}
          className='w-full h-48 object-cover'
          src={blog.image}
          alt={blog.title}
        />
        <div className='p-6'>
          <div className='flex flex-row justify-between'>
            <p className='text-gray-600 mb-4 pt-2'>{blog.date}</p>
            <Button className='border bg-white text-black border-num-indigo rounded-full hover:bg-white'>
              {blog.type}
            </Button>
          </div>
          <h2 className='text-xl font-bold mb-2'>{blog.title}</h2>
          <p className='text-gray-800'>{blog.content}</p>
          <p className='text-lg mt-4 font-medium'>
            Read More <span className='text-num-orange'>{`->`}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
