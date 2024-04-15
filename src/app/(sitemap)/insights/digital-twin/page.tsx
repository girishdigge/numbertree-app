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
    // {
    //   type: 'article',
    //   date: '04 Apr 2024',
    //   image: '/insights/twin.png',
    //   title: 'Digital Twin- Transformative Trend in Infrastructure',
    //   content:
    //     'In the rapidly evolving landscape of infrastructure development, the concept of a "Digital Twin" has emerged as a revolutionary force, reshaping the way complex projects are conceived, designed, and managed',
    //   link: '/insights/digital-twin',
    // },
    {
      type: 'article',
      date: '31 March 2024',
      image: '/insights/3d-bim.png',
      title: 'BIM & Level of detail ',
      content:
        'BIM can be implemented at different levels of detail (LOD) to cater to various purposes throughout the construction project.The LOD framework encompasses six levels, ranging from LOD 100 to LOD 500, each representing different degrees of detail and development in the BIM model.  ',
      link: '/insights/bim-level-detail',
    },
    {
      type: 'article',
      date: '24 Feb 2024',
      image: '/insights/digital.png',
      title: '3DBIM - Maximizing Cost Effectiveness in Infrastructure ',
      content: `BIM has emerged as a transformative technology in the construction industry. It has transformed the way infrastructure projects are planned, designed, constructed, and operated.  `,
      link: '/insights/bim-3d-maximizing-cost',
    },
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
        <p className='font-bold text-num-indigo'>Digital Twin</p>
      </div>
      <div className='flex flex-row'>
        <div className='md:w-3/4 flex justify-center'>
          <div className='w-4/5 mt-2'>
            <Image
              src={`/insights/twin.png`}
              width={768}
              height={504}
              alt='digital twin'
              className='object-cover'
            />
            <div className=' flex flex-col items-center  text-justify'>
              <h1 className='text-3xl flex justify-center gap-y-2 font-normal  text-black mb-2 mt-12'>
                Digital Twin- Transformative Trend in Infrastructure
              </h1>
              <p className='text-gray-600 mb-4 '>04 April 2024</p>
              <div className='flex flex-col '>
                <p className=' md:text-lg text-xs flex '>
                  {`In the rapidly evolving landscape of infrastructure
                  development, the concept of a "Digital Twin" has emerged as a
                  revolutionary force, reshaping the way complex projects are
                  conceived, designed, and managed`}
                </p>{' '}
                <br />
                <h1 className='text-2xl flex  gap-y-2 font-normal  text-black mb-2 '>
                  Digital Twin : Transformative Trend in Infrastructure
                </h1>
                <h1 className='text-xl flex  gap-y-2 font-normal  text-black mb-2 '>
                  Digital Twin –The Future of Engineering in Infrastructure
                </h1>
                <p className='    md:text-lg text-xs flex '>
                  {`In the rapidly evolving landscape of infrastructure
                  development, the concept of a "Digital Twin" has emerged as a
                  revolutionary force, reshaping the way complex projects are
                  conceived, designed, and managed.`}
                </p>{' '}
                <br />
                <p className='    md:text-lg text-xs flex '>
                  {`A Digital Twin is a virtual replica of a physical infrastructure asset, incorporating real-time data and simulations to mirror its behaviour, conditions, and performance. It's not just a static representation; it's a dynamic, living counterpart that provides unparalleled insights throughout the asset's life cycle.`}
                </p>{' '}
                <br />
                <p className='    md:text-lg text-xs flex '>
                  {`Digital twin technology offers immersive, photorealistic 3D exploration of space that empowers collaboration between different stakeholders. This data-driven process helps teams monitor physical objects, make informed decisions, and create more efficient workflows. It goes beyond conventional project management, offering a transformative approach to decision-making and problem-solving.`}
                </p>{' '}
                <br />
                <h1 className='text-2xl flex  gap-y-2 font-normal  text-black mb-2 '>
                  Digital Twin and BIM: Complementary Technologies
                </h1>
                <p className='    md:text-lg text-xs flex '>
                  Building information modelling (BIM) is the holistic process
                  of creating, optimizing, and managing information for a built
                  asset from schematic design through operations. Central to the
                  BIM process is the use of 3D models represented by the core
                  disciplines of architectural, structural,
                  civil/infrastructure, mechanical, electrical, and plumbing
                  trades.
                </p>{' '}
                <br />
                <p className='    md:text-lg text-xs flex '>
                  BIM & Digital twin are two complementary technologies that can
                  help architecture, engineering, and construction (AEC) teams
                  across the building lifecycle — from initial planning to
                  quality control in AEC and ongoing facilities management
                </p>{' '}
                <br />
                <p className='    md:text-lg text-xs flex '>
                  Both digital twins and BIM models are digital representations
                  of physical spaces. The main difference between the two is
                  that BIM 3D models are used for visualizing the design and
                  construction of an asset, while a digital twin enables virtual
                  interaction with that asset.
                </p>{' '}
                <br />
                <h1 className='text-2xl flex  gap-y-2 font-normal  text-black mb-2 '>
                  key differences
                </h1>
                <p className='    md:text-lg text-xs flex '>
                  · BIM models represent the design intent of a building,
                  helping to visualize the desired physical characteristics and
                  dependencies. By themselves, the 3D models tied to a BIM
                  process do not automatically track and represent the as-built
                  changes over time.
                </p>{' '}
                <br />
                <p className='    md:text-lg text-xs flex '>
                  · Digital twins offer a photorealistic virtual rendering of
                  physical space and can be scanned again and again over time to
                  track how that space might change. This helps teams track
                  milestones and gain a deep understanding of a project’s life
                  cycle.
                </p>{' '}
                <br />
                <p className='    md:text-lg text-xs flex '>
                  · Digital twins integrate with IoT sensors and other digital
                  solutions. As you use these technologies to access real-time
                  data about your building system, digital twins act as a visual
                  replica that accurately captures that system’s physical
                  characteristics.
                </p>{' '}
                <br />
                <p className='    md:text-lg text-xs flex '>
                  Put simply, BIM modelling software can help design and
                  construct a building, while digital twin technology can help
                  maintain and operate that building.
                </p>{' '}
                <br />
                <h1 className='text-2xl flex  gap-y-2 font-normal  text-black mb-2 '>
                  Using digital twin and BIM across the project lifecycle
                </h1>
                <p className='    md:text-lg text-xs flex '>
                  Architecture, engineering, and construction teams need a clear
                  understanding of the built environment as they tackle major
                  projects. Here’s how infrastructure projects can use digital
                  twin and BIM to power better decision-making and collaboration
                  across the project lifecycle.
                </p>{' '}
                <br />
                <h1 className='text-2xl flex  gap-y-2 font-normal  text-black mb-2 '>
                  Building and designing with BIM
                </h1>
                <span>
                  <p className='text-2xl inline font-normal  text-black'>
                    Strategic Planning:{' '}
                    <span className='md:text-lg text-xs '>
                      In the initial project phase, BIM software becomes the
                      virtual canvas for teams to brainstorm ideas, sketch out
                      preliminary concepts, and seamlessly collaborate with
                      fellow teammates.
                    </span>
                  </p>
                </span>
                <br />
                <span>
                  <p className='text-2xl inline font-normal  text-black'>
                    Dynamic Design:
                    <span className='md:text-lg text-xs '>
                      {` When alterations are needed in a building's structure or
                      dimensions, BIM's 3D models provide a user-friendly
                      platform for editing designs, resolving critical
                      engineering issues, and ensuring flexibility in the design
                      process.`}
                    </span>
                  </p>
                </span>
                <br />
                <span>
                  <p className='text-2xl inline font-normal  text-black'>
                    Execution Excellence:
                    <span className='md:text-lg text-xs '>
                      {` As the project transitions to the construction phase, BIM 3D models offer a comprehensive overview of the building's constructability. Serving as a valuable resource, the model aids in transforming the virtual blueprint into a tangible reality during the construction process.`}
                    </span>
                  </p>
                </span>
                <br />
                <h1 className='text-2xl flex  gap-y-2 font-normal  text-black mb-2 '>
                  Managing and Operating with Digital Twins
                </h1>
                <span>
                  <p className='text-2xl inline font-normal  text-black'>
                    Progress Modelling:
                    <span className='md:text-lg text-xs '>
                      {` With a comprehensive view of the building, digital twins streamline ongoing facility management. Leveraging immersive BIM 3D models, teams can virtually explore spaces, significantly reducing the need for costly and time-intensive on-site visits.`}
                    </span>
                  </p>
                </span>
                <br />
                <span>
                  <p className='text-2xl inline font-normal  text-black'>
                    Immersive Simulation:
                    <span className='md:text-lg text-xs '>
                      {` Digital twins generate photorealistic renditions of physical spaces, allowing stakeholders to virtually experience and simulate navigating through the environment. This immersive experience aids in decision-making and project visualization.`}
                    </span>
                  </p>
                </span>
                <br />
                <span>
                  <p className='text-2xl inline font-normal  text-black'>
                    Facility Management:
                    <span className='md:text-lg text-xs '>
                      {` With a comprehensive view of the building, digital twins streamline ongoing facility management. Leveraging immersive BIM 3D models, teams can virtually explore spaces, significantly reducing the need for costly and time-intensive on-site visits.`}
                    </span>
                  </p>
                </span>
                <br />
                <h1 className='text-2xl flex  gap-y-2 font-normal  text-black mb-2 '>
                  Integrating BIM and digital twin
                </h1>
                <p className='    md:text-lg text-xs flex '>
                  Smart building requires technology that is packed with
                  real-time dynamic insights. Digital twins can be the link that
                  brings real-time data to BIM projects— helping in faster and
                  smarter work. Digital twins can help bring static BIM data to
                  life. In conclusion, from design and construction to ongoing
                  operation and maintenance, Digital Twin enhances efficiency,
                  mitigates risks, and fosters a proactive and data-driven
                  approach. In the era of smart infrastructure, the Digital Twin
                  stands as a catalyst for innovation, empowering companies to
                  build and manage the future with unprecedented precision.
                </p>
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
