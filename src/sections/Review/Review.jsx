import React, { useState } from 'react';
import './styles/Review.css';

const ExperienceSection = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const ratings = [
    { id: 1, emoji: '😀', label: 'Excellent' },
    { id: 2, emoji: '😊', label: 'Good' },
    { id: 3, emoji: '😐', label: 'Neutral' },
    { id: 4, emoji: '😞', label: 'Bad' },
  ];

  const handleRatingClick = (ratingId) => {
    setSelectedRating(ratingId);
  };

  return (
    <section className="experience-section">
      <div className="experience-left">
        {/* Placeholder for the image. Replace src with your image */}
        <img
          src="https://cdn.prod.website-files.com/663d1907e337de23e83c30b2/66dd674035d09f212d52af87_image%20(37).png"
          alt="Vacation planning"
          className="experience-image"
        />
      </div>

      <div className="experience-right">
        <h4>PERFECT VACATION PLANNING</h4>
        <h2>With our experience, we will serve you</h2>
        <p>
          Since we first opened, we have always prioritized the convenience of our users
          by providing low prices and an easy process.
        </p>
        <div className="experience-stats">
          <div className="stat">
            <h5>10</h5>
            <p>years experience</p>
          </div>
          <div className="stat">
            <h5>300+</h5>
            <p>destinations collaborations</p>
          </div>
          <div className="stat">
            <h5>50K+</h5>
            <p>Happy customers</p>
          </div>
        </div>

        <div className="experience-rating">
          <h4>HOW WAS YOUR EXPERIENCE?</h4>
          <div className="rating-options">
            {ratings.map((rating) => (
              <div
                key={rating.id}
                className={`rating-item ${selectedRating === rating.id ? 'selected' : ''}`}
                onClick={() => handleRatingClick(rating.id)}
              >
                <span className="rating-emoji">{rating.emoji}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
