import * as React from "react";
import Layout from "../components/layout";
import ContactForm from "../components/ContactForm";
import Seo from "../components/seo";

const ContactPage = () => {
  return (
    <Layout>
      <section>
        <h2>Contact</h2>
        <p>
          Reach out to me and let's chat! Looking forward to connecting with
          you. 😊
        </p>
        <ContactForm />
      </section>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <Seo title="Contact" />
