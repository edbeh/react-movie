import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return (
        <div className="rmdb-moviethumb">
            {props.clickable ? // if clickable is true, we link image to individual movie
                <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
                    <img src={props.image} alt="moviethumb" />
                </Link>
            :
                <img src={props.image} alt="moviethumb" />
            }
        </div>
    )
}

export default MovieThumb;