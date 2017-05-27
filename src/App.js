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
      board: ['','','']
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
        onClick={() => {this.setState({board: setAt(board, index, 'X')})}}
      />
    )

    function setAt(board, index, value) {
      board[index] = value
      return board 
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
