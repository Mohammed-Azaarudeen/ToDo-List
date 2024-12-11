import React, { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import DateTime from './DateTime';
import ToggleScreen from './ToggleScreen';
import HomePage from './HomePage';
import Signup from './Signup';
import Login from './Login';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null); // State to hold the user's info
  const navigate = useNavigate();

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to the list
  };

  const handleLogin = (name) => {
    setUser(name);
    navigate('/home');
  };

  const handleSignup = (name) => {
    setUser(name);
    navigate('/login');
  };

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      <Route 
        path="/home" 
        element={<HomePage user={user} tasks={tasks} onAddTask={handleAddTask} />} 
      />
    </Routes>
  );
};

const WelcomePage = () => {
  return (
    <>
      <ToggleScreen />
      <DateTime />
      <div className="container mt-5">
        <h2 className="text-center">Welcome to the To-Do List App!</h2>
        <p className="text-center">Please sign in or sign up to continue.</p>
        <div className="text-center">
          <button className="btn btn-primary">
            <a href="/login" id="signIn">Sign In</a>
          </button>
          <button className="btn btn-secondary ml-3" id="signUp">
            <a href="/signup">Sign Up</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
