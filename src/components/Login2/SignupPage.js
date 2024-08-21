import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 import './SignupPage.css'; // Import the CSS file

const SignupPage2 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // To track the step in the process
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/signup", { username, password, email });
      if (response.data) {
        alert("Registered successfully. Please check your email for the OTP.");
        setStep(2); // Move to OTP verification step
      } else {
        alert("Please fill in correct details");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleRequestOtp = async () => {
    try {
      await axios.post("http://localhost:9000/send-otp", { email });
      alert("OTP sent to your email.");
    } catch (e) {
      console.error(e);
      alert("Failed to send OTP.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/verify-otp", { email, otp });
      if (response.data.message === 'OTP verified successfully') {
        navigate('/');
      } else {
        alert(response.data.error);
      }
    } catch (e) {
      console.error(e);
      alert("Failed to verify OTP.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {step === 1 ? (
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="form-group">
            <label>Mobile No</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      ) : (
        <div>
          <button onClick={handleRequestOtp}>Request OTP</button>
          <form onSubmit={handleVerifyOtp}>
            <div className="form-group">
              <label>OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="signup-button">Verify OTP</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupPage2;
