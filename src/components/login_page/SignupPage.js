// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './SignupPage.css'; // Import the CSS file

// const SignupPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:9000/signup", { username, password, email })
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           alert("Registered successfully");
//           navigate('/');
//         } else {
//           alert("Please fill in correct details");
//           window.location.href = "/signup";
//         }
//       })
//       .catch((e) => console.log(e));
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="signup-button">Sign Up</button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// };

// export default SignupPage;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Import the CSS file

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9000/signup", { username, password, email })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Registered successfully");
          navigate('/');
        } else {
          alert("Please fill in correct details");
          window.location.href = "/signup";
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignupPage;
