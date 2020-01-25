// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'
// import Dashboard from './dashboard';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// // import TodoList from './TodoList'
// var destination = document.querySelector('#container');

// ReactDOM.render(
//     <div className="middle">
//     <Dashboard/>
//     </div>,
//     destination
// );

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