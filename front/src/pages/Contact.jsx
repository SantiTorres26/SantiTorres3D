// front/src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  // 1) Estados para los campos y feedback
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  // 2) Función para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch('http://localhost:4000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      const result = await res.json();

      if (result.success) {
        setStatus('success');
        // Limpiar campos
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Respuesta no exitosa');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main>
      {/* Contact Section */}
      <section className="section contact-section">
        <h1>Contact Me</h1>

        {/* 3) Feedback */}
        {status === 'success' && (
          <p className="status success">¡Mensaje enviado con éxito!</p>
        )}
        {status === 'error' && (
          <p className="status error">Error al enviar. Intenta de nuevo.</p>
        )}

        {/* 4) Formulario controlado */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
