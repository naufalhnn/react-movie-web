import Banner from '../components/Banner';
import DetailCard from '../components/DetailCard';

const DetailBanner = ({
  backdrop_path,
  title,
  release_date,
  language,
  overview,
  poster_path,
  cat,
}) => {
  return (
    <div className='flex flex-col'>
      <Banner backdrop_path={backdrop_path} />
      <DetailCard
        className='-translate-y-1/2'
        title={title}
        release_date={release_date}
        language={language}
        overview={overview}
        poster_path={poster_path}
        cat={cat}
      />
    </div>
  );
};

export default DetailBanner;
