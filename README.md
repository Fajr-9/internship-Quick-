# Fajr Frontend Project

A complete 6-page responsive web project built for a front-end internship. Demonstrates HTML5 semantics, CSS3 custom properties, Bootstrap 5.3.3, and vanilla JavaScript ES6+.

## Pages

| Page | Path | Features |
|------|------|----------|
| Home | `index.html` | Hero, overview cards, pages grid, CTA strip |
| Portfolio | `pages/portfolio.html` | Profile, skills bars, projects, dark/light toggle |
| Blog | `pages/blog.html` | Category filter, read more/less toggle |
| Products | `pages/products.html` | Product grid, cart with localStorage, toast |
| Calculator | `pages/calculator.html` | Full calculator with CSS Grid layout |
| Contact | `pages/contact.html` | Form validation, success alert |

## Tech Stack

- HTML5 (semantic structure)
- CSS3 (custom properties, glassmorphism, animations)
- Bootstrap 5.3.3 (CDN)
- Vanilla JavaScript ES6+ (no frameworks)
- Google Fonts: Plus Jakarta Sans + JetBrains Mono

## Project Structure

```
internship-project/
├── index.html
├── pages/
│   ├── portfolio.html
│   ├── blog.html
│   ├── products.html
│   ├── calculator.html
│   └── contact.html
├── css/
│   ├── style.css
│   ├── portfolio.css
│   ├── blog.css
│   ├── products.css
│   ├── calculator.css
│   └── contact.css
├── js/
│   ├── main.js
│   ├── portfolio.js
│   ├── blog.js
│   ├── products.js
│   ├── calculator.js
│   └── contact.js
└── README.md
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser (or use a local server)
3. Navigate between pages using the navbar

### Local Server (optional)

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`

## Features

- **Loading screen** with fade-out animation
- **Sticky navbar** with scroll-based background
- **Back-to-top** button (appears after 400px scroll)
- **Scroll animations** via IntersectionObserver
- **Active nav link** highlighting
- **Dark/light theme** toggle (portfolio, persisted in localStorage)
- **Animated skill bars** on portfolio page
- **Blog category filtering** and read more/less
- **Shopping cart** with localStorage and Bootstrap toast
- **Calculator** with expression display
- **Contact form** with live validation

## Design System

Colors, fonts, spacing, and shadows are defined as CSS custom properties in `css/style.css`. Dark theme is applied via `body[data-theme='dark']`.

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Requires ES6+ and CSS custom properties support.

## License

MIT — free to use for learning and portfolio purposes.
