import { StarFilledIcon } from '@radix-ui/react-icons';
import CardImage from './CardImage';

const Card = ({ title, year, rating, poster }) => {
  return (
    <div className='text-white w-28 xl:w-44'>
      <CardImage poster={poster} />
      <div className='my-3 text-sm xl:text-base font-semibold'>
        <p className='truncate'>{title}</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-xs xl:text-base font-light'>{year}</p>
        <p className='flex items-center gap-2 font-light text-xs xl:text-base'>
          <StarFilledIcon className='text-primary' /> {rating}
        </p>
      </div>
    </div>
  );
};

export default Card;
