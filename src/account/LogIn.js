import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AccountStyle.css'

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    e.preventDefault();

  // Input Validation
  if (!email || !password) {
    alert("Both fields are required!");
    return;
  }

  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="auth-form">
        <label for="email">Email address</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
}

export default LogIn
