import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 import './login2.css';

const LoginPage2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpRequested, setIsOtpRequested] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!isOtpRequested) {
        // Request OTP if not already requested
        await axios.post("http://localhost:9000/send-otp", { email });
        alert("OTP sent to your email. Please verify it.");
        setIsOtpRequested(true);
      } else {
        // Verify OTP and proceed with login
        const response = await axios.post("http://localhost:9000/verify-otp", { email, otp });
        if (response.data.message === 'OTP verified successfully') {
          const loginResponse = await axios.post("http://localhost:9000/signin", { email, password });
          if (loginResponse.data.status === "fail") {
            alert(loginResponse.data.message);
          } else {
            alert(loginResponse.data.message);
            console.log(loginResponse.data.data);
            window.location.href = `/user/${loginResponse.data.data._id}`;
          }
        } else {
          alert(response.data.error);
        }
      }
    } catch (error) {
      console.error(error);
    }
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
          <label>Mobile no</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {isOtpRequested && (
          <div className="form-group">
            <label>OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">{isOtpRequested ? 'Verify and Login' : 'Request OTP'}</button>
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

export default LoginPage2;
