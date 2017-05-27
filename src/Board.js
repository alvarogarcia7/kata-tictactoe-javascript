import React, { Component } from 'react';
import './App.css';

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
    this.props.store.subscribe('makeamove', this.replay.bind(this))
    this.replay(this.state.moves)
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
        onClick={() => {makeAMove.bind(this)(index)}}
      />
    )

    function makeAMove(index) {
      this.props.store.publish('makeamove', {type: 'put', at: index}); 
    }
  }

  replay(moves) {
    var currentPlayer = this.initialState.player
    var board = shallowClone(this.initialState.board)
    moves.forEach(move => {
      let index = move.at;
      if (board[index] === '') {
        board[index] = currentPlayer
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'
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

export { Board };
