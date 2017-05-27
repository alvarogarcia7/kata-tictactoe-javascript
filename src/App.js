import React, { Component } from 'react';
import './App.css';
import Store from './Store' 
import { Board } from './Board'

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

export default App;
