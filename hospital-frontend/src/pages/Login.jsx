import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!emailOrUsername || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: emailOrUsername,
        password,
      });

      if (response.status === 200) {
        setSuccess('Login successful!');
        setError('');

        // Store user ID or token if needed
        localStorage.setItem('userId', response.data.userId);

        // Redirect to home after 1 second
        setTimeout(() => {
          navigate('/Home');
        }, 1000);
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h2>HOSPITAL</h2>
        <p>Management Service</p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username or Email"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit">Login</button>

          <p className="create-account">
            <a onClick={() => navigate('/signup')}>Create Account</a>
          </p>
        </form>
      </div>

      <div className="login-right">
        <div className="icon-circle">
          <i className="fas fa-stethoscope"></i>
          <i className="fas fa-user-md"></i>
          <i className="fas fa-heartbeat"></i>
          <i className="fas fa-syringe"></i>
          <i className="fas fa-notes-medical"></i>
          <i className="fas fa-hospital"></i>
        </div>
        <h3>HOSPITAL</h3>
      </div>
    </div>
  );
};

export default Login;
