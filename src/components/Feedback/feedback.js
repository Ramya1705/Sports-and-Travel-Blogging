import './feedback.css';
import React, { useState } from 'react';
import { FaInstagram, FaPinterest, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const FeedbackAndSocial = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/submit_feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* Feedback Form */}
      <div className="container">
        <h2>Website Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
            >
              <option value="">Select Rating</option>
              <option value="5">Excellent</option>
              <option value="4">Good</option>
              <option value="3">Average</option>
              <option value="2">Below Average</option>
              <option value="1">Poor</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Feedback:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit Feedback</button>
          </div>
        </form>
      </div>

      {/* Social Media Menu */}
      <div className="social-menu">
        <h1>Get connected with us on </h1>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61564321072849&mibextid=ZbWKwL"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@travelandsports-o3i?si=7vym0P21_fcgR553"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/discovering_.the_.globe"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/TravelandS98656?t=jncwSfwm-wIKIWAZnmgwoA&s=09"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://pin.it/4icuyY6o5"
              aria-label="Pinterest"
            >
              <FaPinterest />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FeedbackAndSocial;
