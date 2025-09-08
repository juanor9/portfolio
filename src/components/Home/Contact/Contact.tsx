import * as React from 'react';
import emailjs from '@emailjs/browser';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import './Contact.scss';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.GATSBY_EMAIL_SERVICE_ID;
      const templateId = process.env.GATSBY_EMAIL_TEMPLATE_ID;
      const publicKey = process.env.GATSBY_EMAIL_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Juan', // Your name
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitMessage('¡Mensaje enviado exitosamente! Te contactaré pronto.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <article className="contact">
      <h3 className="contact__title">Contact</h3>
      <div className="contact__container">
        <div className="contact__info">
          <p className="contact__description">
            Do you have a project in mind? I’d love to hear about your idea and how we can work together to make it a reality.
          </p>
        </div>
        
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name" className="contact__form-label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact__input"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email" className="contact__form-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact__input"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message" className="contact__form-label">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact__textarea"
              rows={5}
              required
              disabled={isSubmitting}
            />
          </div>

          {submitMessage && (
            <div className={`contact__message ${submitMessage.includes('Error') ? 'contact__message--error' : 'contact__message--success'}`}>
              {submitMessage}
            </div>
          )}

          <div className="contact__submit">
            <PrimaryButton
              _isLink={false}
              _isFullWidth={true}
              _isDisabled={false}
              text={isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              type="submit"
            />
          </div>
        </form>
      </div>
    </article>
  );
};

export default Contact;