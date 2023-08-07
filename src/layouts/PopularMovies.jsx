import { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/movie.service';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getPopularMovies().then((data) => {
      setPopularMovies(data);
    });
  }, []);
  return (
    <div className='xl:mx-0 mx-5'>
      <div className='max-w-screen-xl mx-auto text-primary xl:mb-20'>
        <h3 className='xl:text-2xl text-lg font-bold mb-5 mt-10'>
          Popular Movies
        </h3>
        <div className='flex space-x-3 xl:space-x-5 snap-x overflow-x-auto no-scrollbar scroll-smooth'>
          {popularMovies.map((popularMovie) => (
            <Link
              key={popularMovie.id}
              to={`/detail/${popularMovie.id}`}>
              <Card
                key={popularMovie.id}
                poster={popularMovie.poster_path}
                title={popularMovie.title}
                year={popularMovie.release_date.substring(0, 4)}
                rating={popularMovie.vote_average}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
