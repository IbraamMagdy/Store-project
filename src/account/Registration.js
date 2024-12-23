import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AccountStyle.css'


const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    // Input Validation
    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Invalid email format!");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
    // Add your registration logic here
  };

  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister} className="auth-form">
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in here</Link>.
      </p>
    </div>
  )
}

export default Registration
