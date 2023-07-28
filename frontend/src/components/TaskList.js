import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/TaskList.css';
import '../styles/TaskForm.css';
import {Link} from 'react-router-dom';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`/api/users/${getCurrentUserFromToken().id}/tasks/`)
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const handleCreateTask = async () => {
        try {
            const currentUser = getCurrentUserFromToken();
            if (!currentUser) {
                console.error('User not authenticated');
                return;
            }

            const token = localStorage.getItem('access_token');
            if (!token) {
                console.error('Authentication token missing');
                return;
            }

            const headers = {
                'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json',
            };

            const data = {
                title, description, user: currentUser.id,
            };

            await axios.post('/api/tasks/', data, {headers});
            console.log('Task created successfully!');
            window.location.href = '/tasks';
        } catch (error) {
            console.error('Error creating task:', error.response.data);
        }
    };

    const handleDeleteTask = (taskId) => {
        axios.delete(`/api/tasks/${taskId}/`)
            .then(response => {
                setTasks(tasks.filter(task => task.id !== taskId));
            })
            .catch(error => {
                console.error('Error deleting task:', error);
            });
    };

    const handleLogout = async () => {
        try {
            await axios.post('/auth/logout/');
            localStorage.removeItem('access_token');
            window.location.href = '/';
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    const handleToggleTaskStatus = async (taskId) => {
        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                console.error('Authentication token missing');
                return;
            }

            const headers = {
                'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json',
            };

            const taskToUpdate = tasks.find(task => task.id === taskId);
            if (!taskToUpdate) {
                console.error('Task not found');
                return;
            }

            const updatedTask = {
                ...taskToUpdate, is_done: !taskToUpdate.is_done,
            };

            await axios.put(`/api/tasks/${taskId}/`, updatedTask, {headers});
            setTasks(tasks.map(task => task.id === taskId ? updatedTask : task));
            console.log('Task status updated successfully!');
        } catch (error) {
            console.error('Error updating task status:', error.response.data);
        }
    };

    return (<div className="home-page-container">
        <div style={{display: "inline"}}>
            <Link to="/" className="home-button">Home</Link>
            <Link to="#" className="home-button" onClick={handleLogout}>Logout</Link>
        </div>
        <div className="tasklist-container">
            <div className="create-form">
                <h2>Create New Task</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <br/>
                <button onClick={handleCreateTask}>Create</button>
            </div>
            <div className="task-container">
                {tasks.map(task => (<div
                    className={`task-card ${task.is_done ? 'task-done' : ''}`}
                    key={task.id}
                >
                    <h3 className="task-title">{task.title}</h3>
                    <p className="task-description">{task.description}</p>
                    <div className="button-container">
                        <button
                            className="view-button"
                            onClick={() => window.location.href = `/tasks/${task.id}`}
                        >
                            View
                        </button>
                        <button
                            className="delete-button"
                            onClick={() => handleDeleteTask(task.id)}
                        >
                            Delete
                        </button>
                        <button
                            className={`toggle-button ${task.is_done ? 'done' : ''}`}
                            onClick={() => handleToggleTaskStatus(task.id)}
                        >
                            ✓
                        </button>
                    </div>
                </div>))}

            </div>
        </div>
    </div>);
};

export default TaskList;

export function getCurrentUserFromToken() {
    const token = localStorage.getItem('access_token');
    if (!token) {
        return null;
    }
    return JSON.parse(token);
}
