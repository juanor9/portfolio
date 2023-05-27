import * as React from "react";
import kwesforms from "kwesforms";
import { useEffect } from "react";
import {contactForm__button} from './ContactForm.module.scss';

const ContactForm = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      kwesforms.init();
    }
  }, []);

  return (
    <form
      style={{ width: "100%" }}
      className="kwes-form"
      action="https://kwesforms.com/api/foreign/forms/1S09YWorOaq75jIP2ITZ"
    >
      <label htmlFor="email">
        Email
        <input name="email" id="email" type="email" />
      </label>
      <label htmlFor="message">
        Message
        <textarea name="message" id="message" rows="15" />
      </label>
      <button type="submit" className={contactForm__button}>Submit</button>
    </form>
  );
};

export default ContactForm;
