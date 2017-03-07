import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from './modules/Home'
import SpacePilot from './modules/SpacePilot'
import Tetris from './modules/Tetris'
import CrossStitch from './modules/CrossStitch'
import SynonymsMixer from './modules/SynonymsMixer'
import Gomoku from './modules/Gomoku'
import SimpleLoginSystem from './modules/SimpleLoginSystem'
import About from './modules/About'
import Contact from './modules/Contact'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="space-pilot" component={SpacePilot}/>
      <Route path="tetris" component={Tetris}/>
      <Route path="cross-stitch" component={CrossStitch}/>
      <Route path="synonyms-mixer" component={SynonymsMixer}/>
      <Route path="gomoku" component={Gomoku}/>
      <Route path="simple-login-system" component={SimpleLoginSystem}/>
      <Route path="about-me" component={About}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
