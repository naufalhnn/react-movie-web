import ProfileAvatar from '../components/ProfileAvatar';

const Reviews = ({ username, date, time, content }) => {
  return (
    <div className='flex flex-col justify-center items-start max-w-screen-xl text-white mx-auto  xl:my-5 px-5 xl:px-0'>
      <div className='flex flex-col items-start mb-8 pb-4 xl:pb-7 border-b border-slate-700 '>
        <div className='flex space-x-4 items-center mb-5'>
          <ProfileAvatar />
          <div>
            <p className='text-base xl:text-lg font-semibold'>{username}</p>
            <p className='text-sm xl:text-base text-gray-400 leading-tight'>
              {date} {time}
            </p>
          </div>
        </div>
        <div className='text-sm xl:text-base leading-loose'>{content}</div>
      </div>
    </div>
  );
};

export default Reviews;
