
import React, { useState, useEffect } from 'react';
import './WebPage.css';
import { FaHome, FaFootballBall, FaPlane, FaSignInAlt, FaInfoCircle,FaSignOutAlt, FaPhoneAlt, FaCamera } from 'react-icons/fa';
import Sports from '../../Sports/Mainpage';
import Recommend from '../Recommended/Recommend';
import { FaBlogger } from 'react-icons/fa';
import { FaPenNib } from 'react-icons/fa';
//  import FeedbackAndSocial from './components/Feedback/feedback';
 import { FaInstagram, FaPinterest, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import FeedbackAndSocial from '../Feedback/feedback';


// import FeedbackAndSocial from '../Feedback/feedback'
const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://wallpapers.com/images/hd/travel-hd-4zjwrepl0mzn70nd.jpg",
    "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/804570/pexels-photo-804570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg"

    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="home-page" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <header>
        <nav className="navbar">
        <div style={{ width: '100%' }}>
      <h3 style={{ margin: 0, padding: 0, display: 'block' }}>
        Sports And Travel Blog
      </h3>
    </div>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/">
                <FaHome className="nav-icon" /> Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="#">
                <FaFootballBall className="nav-icon" /> Sports
              </a>
              <ul className="dropdown-menu">
            
                <li><a href="/sports">Photo Gallery</a></li>
                {/* <li><a href="#blogging">Blogging</a></li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#travel">
                <FaPlane className="nav-icon" /> Travel
              </a>
              <ul className="dropdown-menu">
                <li><a href="/travel">Photo Gallery</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/login">
                <FaSignInAlt className="nav-icon" /> Login
              </a>
            </li>
            <li className="nav-item">
              <a href="/about">
                <FaInfoCircle className="nav-icon" /> About
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog posts">
              {/* <a href="/contact"> */}
  <FaPenNib className="nav-icon" /> Blogging

              </a>
            </li>
            <li className="nav-item">
  <a href="/login">
    <FaSignOutAlt className="nav-icon" /> Logout
  </a>
</li>
          </ul>
        </nav>
        <div className="logo">
          
        </div>
      </header>
      <main>
        {/* <h2>Sweat.Explore.Share.</h2>
     */}
      </main>
      <div className="featured">
      <h3>
      <span style={{ color: 'black' }}>S</span>weat.
      <span style={{ color: 'black' }}>E</span>xplore.
      <span style={{ color: 'black' }}>S</span>hare.
    </h3>

      </div>
    
    </div>
      <Sports/>
      < Recommend/>
       <FeedbackAndSocial/>
      </>
  );
};

export default HomePage;
