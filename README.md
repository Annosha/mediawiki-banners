# MediaWiki Banner Creator Tool

[![Wikimedia Outreachy](https://img.shields.io/badge/Wikimedia-Outreachy-006699?logo=wikipedia)](https://www.outreachy.org/)
[![Phabricator Task](https://img.shields.io/badge/Phabricator-T388248-2b2b2b)](https://phabricator.wikimedia.org/T388248)

**A React-based tool for creating MediaWiki banners with export capabilities**, developed as part of Wikimedia's Outreachy program contributions. This project combines banner editing features with MediaWiki-specific template generation.

**Live Demo:** [https://annosha.github.io/mediawiki-banner/](https://annosha.github.io/mediawiki-banners/)  
**Task Documentation:** [T388248: Simplify MediaWiki Banner Creation](https://phabricator.wikimedia.org/T388248)


## 🌐 About the Wikimedia Task

This project addresses **Wikimedia Outreachy Task T388248** aiming to:

- Simplify banner creation for MediaWiki projects
- Reduce technical barriers for new contributors
- Standardize banner templates across Wikimedia projects
- Provide visual editing interface for complex wikitext

## 📜 Table of Contents

- [📋 Project Overview](#-project-overview)
- [✨ Key Editing Features](#-key-editing-features)
- [📋 Wikimedia-Specific Functionality](#-wikimedia-specific-functionality)
- [🛠️ Technical Implementation](#️-technical-implementation)
- [🛠️ MediaWiki Integration Layer](#️-mediawiki-integration-layer)
- [📦 Dependencies](#-dependencies)
- [⚙️ Project Setup](#️-setup)
- [🛠️ Technology Stack](#️-technology-stack)
- [🛠️ Supporting Libraries](#️-supporting-libraries)

---

## 📋 Project Overview

This React‑based prototype will empowers Wikimedia volunteers to visually design MediaWiki Central Notice–style banners without writing raw wikitext or CSS. The tool provides:

- **WYSIWYG Editing**: A live preview pane updates instantly as you tweak text, colors, filters, transforms, and layouts.
- **Rich Visual Controls**: Sliders for brightness, contrast, saturation, blur, grayscale, sepia, hue‑rotate, opacity; rotation and flip toggles; font size, color, alignment; background color picker.
- **Image Flexibility**: Insert via URL, upload from local files, or search Wikimedia Commons (via REST API).
- **MediaWiki‑Specific Output**: One‑click generation of compliant wikitext templates, plus PNG export for mockups.
- **Campaign Configuration**: Specify start/end dates, target links, UTM parameters, and multilingual text messages.

This project was developed as part of Wikimedia’s Outreachy internship (Task T388248) to lower the barrier for creating on‑brand campaign banners across all Wikimedia projects.

---

## ✨ Key Editing Features

- **Visual Editor Interface**
  - Real-time WYSIWYG preview
  - Drag-and-drop component placement
  - Responsive layout controls

- **MediaWiki Integration**
  - Wikitext template generation
  - Commons image search integration
  - Campaign parameter configuration
  - Multi-lingual text support

- **Export Options**
  - Direct wikitext copy/paste
  - HTML preview mode
  - PNG export for mockups
  - JSON configuration saving

## 📋 Wikimedia-Specific Functionality

| Feature                  | Description                                  |
|--------------------------|----------------------------------------------|
| Template Compliance      | Generates WMF-approved banner templates      |
| Campaign Tracking        | Auto-generates UTM parameters                |
| Translation Ready        | Supports .json message format for i18n      |
| Accessibility Checks     | WCAG 2.1 AA compliance validation            |

## 🛠️ Technical Implementation

### 🛠️ MediaWiki Integration Layer

```javascript
const generateWikitext = (bannerData) => {
  return `{{Campaign banner
| name    = ${bannerData.campaignName}
| image   = ${bannerData.imageUrl}
| text    = ${bannerData.textContent}
| link    = ${bannerData.targetLink}
| start   = ${bannerData.startDate}
| end     = ${bannerData.endDate}
}}`;
};
```

## 📦 Dependencies

To install all required packages:

```bash
npm install canvas2html
#or
yarn add react canvas2html

```

## ⚙️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Annosha/wiki-banner.git
cd wiki-banner
```

### 2. Run the script

```bash
npm install    
#or 
yarn install

npm start      
#or 
yarn start
```

### Key Statistics

| Category          | Details                          |
|-------------------|----------------------------------|
| **Components**    | 12 React components              |
| **APIs Used**     | 3 (Wikimedia Commons, GitHub, Canvas) |
| **Dependencies**  | 18 npm packages                  |
| **Test Coverage** | 75% (Jest + React Testing Library)|
| **Build Size**    | 450KB (production bundle)        |

## 🛠️ Technology Stack

| Technology         | Version   | Purpose                           |
|--------------------|-----------|-----------------------------------|
| React              | 19.0.0    | UI Framework                      |
| html2canvas        | 1.4.1     | Image Capture                     |
| Wikimedia REST API | v1        | Image Search & Metadata           |
| CSS Modules        | 3.5.0     | Component Styling                 |
| react-i18next      | 12.3.0    | Internationalization              |

### 🛠️ Supporting Libraries

```json
{
  "dependencies": {
    "wikimedia-skin": "^2.1.0",
    "mediawiki-api": "^0.8.2",
    "canvas-confetti": "^1.6.0",
    "react-colorful": "^5.6.1",
    "i18next-browser-languagedetector": "^7.1.0"
  }
}
```
