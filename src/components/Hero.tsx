const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='maxwidth uppercase text-center text-slate-100 text-2xl sm:text-5xl md:text-7xl font-black'>
        Balaji Constructions
      </h1>
      <h2 className='maxwidth uppercase text-center text-amber-400 text-base sm:text-xl md:text-3xl font-black'>
        Expert construction services for your residential or commercial project
      </h2>
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
