import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TaskCard from './TaskCard';

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

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TaskCard task={task} />
    </div>
  );
};

export default TaskItem;
