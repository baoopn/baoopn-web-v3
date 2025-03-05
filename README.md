# Portfolio Website

![Portfolio Website Screenshot](/public/screenshot.png)

## Overview

This is a modern, responsive portfolio website built with React and TypeScript. The site features a clean design, smooth animations, and integrated backend services to showcase my projects, skills, and professional experience.

## Features

- **Responsive Design**: Fully adaptable across all device sizes
- **Dark/Light Mode**: Automatic theme detection with manual toggle option
- **Smooth Animations**: Page transitions and scroll-based reveal effects using Framer Motion
- **Markdown Blog**: Dynamic blog content with code syntax highlighting
- **Real-time Spotify Integration**: WebSocket connection to display currently playing music
- **Contact Form**: Form validation with real-time feedback and Telegram notifications
- **SEO Optimized**: Meta tags for better search engine visibility and social sharing

## Tech Stack

### Frontend
- React 19
- TypeScript
- TanStack Router for type-safe routing
- Framer Motion for animations
- Tailwind CSS for styling
- Axios for API requests

### Backend
- Spring Boot 3.4
- Java 23
- WebSocket API for real-time communication
- Spotify API integration
- Telegram Bot API for contact form submissions
- Docker for containerization

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/         # Base UI components (Button, Form inputs, etc.)
│   └── utils/      # Utility components (Reveal animations, etc.)
├── routes/         # Page route definitions
├── blog/           # Markdown blog content
├── styles/         # Global CSS and Tailwind configurations
├── utils/          # Utility functions and constants
└── main.tsx        # Application entry point
```

## Backend Repository

The backend code for this portfolio is available in a separate repository: [my-portfolio-be](https://github.com/baoopn/my-portfolio-be)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/baoopn/baoopn-web-v3.git
   cd baoopn-web-v3
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
# or
yarn build
```

## License

This project is open source and available under the MIT License.

## Contact

Bao Nguyen - [me@baoopn.com](mailto:me@baoopn.com)

Project Link: [https://github.com/baoopn/baoopn-web-v3](https://github.com/baoopn/baoopn-web-v3)

## Acknowledgments

- [TanStack Router](https://tanstack.com/router)
- [Framer Motion](https://motion.dev/)
- [Tailwind CSS](https://tailwindcss.com/)