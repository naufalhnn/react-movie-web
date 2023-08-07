const CardImage = ({ poster, ...props }) => {
  return (
    <div className='snap-start w-28 h-48 xl:w-44 xl:h-72'>
      <img
        src={
          poster
            ? `${import.meta.env.VITE_BASE_IMG}${poster}`
            : '/src/assets/images/dummy-poster.png'
        }
        alt=''
        className='w-full h-full object-cover rounded-lg'
        {...props}
      />
    </div>
  );
};

export default CardImage;
