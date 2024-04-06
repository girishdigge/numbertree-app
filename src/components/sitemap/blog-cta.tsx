import Link from 'next/link';
import { Button } from '../ui/button';

const BlogCTA = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col p-4 w-3/5 gap-y-2 text-white bg-num-indigo'>
        <h1>{`Don't see what you are looking for?`}</h1>
        <h2>Connect with us:</h2>
        <Link
          href={`https://in.linkedin.com/company/numbertree-advisor-pvt-ltd`}
        >
          <Button className='w-40 bg-num-orange hover:bg-white hover:text-num-orange'>
            Linkedin
          </Button>
        </Link>
      </div>
      <div className='flex flex-col p-4 w-3/5 gap-y-2 border border-num-orange mt-20'>
        <h1>{`Want to know about Numbertree?`}</h1>
        <h2>EXPLORE</h2>
        <Link href={`/about`}>
          <Button className='w-40 bg-num-indigo hover:bg-num-orange'>
            About Us
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default BlogCTA;
