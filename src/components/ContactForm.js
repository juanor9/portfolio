import * as React from "react";

const ContactForm = () => {
  return (
    <form style={{width:"100%"}}>
      <label htmlFor="email">
        Email
        <input name="email" id="email" type="email"/>
      </label>
      <label htmlFor="message">
        <textarea name="message" id="message" rows="15"/>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
};

export default ContactForm