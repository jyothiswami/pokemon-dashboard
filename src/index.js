import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Dashboard from './dashboard';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import TodoList from './TodoList'
var destination = document.querySelector('#container');

ReactDOM.render(
    <div className="middle">
    <Dashboard/>
    </div>,
    destination
);