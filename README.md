# Rohit Kumar — Portfolio

A premium personal portfolio website built with **React + JavaScript**, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **React 18** + **JavaScript (JSX)**
- **Vite** — dev server & bundler
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations
- **Lucide React** + **React Icons** — icons
- **next-themes** — dark/light mode

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Achievements.jsx
│   ├── Certificates.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── LoadingScreen.jsx
│   ├── AnimatedCursor.jsx
│   ├── ScrollProgress.jsx
│   └── ScrollToTop.jsx
├── hooks/
│   └── useScrollReveal.js
├── lib/
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customisation

- Update your name, bio, and details in each component inside `src/components/`
- Add your profile photo to `src/assets/` and import it in `Hero.jsx` and `About.jsx`
- Link your resume PDF in `Hero.jsx` (Download Resume button `href`)
- Update social media links in `Hero.jsx`, `Navbar.jsx`, and `Footer.jsx`
- Update project details and live/GitHub links in `Projects.jsx`
- Add real certificate images in `Certificates.jsx`
- Update contact info (email, phone, location) in `Contact.jsx`
