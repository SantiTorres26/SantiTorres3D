import React from 'react';

const Contact = () => {
  return (
    <main>
      {/* Contact Section */}
      <section className="section contact-section">
        <h1>Contact Me</h1>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
