This application is built using create-react-app, GraphQL, and Relay on top of Node.js

## Installation

git clone the respository at https://github.com/eatseng/movie_browser

in app root directory, enter 'touch .env', then insert an entry TMDB_API_KEY = 'api_key' in the .env file. The api_key is your TMDB api key.

install dependencies by running 'npm install'

## Start web server

in app root directory, enter 'npm run dev' in terminal.

go to http://localhost:3000 in your chrome browser.

## Troubleshooting

if the landing page doesn't have movie thumbnails at the bottom half of the screen, it means your TMDB api_key is not valid or that the .env file is not in the app root directory. contact edwardtseng@gmail.com