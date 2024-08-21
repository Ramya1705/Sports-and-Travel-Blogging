import React from 'react';

export const Signin = () => {
  const headingSize = window.innerWidth < 768 ? '24px' : '32px';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, teal, blue)',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '400px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          overflow: 'hidden',
          padding: '24px',
          backgroundColor: 'white',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: headingSize }}>Sign In</h1>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: '12px',
              width: '100%',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginBottom: '4px',
            }}
          />
          <small style={{ color: '#666' }}>We'll never share your email.</small>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              padding: '12px',
              width: '100%',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginBottom: '4px',
            }}
          />
          <small style={{ color: '#666' }}>We'll never share your password.</small>
        </div>
        <button
          style={{
            padding: '12px',
            width: '100%',
            backgroundColor: '#3182CE',
            color: 'white',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
