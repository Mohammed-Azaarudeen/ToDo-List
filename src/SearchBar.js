import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task); // Pass the task to the parent component
      setTask(""); // Clear the input field
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" id="t1">Manage Your Tasks</h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center align-items-center gap-2"
      >
        <input
          type="text"
          id="addtasks"
          className="form-control"
          placeholder="What's Your Task?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary" id="btn-add-task">
          +
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
