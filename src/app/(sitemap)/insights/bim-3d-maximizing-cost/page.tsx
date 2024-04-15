import GetInTouch from '@/components/sitemap/getintouch';
import { Button } from '@/components/ui/button';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
// import LatestInsights from '@/components/sitemap/latest-insights4';
import BlogCTA from '@/components/sitemap/blog-cta';
import BlogCard from '@/components/sitemap/blog-card';
import { ExploreArticles } from '@/data/Insights';
const Page = () => {
  const FeaturedArticles = [
    {
      type: 'article',
      date: '14 April 2024',
      image: '/insights/5d-bim.png',
      title: '5D BIM & Cost optimization in infra projects ',
      content: `In the dynamic landscape of infrastructure development, the pursuit
    of efficiency and cost optimization has never been more crucial.
    5D Building Information Modelling (BIM) is a transformative tool
    that goes beyond traditional 3D models
    `,
      link: '/insights/5D-BIM-Cost-Optimization',
    },
    {
      type: 'article',
      date: '04 Apr 2024',
      image: '/insights/twin.png',
      title: 'Digital Twin- Transformative Trend in Infrastructure',
      content:
        'In the rapidly evolving landscape of infrastructure development, the concept of a "Digital Twin" has emerged as a revolutionary force, reshaping the way complex projects are conceived, designed, and managed',
      link: '/insights/digital-twin',
    },
    {
      type: 'article',
      date: '31 March 2024',
      image: '/insights/3d-bim.png',
      title: 'BIM & Level of detail ',
      content:
        'BIM can be implemented at different levels of detail (LOD) to cater to various purposes throughout the construction project.The LOD framework encompasses six levels, ranging from LOD 100 to LOD 500, each representing different degrees of detail and development in the BIM model.  ',
      link: '/insights/bim-level-detail',
    },
    // {
    //   type: 'article',
    //   date: '24 Feb 2024',
    //   image: '/insights/digital.png',
    //   title: '3DBIM - Maximizing Cost Effectiveness in Infrastructure ',
    //   content: `BIM has emerged as a transformative technology in the construction industry. It has transformed the way infrastructure projects are planned, designed, constructed, and operated.  `,
    //   link: '/insights/bim-3d-maximizing-cost',
    // },
    {
      type: 'article',
      date: '20 Feb 2024',
      image: '/insights/bim-unlocking-cost.jpg',
      title:
        'Unlocking Cost Savings in Infrastructure Projects: Leveraging BIM',
      content: `In today's rapidly evolving construction industry, technology has become a driving force behind improved efficiency and effectiveness. Among the various technological advancements, BIM stands out as a transformative tool that has revolutionized infrastructure projects.`,
      link: '/insights/unlocking-cost-3d-bim',
    },
    {
      type: 'article',
      date: '31 March 2024',
      image: '/insights/ray-nagar-solapur.png',
      title: 'World’s largest Mass housing project',
      content:
        ' India witnessed the launch of one of the world’s largest low cost mass housing projects at Solapur , Maharashtra. The project built under the PMAY – initiative of the government of India, Witnessing the success "Gareebon ka Taj mahal" – RAY nagar housing project at Solapur has been an extraordinary journey!   ',
      link: '/insights/ray-nagar-solapur',
    },
  ];
  return (
    <div className=''>
      <div className='flex flex-row mt-2 mb-2 ml-12'>
        <span className='mt-1'>
          <Link href='/'>
            <IoHomeSharp color='#1f3563' />
          </Link>
        </span>
        <RxSlash color='gray' className='mt-1' />
        <Link href={`/insights`}>
          <p className='font-bold text-num-indigo'>Insights</p>
        </Link>
        <RxSlash color='gray' className='mt-1' />
        <p className='font-bold text-num-indigo'>
          {' '}
          3DBIM - Maximizing Cost Effectiveness in Infrastructure{' '}
        </p>
      </div>
      <div className='flex flex-row'>
        <div className='md:w-3/4 flex justify-center'>
          <div className='w-4/5 mt-2'>
            <Image
              src={`/insights/digital.png`}
              width={768}
              height={504}
              alt='bim'
              className='object-cover'
            />
            <div className=' flex flex-col items-center  text-justify'>
              <h1 className='text-3xl flex justify-center gap-y-2 font-normal  text-black mb-2 mt-12'>
                3DBIM - Maximizing Cost Effectiveness in Infrastructure
              </h1>
              <p className='text-gray-600 mb-4 '>24 Feb 2024</p>
              <div className='flex flex-col '>
                <p className=' md:text-lg text-xs flex '>
                  {`BIM has emerged as a transformative technology in the construction industry. It has transformed the way infrastructure projects are planned, designed, constructed, and operated.  `}
                </p>{' '}
                <br />
                <h1 className='text-3xl flex  gap-y-2 font-normal  text-black mb-2 mt-12'>
                  3DBIM - Maximizing Cost Effectiveness in Infrastructure
                </h1>
                <p className=' md:text-lg text-xs flex '>
                  {`BIM has emerged as a transformative technology in the construction industry. It has transformed the way infrastructure projects are planned, designed, constructed, and operated.  Beyond its traditional benefits of enhancing productivity and improving project coordination, BIM has proven to be instrumental in driving cost savings and cost effectiveness in infrastructure projects. In this perspective, we will explore how BIM can support infrastructure projects with a focus on cost savings as an important component of the audit environment`}
                </p>{' '}
                <br />
                <h1 className='text-3xl flex  gap-y-2 font-normal  text-black mb-2 mt-12'>
                  Accurate Quantity Take offs and Cost Estimation:
                </h1>
                <p className=' md:text-lg text-xs flex '>{`BIM enables the automatic generation of accurate quantity take offs by extracting information directly from the digital model. This eliminates the need for manual measurements and reduces the chances of errors or omissions. Accurate quantity take offs provide a solid foundation for cost estimation, allowing project teams to develop precise budgets and identify potential cost overruns early on. By having a clear understanding of the project's cost implications, stakeholders can make informed decisions to optimize resources and reduce unnecessary expenses.`}</p>{' '}
                <br />
                <h1 className='text-3xl flex  gap-y-2 font-normal  text-black mb-2 mt-12'>
                  Construction Planning and Sequencing:
                </h1>
                <p className=' md:text-lg text-xs flex '>{`BIM's 4D and 5D capabilities, which incorporate time and cost dimensions into the model, are valuable for optimizing construction planning and sequencing. By simulating the construction process, project teams can identify potential scheduling conflicts and allocate resources efficiently. This enables better management of construction activities, reduces downtime, and minimizes delays, ultimately leading to cost savings.`}</p>{' '}
                <br />
                <h1 className='text-3xl flex  gap-y-2 font-normal  text-black mb-2 mt-12'>
                  Material and Resource Optimization:
                </h1>
                <p className=' md:text-lg text-xs flex '>{`BIM allows for accurate tracking and management of project materials and resources. By analysing the digital model, project teams can optimize material quantities, minimize waste, and identify opportunities for value engineering. BIM also enables better coordination between suppliers and contractors, ensuring that the right materials are ordered at the right time, reducing storage costs and the risk of material shortages or excess inventory.`}</p>{' '}
                <br />
                <h1 className='text-3xl flex  gap-y-2 font-normal  text-black mb-2 mt-12'>
                  Lifecycle Cost Analysis:
                </h1>
                <p className=' md:text-lg text-xs flex '>{`BIM supports the evaluation of lifecycle costs, including maintenance, operation, and facility management. By embedding data about equipment specifications, maintenance schedules, and energy performance into the model, BIM facilitates informed decision-making regarding long-term cost-effectiveness. The ability to analyse energy consumption and optimize building performance can lead to significant operational cost savings over the lifespan of the project.`}</p>{' '}
                <br />
                <h1 className='text-3xl flex  gap-y-2 font-normal  text-black mb-2 mt-12'>
                  Collaboration and Communication:
                </h1>
                <p className=' md:text-lg text-xs flex '>{`BIM promotes effective collaboration and communication among project stakeholders. By centralizing project information in a shared digital model, teams can work together in real-time, exchange feedback, and resolve issues more efficiently. Effective collaboration minimizes miscommunication, improves decision-making, and reduces the chances of costly mistakes or rework.`}</p>{' '}
                <br />
                <p className=' md:text-lg text-xs flex '>{`In conclusion, BIM's ability to provide accurate quantity takeoffs, clash detection, optimized construction planning, resource management, lifecycle cost analysis, and enhanced collaboration contribute to cost savings and cost effectiveness in big projects. By leveraging the power of BIM throughout the project lifecycle, stakeholders can optimize resources, minimize errors, reduce delays, and make informed decisions that drive overall project cost efficiency.`}</p>{' '}
                <br />
                <h1 className='text-3xl flex  gap-y-2 font-normal  text-black mb-2 mt-12'>
                  Clash Detection and Conflict Resolution:
                </h1>
                <p className=' md:text-lg text-xs flex '>{`BIM's clash detection feature helps identify clashes and conflicts between different elements of a project, such as architectural, structural, mechanical, and electrical systems. By detecting clashes during the design phase, BIM allows for timely resolution before construction begins. This minimizes costly rework & change orders. Resolving clashes early on helps streamline the construction process, ensures smoother coordination, and reduces overall project costs.`}</p>{' '}
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/4 hidden md:flex flex-col  ml-2'>
          <div>
            {' '}
            <div>
              <div className='flex '>
                <h2 className=' md:text-4xl text-black ml-2'>
                  Latest Insights
                </h2>
              </div>
              <div className='container mx-auto px-4 py-8'>
                {/* <h1 className='text-3xl font-bold mb-4'>Latest Blogs</h1> */}
                <div className='grid grid-rows-1 gap-6 mb-8'>
                  {FeaturedArticles.map((blog, index) => (
                    <div key={index} className='flex flex-col'>
                      <Link href={blog.link}>
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
                            <h1 className='text-lg font-medium ml-2 hover:underline'>
                              {blog.title}
                            </h1>
                            <p className='text-gray-600  ml-2'>{blog.date}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>{' '}
            <BlogCTA />
          </div>
        </div>
      </div>
      <div className='md:w-11/12 md:ml-20 mt-4'>
        <div className='flex pl-4 flex-col ml-4'>
          <h1 className='text-xl font-bold mb-2'> Follow Us</h1>

          <div className='flex gap-4 mb-8'>
            <Link
              href={`https://www.facebook.com/p/NumberTree-Assurance-Services-100066721811439/`}
            >
              <Image
                src={`/images/facebook.png`}
                width={32}
                height={32}
                alt='logo'
              />
            </Link>
            <Link
              href={`https://in.linkedin.com/company/numbertree-advisor-pvt-ltd`}
            >
              <Image
                src={`/images/linkedin-1.png`}
                width={32}
                height={32}
                alt='logo'
              />
            </Link>
            <Link
              href={`https://twitter.com/numbertreellp?s=21&t=5IMHdP5ykmmz3QRuWsHNaQ`}
            >
              <Image
                src={`/images/twitter.png`}
                width={32}
                height={32}
                alt='logo'
              />
            </Link>
            <Link href={``}>
              <Image
                src={`/images/instagram.png`}
                width={32}
                height={32}
                alt='logo'
              />
            </Link>
          </div>
        </div>
        <div className='md:flex hidden mt-10 ml-6 gap-x-2 tracking-widest'>
          <h1 className='text-xl font-medium  p-1'>Tags:</h1>
          <h2 className='border border-num-orange text-base  p-1'>Article</h2>
          <h2 className='border border-num-orange text-base   p-1'>
            Cost optimization
          </h2>
          <h2 className='border border-num-orange text-base   p-1'>BIM</h2>
          <h2 className='border border-num-orange text-base  p-1'>Future</h2>
        </div>
        <div>
          <div className='flex  mt-20'>
            <h2 className=' md:text-3xl text-black  hover:text-white p-2 font-medium md:ml-4'>
              You may also like
            </h2>
          </div>
          <div className='container mx-auto px-4 py-8'>
            {/* <h1 className='text-3xl font-bold mb-4'>Latest Blogs</h1> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
              {ExploreArticles.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
