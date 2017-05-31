import React, { Component } from 'react';
import './App.css';
import { Board } from './Board'
require('es6-promise').polyfill()

class Game extends Component {
  componentWillMount() {
    this.store = this.props.store
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

export default Game;
