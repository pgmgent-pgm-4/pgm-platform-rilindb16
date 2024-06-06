import React from 'react';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <h2>Register</h2>
        <form>
          <div className="auth-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="auth-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="auth-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
