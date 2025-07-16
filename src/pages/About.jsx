import React from 'react'
import { useTranslation } from 'react-i18next'
import { Users, Target, Award, MapPin, Clock, Mail } from 'lucide-react'
import './About.css'

const About = () => {
  const { t } = useTranslation()

  const values = [
    {
      icon: <Target size={48} />,
      title: 'Innovation',
      description: 'Pioneering advanced RFID solutions that transform library operations and user experiences.'
    },
    {
      icon: <Award size={48} />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality products and services to our clients.'
    },
    {
      icon: <Users size={48} />,
      title: 'Partnership',
      description: 'Building lasting relationships with libraries and educational institutions across Central Asia.'
    }
  ]

  const timeline = [
    {
      year: '2013',
      title: 'Company Founded',
      description: 'SmartLibrary.Asia established as a technology solutions provider for libraries in Central Asia.'
    },
    {
      year: '2015',
      title: 'Bibliotheca Partnership',
      description: 'Became official partner of Bibliotheca, gaining access to world-class RFID technology.'
    },
    {
      year: '2018',
      title: 'Regional Expansion',
      description: 'Expanded operations to Kazakhstan, Kyrgyzstan, and Tajikistan markets.'
    },
    {
      year: '2020',
      title: '500+ Installations',
      description: 'Reached milestone of 500+ successful RFID system installations across the region.'
    },
    {
      year: '2024',
      title: 'Technology Leadership',
      description: 'Recognized as the leading RFID solutions provider in Central Asia with advanced automation systems.'
    }
  ]

  const team = [
    {
      name: 'Dilshod Karimov',
      position: 'CEO & Founder',
      description: 'Over 15 years of experience in library technology and automation solutions.'
    },
    {
      name: 'Nargiza Azimova',
      position: 'Technical Director',
      description: 'Expert in RFID technology implementation and system integration.'
    },
    {
      name: 'Bobur Rakhimov',
      position: 'Sales Manager',
      description: 'Specialized in consultative selling and client relationship management.'
    },
    {
      name: 'Malika Sultanova',
      position: 'Support Manager',
      description: 'Ensures excellent customer service and technical support across all markets.'
    }
  ]

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">{t('about.title')}</h1>
          <p className="page-subtitle">{t('about.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">{t('about.mission')}</h2>
              <p className="mission-description">
                Our mission is to revolutionize library and educational institution operations across Central Asia 
                through innovative RFID automation solutions. We believe that technology should enhance the learning 
                experience while making library management more efficient and user-friendly.
              </p>
              <p className="mission-description">
                As the official partner of Bibliotheca in the region, we bring world-class technology and expertise 
                to serve libraries, universities, schools, archives, and museums, helping them embrace digital 
                transformation and improve their services to the community.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Successful Installations</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide our work and relationships with clients
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Section */}
        <section className="partnership-section">
          <div className="partnership-content">
            <div className="partnership-info">
              <h2 className="section-title">{t('about.partnership')}</h2>
              <p className="partnership-description">
                Our strategic partnership with Bibliotheca, a global leader in library technology solutions, 
                enables us to offer cutting-edge RFID systems and automation technologies. This partnership 
                ensures that our clients receive world-class products backed by international expertise and 
                continuous innovation.
              </p>
              <div className="partnership-benefits">
                <h3>Partnership Benefits:</h3>
                <ul>
                  <li>Access to latest RFID technology and innovations</li>
                  <li>Comprehensive training and certification programs</li>
                  <li>Global support network and expertise</li>
                  <li>Continuous product development and updates</li>
                  <li>International quality standards and compliance</li>
                </ul>
              </div>
            </div>
            <div className="partnership-logo">
              <div className="logo-placeholder">
                <h3>Bibliotheca</h3>
                <p>Official Technology Partner</p>
                <div className="partnership-badge">
                  <Award size={32} />
                  <span>Certified Partner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key milestones in our growth and development
            </p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <Clock size={20} />
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="section-header">
            <h2 className="section-title">{t('about.team')}</h2>
            <p className="section-subtitle">
              Meet the experts behind our success
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-photo">
                  <div className="photo-placeholder">
                    <Users size={48} />
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-position">{member.position}</div>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-info-section">
          <div className="contact-info-content">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Ready to transform your library with smart RFID solutions?
            </p>
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <MapPin size={24} />
                <div>
                  <h4>Our Office</h4>
                  <p>Tashkent, Uzbekistan<br />Business District</p>
                </div>
              </div>
              <div className="contact-info-item">
                <Mail size={24} />
                <div>
                  <h4>Email Us</h4>
                  <p>info@smartlibrary.asia<br />support@smartlibrary.asia</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
