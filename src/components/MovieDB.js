import React, { useState } from 'react'
import '../App.css';
import Movies from './Movies'

function MovieDB(props) {
    const [moviesArr, setMoviesArr] = useState([]);
    const [pageCount, setpageCount] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    var Search_API = 'https://api.themoviedb.org/3/search/movie?api_key=26f6efda6d075b567fbd3adcc2e961bd&language=en-US&page=1&include_adult=false&query='
    var APIURL = 'https://api.themoviedb.org/3/discover/movie?api_key=26f6efda6d075b567fbd3adcc2e961bd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='

    var fetchURL = APIURL;

    var handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }

    var handleSubmit = (e) => {
        e.preventDefault();
        fetchURL = Search_API + searchTerm;
        if (searchTerm) {

            fetch(fetchURL)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setMoviesArr(data.results);
                })
            setSearchTerm('');
        }
    }


    var nextPage = () => {
        var count = pageCount;
        count++;
        setpageCount(count);
        for (let i = 1; i <= pageCount; i++) {
            fetch(fetchURL + i)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setMoviesArr(data.results);
                })
        }
    }

    var previousPage = () => {
        var count = pageCount;
        console.log(pageCount);
        count--;
        setpageCount(count);
        for (let i = 1; i <= pageCount - 1; i++) {
            fetch(fetchURL + i)
                .then((response) => response.json())
                .then((data) => {
                    setMoviesArr(data.results);
                })
        }
    }


    return (
        <div>
            <div className='searchBox'>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Search Favaouritess' type='search' onChange={handleChange} value={searchTerm}></input>
                </form>
            </div>
            <div className='pageButtons'>
                {pageCount === 1 ? <button onClick={nextPage}>NextPage</button> :
                    <>
                        <button onClick={previousPage}>PreviousPage</button>
                        <button onClick={nextPage}>NextPage</button>
                    </>
                }

            </div>
            <div className='movieContainer'>
                {moviesArr.map((movie) => {
                    return < Movies key={movie.id} {...movie} />
                })}
            </div>
        </div>
    )
}

export default MovieDB
