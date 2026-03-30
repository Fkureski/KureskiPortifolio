# Kureski Portfolio

A modern, high-performance clean Single Page Application (SPA) portfolio built specifically for Data Engineers, Python Developers, and Backend Specialists. Designed to capture the attention of recruiters and headhunters with a premium "Dark Mode" aesthetic, glassmorphism, and responsive interactivity.

## Features ✨

* **Sleek Dark Mode Aesthetics**: A professional color palette combining deep navy/blacks (`#0a0f1a`) with vibrant bright blue neon accents (`#00e5ff` & `#3b82f6`).
* **Interactive Navigation**: A transparent, sticky navigation bar that adopts a frosted glass effect (glassmorphism) as you scroll, featuring sleek active-section underline animations.
* **Responsive Architecture**: Fully responsive layouts leveraging CSS Flexbox and Grid, ensuring perfect presentation from mobile devices to ultrawide desktop monitors.
* **Component-Based Structure**: Clean React implementation breaking the application into logical sections (`Navbar`, `Hero`, `Projects`, `Contact`) for easy maintenance.
* **Micro-Animations**: Features subtle CSS transitions, hover elevations, glowing box-shadows, and background pulse effects exactly where it enhances User Experience (UX).

## Tech Stack 🛠️

* **Framework**: React 18+
* **Build Tool**: Vite (Lightning fast Hot Module Replacement)
* **Styling**: Vanilla CSS (Using native CSS variables and modular scopes for maximum flexibility without heavy dependencies)

## Project Structure 📁

```text
kureski-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx    # Sticky navigation with scroll tracking
│   │   ├── Hero.jsx      # Introduction section with profile photo layout
│   │   ├── Projects.jsx  # Responsive grid of past work and case studies
│   │   └── Contact.jsx   # Call to action and email routing
│   ├── App.jsx           # Main application assembler
│   ├── main.jsx          # React DOM entry point
│   └── index.css         # Global design system (colors, typography, resets)
├── package.json          # Project dependencies
└── vite.config.js        # Vite bundler configuration
```

## Getting Started 🚀

To run this project locally on your machine:

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed (v16 or higher is recommended).
2. **Install Dependencies**:
   Open a terminal in the root directory and run:
   ```bash
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm run dev
   ```
4. **View**: Open `http://localhost:5173` in your web browser.

## Personalization & Customization 🎨

This template is designed to be easily editable. Here is how you can update it to reflect your personal data:

### 1. Update Profile Photo
Open `src/components/Hero.jsx` and locate the `<img>` tag roughly around line 125. Replace the Unsplash placeholder URL in the `src=` attribute with the path or URL to your actual headshot.

### 2. Modify Project Cards
Open `src/components/Projects.jsx`. At the top of the component, you will find a `projectsData` array representing your projects. Edit the `title`, `description`, `techStack`, `image`, and `link` properties to immediately reflect your actual repositories or case studies.

### 3. Change Contact Logic
Open `src/components/Contact.jsx` and modify the `<a href="mailto:felipekureski@gmail.com">` tag to route to whatever email provider you prefer. You can also update the footer text in this file.

### 4. Global Color Adjustments
If you wish to experiment with different theme colors, open `src/index.css`. All primary colors are mapped to `:root` CSS variables. Modifying values like `--accent-blue-light` will globally update the neon interactions across the site.

## Deployment 🌐

Since this is a Vite built static site, it can be deployed for free across almost any hosting platform. 

**Using Vercel or Netlify**:
1. Push your repository to GitHub.
2. Log into Vercel/Netlify and "Import Project".
3. The platform will automatically detect Vite. It will use `npm run build` as the build command and `dist` as the output directory.
4. Click deploy. Your site will be live in seconds.
