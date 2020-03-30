const apiRequest = require("../utils/apiCall");
const dotenv = require('dotenv');

dotenv.config();

function TMDB(params) {
  if (params != undefined) {
    null;
  }

  this.basicOptions = {
    hostname: "api.themoviedb.org",
    port: 443,
    method: 'GET',
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  };
};

TMDB.prototype.movieDetails = function (movieID) {

  const options = {
    ...this.basicOptions,
    path: `/3/movie/${movieID}?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  };
  params = {};
  return apiRequest(options, params);

};

TMDB.prototype.popular = function () {
  
  const options = {
    ...this.basicOptions,
    path: `/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  };
  params = {};
  return apiRequest(options, params);

};

module.exports = TMDB;