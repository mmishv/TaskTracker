import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

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
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={handleDeleteTask}>Delete</button>
      <br />
      <Link to="/tasks">Back</Link>
    </div>
  );
};

export default TaskItem;

