import React from 'react';
import './Auth.css';

const Login = () => {
    return (
        <div className="auth-container">
        <div className="auth-wrapper">
            <h2>Login</h2>
            <form>
            <div className="auth-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="auth-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="auth-button">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;
