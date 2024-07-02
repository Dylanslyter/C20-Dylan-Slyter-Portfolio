import React from 'react';
import './Contact.css';

const Contact = () => {
  const name = "Dylan Slyter";
  const email = "Dylan.Slyter@yahoo.com";
  const message = "Contact me for any more information.";
  const github = "https://github.com/Dylanslyter";

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <div className="contact-item">
        <label>Name:</label>
        <p>{name}</p>
      </div>
      <div className="contact-item">
        <label>Email:</label>
        <p>{email}</p>
      </div>
      <div className="contact-item">
        <label>Message:</label>
        <p>{message}</p>
      </div>
      <div className="contact-item">
        <label>GitHub:</label>
        <p><a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
      </div>
    </section>
  );
};

export default Contact;

