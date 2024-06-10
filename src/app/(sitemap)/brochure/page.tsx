import { Button } from '@/components/ui/button';

const Brochure = () => {
  const Google_Drive_Link =
    // 'https://drive.google.com/file/d/1BwL_kkFqlMoM2igugtkLEy6Rqsi-qXdi';
    'https://drive.usercontent.google.com/u/0/uc?id=1BwL_kkFqlMoM2igugtkLEy6Rqsi-qXdi&export=download';
  return (
    <div className='mt-60 flex text-center justify-center '>
      <div className='text-2xl font-semibold'>
        {` Click to download Numbertree Brochure >>> `}
        <Button className='w-40 text-xl hover:bg-num-orange'>
          <a href={Google_Drive_Link} download>
            Download
          </a>
        </Button>
      </div>
    </div>
  );
};
export default Brochure;
