import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m9dru0o', 'template_z8su6yp', form.current, {
        publicKey: '_mGFaHHTxY_bzhU_M',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Something went wrong. Please try again.');
          console.error('Error:', error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-blue-400 via-white to-slate-200 flex items-center justify-center px-6"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-black">
        <h1 className="text-4xl font-bold text-center mb-8">Get In Touch</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-400 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-400 rounded-md "
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-400 rounded-md  resize-none"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-900 text-white rounded-md  transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


