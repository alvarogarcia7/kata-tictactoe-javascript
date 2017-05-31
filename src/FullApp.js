import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import { Link, Switch, Route } from 'react-router-dom'
import Store from './Store' 
require('es6-promise').polyfill()

class FullApp extends Component {

  constructor() {
    super()
    this.store = new Store()
  }

  render() {
    return (
      <div>
        <Header store={this.store}/>
        <Main store={this.store}/>
      </div>
    );
  }

}



class Header extends Component {
  constructor() {
    super()
    this.state= {
        connectivity : 'online'
    }
  }
  componentWillMount() {
    this.props.store.subscribe('connectivity', (message) => {
      message = message[0]
      switch(message.status){
        case 'backend-down':
          this.setState({connectivity: 'backend appears to be down. go to https://github.com/alvarogarcia7/kata-tictactoe-javascript/tree/master#the-backend-is-down to fix it'});
          break;
        case 'online':
          this.setState({connectivity:  'Online!'})
          break;
        case 'offline': 
          this.setState({connectivity: 'You seem to be offline'})
          break;
      }})
  }
  render() {
  return (<header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/game'>Game</Link></li>
        <li><Link to='/top-scores'>Top Scores</Link></li>
        {'serviceWorker' in navigator ? <li> Supports Offline!</li>: ''}
        <li> Connectity status: {this.state.connectivity}</li>
        
      </ul>
    </nav>
  </header>)
  }
}

class Main extends Component {
  render () {
  const game =() => <Game store={this.props.store} />
  return (<main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/game' component={game}/>
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
