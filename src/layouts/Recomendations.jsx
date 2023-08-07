import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getMovieRecommendations } from '../services/details.service';
import { Link, useParams } from 'react-router-dom';

const Recomendations = () => {
  const [recommendations, setRecommendations] = useState();

  const id = useParams().id;

  useEffect(() => {
    getMovieRecommendations(id).then((data) => {
      setRecommendations(data);
    });
  }, [id]);

  return (
    <div className='max-w-screen-xl mx-auto my-10 xl:my-20'>
      <div className='text-lg xl:text-2xl text-primary font-bold mx-5 xl:mx-0'>
        <h3>Recommendations</h3>
      </div>
      <div className='flex space-x-5 snap-x overflow-x-auto no-scrollbar scroll-smooth mt-10 mx-5 xl:mx-0'>
        {recommendations?.map((recommendation) => (
          <Link
            to={`/detail/${recommendation.id}`}
            key={recommendation.id}>
            <Card
              key={recommendation?.id}
              title={recommendation?.title}
              year={recommendation?.release_date.substring(0, 4)}
              rating={recommendation?.vote_average.toFixed(1)}
              poster={recommendation?.poster_path}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recomendations;
