import { FaArrowRight } from 'react-icons/fa';
const Page = () => {
  return (
    <div>
      <div className='relative text-white z-1'>
        <video
          autoPlay
          muted
          loop
          src={'carousel/bim480.mp4'}
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0  flex items-center justify-center  bg-black bg-opacity-30'>
          <div className='text-white w-3/5 flex flex-col items-center justify-center '>
            <h1 className='md:text-6xl font-bold  text-xl '>
              Building Information Modelling (BIM)
            </h1>

            <h2 className='font-serif mt-4 pr-4 md:text-base text-xs'>
              We push BIM harder, enhancing collaboration, creativity and
              knowledge sharing on every project
            </h2>
          </div>
        </div>
      </div>
      {/* <div className='grid grid-flow-col bg-gray-200 shadow-md'>
        <div className='flex items-center'>
          Building Information Modelling (BIM)
        </div>
        <div></div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col '>
            <h1 className='font-medium'>
              Talk to NumberTree about this service
            </h1>
            <span className='flex items-center text-sm'>
              Get in touch <FaArrowRight className='ml-2' />
            </span>
          </div>
        </div>
      </div> */}
      <div className='flex flex-row-3'>
        <div className='w-1/5'></div>
        <div className='flex w-3/5 mt-20 flex-col items-center justify-center'>
          <p>
            {`For over two decades, BIM has enabled built environment industry
          professionals to share information in a single, shared project-based
          set of objects and systems. It helps clients to understand design and
          engineering choices visually. It allows the creative team to test
          options on the layout of critical services virtually. And it outputs
          vital documentation and enables greater collaboration.`}
          </p>
          <br />
          <p>
            {` At NumberTree, we’ve been pushing BIM’s capabilities, finding ways to amplify these effects
          and realise its potential and value on all our projects and developing
          automatic creation of content from data that enables us to respond
          directly to client needs.`}
          </p>
          <h1 className='font-medium text-2xl mt-2'>
            Information and data in – design and documentation out
          </h1>
          <p>
            {`BIM’s centralisation of the data about all a project’s elements, and the power of linking BIM and other data together, is at the heart of its potential, often importing information directly from existing analytical models – bringing uniformity and consistency to the model from the start. We develop BIM models that go beyond storage of relevant information (sizes, dimensions and so on), to enable automated geometry and design, layout and documentation of repeat elements and provide coordination across disciplines. `}
          </p>
          <br />
          <p>{` You might want to change layouts or equipment options across a whole building – we build models that enable rapid design iteration and automatically generate solutions and documentation, freeing our designers up for more valuable tasks. Clients gain confidence in a chosen design route, as many key decisions can be made with greater clarity using the model, right from the start.`}</p>
          <br />
          <p>{` We use BIM to validate design choices too, helping clients explore the viability of a proposed combination of services of functions, establishing how ‘buildable’ the desired approach is. For clients developing buildings or assets in different locations, our unique capabilities in BIM, including developing global BIM data standards, help to achieve better results, while ensuring their building or asset complies with local building regulations.`}</p>
          <br />
          <h1 className='font-medium text-2xl mt-2'>
            The asset management advantage
          </h1>
        </div>
        <div className='w-1/5'></div>
      </div>
    </div>
  );
};

export default Page;
