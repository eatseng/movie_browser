import MovieRating from './MovieRating.react';
import React from 'react';

import {useHistory} from "react-router-dom";

import './MovieThumbnail.css';

const MONTH = [
  '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function MovieThumbnail(props) {

  const history = useHistory();
  const [year, month, date] = props.releaseDate.split('-');
  const dateString = `${MONTH[parseInt(month)]} ${date}, ${year}`;
  const clickHandler = () => {
    history.push({
      pathname: '/movie',
      search: `?id=${props.id}`,
    });
  };

  return (
    <div className="movieThumbnail" onClick={clickHandler}>
      <img
        alt={props.title}
        className="movieThumbnailImage"
        src={`https://image.tmdb.org/t/p/w154${props.posterPath}`}
        width={150} />
      <div className='thumbnailRating'>
        <MovieRating voteAverage={props.voteAverage} />
      </div>
      <div className='thumbnailTitle'>{props.title}</div>
      <div className='thumbnailRelaseDate'>{dateString}</div>
    </div>
  );
}

export default MovieThumbnail;
