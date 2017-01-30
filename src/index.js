import React from 'react';
import ReactDOM from 'react-dom';
var routes = require('./config/routes');
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import App from './modules/App'
import Main from './modules/Main'
import FAQ from './modules/FAQ'
import TypicalApplications from './modules/TypicalApplications'

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        {/* add the routes here */}
        <IndexRoute component={App}/>
        <Route path="/faq" component={FAQ}/>
        <Route path="/typicalApplications" component={TypicalApplications}/>
      </Route>
  </Router>
), document.getElementById('app'));
