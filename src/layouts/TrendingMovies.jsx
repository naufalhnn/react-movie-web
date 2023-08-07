import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/movie.service';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then((data) => {
      setTrendingMovies(data);
    });
  }, []);

  return (
    <div className='xl:mx-0 mx-5 pt-16 xl:pt-20'>
      <div className='max-w-screen-xl mx-auto text-primary xl:mb-20'>
        <h3 className='xl:text-2xl text-lg font-bold mb-5 mt-10'>
          Trending this week
        </h3>
        <div className='flex space-x-3 xl:space-x-5 snap-x overflow-x-auto no-scrollbar scroll-smooth'>
          {trendingMovies.map((trendingMovie) => (
            <Link
              to={`/detail/${trendingMovie.id}`}
              key={trendingMovie.id}>
              <Card
                key={trendingMovie.id}
                poster={trendingMovie.poster_path}
                title={trendingMovie.title}
                year={trendingMovie.release_date.substring(0, 4)}
                rating={trendingMovie.vote_average.toFixed(1)}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
