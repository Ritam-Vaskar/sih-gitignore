import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import './styles/Recomendation.css';

const Recomendation = () => {
  const [Recomendation, setRecomendation] = useState([]);

  useEffect(() => {
    
    import('../../data/Recomendation.json')
      .then(res => setRecomendation(res.default))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="Recomendation-container">
      <h1>Top Recomendation</h1>
      <h2>Explore Top Recomendation</h2>
      <div className="cards">
        {Recomendation.map(destination => (
          <Card key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Recomendation;
