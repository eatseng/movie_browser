Built using create-react-app, GraphQL, and Relay on top of Node.js.

Featuring simple typeahead search bar

## Search and typehead behavior

search bar is a naive string match with title of popular movie. When enter is pressed, popular movie list is updated with search phrase hits.

typehead behavior is as follows:

before -> user type in something, typeahead shows up, user click on typehead row, search bar auto completes, but does not initate search until enter is pressed. When enter is pressed, popular movie list updates.

now -> user type in something, typeahead shows up, user click on typehead row, and user is taken directly to movie details page.

## Installation

git clone the respository at https://github.com/eatseng/movie_browser

in app root directory, enter 'touch .env', then insert an entry TMDB_API_KEY = 'api_key' in the .env file. The api_key is your TMDB api key.

install dependencies by running 'npm install'

## Start web server

in app root directory, enter 'npm run dev' in terminal.

go to http://localhost:3000 in your chrome browser.

## Troubleshooting

if the landing page doesn't have movie thumbnails at the bottom half of the screen, it means your TMDB api_key is not valid or that the .env file is not in the app root directory. contact edwardtseng@gmail.com

## Landing Page
![movie landing page](https://live.staticflickr.com/65535/49714859638_aa23628c13_w_d.jpg)

## Landing Page with typeahead
![movie typeahead page](https://live.staticflickr.com/65535/49715716607_59707437fd_w_d.jpg)

## Movie detail page
![movie detail page](https://live.staticflickr.com/65535/49714859588_3a904b73c4_w_d.jpg)
