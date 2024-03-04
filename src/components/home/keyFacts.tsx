const KeyFacts = () => {
  return (
    <div className='md:translate-y-0 translate-y-3/4'>
      <div className='flex pt-12 pb-12 bg-num-blue bg-opacity-10'>
        <div className='flex items-center justify-center w-10'>
          <div className='bg-num-orange h-32 w-10 mt-10 mb-10'></div>
        </div>
        <div className='flex flex-col justify-center items-center w-2/5'>
          <h1 className='text-4xl font-bold text-num-orange w-4/5 mb-5'>
            Key Facts
          </h1>
          <p className='text-md text-num-blue font-medium w-4/5'>
            We are commited to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
        </div>
        <div className='md:grid grid-cols-3 gap-y-4 items-center w-3/5 '>
          <div className='flex flex-col  w-4/5 ml-5'>
            <h1 className='text-5xl text-num-orange font-bold mb-2'>6600+</h1>{' '}
            <p className='text-xl text-num-blue font-semibold'>
              Road & Highway Project(km)
            </p>
          </div>
          <div className='flex flex-col  w-4/5 ml-5'>
            <h1 className='text-5xl text-num-orange font-bold  mb-2'>1230+</h1>{' '}
            <p className='text-xl text-num-blue font-semibold  w-2/3'>
              Oil & Gas Pipeline(km)
            </p>
          </div>
          <div className='flex flex-col  w-4/5 ml-5'>
            <h1 className='text-5xl text-num-orange font-bold  mb-2'>900+</h1>{' '}
            <p className='text-xl text-num-blue font-semibold '>
              Civil Construction Projects(Mil sq ft)
            </p>
          </div>
          <div className='flex flex-col  w-4/5 ml-5 mt-5'>
            <h1 className='text-5xl text-num-orange font-bold  mb-2'>2000+</h1>{' '}
            <p className='text-xl text-num-blue font-semibold '>
              Railway & Metro Projects(km)
            </p>
          </div>
          <div className='flex flex-col  ml-5 mt-5'>
            <h1 className='text-5xl text-num-orange font-bold  mb-2'>3500+</h1>{' '}
            <p className='text-xl text-num-blue font-semibold '>
              Power Transmission Towers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KeyFacts;