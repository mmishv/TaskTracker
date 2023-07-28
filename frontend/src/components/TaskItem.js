import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import {getCurrentUserFromToken} from './TaskList'
import '../styles/TaskItem.css';

const TaskItem = () => {
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/tasks/${id}/`)
      .then(response => {
        setTask(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpdateTask = async () => {
    try {
      const data = {
        title,
        description,
        user: getCurrentUserFromToken().id
      };

      const token = localStorage.getItem('access_token');
      if (!token) {
        console.error('Authentication token missing');
        return;
      }

      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      await axios.put(`/api/tasks/${id}/`, data, { headers });
      console.log('Task updated successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error updating task:', error.response.data);
    }
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="task-item-container">
      <div className="task-card">
        <input type="text" value={title} onChange={handleTitleChange} />
        <textarea value={description} onChange={handleDescriptionChange} />
        <div className="timestamps">
          <p>Created At: {new Date(task.created_at).toLocaleString()}</p>
          <p>Last Updated: {new Date(task.updated_at).toLocaleString()}</p>
        </div>
        <div className="button-container">
          <button className="delete-button" onClick={handleDeleteTask}>Delete</button>
          <button className="update-button" onClick={handleUpdateTask}>Update</button>
          <Link to="/tasks" className="back-button">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
