import React  from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import App from '../modules/App'
import Main from '../modules/Main'
import FAQContainer from '../modules/FAQContainer'
import TypicalApplications from '../modules/TypicalApplications'

let routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        {/* add the routes here */}
        <IndexRoute component={App}/>
        <Route path="/faq" component={FAQContainer}/>
        <Route path="/typicalApplications" component={TypicalApplications}/>
      </Route>
  </Router>
);

export default routes