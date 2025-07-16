# SmartLibrary.Asia Website

A modern, multilingual website for SmartLibrary.Asia - the official partner of Bibliotheca providing RFID automation solutions for libraries, archives, and educational institutions across Central Asia.

## Features

- **Multilingual Support**: English, Russian, and Uzbek languages
- **Responsive Design**: Mobile-first approach with modern UI
- **Product Catalog**: Comprehensive RFID solutions showcase
- **Solutions Pages**: Tailored content for different institution types
- **Resource Center**: News, downloads, and implementation gallery
- **Contact System**: Interactive contact forms and business information

## Tech Stack

- **Frontend**: React.js 18+ with Vite
- **Routing**: React Router DOM
- **Internationalization**: React i18next
- **Icons**: Lucide React
- **Styling**: CSS3 with custom properties
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation and language switcher
│   └── Footer.jsx      # Footer with contact info
├── pages/              # Page components
│   ├── Home.jsx        # Homepage with hero section
│   ├── Products.jsx    # Product catalog with filters
│   ├── Solutions.jsx   # Solutions for different institutions
│   ├── Resources.jsx   # News, downloads, gallery
│   ├── About.jsx       # Company info and team
│   └── Contact.jsx     # Contact form and information
├── i18n/               # Internationalization
│   ├── i18n.js        # i18n configuration
│   └── locales/       # Translation files
│       ├── en.json    # English translations
│       ├── ru.json    # Russian translations
│       └── uz.json    # Uzbek translations
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd smartlibrary
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Internationalization

The website supports three languages:
- **English** (en) - Default language
- **Russian** (ru) - Primary language for Central Asia
- **Uzbek** (uz) - Local language for Uzbekistan market

To add new translations:
1. Add new keys to all language files in `src/i18n/locales/`
2. Use the `t()` function in components to access translations

## Design System

### Colors
- Primary Blue: `#2563eb`
- Light Blue: `#3b82f6`
- Dark Blue: `#1e40af`
- Accent Blue: `#60a5fa`
- White: `#ffffff`
- Light Gray: `#f8fafc`
- Medium Gray: `#64748b`
- Dark Gray: `#334155`

### Typography
- Font Family: Inter (fallback to system fonts)
- Responsive font sizes using rem units
- Consistent line heights for readability

## Contributing

1. Follow the existing code style and structure
2. Add proper TypeScript types if converting to TypeScript
3. Ensure all text is properly internationalized
4. Test responsive design on mobile devices
5. Maintain accessibility standards

## Deployment

Build the project for production:
```bash
npm run build
```

The `dist` folder contains the production-ready files that can be deployed to any static hosting service.

## License

© 2024 SmartLibrary.Asia. All rights reserved.

## Contact

For technical questions about this website:
- Email: info@smartlibrary.asia
- Website: [smartlibrary.asia](https://smartlibrary.asia)
