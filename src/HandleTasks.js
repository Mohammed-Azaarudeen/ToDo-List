import React, { useState } from "react";
import './HandleTask.css';
import { FaTrash } from "react-icons/fa";

const HandleTasks = ({ tasks, onDeleteTask }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  // Toggle task completion
  const handleCheck = (index) => {
    setCompletedTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center">Your Tasks</h3>
      {tasks.length === 0 ? (
        <p className="text-center">No tasks added yet!</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                completedTasks.includes(index) ? "completed-task" : ""
              }`}
            >
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={completedTasks.includes(index)}
                  onChange={() => handleCheck(index)}
                  className="form-check-input me-2"
                />
                <span>{task}</span>
              </div>
              <FaTrash
                style={{ cursor: "pointer" }}
                onClick={() => onDeleteTask(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HandleTasks;
