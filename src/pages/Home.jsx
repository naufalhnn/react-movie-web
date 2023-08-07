import Navbar from '../fragments/Navbar';
import PopularMovies from '../layouts/PopularMovies';
import TrendingMovies from '../layouts/TrendingMovies';
import UpcomingMovies from '../layouts/UpcomingMovies';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <TrendingMovies />
      <PopularMovies />
      <UpcomingMovies />
    </div>
  );
};

export default HomePage;
