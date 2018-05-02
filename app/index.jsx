import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Home } from './views';
import './index.html';

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
  </Router>
);

render(<App />, document.getElementById('app'));
