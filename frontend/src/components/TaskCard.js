import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="card m-3">
      <h2 className="card-title">{task.title}</h2>
      <p className="card-text">{task.description}</p>
      <p className="card-text">Created at: {task.created_at}</p>
      <p className="card-text">Updated at: {task.updated_at}</p>
    </div>
  );
};

export default TaskCard;
