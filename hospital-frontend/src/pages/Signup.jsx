import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { full_name, email, password, confirmPassword } = formData;

    if (!full_name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
    } else if (password !== confirmPassword) {
      setError("Passwords don't match.");
    } else {
      try {
        const response = await axios.post('http://localhost:5000/signup', {
          full_name,
          email,
          password,
        });

        if (response.status === 201) {
          setSuccess('Account created successfully!');
          setFormData({
            full_name: '',
            email: '',
            password: '',
            confirmPassword: '',
          });

          // ✅ Redirect to home after short delay
          setTimeout(() => {
            navigate('/home');
          }, 1000);
        }
      } catch (err) {
        if (err.response && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('Something went wrong. Please try again.');
        }
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <h2>HOSPITAL</h2>
        <p>Create your account</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit">Sign Up</button>

          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>

      <div className="signup-right">
        <div className="icon-circle">
          <i className="fas fa-heartbeat"></i>
          <i className="fas fa-user-md"></i>
          <i className="fas fa-hospital"></i>
          <i className="fas fa-notes-medical"></i>
          <i className="fas fa-stethoscope"></i>
          <i className="fas fa-syringe"></i>
        </div>
        <h3>HOSPITAL</h3>
      </div>
    </div>
  );
};

export default Signup;
