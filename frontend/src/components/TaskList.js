import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/api/tasks/')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const handleDeleteTask = (taskId) => {
        axios.delete(`/api/tasks/${taskId}/`)
            .then(response => {
                setTasks(tasks.filter(task => task.id !== taskId));
            })
            .catch(error => {
                console.error('Error deleting task:', error);
            });
    };

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Link to={`/tasks/${task.id}`}>
                            {task.title}
                        </Link>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

