# NextJS News

A modern news website built with Next.js 14+ featuring dynamic routing, parallel routes, intercepting routes, and a responsive design with custom Google Fonts integration.

## Project Overview

This is a news aggregation website that allows users to browse news articles by date filtering. The application demonstrates advanced Next.js features including:

- **Parallel Routes**: Using `@archive` slot for archive functionality
- **Intercepting Routes**: Intercept navigation to show content in modals or overlays
- **Combined Parallel + Intercepting Routes**: Advanced routing patterns for complex UX
- **Dynamic Routes**: Catch-all routes for flexible filtering (`[[...filter]]`)
- **Server Components**: Async components for data fetching
- **TypeScript**: Full type safety throughout the application

## Features

- 📰 Browse news articles with filtering by year and month
- 🗂️ Archive functionality with dynamic URL structure (`/archive/[year]/[month]`)
- 🔀 **Intercepting Routes**: Seamless navigation with route interception for enhanced UX
- 🎭 **Modal Navigation**: Combine parallel and intercepting routes for modal-like experiences
- 📱 Responsive design with Tailwind CSS and custom styling
- ⚡ Server-side rendering with Next.js App Router
- 🎨 Modern UI with hover effects and smooth navigation
- 🔤 Beautiful typography with Merriweather font

## Advanced Routing Patterns

### Parallel Routes
- Uses `@archive` slot for displaying archive content alongside main content
- Enables multiple page sections to render simultaneously
- Perfect for dashboard-like layouts with independent loading states

### Intercepting Routes
- Intercepts navigation to certain routes to show content in overlays
- Maintains URL structure while providing enhanced user experience
- Uses route conventions like `(.)`, `(..)`, `(...)`, and `(..)(..)` for different interception levels

### Combined Parallel + Intercepting Routes
The project demonstrates how to combine these powerful Next.js features:

```
app/
├── @archive/                 # Parallel route slot
│   ├── (.)news/             # Intercept /news routes within @archive
│   └── default.tsx          # Default parallel route content
├── news/
│   └── [id]/
│       └── page.tsx         # Original news detail page
└── layout.tsx               # Layout that renders both slots
```

This pattern allows for:
- **Soft Navigation**: Click a news item → opens in modal via intercepting route
- **Hard Navigation**: Direct URL access → shows full page
- **Parallel Content**: Archive sidebar updates independently
- **Seamless UX**: Modal overlays maintain context while updating URL

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── archive/           # Archive pages with parallel routes
│   │   ├── @archive/      # Parallel route slot
│   │   │   ├── (.)news/   # Intercepting routes for news modals
│   │   │   └── default.tsx # Default parallel content
│   │   └── layout.tsx     # Layout combining parallel routes
│   ├── news/              # News-related pages
│   │   └── [id]/          # Dynamic news detail pages
│   ├── layout.tsx         # Root layout with font configuration
│   ├── globals.css        # Global styles and CSS variables
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── main-header/       # Navigation header
│   ├── news-list/         # News listing component
│   └── modal/             # Modal components for intercepted routes
├── data/                  # Static data and types
│   └── news.ts            # News data and NewsItem type
├── lib/                   # Utility functions
│   └── news.ts            # News filtering and utility functions
├── assets/                # Static assets
└── public/                # Public files
```

## Routing Patterns Explained

### 1. Parallel Routes (`@archive`)
```
/archive/2024     → Shows main content + @archive slot content
/archive/2024/01  → Updates both main and @archive independently
```

### 2. Intercepting Routes
```
(.)news/[id]      → Intercepts /news/[id] from same level
(..)news/[id]     → Intercepts /news/[id] from parent level
(...)news/[id]    → Intercepts /news/[id] from root level
```

### 3. Combined Pattern Benefits
- **Modal-like Experience**: News details open in overlay while maintaining archive context
- **URL Preservation**: Each state has a unique, shareable URL
- **Progressive Enhancement**: Works with and without JavaScript
- **SEO Friendly**: Search engines can crawl all content normally

## Font Configuration

The project uses **Merriweather** from Google Fonts, configured in the root layout:

```tsx
const merriWeather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});
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
- **RootLayout**: Root layout with font and theme configuration
- **Modal Components**: For intercepted route overlays
- **Parallel Route Slots**: Independent content areas

## API Functions

The project includes several utility functions in [`lib/news.ts`](lib/news.ts):

- `getAvailableNewsYears()`: Get all available years with news
- `getAvailableNewsMonths(year)`: Get available months for a specific year
- `getNewsForYear(year)`: Get all news for a specific year
- `getNewsForYearAndMonth(year, month)`: Get news for specific year and month

## Routing Structure

- `/` - Home page
- `/archive` - Archive overview with parallel routes
- `/archive/[year]` - News filtered by year + archive slot
- `/archive/[year]/[month]` - News filtered by year and month + archive slot
- `/news` - News section
- `/news/[id]` - News detail (can be intercepted for modal view)

## App Metadata

The application is configured with SEO-friendly metadata:

```tsx
export const metadata: Metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
};
```

## Technologies Used

- **Next.js 14+** - React framework with App Router
- **Advanced Routing**: Parallel routes, intercepting routes, dynamic routes
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **ESLint** - Code linting and formatting

## Font Optimization

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load **Merriweather**, providing:

- Automatic font optimization
- No layout shift
- CSS variable support
- Multiple font weights (400, 700)

## Learn More

To learn more about Next.js advanced routing, take a look at these resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes) - learn about parallel routes
- [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes) - learn about intercepting routes
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) - learn about font optimization

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
