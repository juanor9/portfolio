import * as React from "react";
import kwesforms from "kwesforms";
import { useEffect } from "react";
import {contactForm__button, contactForm__label} from '../ContactForm.module.scss';

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
      <label htmlFor="email" className={contactForm__label}>
        Correo electrónico
        <input name="email" id="email" type="email" />
      </label>
      <label htmlFor="message" className={contactForm__label}>
        Mensaje
        <textarea name="message" id="message" rows="15" />
      </label>
      <button type="submit" className={contactForm__button}>Enviar</button>
    </form>
  );
};

export default ContactForm;
