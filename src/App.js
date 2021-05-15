import { useEffect, useState } from 'react';
import './App.css';
import MovieDB from './components/MovieDB'

function App() {


  const [moviesArr, setMoviesArr] = useState([]);

  var APIURL = 'https://api.themoviedb.org/3/discover/movie?api_key=26f6efda6d075b567fbd3adcc2e961bd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='

  // var Search_API = 'https://api.themoviedb.org/3/search/movie?api_key=26f6efda6d075b567fbd3adcc2e961bd&language=en-US&page=1&include_adult=false&query='

  // var handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchTerm(e.target.value)
  // }

  // var handleSubmit = (e) => {
  //   APIURL = Search_API + searchTerm;
  //   console.log(APIURL);
  // }

  return (
    <div className="App">
      <div className='appTitle'>
        <header>Time Killerss</header>
      </div>
      <div>
        <MovieDB />
      </div>
    </div>
  );
}

export default App;
