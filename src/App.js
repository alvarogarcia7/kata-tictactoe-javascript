import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.store = new Store()
  }

  render() {
    return (
      <div>
          <Board store={this.store}/>
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

class Store {
  constructor() {
    this.channels = {}
  }

  upsertChannel(name){
    if(!this.channels[name]){
      this.channels[name] = new Channel()
    }
    return this.channels[name]
  }

  publish(channelName, message) {
    this.upsertChannel(channelName).publish(message)
  }

  subscribe(channelName, function_) {
    this.upsertChannel(channelName).addSubscriber(function_)
  }
}

class Channel {
  constructor() {
    this.history = []
    this.subscribers = []
  }

  addSubscriber(function_) {
    this.subscribers.push(function_)
  }

  publish(message) {
    this.history.push(message)
    this.subscribers.map(f => f(this.history))
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
    moves.map(move => {
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

export default App;
