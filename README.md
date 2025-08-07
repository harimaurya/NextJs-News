# NextJS News

A modern news website built with Next.js 14+ featuring dynamic routing, parallel routes, and a responsive design.

## Project Overview

This is a news aggregation website that allows users to browse news articles by date filtering. The application demonstrates advanced Next.js features including:

- **Parallel Routes**: Using `@archive` slot for archive functionality
- **Dynamic Routes**: Catch-all routes for flexible filtering (`[[...filter]]`)
- **Server Components**: Async components for data fetching
- **TypeScript**: Full type safety throughout the application

## Features

- 📰 Browse news articles with filtering by year and month
- 🗂️ Archive functionality with dynamic URL structure (`/archive/[year]/[month]`)
- 📱 Responsive design with Tailwind CSS
- ⚡ Server-side rendering with Next.js App Router
- 🎨 Modern UI with hover effects and smooth navigation

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── archive/           # Archive pages with parallel routes
│   │   └── @archive/      # Parallel route slot
│   ├── news/              # News-related pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── main-header/       # Navigation header
│   └── news-list/         # News listing component
├── data/                  # Static data and types
│   └── news.ts            # News data and NewsItem type
├── lib/                   # Utility functions
│   └── news.ts            # News filtering and utility functions
├── assets/                # Static assets
└── public/                # Public files
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Key Components

- **FilteredArchivePage**: Main archive page with dynamic filtering
- **NewsList**: Component for displaying filtered news articles
- **NewsItem**: TypeScript interface for news article structure

## API Functions

The project includes several utility functions in [`lib/news.ts`](lib/news.ts):

- `getAvailableNewsYears()`: Get all available years with news
- `getAvailableNewsMonths(year)`: Get available months for a specific year
- `getNewsForYear(year)`: Get all news for a specific year
- `getNewsForYearAndMonth(year, month)`: Get news for specific year and month

## Routing Structure

- `/` - Home page
- `/archive` - Archive overview
- `/archive/[year]` - News filtered by year
- `/archive/[year]/[month]` - News filtered by year and month
- `/news` - News section

## Technologies Used

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **ESLint** - Code linting and formatting

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
