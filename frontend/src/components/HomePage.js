import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="page-container">
            <div className="home-page">
                <div className="nav-links">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
                <h1 className="welcome-heading">Welcome to Task Tracker</h1>
                <p className="description">
                    "Task Tracker" is a simple web application for managing tasks. Users can create, view,
                    and delete their tasks. The application offers the following functionalities:
                    <br/>
                    <br/>
                    1. View Task List: On the homepage, users can view a list of all their created tasks.
                    Each task is represented as a card with a title and description. If needed, users can view detailed
                    information about a specific task.
                    <br/>
                    <br/>
                    2. Add New Task: The homepage allows users to create a new task. Users can enter the
                    title
                    and description of the task and then save it.
                    <br/>
                    <br/>
                    3. View Task Details: When selecting a specific task from the list, users are directed to the
                    TaskItem
                    page, where they can view comprehensive information about the task, including creation and update
                    timestamps.
                    <br/>
                    <br/>
                    4. Delete Task: Users can delete their tasks by clicking the "Delete" button on the task card or on
                    the TaskItem page.
                    <br/>
                    <br/>
                    5. Registration and Authentication: The application also provides registration (Signup) and
                    authentication (Login) functionalities,
                    allowing users to access their tasks securely.
                    <br/>
                </p>
            </div>
        </div>
    );
};

export default HomePage;
