export const CreditsAvatar = ({ profile_path, name, character }) => {
  return (
    <div className='flex-shrink-0 w-20 xl:w-32 text-center'>
      <img
        src={
          profile_path
            ? `${import.meta.env.VITE_BASE_IMG}/${profile_path}`
            : '/images/dummy-avatar.jpeg'
        }
        alt='credits avatar'
        className='rounded-full w-16 h-16 xl:w-20 xl:h-20 object-cover mx-auto'
      />
      <div className='text-white'>
        <p className='text-sm xl:text-base font-semibold my-1'>{name}</p>
        <p className='text-gray-400 text-xs xl:text-sm'>{character}</p>
      </div>
    </div>
  );
};
