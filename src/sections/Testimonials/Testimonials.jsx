import React from 'react';
import './styles/Testimonials.css'; 

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2>WHAT THEY SAY <span role="img" aria-label="smile">😊</span></h2>
      <h3>What our customers say about us</h3>
      <div className="testimonial">
        <p>“I am a traveler and TravelQuest helps me a lot in finding interesting tourist destinations and of course the price offered is very worth it”</p>
        <p className="author">Ishita Kumari • Travel influencer</p>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} role="img" aria-label="star">⭐</span>
          ))}
        </div>
      </div>
      <div className="action">
        <button>LET'S TRAVEL</button>
      </div>
    </div>
  );
};

export default Testimonial;
