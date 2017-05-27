import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import { Link, Switch, Route } from 'react-router-dom'
require('es6-promise').polyfill()

class FullApp extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }

}



class Header extends Component {
  constructor() {
    super()
  }

  render() {
  return (<header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/game'>Game</Link></li>
        <li><Link to='/top-scores'>Top Scores</Link></li>
      </ul>
    </nav>
  </header>)
  }
}

class Main extends Component {
  render () {
  return (<main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/game' component={Game}/>
        <Route path='/top-scores' component={TopScores}/>
      </Switch>
    </main>)
  }
}

class TopScores extends Component {
  render() {
    return (
      <ul>
        <li> 1 </li>
        <li> 2 </li>
      </ul>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
      A <Link to='/game'>Tic Tac Toe game</Link>
      </div>
    )
  }
}


export default FullApp;
