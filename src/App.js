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
      board: ['','',''],
      currentPlayer: 'X',
    }
  }

  render() {
    return (
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
    );
  }

  renderSquare(index) {
    let board = this.state.board
    return (
      <Square 
        value={board[index]} 
        onClick={() => {makeAMove.bind(this)(index)}}
      />
    )

    function makeAMove(index) {
      if (this.state.board[index] === '') {
        this.state.board[index] = this.state.currentPlayer
        let nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X'
        this.setState({board: board, currentPlayer: nextPlayer})
      }
    }
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
