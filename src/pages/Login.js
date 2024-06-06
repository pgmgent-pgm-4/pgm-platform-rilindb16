import React, { useState } from 'react';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData); // Log form data before sending request
        
            fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
            })
            .then(response => {
            console.log('Response status:', response.status); // Log response status
            if (!response.ok) {
                console.log('Response not OK'); // Log unsuccessful response
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
            })
            .then(data => {
            console.log('Success:', data); // Log successful response
            window.location.href = '../';
            })
            .catch(error => {
            console.error('Error:', error); // Log any errors
            setError('Invalid email or password');
            });
        };

    return (
        <div className="auth-container">
        <div className="auth-wrapper">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="auth-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="auth-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="auth-button">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;
