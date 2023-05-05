import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
 
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e74rc2s",
        "template_euvyx2j",
        form.current,
        "KVvbcCgv8tEP0sQU-"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
}
