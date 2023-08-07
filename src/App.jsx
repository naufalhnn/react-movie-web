import Credits from './fragments/Credits';
import DetailBanner from './fragments/DetailBanner';
import Navbar from './fragments/Navbar';
import Reviews from './fragments/Reviews';
import Recomendations from './layouts/Recomendations';

function App() {
  return (
    <div>
      <Navbar />
      <DetailBanner />
      <Credits />
      <Reviews />
      <Recomendations />
    </div>
  );
}

export default App;
