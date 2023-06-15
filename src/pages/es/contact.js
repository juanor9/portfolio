import * as React from "react";
import Layout from "../../components/es/layout";
import ContactForm from "../../components/es/ContactForm";

const ContactPage = () => {
  return (
    <Layout>
      <section>
        <h2>Contacto</h2>
        <p>
          ¡Escríbeme y charlemos! Estaré feliz de responderte. 😊
        </p>
        <ContactForm />
      </section>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contacto</title>;
