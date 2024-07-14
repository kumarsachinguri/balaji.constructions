const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='maxwidth text-center text-slate-100 text-4xl md:text-6xl font-black my-4 uppercase'>
        Balaji Constructions
      </h1>
      <h3 className='maxwidth text-center text-slate-100 text-lg md:text-2xl font-bold my-4'>
        Welcome to Balaji Constructions, where we bring your industrial visions
        to life with exceptional expertise in building warehouses, cold stores,
        and plant facilities tailored to your needs.
      </h3>
      <div className='maxwidth flex items-center justify-evenly w-full my-8'>
        <button className='bg-amber-400 rounded-md px-4 py-2 font-bold text-white'>
          Know More
        </button>
        <button className='bg-amber-400 rounded-md px-4 py-2 font-bold text-white'>
          View Projects
        </button>
      </div>
    </div>
  );
};

export default Hero;
