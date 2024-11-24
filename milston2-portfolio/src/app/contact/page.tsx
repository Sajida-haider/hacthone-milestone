import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h1 className="contact-heading">Contact Me</h1>
        <p className="contact-description">
          If you have any questions or would like to work together, feel free to reach out!
        </p>
      </div>
      
      <div className="contact-form">
        <form className="form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
