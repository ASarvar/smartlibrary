import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.products'), href: '/products' },
    { name: t('nav.solutions'), href: '/solutions' },
    { name: t('nav.resources'), href: '/resources' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'uz', name: "O'zbek" },
  ]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsLangMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
          {/* Single PNG logo */}
            <img src="../../images/logo/smartlibrary-logo.png" alt="SmartLibrary.Asia Logo" className="logo-img" />
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <div className="language-selector">
              <button
                className="lang-button"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <Globe size={20} />
                <span>{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
              </button>
              {isLangMenuOpen && (
                <div className="lang-menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`lang-option ${i18n.language === lang.code ? 'lang-option-active' : ''}`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
