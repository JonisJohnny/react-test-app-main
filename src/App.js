import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TodoList from "./pages/todoList";
import DoneList from "./pages/doneList";

export default class App extends React.Component { 
  
  render () {
  return (
    <Router>
    <div>
      <nav>
        <ul className="default--menu">
          <li>
            <Link to="/todoList">Todo List</Link>
          </li>
          <li>
            <Link to="/doneList">Done List</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="main">
      <Switch>
        <Route path="/todoList">
          <TodoList />
        </Route>
        <Route path="/doneList">
          <DoneList />
        </Route>
      </Switch>
    </div>
  </Router>
  );
  }
}


