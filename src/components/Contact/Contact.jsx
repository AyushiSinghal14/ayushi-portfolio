import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef} from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vpow6g9', 'template_aad8u6d', form.current, 'gMtb2rbww1_iDoZr-',
      )
      .then(
        (result) => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>singhalayushi2002@gmail.com</h5>
            <a href="mailto:singhalayushi2002@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Ayushi Singhal</h5>
            <a href="https://www.linkedin.com/in/ayushi-singhal-9a4a4720a/" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7895471405</h5>
            <a href="https://api.whatsapp.com/send?phone=7895471405" target='_blank'>Send a message</a>
          </article>
        </div>



        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact