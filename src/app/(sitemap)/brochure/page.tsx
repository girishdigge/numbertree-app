import { Button } from '@/components/ui/button';

const Brochure = () => {
  return (
    <div className='mt-60 flex text-center justify-center '>
      <div className='text-2xl font-semibold'>
        {` Click to download Numbertree Brochure >>> `}
        <Button className='w-40 text-xl hover:bg-num-orange'>
          <a href='/Numbertree-Brochure.pdf' download>
            Download
          </a>
        </Button>
      </div>
    </div>
  );
};
export default Brochure;
