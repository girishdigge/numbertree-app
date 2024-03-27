import { redirect } from 'next/navigation';
import { Jobs } from '@/data/jobs';
import { FaLocationDot } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
interface SearchPageProps {
  searchParams: {
    term: string;
  };
}
export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;
  if (!term) {
    redirect('/career/jobs');
  }
  const filteredJobs = Jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(term.toLowerCase()) ||
      job.location.toLowerCase().includes(term.toLowerCase()) ||
      job.skills.toLowerCase().includes(term.toLowerCase()) ||
      job.area.toLowerCase().includes(term.toLowerCase())
  );
  if (filteredJobs.length === 0) {
    return (
      <div className='flex items-center justify-center h-96 mt-10 '>
        <h1 className='text-2xl text-num-orange '>
          There are no openings for {`"`}
          {term}
          {`"`}
        </h1>
      </div>
    );
  }
  return (
    <div className='flex items-center justify-center'>
      <div className='mt-20 w-3/4'>
        {filteredJobs.map((job, index) => (
          <div key={index} className='flex flex-col p-4'>
            <div className=' flex border border-num-orange p-2'>
              <div className='flex flex-col w-11/12'>
                <h1 className='text-2xl font-medium'>{job.title}</h1>
                <h2 className='text-num-orange text-lg'>
                  <span className='flex mb-2 mt-2'>
                    <FaLocationDot size={24} color='text-num-orange' />
                    {job.location}
                  </span>
                </h2>
                <h3 className='text-xl mb-2 text-num-blue'>
                  Career Area:{job.area}
                </h3>
                <h4 className='text-xl text-num-indigo'>
                  Skills Required:{job.skills}
                </h4>
              </div>
              <div className='flex  flex-col-reverse'>
                <Button className='bg-num-indigo hover:bg-num-orange md:w-40'>
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
