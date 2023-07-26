import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/TaskList.css';
import '../styles/TaskForm.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('/api/tasks/')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleCreateTask = () => {
    axios.post('/api/tasks/', { title, description })
      .then(response => {
        window.location.href = '/tasks';
      })
      .catch(error => {
        console.error('Error creating task:', error);
      });
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

  return (
    <div className="tasklist-container">
      <div className="create-form">
        <h2>Create New Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <button onClick={handleCreateTask}>Create</button>
      </div>
      <div className="task-container">
        {tasks.map(task => (
          <div className="task-card" key={task.id}>
            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.description}</p>
            <div className="button-container">
              <button className="view-button" onClick={() => window.location.href = `/tasks/${task.id}`}>View</button>
              <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;

