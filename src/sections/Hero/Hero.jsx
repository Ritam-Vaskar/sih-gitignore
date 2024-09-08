import React from 'react';
import './styles/Hero.css'; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="navbar">
        <h1 className="logo">TravelQuest</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      <div className="hero-content">
        <h2>Explore the culture of our beautiful country...</h2>
        <p className="hero-subtext">We always make our customer happy by providing as many choices as possible</p>
      </div>
    </section>
  );
};

export default HeroSection;
