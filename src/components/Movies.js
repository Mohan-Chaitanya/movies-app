import React from 'react'
import './Styles.css'

const imagesURL = 'https://image.tmdb.org/t/p/w500/'

function Movies({ overview, poster_path, title, vote_average }) {
    return (
        <div className='imgContainer'>
            <img src={imagesURL + poster_path} alt={title} />
            <div className='movieInfo'>
                <h3>{title}</h3>
                <h2>{vote_average}</h2>
            </div>
            <div className='overView'>
                <h3>OverView:</h3>
                <p>{overview}</p>
            </div>

        </div>
    )
}

export default Movies
