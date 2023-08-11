import axios from 'axios';
export const getMovies = async () => {
  const movies = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/discover/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return movies.data.results;
};

export const getTrendingMovies = async () => {
  const trendingMovies = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/trending/movie/week?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return trendingMovies.data.results;
};

export const getPopularMovies = async () => {
  const popularMovies = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return popularMovies.data.results;
};

export const getUpcomingMovies = async () => {
  const upcomingMovies = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/movie/upcoming?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return upcomingMovies.data.results;
};

export const getSearchMovie = async (query) => {
  const searchMovie = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/search/movie?query=${query}&api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return searchMovie.data.results;
};
