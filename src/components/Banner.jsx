const Banner = ({ backdrop_path }) => {
  return (
    <div>
      <img
        src={`${import.meta.env.VITE_BASE_BACKDROP}/${backdrop_path}`}
        alt=''
        className='w-full h-screen pt-16 xl:pt-20 object-cover mx-auto'
      />
      <div className='absolute top-16 xl:top-0 left-0 w-full h-full bg-gradient-to-t from-slate-800 via-slate-800/20 via-50% to-slate-800/5 to-70%' />
    </div>
  );
};

export default Banner;
