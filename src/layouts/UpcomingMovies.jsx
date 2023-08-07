import { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../services/movie.service';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then((data) => {
      setUpcomingMovies(data);
    });
  }, []);
  return (
    <div className='xl:mx-0 mx-5'>
      <div className='max-w-screen-xl mx-auto text-primary mb-10 xl:mb-20'>
        <h3 className='xl:text-2xl text-lg font-bold mb-5 mt-10'>
          Upcoming movies
        </h3>
        <div className='flex space-x-3 xl:space-x-5 snap-x overflow-x-auto no-scrollbar scroll-smooth'>
          {upcomingMovies.map((upcomingMovie) => (
            <Link
              to={`/detail/${upcomingMovie.id}`}
              key={upcomingMovie.id}>
              <Card
                key={upcomingMovie.id}
                poster={upcomingMovie.poster_path}
                title={upcomingMovie.title}
                year={upcomingMovie.release_date.substring(0, 4)}
                rating={upcomingMovie.vote_average}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
