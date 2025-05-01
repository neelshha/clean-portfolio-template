# Vite React TypeScript Starter

A starter template for building React applications with TypeScript using Vite, Tailwind CSS, ESLint, Framer Motion, and Lucide React.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
  - [Vite](#vite)
  - [Tailwind CSS](#tailwind-css)
  - [ESLint](#eslint)
- [Deployment](#deployment)
- [License](#license)

## Features

- React 18 with TypeScript support
- Fast bundling and HMR with Vite
- Utility-first styling with Tailwind CSS
- Code linting and formatting with ESLint
- Smooth animations using Framer Motion
- Icon components via Lucide React
- Production build compression via Vite plugin

## Tech Stack

- ⚡ Vite
- 🔵 React
- 📄 TypeScript
- 🎨 Tailwind CSS
- 🐪 ESLint
- ✨ Framer Motion
- 🗿 Lucide React

## Prerequisites

- Node.js (version 16 or higher recommended)
- npm, yarn, or pnpm

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Create a production build in the `dist` folder
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint on the codebase

## Folder Structure

```
├── public
│   └── index.html         # HTML entry point
├── src
│   ├── assets             # Static assets (images, fonts, etc.)
│   ├── components         # Reusable React components
│   ├── styles             # Global styles (e.g., Tailwind imports)
│   ├── App.tsx            # Root component
│   └── main.tsx           # Application entry point
├── .eslintrc.js           # ESLint configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project metadata and scripts
```

## Configuration

### Vite

The `vite.config.ts` file includes the React plugin and compression plugin for optimized builds.

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`. You can customize your design tokens and plugins there.

### ESLint

ESLint is configured via `eslint.config.js` to enforce code quality and consistency. Run `npm run lint` to check for issues.

## Deployment

This template is ready for deployment to platforms like Vercel. A `vercel.json` is included for default settings. Simply connect your repository and push to deploy.

## License

This project is proprietary. All rights reserved. 