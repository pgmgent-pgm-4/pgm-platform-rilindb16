import React, { useState } from 'react';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Navigate to login page after successful registration
      window.location.href = '/login';
    })
    .catch(error => {
      console.error('Error:', error);
      if (error.message.includes('already in use')) {
        setEmailError('This email is already in use. Please use a different email.');
      }
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="auth-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="auth-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="auth-group">
            <label htmlFor="role">Role:</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange} required>
              <option value="">Select role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
