import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">{t('contact.title')}</h1>
          <p className="page-subtitle">{t('contact.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              Ready to revolutionize your library with smart RFID solutions? Our team of experts 
              is here to help you find the perfect automation solution for your institution.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-text">
                  <h3>{t('contact.info.address')}</h3>
                  <p>Mirabad District, Tashkent 100015<br />Republic of Uzbekistan</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-text">
                  <h3>{t('contact.info.phone')}</h3>
                  <p>+998 71 123 45 67<br />+998 90 123 45 67</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-text">
                  <h3>{t('contact.info.email')}</h3>
                  <p>info@smartlibrary.asia<br />support@smartlibrary.asia</p>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">10:00 AM - 4:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>
              <p className="form-intro">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your library automation needs..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitted}>
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {t('contact.form.send')}
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="success-message">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <h2 className="section-title">Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={48} />
              <p>Interactive Map</p>
              <span>Tashkent, Uzbekistan</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Common questions about our RFID solutions and services
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does installation take?</h3>
              <p>
                Installation time varies depending on the scope of the project. A typical self-service 
                kiosk installation takes 1-2 days, while a complete library automation system may 
                take 1-2 weeks including testing and staff training.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you provide training?</h3>
              <p>
                Yes, we provide comprehensive training for all staff members. This includes hands-on 
                training sessions, detailed documentation, and ongoing support to ensure your team 
                is comfortable with the new systems.
              </p>
            </div>

            <div className="faq-item">
              <h3>What about maintenance and support?</h3>
              <p>
                We offer various maintenance and support packages including 24/7 technical support, 
                regular system updates, preventive maintenance visits, and warranty coverage for 
                all hardware components.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can the system integrate with our existing ILS?</h3>
              <p>
                Our RFID solutions are designed to integrate seamlessly with most library management 
                systems (ILS). Our technical team will assess your current system and ensure 
                proper integration during the implementation phase.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
