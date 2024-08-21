
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("handle login clicked");

    await axios.post("http://localhost:9000/signin", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data.status === "fail") {
          alert(res.data.message);
        } else {
          alert(res.data.message);
          console.log(res.data.data)
          console.log(res.data.data._id)
          window.location.href = `/user/${res.data.data._id}`;
        }
      })
      .catch((e) => console.log(e));
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleForgotPassword} className="forgot-password">
        Forgot Password?
      </button>
      <p className="signup-link">
        Don't have an account?{' '}
        <button onClick={handleSignup}>
          Sign up here
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
