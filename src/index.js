import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './dashboard';
import DetailsComponent from './detailsComponent';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Dashboard} />
      <Route path="/showDetails" component={DetailsComponent} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))