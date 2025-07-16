import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Building, Shield, Zap } from 'lucide-react'
import './Home.css'

const Home = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: <Shield size={48} />,
      title: 'Advanced Security',
      description: 'State-of-the-art RFID security systems for complete library protection'
    },
    {
      icon: <Zap size={48} />,
      title: 'Automated Solutions',
      description: 'Streamline library operations with smart automation technology'
    },
    {
      icon: <Users size={48} />,
      title: 'User-Friendly',
      description: 'Intuitive self-service systems that enhance user experience'
    },
    {
      icon: <Building size={48} />,
      title: 'Scalable Systems',
      description: 'Solutions that grow with your institution\'s needs'
    }
  ]

  const stats = [
    { number: '500+', label: 'Libraries Served' },
    { number: '15+', label: 'Countries' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                {t('hero.title')}
              </h1>
              <p className="hero-subtitle">
                {t('hero.subtitle')}
              </p>
              <div className="hero-actions">
                <Link to="/products" className="btn btn-primary">
                  {t('hero.cta1')}
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  {t('hero.cta2')}
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-card">
                <div className="card-header">
                  <div className="card-icon">
                    <Shield size={24} />
                  </div>
                  <h3>RFID Security Gate</h3>
                </div>
                <div className="card-stats">
                  <div className="stat">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">Accuracy</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose SmartLibrary.Asia?</h2>
            <p className="section-subtitle">
              Leading provider of RFID solutions with proven expertise across Central Asia
            </p>
          </div>
          <div className="grid grid-4">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bibliotheca Partnership */}
      <section className="section partnership">
        <div className="container">
          <div className="partnership-content">
            <div className="partnership-text">
              <h2 className="partnership-title">Official Bibliotheca Partner</h2>
              <p className="partnership-description">
                As an official partner of Bibliotheca, the world's leading provider of library technology solutions, 
                we bring you the most advanced RFID systems and automation solutions available in the market.
              </p>
              <ul className="partnership-benefits">
                <li>
                  <CheckCircle size={20} />
                  <span>Certified installation and support</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Latest technology and updates</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Comprehensive warranty coverage</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Global standards compliance</span>
                </li>
              </ul>
              <Link to="/about" className="btn btn-primary">
                Learn More About Our Partnership
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="partnership-logo">
              <div className="logo-placeholder">
                <Building size={80} />
                <h3>Bibliotheca</h3>
                <p>Official Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Library?</h2>
            <p className="cta-description">
              Get in touch with our experts to discuss your RFID automation needs
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Request Consultation
                <ArrowRight size={20} />
              </Link>
              <Link to="/products" className="btn btn-secondary">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
