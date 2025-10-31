# Project Structure Documentation

This document outlines the project structure for Franklin Farahani's personal website and blog, built with Astro following official Astro best practices.

## Overview

This Astro project follows the recommended folder structure from the [official Astro documentation](https://docs.astro.build/en/basics/project-structure/). The structure is designed for maintainability, scalability, and follows modern web development conventions.

## Root Directory Structure

```
franklin.codes/
├── .astro/                 # Astro build cache (auto-generated)
├── .vscode/                # VS Code workspace settings
├── dist/                   # Build output (auto-generated)
├── docs/                   # Project documentation
├── node_modules/           # Dependencies (auto-generated)
├── public/                 # Static assets (unprocessed)
├── src/                    # Source code
├── .gitignore             # Git ignore rules
├── .prettierrc            # Prettier configuration
├── astro.config.mjs       # Astro configuration
├── bun.lock               # Bun lockfile
├── LICENSE                # MIT License
├── package.json           # Project manifest
├── package-lock.json      # NPM lockfile (legacy)
├── README.md              # Project README
├── agents.md              # AI agents documentation
└── tsconfig.json          # TypeScript configuration
```

## Source Directory (`src/`)

The `src/` directory contains all project source code that gets processed by Astro.

```
src/
├── assets/                # Static assets to be processed
│   ├── fonts/            # Font files
│   └── images/           # Images and graphics
├── components/           # Reusable UI components
│   ├── animations/       # Animation components
│   ├── blog/            # Blog-specific components
│   ├── home/            # Homepage components
│   ├── icons/           # Icon components
│   ├── layout/          # Layout components
│   ├── seo/             # SEO-related components
│   └── ui/              # General UI components
├── content/             # Content collections
│   ├── blog/           # Blog posts (Markdown/MDX)
│   ├── projects/       # Project showcase content
│   └── config.ts       # Content collection schemas
├── layouts/            # Page layout templates
├── lib/               # Utility libraries
│   └── utils/         # Utility functions
├── pages/             # File-based routing
│   └── blog/          # Blog routing
├── styles/            # Global styles
├── env.d.ts          # Environment type definitions
└── types.d.ts        # Global type definitions
```

## Directory Explanations

### `src/assets/`
Contains static assets that need processing by Astro's build system. These files are optimized and may have their URLs transformed during build.

- **`fonts/`** - Custom font files
- **`images/`** - Images, photos, and graphics that need optimization

### `src/components/`
Organized into logical subdirectories for better maintainability:

- **`animations/`** - Framer Motion and other animation components
- **`blog/`** - Blog-specific components (post previews, bio, feed)
- **`home/`** - Homepage-specific components (hero, work showcase, contact)
- **`icons/`** - SVG icon components
- **`layout/`** - Navigation, header, footer, and layout components
- **`seo/`** - SEO-related components (meta tags, structured data)
- **`ui/`** - Reusable UI elements (buttons, dividers, tags, theme switcher)

### `src/content/`
Astro Content Collections for type-safe content management:

- **`blog/`** - Blog posts in Markdown/MDX format
- **`projects/`** - Project showcase content
- **`config.ts`** - Content collection schemas and validation

### `src/layouts/`
Astro layout components that define page structure:

- **`Layout.astro`** - Base layout template
- **`BlogPost.astro`** - Blog post layout template

### `src/lib/`
Utility libraries and helper functions:

- **`utils/`** - Utility functions (reading time calculation, localStorage hooks)

### `src/pages/`
File-based routing directory (required by Astro):

- **`blog/`** - Blog-related pages and dynamic routes
- **`index.astro`** - Homepage
- **`404.astro`** - 404 error page
- **`rss.xml.ts`** - RSS feed generation

### `src/styles/`
Global CSS and style files:

- **`global.css`** - Global styles and CSS custom properties

### `public/`
Static assets served directly without processing:

- **`admin/`** - CMS admin files
- **`blog-images/`** - Blog post images
- **`favicon.ico`** - Favicon
- **`robots.txt`** - Search engine robots file

## Best Practices Followed

1. **Separation of Concerns** - Components are organized by functionality and purpose
2. **Type Safety** - TypeScript configuration for better development experience
3. **Content Management** - Astro Content Collections for structured content
4. **Asset Optimization** - Proper separation of processed vs. static assets
5. **SEO Optimization** - Dedicated SEO components and meta management
6. **Performance** - Astro's island architecture for optimal loading
7. **Maintainability** - Clear directory structure with logical grouping

## File Naming Conventions

- **Astro Components** - PascalCase with `.astro` extension (e.g., `BlogPost.astro`)
- **React Components** - PascalCase with `.tsx` extension (e.g., `ThemeSwitcher.tsx`)
- **Utilities** - camelCase with `.ts` extension (e.g., `readingTime.ts`)
- **Content** - kebab-case for files, frontmatter for metadata
- **Styles** - kebab-case with `.css` extension

## Content Collections

The project uses Astro's Content Collections for type-safe content management:

- **Blog Collection** - Blog posts with metadata (title, description, date, tags, images)
- **Projects Collection** - Project showcases with links and descriptions

## Integration Notes

- **React Integration** - Used for interactive components (search, theme switcher)
- **MDX Support** - Enhanced Markdown with React component support
- **Tailwind CSS** - Utility-first CSS framework via Vite plugin
- **Sitemap Generation** - Automatic sitemap creation for SEO
- **RSS Feed** - Automatic RSS feed generation for blog posts

This structure ensures scalability, maintainability, and follows Astro's recommended practices for optimal performance and developer experience.