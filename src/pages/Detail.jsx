import { useEffect, useState } from 'react';
import Credits from '../fragments/Credits';
import DetailBanner from '../fragments/DetailBanner';
import Navbar from '../fragments/Navbar';
import Reviews from '../fragments/Reviews';
import Recomendations from '../layouts/Recomendations';
import { getDetailMovie, getMovieReviews } from '../services/details.service';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [detailMovie, setDetailMovie] = useState();
  const [reviews, setReviews] = useState();

  const id = useParams().id;
  useEffect(() => {
    getDetailMovie(id).then((data) => {
      setDetailMovie(data);
    });
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    getMovieReviews(id).then((data) => {
      setReviews(data);
    });
  }, [id]);

  return (
    <div>
      <Navbar />
      <DetailBanner
        backdrop_path={detailMovie?.backdrop_path}
        title={detailMovie?.original_title}
        release_date={detailMovie?.release_date.substring(0, 4)}
        language={detailMovie?.original_language}
        overview={detailMovie?.overview}
        poster_path={detailMovie?.poster_path}
        cat={detailMovie?.genres.map((genre) => {
          return ' ' + genre.name;
        })}
      />
      <Credits />
      <h3 className='max-w-screen-xl px-5 xl:px-0 my-5 xl:my-10 mx-auto text-lg xl:text-2xl font-bold text-primary'>
        Reviews
      </h3>
      {reviews?.results.map((review) => (
        <Reviews
          key={review?.id}
          username={review?.author}
          date={review?.created_at.substring(0, 10)}
          time={review?.created_at.substring(11, 16)}
          content={review?.content}
        />
      ))}
      <Recomendations />
    </div>
  );
};

export default Detail;
