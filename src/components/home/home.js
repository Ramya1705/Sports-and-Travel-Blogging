// pages/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <header className="hero">
        <div className="overlay">
          <h1 className="hero-title">Sweat,explore,share</h1>
          <p className="hero-subtitle">stuff your eyes with wonder,live as if you'd drop dead in ten seconds.</p>
        </div>
      </header>
      <section className="recent-posts">
        <div className="container">
          <h2>Recent Posts</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="post-card">
                <img src="post1.jpg" alt="Post 1" />
                <h3>Beautiful Bali</h3>
                <p>Discover the beauty of Bali in this detailed travel guide.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post-card">
                <img src="post2.jpg" alt="Post 2" />
                <h3>Adventures in Iceland</h3>
                <p>Explore the breathtaking landscapes of Iceland.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post-card">
                <img src="post3.jpg" alt="Post 3" />
                <h3>Thailand's Hidden Gems</h3>
                <p>Uncover hidden treasures in the heart of Thailand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
