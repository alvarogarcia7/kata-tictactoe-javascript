# kata-tictactoe-javascript
An offline-first application for playing TicTacToe

## Technical details

Playing with React, a hand-made Redux store, using some concepts of the Flux architecture.

Practicing Event Sourcing in javascript

## FAQ

### The backend is down

This application requires a backend to store the movements on the board.

There is a simple service to respond to these requests, the 
[tictactoe-backend](https://github.com/alvarogarcia7/kata-tictactoe-backend-javascript).
Just deploy that to a heroku (or similar), change the urls in `src/Store.js` and
deploy (`make deploy-gh-pages`)

