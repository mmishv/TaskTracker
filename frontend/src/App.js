import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./components/HomePage";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskItem />} />
      </Routes>
    </Router>
  );
};

export default App;
