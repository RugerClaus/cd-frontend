import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('')
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8000/api/send-email', {
        name,
        email,
        message,
        subject
      });
      setSuccess(response.data.message);
      setName('');
      setEmail('');
      setMessage('');
      setSubject('')
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='contactForm'>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Subject:
        <input type="subject" value={subject} onChange={(event) => setSubject(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <button type="submit" disabled={submitting}>
        Send
      </button>
    </form>
  );
}

export default ContactForm;