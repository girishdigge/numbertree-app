// import { Button } from '@/components/ui/button';

// const Brochure = () => {
// const Google_Drive_Link =
//   'https://drive.google.com/file/d/1BwL_kkFqlMoM2igugtkLEy6Rqsi-qXdi/view?usp=sharing';
//   return (
//     <div className='mt-60 flex text-center justify-center '>
//       <div className='text-2xl font-semibold'>
//         {` Click to download Numbertree Brochure >>> `}
//         <Button className='w-40 text-xl hover:bg-num-orange'>
//           <a href={Google_Drive_Link} download>
//             Download
//           </a>
//         </Button>
//       </div>
//     </div>
//   );
// };
// export default Brochure;
'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const DownloadPDF = () => {
  const router = useRouter();

  const handleDownload = async () => {
    const filePath = '/Numbertree-Brochure.pdf'; // Replace with actual filename

    try {
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error('Failed to download PDF');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'Numbertree-Brochure.pdf'; // Set desired filename
      link.click();

      // Optional: Revoke the object URL after download completes
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Handle download errors gracefully (e.g., display error message)
    }
  };

  return (
    <div className='flex items-center justify-center mt-60 text-xl font-semibold'>
      {` Click to download Numbertree Brochure >>>`}
      <Button
        className='bg-num-indigo hover:bg-num-orange text-xl w-40 ml-2'
        onClick={handleDownload}
      >
        Download
      </Button>
    </div>
  );
};

export default DownloadPDF;
