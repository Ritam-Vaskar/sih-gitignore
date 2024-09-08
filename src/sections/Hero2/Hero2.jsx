import React from 'react';
// import { FaMapMarkerAlt, FaCalendarAlt, FaSearch, FaMap, FaTicketAlt, FaSuitcase } from 'react-icons/fa';
import './styles/Hero2.css';
const Hero2 = () => {
  return (
    <section className="service-section">
      <div className="search-bar">
        <div className="search-location">
          {/* <FaMapMarkerAlt className="icon" /> */}
          <span>Location</span>
        </div>
        <div className="search-date">
          {/* <FaCalendarAlt className="icon" /> */}
          <span>Date</span>
        </div>
        <div className="search-button">
          {/* <FaSearch className="icon" /> */}
        </div>
      </div>

      <div className="service-info">
        <div className="service-text">
          <h4>WHAT WE SERVE</h4>
          <h2>TOP VALUES FOR YOU</h2>
          <p>Try a variety of benefits when using our service</p>
        </div>

        <div className="service-cards">
          <div className="card">
            {/* <FaMap className="card-icon" /> */}
            <h5>Lots of choices</h5>
            <p>Total 460+ destinations that we work with</p>
          </div>
          <div className="card">
            {/* <FaTicketAlt className="card-icon" /> */}
            <h5>Easy booking</h5>
            <p>With easy and fast ticket purchasing</p>
          </div>
          <div className="card">
            {/* <FaSuitcase className="card-icon" /> */}
            <h5>Best tour guide</h5>
            <p>Your guided with 10-year experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
