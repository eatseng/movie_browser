import MovieRating from './MovieRating.react';
import React from 'react';

import graphql from 'babel-plugin-relay/macro';
import {useHistory, useLocation} from "react-router-dom";
import {useLazyLoadQuery} from 'react-relay/hooks';

import './MovieDetails.css';

const query = graphql`
  query MovieDetailsQuery($id: Int!) { 
    movie(id: $id) {
      backdropPath
      genres
      id
      overview
      posterPath
      releaseDate
      runtime
      tagline
      title
      voteAverage
    }
  }
`;

function MovieDetails(props) {
  const history = useHistory();
  const location = useLocation();

  const queryString = location.search
    .slice(1)
    .split('&')
    .reduce((acc, curr) => {
      const [key, value] = curr.split('=');
      return {
        ...acc,
        [key]: value,
      };
    }, {});

  const {movie} = useLazyLoadQuery(query, {id: parseInt(queryString?.id) || 0});
  const [year] = movie.releaseDate.split('-');

  const clickHandler = () => history.push('/');

  return (
    <div className="movieDetails">
      <div className="navBar">
        <div className="navBarTitle" onClick={clickHandler}>{`Movie Browser`}</div>
      </div>
      <div className="movieOverview">
        <img
          alt={movie.title}
          className="movieOverviewImage"
          height={450}
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.posterPath}`}
          width={300}/>
        <div className="movieDetailsPane">
          <div className="movieDetailTitle">
            <div>{movie.title}</div>
            <div className="movieDetailYear">{`(${year})`}</div>
          </div>
          <div>{`${movie.genres.join(", ")} * ${movie.runtime}m`}</div>
          <div className="movieDetailRating">
            <MovieRating voteAverage={movie.voteAverage} />
            <div>User Score</div>
          </div>
          <div>{movie.tagline}</div>
          <div className="movieDetailOverviewTitle">Overview</div>
          <div className="movieDetailOverview">{movie.overview}</div>
        </div>
      </div>
      <div className="movieOverviewBackground">
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/h632${movie.backdropPath}`} />
        <div className="movieOverviewShield" />
      </div>
    </div>
  );
}

export default MovieDetails;
