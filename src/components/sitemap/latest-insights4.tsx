import BlogCard from '@/components/sitemap/blog-card';
import { FeaturedArticles } from '@/data/Insights';
import Image from 'next/image';
const LatestInsights = () => {
  return (
    <div>
      <div className='flex '>
        <h2 className=' md:text-4xl text-black ml-2'>Latest Insights</h2>
      </div>
      <div className='container mx-auto px-4 py-8'>
        {/* <h1 className='text-3xl font-bold mb-4'>Latest Blogs</h1> */}
        <div className='grid grid-rows-1 gap-6 mb-8'>
          {FeaturedArticles.map((blog, index) => (
            <div key={index} className='flex flex-col'>
              <div className='flex flex-row'>
                <div className='w-1/3 '>
                  <Image
                    src={blog.image}
                    width={2046}
                    height={768}
                    alt='Airports & Aviation'
                    className='object-contain'
                  />
                </div>
                <div className='w-2/3 flex flex-col '>
                  <h1 className='text-lg font-medium ml-2'>{blog.title}</h1>
                  <p className='text-gray-600  ml-2'>{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LatestInsights;
