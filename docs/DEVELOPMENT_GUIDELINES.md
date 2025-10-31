# Development Guidelines

This document outlines the development guidelines and best practices for Franklin Farahani's personal website project.

## 🚀 Package Manager

**This project uses Bun exclusively as the package manager.**

### Why Bun?
- **Performance**: Significantly faster than npm/yarn for installs and script execution
- **Built-in features**: Includes bundler, test runner, and package manager
- **JavaScript runtime**: Can replace Node.js for many tasks
- **Compatibility**: Works with existing npm packages and scripts

### Commands

| Task | Command | Description |
|------|---------|-------------|
| Install dependencies | `bun install` | Install all project dependencies |
| Start development | `bun run dev` | Start development server at localhost:4321 |
| Build for production | `bun run build` | Build static site for deployment |
| Preview build | `bun run preview` | Preview production build locally |
| Run Astro CLI | `bun run astro` | Access Astro CLI commands |
| Add dependency | `bun add <package>` | Add a new dependency |
| Add dev dependency | `bun add -d <package>` | Add a development dependency |
| Remove dependency | `bun remove <package>` | Remove a dependency |
| Update dependencies | `bun update` | Update all dependencies |

### ⚠️ Important Notes

1. **Never use npm or yarn** - Always use `bun` commands
2. **Lockfile**: The project uses `bun.lockb` (binary format) - commit this file
3. **Legacy files**: `package-lock.json` may exist but should not be used
4. **CI/CD**: Ensure deployment scripts use Bun commands

## 📁 Project Structure Standards

### Component Organization
Components must be organized into the following directories:

```
src/components/
├── animations/     # Framer Motion and animation components
├── blog/          # Blog-specific components
├── home/          # Homepage-specific components
├── icons/         # SVG icon components
├── layout/        # Site-wide layout (header, footer, nav)
├── seo/           # SEO-related components
└── ui/            # Reusable UI components
```

### File Naming Conventions
- **Astro components**: PascalCase with `.astro` extension (`BlogPost.astro`)
- **React components**: PascalCase with `.tsx` extension (`ThemeSwitcher.tsx`)
- **Utilities**: camelCase with `.ts` extension (`readingTime.ts`)
- **Styles**: kebab-case with `.css` extension (`global.css`)
- **Content**: kebab-case for files, frontmatter for metadata

### Import Guidelines
- Use relative imports for local components
- Organize imports: external packages first, then local imports
- Use path aliases when available in tsconfig.json

## 🎯 Content Management

### Content Collections
- **Blog posts**: Place in `src/content/blog/`
- **Projects**: Place in `src/content/projects/`
- **Schema validation**: Update `src/content/config.ts` for new fields

### Assets
- **Processed assets**: Place in `src/assets/` (images, fonts)
- **Static assets**: Place in `public/` (favicons, robots.txt)
- **Content images**: Reference from `src/assets/images/`

## 🔧 Development Workflow

### Starting Development
```bash
# Clone the repository
git clone https://github.com/franklinfarahani/franklin.codes.git
cd franklin.codes

# Install dependencies with Bun
bun install

# Start development server
bun run dev
```

### Adding New Features
1. Create feature branch from main
2. Follow component organization standards
3. Update documentation if needed
4. Test with `bun run build`
5. Submit pull request

### Before Committing
```bash
# Ensure build works
bun run build

# Check for type errors
bun run astro check

# Preview production build
bun run preview
```

## 📋 Code Quality Standards

### TypeScript
- Use TypeScript for all new files
- Define proper interfaces for component props
- Leverage Astro's type safety features

### Components
- Keep components focused and single-responsibility
- Use Astro components for static content
- Use React components only when interactivity is needed
- Implement proper error boundaries

### Performance
- Optimize images using Astro's Image component
- Use Astro islands architecture for client-side JavaScript
- Minimize client-side bundle size

## 🚀 Deployment

### Build Process
```bash
# Production build
bun run build

# The dist/ folder contains the built site
```

### Deployment Platforms
- **Netlify**: Build command `bun run build`, publish directory `dist`
- **Vercel**: Automatically detects Astro, ensure Bun is configured
- **GitHub Pages**: Use GitHub Actions with Bun setup

### Environment Variables
- Store sensitive data in environment variables
- Use `.env` files for local development
- Never commit secrets to version control

## 🧪 Testing Guidelines

### Manual Testing
- Test all pages in development mode
- Verify responsive design on multiple screen sizes
- Check accessibility with screen readers
- Validate SEO meta tags

### Build Testing
Always test production builds:
```bash
bun run build
bun run preview
```

## 📚 Documentation Standards

### Code Documentation
- Document complex functions and components
- Use JSDoc comments for TypeScript functions
- Keep README.md updated with setup instructions

### Project Documentation
- Update `docs/PROJECT_STRUCTURE.md` for structural changes
- Document new features and APIs
- Maintain deployment and setup guides

## 🔒 Security Guidelines

### Dependencies
- Regularly update dependencies: `bun update`
- Review new packages before adding
- Use `bun audit` equivalent when available

### Content Security
- Sanitize user inputs (if any)
- Use proper HTTPS in production
- Implement proper CORS policies

## 💡 Best Practices

### Performance
- Use Astro's built-in optimizations
- Implement lazy loading for images
- Minimize JavaScript bundle size
- Leverage static generation

### SEO
- Use semantic HTML structure
- Implement proper meta tags
- Generate sitemaps automatically
- Use structured data where appropriate

### Accessibility
- Follow WCAG 2.1 AA guidelines
- Use proper heading hierarchy
- Implement keyboard navigation
- Provide alt text for images

## 🤖 AI Agent Guidelines

When AI agents work on this project:

1. **Always use Bun** - Never suggest npm or yarn commands
2. **Follow structure** - Respect the established component organization
3. **Update documentation** - Keep all docs current with changes
4. **Test builds** - Always verify `bun run build` succeeds
5. **Preserve patterns** - Follow existing code patterns and conventions

### Example AI Responses
- ✅ "Run `bun install` to install dependencies"
- ✅ "Start the dev server with `bun run dev`"
- ❌ "Run `npm install` to install dependencies"
- ❌ "Use `yarn dev` to start development"

This ensures consistency across all development activities and maintains the project's standards.