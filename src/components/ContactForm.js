import * as React from "react";

const ContactForm = () => {
  return (
    <form style={{ width: "100%" }}>
      <label htmlFor="email">
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Message
        <textarea rows="10" name="message" id="message" />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};
export default ContactForm;
