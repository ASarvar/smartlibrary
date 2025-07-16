import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Filter, Search, ArrowRight } from 'lucide-react'
import './Products.css'

const Products = () => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'kiosks', name: t('products.categories.kiosks') },
    { id: 'gates', name: t('products.categories.gates') },
    { id: 'readers', name: t('products.categories.readers') },
    { id: 'returns', name: t('products.categories.returns') },
    { id: 'software', name: t('products.categories.software') }
  ]

  const products = [
    {
      id: 1,
      name: 'BiblioChip Self-Service Station',
      category: 'kiosks',
      image: '/api/placeholder/300/200',
      description: 'Complete self-service solution for book checkout, returns, and renewals',
      features: ['Touch screen interface', 'RFID reader', 'Receipt printer', 'Multi-language support']
    },
    {
      id: 2,
      name: 'BiblioChip Security Gate',
      category: 'gates',
      image: '/api/placeholder/300/200',
      description: 'Advanced RFID security system with alarm and detection capabilities',
      features: ['99.9% detection rate', 'Silent alarm', 'LED indicators', 'Remote monitoring']
    },
    {
      id: 3,
      name: 'BiblioChip Staff Station',
      category: 'readers',
      image: '/api/placeholder/300/200',
      description: 'Professional RFID reader for library staff operations',
      features: ['Fast processing', 'Ergonomic design', 'Multi-tag reading', 'Durable construction']
    },
    {
      id: 4,
      name: 'BiblioChip Return Station',
      category: 'returns',
      image: '/api/placeholder/300/200',
      description: '24/7 automated book return system with secure storage',
      features: ['Automated sorting', 'Secure storage', '24/7 operation', 'Weather resistant']
    },
    {
      id: 5,
      name: 'BiblioCore Library Management',
      category: 'software',
      image: '/api/placeholder/300/200',
      description: 'Comprehensive library management software with RFID integration',
      features: ['Inventory management', 'Patron management', 'Reporting tools', 'Cloud-based']
    },
    {
      id: 6,
      name: 'BiblioChip Mobile Reader',
      category: 'readers',
      image: '/api/placeholder/300/200',
      description: 'Portable RFID reader for inventory management and collection activities',
      features: ['Wireless connectivity', 'Long battery life', 'Lightweight design', 'Real-time sync']
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">{t('products.title')}</h1>
          <p className="page-subtitle">{t('products.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="products-filters">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            <Filter size={20} />
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="image-placeholder">
                  <span>{product.name.charAt(0)}</span>
                </div>
                <div className="product-category">
                  {categories.find(cat => cat.id === product.category)?.name}
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="product-cta">
                  {t('products.viewDetails')}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search criteria or browse all categories.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
