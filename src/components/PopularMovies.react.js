import MovieThumbnail from './MovieThumbnail.react'
import SearchBar from './SearchBar.react'
import React from 'react';

import graphql from 'babel-plugin-relay/macro';
import {useLazyLoadQuery} from 'react-relay/hooks';
import {useHistory} from "react-router-dom";

import './PopularMovies.css';

const {useState} = React;

const query = graphql`
  query PopularMoviesQuery { 
    popularMovies {
      id
      posterPath
      releaseDate
      title
      voteAverage
    }
  }
`;

function PopularMovies() {
  const history = useHistory();
  const {popularMovies} = useLazyLoadQuery(query, {});
  const [movies, setMovies] = useState(popularMovies);

  const clickHandler = () => history.push('/');
  
  return (
    <div className="popularMovies">
      <div className="navBar">
      	<div className="navBarTitle" onClick={clickHandler}>{`Movie Browser`}</div>
  	  </div>
      <div className="searchPane">
        <div className="searchPaneTitle">{`Welcome.`}</div>
        <div className="searchPaneTagLine">
          {'Millions of movies, TV shows and people to discover. Explore now.'}
        </div>
        <SearchBar movies={popularMovies} onChange={setMovies} />
      </div>
      <div className="movieList">
        {(movies || []).map(movie => <MovieThumbnail key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default PopularMovies;
