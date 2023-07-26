import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Link to="/tasks">Tasks</Link>
            <h1>Welcome to Task Tracker</h1>
            <p>This is the home page of the Task Tracker app.</p>
        </div>
    );
};

export default HomePage;
