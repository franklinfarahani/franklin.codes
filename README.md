<p align="center">
  <a href="https://www.franklin.codes/">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" class="css-1vy2dmd exvynbg0"><rect width="16.67" height="16.67" opacity="0.34"></rect><rect x="16.67" width="16.67" height="16.67" opacity="0.67"></rect><rect x="33.33" width="16.67" height="16.67"></rect><rect y="16.67" width="16.67" height="16.67" opacity="0.67"></rect><rect x="16.67" y="16.67" width="16.67" height="16.67"></rect><rect y="33.33" width="16.67" height="16.67"></rect></svg>
  </a>
</p>
<h1 align="center">
  Franklin Farahani's Personal Portfolio Website and Blog
</h1>

<p align="center">
  A modern, performant personal website built with Astro, React, and Tailwind CSS
</p>

<p align="center">
  <a href="https://franklin.codes">View Live Site</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-features">Features</a> •
  <a href="docs/DEVELOPMENT_GUIDELINES.md">Development Guidelines</a>
</p>

## 🚀 Quick Start

1. **Clone the Repository**

   ```bash
   git clone https://github.com/franklinfarahani/franklin.codes.git
   cd franklin.codes
   ```

2. **Install Dependencies**

   This project uses Bun for package management:

   ```bash
   bun install
   ```

3. **Start Development Server**

   ```bash
   bun run dev
   ```

   Your site is now running at `http://localhost:4321`!

4. **Build for Production**

   ```bash
   bun run build
   bun run preview
   ```

## 🧐 What's Inside?

This is an Astro project following modern web development best practices. Here's the project structure:

```
franklin.codes/
├── public/                 # Static assets (favicons, robots.txt, images)
├── src/
│   ├── assets/            # Processed assets (fonts, images)
│   ├── components/        # Reusable UI components
│   │   ├── animations/    # Animation components (Framer Motion)
│   │   ├── blog/         # Blog-specific components
│   │   ├── home/         # Homepage components
│   │   ├── icons/        # SVG icon components
│   │   ├── layout/       # Navigation, header, footer
│   │   ├── seo/          # SEO components
│   │   └── ui/           # General UI components
│   ├── content/          # Content collections (blog posts, projects)
│   ├── layouts/          # Page layout templates
│   ├── lib/              # Utility functions and libraries
│   ├── pages/            # File-based routing
│   ├── styles/           # Global CSS styles
│   └── types.d.ts        # TypeScript type definitions
├── astro.config.mjs      # Astro configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## ✨ Features

- **⚡ Astro** - Fast, modern static site generator with islands architecture
- **⚛️ React** - Interactive components where needed
- **🎨 Tailwind CSS** - Utility-first CSS framework for rapid styling
- **📝 MDX Support** - Enhanced Markdown with React components
- **📊 Content Collections** - Type-safe content management
- **🔍 SEO Optimized** - Meta tags, OpenGraph, structured data
- **📱 Responsive Design** - Mobile-first responsive layout
- **🌙 Dark Mode** - Toggle between light and dark themes
- **🔎 Search** - Client-side search functionality
- **📈 Performance** - Optimized for Core Web Vitals
- **♿ Accessible** - WCAG compliant design patterns

## 📁 Project Structure

### Key Directories

- **`src/pages/`** - File-based routing (required by Astro)
- **`src/components/`** - Organized by feature/function for maintainability
- **`src/content/`** - Markdown content with frontmatter validation
- **`src/layouts/`** - Shared page layouts
- **`src/assets/`** - Images, fonts, and other assets processed by Astro
- **`public/`** - Static files served directly

### Component Organization

Components are organized into logical subdirectories:
- `animations/` - Framer Motion components
- `blog/` - Blog-specific UI
- `home/` - Homepage sections
- `layout/` - Site-wide layout components
- `ui/` - Reusable UI elements

For detailed structure documentation, see [`docs/PROJECT_STRUCTURE.md`](docs/PROJECT_STRUCTURE.md).

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Search**: [Fuse.js](https://fusejs.io/)
- **TypeScript**: Full type safety
- **Build Tool**: [Vite](https://vitejs.dev/)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run astro` | Run Astro CLI commands |

## 🎯 Content Management

This site uses Astro's Content Collections for type-safe content management:

### Blog Posts
- Located in `src/content/blog/`
- Markdown/MDX files with frontmatter
- Automatic reading time calculation
- Tag-based categorization

### Projects
- Located in `src/content/projects/`
- Showcase portfolio items
- Links to live demos and repositories

## 🚀 Deployment

This site is optimized for deployment on:
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- Any static hosting provider

Build command: `bun run build`
Publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Heroicons](https://heroicons.com/)

---

<p align="center">
  Made with ❤️ by <a href="https://franklin.codes">Franklin Farahani</a>
</p>