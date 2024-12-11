import React, { useState } from 'react';
import './Login.css';
import DateTime from './DateTime';
import ToggleScreen from './ToggleScreen';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Mock authentication (You should replace this with real logic)
        if (username && password) {
            onLogin(username);  // Passing the username to the parent (App.js)
            navigate('/home');
        }
    };

    return (
        <><ToggleScreen /> <DateTime />
        <div className="container mt-5">
            <h2 className="text-center">Login To Your Account</h2>
            <form onSubmit={handleLoginSubmit} className="mt-4">
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

                <button className="btn btn-success" type="submit">Log In</button>
            </form>
            <div className="mt-3 text-center">
                <p>Don't have an account? <Link to="/signup" className="btn btn-link">Sign Up</Link></p>
            </div>
        </div>
        </>
    );
};

export default Login;
