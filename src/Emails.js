import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Emails = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bu27n9i', 'template_8eal6z2', form.current, {
        publicKey: 'fj_bQu4j6a0VCKwo3',
      })
      .then(
        () => {
          console.log('SUCCESS!'); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" /><br/>
      <label>Email</label>
      <input type="email" name="user_email" /><br/>
      <label>Message</label>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" />
    </form>
  );
};      
export default Emails;