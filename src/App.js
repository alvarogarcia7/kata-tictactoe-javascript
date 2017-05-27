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
    this.initialState = {
      board: ['','','',
              '','','',
              '','',''],
      player: 'X',
    }
    this.state = {
      moves: [],
      board: [],
    }
  }

  componentWillMount(){
    this.replay()
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
        onClick={() => {makeAMove.bind(this)(index); this.replay()}}
      />
    )

    function makeAMove(index) {
      this.state.moves.push({type: 'put', at: index}); 
    }
  }

  replay() {
    var currentPlayer = this.initialState.player
    var board = shallowClone(this.initialState.board)
    this.state.moves.map(move => {
      if(move.type === 'put') {
        let index = move.at;
        if (board[index] === '') {
          board[index] = currentPlayer
          currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'
        }
      }
    })
    this.setState({board: board})

    function shallowClone(obj) {
      return Object.assign({}, obj);
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
