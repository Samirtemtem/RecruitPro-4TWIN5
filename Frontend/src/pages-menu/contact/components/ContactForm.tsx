import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    subject: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setResponseMessage(t('ContactForm.SuccessMessage', { message: result.message }));
        setIsError(false); // Reset error state
        setFormData({ username: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      const errorMessage = (error as Error).message || t('ContactForm.UnknownError');
      setResponseMessage(t('ContactForm.ErrorMessage', { error: errorMessage }));
      setIsError(true); // Set error state
    }
  };

  const responseStyle = {
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: isError ? '#f8d7da' : '#d4edda',
    color: isError ? '#721c24' : '#155724',
    border: isError ? '1px solid #f5c6cb' : '1px solid #c3e6cb',
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          {responseMessage && (
            <div style={responseStyle}>
              {responseMessage}
            </div>
          )}
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>{t('ContactForm.YourName.Label')}</label>
          <input
            type="text"
            name="username"
            className="username"
            placeholder={t('ContactForm.YourName.Placeholder')}
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>{t('ContactForm.YourEmail.Label')}</label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder={t('ContactForm.YourEmail.Placeholder')}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>{t('ContactForm.Subject.Label')}</label>
          <input
            type="text"
            name="subject"
            className="subject"
            placeholder={t('ContactForm.Subject.Placeholder')}
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>{t('ContactForm.YourMessage.Label')}</label>
          <textarea
            name="message"
            placeholder={t('ContactForm.YourMessage.Placeholder')}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            id="submit"
            name="submit-form"
          >
            {t('ContactForm.SendMessage')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;