import React from 'react'
import { useTranslation } from 'react-i18next'
import { CheckCircle, Users, GraduationCap, School, Archive, Building2 } from 'lucide-react'
import './Solutions.css'

const Solutions = () => {
  const { t } = useTranslation()

  const solutions = [
    {
      icon: <Users size={48} />,
      title: t('solutions.public'),
      description: 'Complete RFID automation solutions for public libraries to enhance patron experience and streamline operations.',
      features: [
        'Self-service checkout and returns',
        'Automated inventory management',
        'Security and theft prevention',
        'Multi-language patron interface',
        'Integration with existing ILS'
      ],
      benefits: [
        'Reduced staff workload',
        'Improved patron satisfaction',
        'Enhanced security',
        '24/7 self-service availability'
      ]
    },
    {
      icon: <GraduationCap size={48} />,
      title: t('solutions.university'),
      description: 'Advanced RFID systems designed for academic libraries with high-volume collections and diverse user needs.',
      features: [
        'High-capacity self-service stations',
        'Research collection management',
        'Student ID integration',
        'Inter-library loan tracking',
        'Digital resource access'
      ],
      benefits: [
        'Scalable for large collections',
        'Student authentication integration',
        'Research workflow optimization',
        'Detailed usage analytics'
      ]
    },
    {
      icon: <School size={48} />,
      title: t('solutions.school'),
      description: 'Child-friendly RFID solutions for school libraries that encourage reading and learning.',
      features: [
        'Kid-friendly interfaces',
        'Colorful, engaging design',
        'Teacher account management',
        'Reading progress tracking',
        'Parental involvement tools'
      ],
      benefits: [
        'Promotes independent learning',
        'Easy for children to use',
        'Tracks reading habits',
        'Reduces administrative burden'
      ]
    },
    {
      icon: <Archive size={48} />,
      title: t('solutions.archive'),
      description: 'Specialized RFID solutions for archives and special collections requiring enhanced security and tracking.',
      features: [
        'Precise item tracking',
        'Environmental monitoring',
        'Access control integration',
        'Preservation workflow support',
        'Audit trail maintenance'
      ],
      benefits: [
        'Enhanced security for rare items',
        'Complete item history',
        'Preservation condition monitoring',
        'Compliance with archival standards'
      ]
    },
    {
      icon: <Building2 size={48} />,
      title: t('solutions.museum'),
      description: 'Customized RFID solutions for museums to manage collections and enhance visitor experiences.',
      features: [
        'Artifact tracking and location',
        'Exhibition management',
        'Visitor engagement tools',
        'Conservation monitoring',
        'Interactive displays'
      ],
      benefits: [
        'Real-time collection status',
        'Enhanced visitor experience',
        'Improved conservation',
        'Educational content delivery'
      ]
    }
  ]

  const integrationFeatures = [
    {
      title: 'Seamless Integration',
      description: 'Our solutions integrate with existing library management systems without disruption.'
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support ensure successful implementation.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Start small and expand as your needs grow with our modular approach.'
    },
    {
      title: 'Local Support',
      description: 'Dedicated support team across Central Asia for rapid response and service.'
    }
  ]

  return (
    <div className="solutions-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">{t('solutions.title')}</h1>
          <p className="page-subtitle">{t('solutions.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <section className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-header">
                <div className="solution-icon">
                  {solution.icon}
                </div>
                <h2 className="solution-title">{solution.title}</h2>
              </div>
              
              <p className="solution-description">{solution.description}</p>
              
              <div className="solution-details">
                <div className="detail-section">
                  <h3>Key Features</h3>
                  <ul className="feature-list">
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-section">
                  <h3>Benefits</h3>
                  <ul className="benefit-list">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="integration-section">
          <div className="section-header">
            <h2 className="section-title">Integration & Implementation</h2>
            <p className="section-subtitle">
              We ensure smooth integration with your existing systems and workflows
            </p>
          </div>
          
          <div className="integration-grid">
            {integrationFeatures.map((feature, index) => (
              <div key={index} className="integration-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="implementation-process">
          <div className="section-header">
            <h2 className="section-title">Implementation Process</h2>
            <p className="section-subtitle">
              Our proven methodology ensures successful project delivery
            </p>
          </div>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Assessment</h3>
                <p>Comprehensive evaluation of your current systems and requirements</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Design</h3>
                <p>Custom solution design tailored to your specific needs</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Installation</h3>
                <p>Professional installation with minimal disruption to operations</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Training</h3>
                <p>Comprehensive staff training and documentation</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>Support</h3>
                <p>Ongoing maintenance and support services</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Solutions
