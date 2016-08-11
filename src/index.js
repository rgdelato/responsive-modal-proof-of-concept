import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './Layout';
import App from './App';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App} hello={{data: true}} />
      <Route path="/modal1" component={App} data={{modal1: true}} />
      <Route path="/modal2" component={App} data={{modal2: true}} />
    </Route>
  </Router>,
  document.getElementById('root')
);
