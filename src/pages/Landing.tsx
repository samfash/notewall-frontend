import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/landing.css'

const Landing: React.FC = () => {
  return (
    <div className='main body-landing'>
      <div className="hero">
          <h1>Welcome to NoteWall</h1>
          <p>Your personal note-taking app to keep your thoughts organized and accessible anywhere.</p>
          <div className="cta-buttons">
            <Link to="/login" className='btn'>Login</Link>
            <Link to="/register" className='btn'>Register</Link>
          </div>
      </div>
      <section className="features">
          <div className="feature-box">
              <h2>Organize Your Thoughts</h2>
              <p>NoteWall helps you to organize your notes efficiently with tags and categories.</p>
          </div>
          <div className="feature-box">
              <h2>Access Anywhere</h2>
              <p>Your notes are synced across all your devices, making them accessible anytime, anywhere.</p>
          </div>
          <div className="feature-box">
              <h2>Secure and Private</h2>
              <p>With top-notch security, your notes are always safe and private on NoteWall.</p>
          </div>
      </section>
    </div>
  );
};

export default Landing;
