import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, useRouterHistory } from 'react-router';
import { createHistory, useBasename } from 'history';

import Routes from './routes'

const history = useRouterHistory(createHistory)({
  basename: '/zhangda/rich'
})

ReactDOM.render((
  <Router history={history}>
    { Routes }
  </Router>
), document.getElementById('react-root'));
