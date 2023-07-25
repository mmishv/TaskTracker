import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from "./components/HomePage";
import TaskList from "./components/TaskList";

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/tasks" element={<TaskList/>}/>
            </Routes>
        </Router>
    );
};

export default App;
