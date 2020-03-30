const TMDBModel = require('../models/tmdb');

module.exports = {
  movie: async({id}) => {
    const TMDB = new TMDBModel();
    const {statusCode, content} = await TMDB.movieDetails(id);
    return {
      backdropPath: content.backdrop_path,
      genres: content.genres.map(genre => genre.name),
      id: content.id,
      overview: content.overview,
      posterPath: content.poster_path,
      releaseDate: content.release_date,
      runtime: content.runtime,
      tagline: content.tagline,
      title: content.title,
      voteAverage: content.vote_average,
    };
  },
  popularMovies: async () => {
    const TMDB = new TMDBModel();
    const {statusCode, content} = await TMDB.popular();
    return content.results.map(data => {
      return {
        id: data.id,
        posterPath: data.poster_path,
        releaseDate: data.release_date,
        title: data.title,
        voteAverage: data.vote_average,
      };
    });
  },
};