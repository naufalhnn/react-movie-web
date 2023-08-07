import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { getMovies } from '../services/movie.service';

const CardList = ({ title }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
    });
  }, []);
  return (
    <div className='max-w-screen-xl mx-auto text-primary mb-20'>
      <h3 className='text-2xl font-bold mb-5 mt-10'>{title}</h3>
      <div className='flex space-x-5 snap-x overflow-x-auto no-scrollbar scroll-smooth'>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            year={movie.release_date.substring(0, 4)}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
