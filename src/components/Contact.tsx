import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      'service_wfe3n72',      // Your Service ID
      'template_eg21eqc',     // Your Template ID
      form.current,
      'GgDrsX1p2Wdfi--DJ'     // Your Public Key
    ).then(
      () => {
        setStatus('✅ Message sent successfully!');
        form.current?.reset();
      },
      (err) => {
        console.error('EmailJS error:', err);
        setStatus('❌ Failed to send message. Check console.');
      }
    );
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send Message</button>
      {status && <p>{status}</p>}
    </form>
  );
}
