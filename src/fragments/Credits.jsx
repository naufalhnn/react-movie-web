import { useEffect, useState } from 'react';
import { CreditsAvatar } from '../components/CreditsAvatar';
import { getMovieCredits } from '../services/details.service';
import { useParams } from 'react-router-dom';

const Credits = () => {
  const [credits, setCredits] = useState();
  const id = useParams().id;

  useEffect(() => {
    getMovieCredits(id).then((data) => {
      setCredits(data);
    });
  });

  return (
    <div className='max-w-screen-xl mx-auto text-white'>
      <h3 className='text-lg xl:text-2xl font-bold mx-5 xl:mx-0 -mt-44 xl:-mt-20 mb-5 xl:mb-10 text-primary'>
        Full Cast
      </h3>
      <div className='flex space-x-4 xl:space-x-12 overflow-x-auto no-scrollbar scroll-smooth mx-5 xl:mx-0'>
        {credits?.map((credit) => (
          <CreditsAvatar
            key={credit?.id}
            profile_path={credit?.profile_path}
            name={credit?.name}
            character={credit?.character}
          />
        ))}
      </div>
    </div>
  );
};

export default Credits;
