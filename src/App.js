import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    let board = <Board />;
    return (
      <div>
          {board}
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

  render() {
    return (
      <li> bb </li>
    );
  }

}

export default App;