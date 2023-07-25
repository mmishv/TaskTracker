import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App';
import HomePage from './components/HomePage';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

ReactDOM.render(
  <StrictMode>
    <Router>
      <App>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tasks" component={TaskList} />
        <Route path="/tasks/:id/" component={TaskItem} />
      </App>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);