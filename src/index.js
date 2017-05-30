import React from 'react';
import ReactDOM from 'react-dom';
import FullApp from './FullApp'
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
  <HashRouter history={History}>      
    <FullApp /> 
  </HashRouter>),
  document.getElementById('root'));
registerServiceWorker();
