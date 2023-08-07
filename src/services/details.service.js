import axios from 'axios';

export const getDetailMovie = async (movie_id) => {
  const detail = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/movie/${movie_id}?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return detail.data;
};

export const getMovieCredits = async (movie_id) => {
  const credits = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/movie/${movie_id}/credits?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return credits.data.cast;
};

export const getMovieReviews = async (movie_id) => {
  const reviews = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/movie/${movie_id}/reviews?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return reviews.data;
};

export const getMovieRecommendations = async (movie_id) => {
  const recommendations = await axios.get(
    `${
      import.meta.env.VITE_BASE_URL
    }/movie/${movie_id}/recommendations?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return recommendations.data.results;
};
