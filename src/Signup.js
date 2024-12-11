import React, { useState } from 'react';
import './Login.css';
import './DateTime.css';
import DateTime from './DateTime';
import ToggleScreen from './ToggleScreen';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Mock signup (You should replace this with real signup logic)
        if (username && password) {
            onSignup(username);  // Passing the username to the parent (App.js)
            navigate('/home');
        }
    };

    return (
        <>
        <DateTime />
        <ToggleScreen />
        
        <div className="container mt-5">
            <h2 className="text-center">Sign Up</h2>
            <form onSubmit={handleSignupSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Enter Your Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button className="btn btn-success" type="submit">Sign Up</button>
            </form>
            <div className="mt-3 text-center">
                <p>Already have an account? <Link to="/login" className="btn btn-link">Log In</Link></p>
            </div>
        </div>
        </>
    );
};

export default Signup;
