import React from 'react';
import DateTime from './DateTime';
import SearchBar from './SearchBar';
import HandleTasks from './HandleTasks';
import ToggleScreen from './ToggleScreen';

const HomePage = ({ user, tasks, onAddTask }) => {
  
 
  return (
    <>

      <ToggleScreen />
      <DateTime />
      <div className="container mt-5">
        <h2 className="text-center">Welcome, {user}!</h2>
        <p className="text-center text-primary">Add Your Tasks..</p>
      </div>
      <SearchBar onAddTask={onAddTask} />
      <HandleTasks tasks={tasks}/>
    </>
  );
};

export default HomePage;
