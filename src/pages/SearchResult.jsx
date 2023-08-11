import { useParams } from 'react-router-dom';
import CardList from '../fragments/CardList';
import Navbar from '../fragments/Navbar';

const SearchResult = () => {
  const params = useParams().query;
  return (
    <div>
      <Navbar />
      <div className='mx-3'>
        <CardList title={`Result for "${params}"`} />
      </div>
    </div>
  );
};

export default SearchResult;
