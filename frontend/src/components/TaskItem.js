import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../styles/TaskItem.css';

const TaskItem = () => {
  const [task, setTask] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/tasks/${id}/`)
      .then(response => {
        setTask(response.data);
      })
      .catch(error => {
        console.error('Error fetching task:', error);
      });
  }, [id]);

  const handleDeleteTask = () => {
    axios.delete(`/api/tasks/${id}/`)
      .then(response => {
        window.location.href = '/tasks';
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="task-item-container">
      <div className="task-card">
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <div className="timestamps">
          <p>Created At: {new Date(task.created_at).toLocaleString()}</p>
          <p>Last Updated: {new Date(task.updated_at).toLocaleString()}</p>
        </div>
        <div className="button-container">
          <button className="delete-button" onClick={handleDeleteTask}>Delete</button>
          <Link to="/tasks" className="back-button">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
