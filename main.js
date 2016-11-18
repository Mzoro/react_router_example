import React from 'react';
import App from './App';
import Repos from './Repos';
import Repo from './Repo';
import About from './About';
import Home from './Home';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render((
  <Router history = {browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>  
      <Route path="/about" component={About}/>
    </Route>  
  </Router>  
  ), document.getElementById('app'));
