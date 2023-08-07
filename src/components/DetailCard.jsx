import Category from './Category';

const DetailCard = ({
  className,
  title,
  release_date,
  language,
  overview,
  poster_path,
  cat,
  ...props
}) => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div
        className={`flex flex-col xl:flex-row w-full xl:w-2/3 justify-center items-center gap-x-5 xl:gap-x-10 ${className}`}>
        <div className='w-full h-full'>
          <img
            src={`${import.meta.env.VITE_BASE_IMG}${poster_path}`}
            alt=''
            className='w-[140px] h-[240px] xl:w-[220px] xl:h-[330px] object-cover rounded-lg m-5'
            {...props}
          />
        </div>
        <div className='flex flex-col text-white mx-5 justify-center'>
          <p className='text-lg xl:text-2xl font-bold text-primary'>{title}</p>
          <p className='text-sm xl:text-base'>
            {release_date} - {language}
          </p>
          <div className='flex gap-x-3 mt-3'>
            <Category cat={cat} />
          </div>
          <p className='mt-3 leading-relaxed text-sm xl:text-base'>
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
