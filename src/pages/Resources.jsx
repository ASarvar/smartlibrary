import React from 'react'
import { useTranslation } from 'react-i18next'
import { Download, Calendar, Image, FileText, Video } from 'lucide-react'
import './Resources.css'

const Resources = () => {
  const { t } = useTranslation()

  const news = [
    {
      id: 1,
      date: '2024-07-10',
      title: 'New BiblioChip Station Launched',
      excerpt: 'Latest generation self-service station with enhanced features and improved user experience.',
      category: 'Product Launch'
    },
    {
      id: 2,
      date: '2024-06-25',
      title: 'Partnership Expansion in Central Asia',
      excerpt: 'SmartLibrary.Asia expands its reach with new partnerships across Kazakhstan and Kyrgyzstan.',
      category: 'Business'
    },
    {
      id: 3,
      date: '2024-06-15',
      title: 'Successful Implementation at Tashkent University',
      excerpt: 'Complete RFID automation system successfully deployed at the main university library.',
      category: 'Case Study'
    }
  ]

  const downloads = [
    {
      id: 1,
      title: 'BiblioChip Product Catalog',
      description: 'Complete product specifications and features overview',
      type: 'PDF',
      size: '2.5 MB',
      icon: <FileText size={24} />
    },
    {
      id: 2,
      title: 'Installation Guide',
      description: 'Step-by-step installation and setup instructions',
      type: 'PDF',
      size: '1.8 MB',
      icon: <FileText size={24} />
    },
    {
      id: 3,
      title: 'Technical Specifications',
      description: 'Detailed technical specifications for all products',
      type: 'PDF',
      size: '1.2 MB',
      icon: <FileText size={24} />
    },
    {
      id: 4,
      title: 'User Manual',
      description: 'Comprehensive user guide for library staff',
      type: 'PDF',
      size: '3.1 MB',
      icon: <FileText size={24} />
    }
  ]

  const gallery = [
    {
      id: 1,
      title: 'Tashkent National Library',
      type: 'image',
      description: 'Complete RFID automation installation'
    },
    {
      id: 2,
      title: 'University of World Economy',
      type: 'image',
      description: 'Self-service stations in operation'
    },
    {
      id: 3,
      title: 'Installation Process',
      type: 'video',
      description: 'Time-lapse of security gate installation'
    },
    {
      id: 4,
      title: 'Training Session',
      type: 'video',
      description: 'Staff training at Samarkand Library'
    },
    {
      id: 5,
      title: 'Modern Library Setup',
      type: 'image',
      description: 'Complete automation solution'
    },
    {
      id: 6,
      title: 'Product Demonstration',
      type: 'video',
      description: 'BiblioChip features overview'
    }
  ]

  return (
    <div className="resources-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">{t('resources.title')}</h1>
          <p className="page-subtitle">{t('resources.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        {/* News Section */}
        <section className="resources-section">
          <div className="section-header">
            <h2 className="section-title">{t('resources.news')}</h2>
          </div>
          <div className="news-grid">
            {news.map(article => (
              <article key={article.id} className="news-card">
                <div className="news-header">
                  <span className="news-category">{article.category}</span>
                  <div className="news-date">
                    <Calendar size={16} />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <h3 className="news-title">{article.title}</h3>
                <p className="news-excerpt">{article.excerpt}</p>
                <button className="news-read-more">Read More</button>
              </article>
            ))}
          </div>
        </section>

        {/* Downloads Section */}
        <section className="resources-section">
          <div className="section-header">
            <h2 className="section-title">{t('resources.downloads')}</h2>
          </div>
          <div className="downloads-grid">
            {downloads.map(download => (
              <div key={download.id} className="download-card">
                <div className="download-icon">
                  {download.icon}
                </div>
                <div className="download-content">
                  <h3 className="download-title">{download.title}</h3>
                  <p className="download-description">{download.description}</p>
                  <div className="download-meta">
                    <span className="download-type">{download.type}</span>
                    <span className="download-size">{download.size}</span>
                  </div>
                </div>
                <button className="download-btn">
                  <Download size={20} />
                  Download
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="resources-section">
          <div className="section-header">
            <h2 className="section-title">{t('resources.gallery')}</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map(item => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-thumbnail">
                  <div className="thumbnail-placeholder">
                    {item.type === 'video' ? <Video size={48} /> : <Image size={48} />}
                  </div>
                  <div className="gallery-overlay">
                    <button className="gallery-play">
                      {item.type === 'video' ? 'Play Video' : 'View Image'}
                    </button>
                  </div>
                </div>
                <div className="gallery-info">
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-description">{item.description}</p>
                  <span className="gallery-type">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resources
