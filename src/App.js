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
      board: [0]
    }
  }

  render() {
    return (
      <div className="board-row">
        {this.renderSquare(0)}
      </div>
    );
  }

  renderSquare(index) {
    let board = this.state.board
    return (
      <Square 
        value={board[index]} 
        onClick={() => {this.setState({board: increase(board, index)})}}
      />
    )

    function increase(board, index) {
      board[index]++
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
