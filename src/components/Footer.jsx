import React from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
            <img src="../../images/logo/smartlibrary-logo-white.png" alt="SmartLibrary.Asia Logo" className="logo-img" />
            </div>
            <p className="footer-description">
              {t('footer.partner')}
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/resources">Resources</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>Tashkent, Uzbekistan</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+998 71 123 45 67</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>info@smartlibrary.asia</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <p className="newsletter-text">
              Subscribe to our newsletter for updates and news
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
