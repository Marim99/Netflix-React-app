
import './App.css';
import Row from './components/Row';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import requests from './requests';

function App() {
  return (
    <div className="App">
    <Navbar/>
   <Banner/>
   <Row title='Netflix Original' fetchUrl={requests.fetchNetflix} isLarg/>
   <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
   <Row title='Popular' fetchUrl={requests.fetchPopular}/>
   <Row title='Trending' fetchUrl={requests.fetchTrending}/>
   <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
   <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
   <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
   <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
    </div>
  );
}

export default App;
