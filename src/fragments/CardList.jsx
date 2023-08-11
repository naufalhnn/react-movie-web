import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { getSearchMovie } from '../services/movie.service';
import { Link, useParams } from 'react-router-dom';

const CardList = ({ title }) => {
  const [movies, setMovies] = useState();
  const params = useParams().query;
  useEffect(() => {
    getSearchMovie(params).then((data) => {
      setMovies(data);
    });
  }, [params]);

  return (
    <div className='max-w-screen-xl mx-auto text-primary pt-20 mb-20'>
      <h3 className='text-2xl font-bold mb-5 mt-10'>{title}</h3>
      <div className='flex flex-wrap gap-x-3 xl:gap-x-5 gap-y-10 snap-x overflow-x-auto no-scrollbar scroll-smooth'>
        {movies?.map((movie) => (
          <Link
            to={`/detail/${movie?.id}`}
            key={movie?.id}>
            <Card
              key={movie?.id}
              poster={movie?.poster_path}
              title={movie?.title}
              year={movie?.release_date.substring(0, 4)}
              rating={movie?.vote_average.toFixed(1)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
