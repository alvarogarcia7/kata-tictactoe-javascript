import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
          <Board />
          {this.winner()}
      </div>
    );
  }

  winner() {
    return (
        <li>winner is </li>
    )
  }
}

class Board extends Component {

  constructor() {
    super()
    this.state = {
      board: ['','','',
              '','','',
              '','',''],
      currentPlayer: 'X',
      moves: [],
    }
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

  renderSquare(index) {
    return (
      <Square 
        value={this.state.board[index]} 
        onClick={() => {makeAMove.bind(this)(index); this.replay(this.state)}}
      />
    )

    function makeAMove(index) {
      this.state.moves.push({type: 'put', at: index}); 
    }
  }

  replay(state) {
    var currentPlayer = this.state.currentPlayer
    var board = this.state.board
    this.state.moves.map(move => {
      if(move.type === 'put') {
        let index = move.at;
        if (board[index] === '') {
          board[index] = currentPlayer
          currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'
        }
      }
    })
    this.setState({board: board, currentPlayer: currentPlayer})
  }
}

class Square extends Component {
  render() {
    return (
    <button className="square" onClick={this.props.onClick}>
       {this.props.value}
    </button>
    )
  }
}

export default App;
