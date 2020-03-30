import MovieDetails from './components/MovieDetails.react'
import PopularMovies from './components/PopularMovies.react';
import React from 'react';
import ReactDOM from 'react-dom';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RelayEnvironment from './relay/RelayEnvironment';
import * as serviceWorker from './serviceWorker';

import './index.css';

const {Suspense} = React;

function movieDetailsLoader () {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <MovieDetails />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

function popularMovieLoader () {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <PopularMovies />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          {popularMovieLoader}
        </Route>
        <Route exact path="/movie">
          {movieDetailsLoader}
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
