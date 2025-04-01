import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_u2yi0fw', // Replace with your EmailJS User ID
        'template_52g3nih', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'c_aP7QJ2b8O6FoBH3' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStateMessage('Message sent successfully!');
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
        },
        (error) => {
          console.error(error);
          setStateMessage('Something went wrong. Please try again.');
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
        }
      );

    e.currentTarget.reset(); // Clears the form
  };

  return (
    <form onSubmit={sendEmail} className="contact-form flex flex-col gap-4">
      <div className="form-group flex flex-col">
        <label htmlFor="name" className='text-white'>Name</label>
        <input className="form-textarea p-[0.8rem] bg-transparent border-b-2 border-b-white resize-y min-h-[50px]" type="text" id="name" name="name" onChange={handleChange} required />
      </div>

      <div className="form-group flex flex-col">
        <label htmlFor="email" className='text-white'>Email</label>
        <input className="form-textarea p-[0.8rem] border-b-2 bg-transparent border-b-white resize-y min-h-[50px]" type="email" id="email" name="email" onChange={handleChange} required />
      </div>

      <div className="form-group flex flex-col">
        <label htmlFor="message" className='text-white'>Message</label>
        <textarea className="form-textarea p-[0.8rem] border-b-2 bg-transparent border-b-white resize-y min-h-[100px]" id="message" name="message" onChange={handleChange} required />
      </div>

      <button type="submit" className='submit-button flex justify-center transition-all relative w-full md:w-auto bg-[#a7ec51] py-[.7rem] px-[2rem] rounded-[100em] text-black hover:bg-black hover:text-white' disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

export default ContactForm;
