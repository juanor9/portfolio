import * as React from "react";
import kwesforms from "kwesforms";

const ContactForm = () => {
  kwesforms.init();
  return (
    <form
      style={{ width: "100%" }}
      className="kwes-form"
      action="https://kwesforms.com/api/foreign/forms/1S09YWorOaq75jIP2ITZ"
    >
      <label for="email">
        Email
        <input id="email" type="email" name="email" rules="required|email" />
      </label>
      <label for="message">
        Message
        <textarea id="message" rows="10" name="required|message" />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
