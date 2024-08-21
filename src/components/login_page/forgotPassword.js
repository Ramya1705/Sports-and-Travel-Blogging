import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('Password reset link has been sent to your email');
      // Simulate a delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setMessage('Please enter your email address');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', padding: '50px' }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handlePasswordReset}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
