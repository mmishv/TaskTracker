import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/tasks" element={<TaskList/>}/>
                <Route path="/tasks/:id" element={<TaskItem/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>
    );
};

export default App;
