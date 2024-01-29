import React from 'react';
import './EventCard.css';

const EventCard = ({ title, description, date, time, location, link, imageSrc }) => (
  <div className="event-card">
    <div className="event-details">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Location:</strong> {location}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  </div>
);

export default EventCard;
