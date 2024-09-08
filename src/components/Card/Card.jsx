import React from 'react';
import './styles/Card.css';  

const Card = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} />
      <h3>{destination.name}</h3>
      <p>{destination.location}</p>
      <div className="rating">
        <span>{destination.rating}</span> ({destination.reviews})
      </div>
    </div>
  );
};

export default Card;
