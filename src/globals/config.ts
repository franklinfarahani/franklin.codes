export const fonts = {
  TTCommons: '"TT Commons", San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
  SFMono: '"SF Mono", Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
}

const fontSizes = {
  base: 16,
  hero: {
    intro: 7,
    description: 1.65
  },
  tag: 0.8125,
  footer: 0.95,
  meta: 0.9375,
  search: {
    title: .875,
    body: .875,
  },
  blogCardTitle: 1.3125,
  blogDescription: 1.6125,
  bio: 1.1364,
  article: {
    title: 2.3,
    body: 1.375,
    tldr: 0.9375,
    nav: 0.9375,
    blockquote: 1.1364,
    code: 0.6364,
  },
  text: [20, 20],
  heading: [14, 20, 24, 28, 48, 64, 72, 80],
  nav: 20,
}

const iconSizes = {
  min: 16,
  max: 24
}

const lineHeights = [1, 1.125, 1.25, 1.4, 1.5, 1.75]

const borderRadius = {
  sharp: '4px',
  round: '8px',
}

const shadows = {
  low: '0 2px 4px rgba(0,0,0,0.12)',
  medium: '0 4px 12px rgba(0,0,0,0.05)',
  high: '0 10px 20px rgba(0,0,0,0.19)',
}

const easing = 'cubic-bezier(0.23, 1, 0.32, 1)'
const transition = '0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'

const config = {
  fonts,
  fontSizes,
  iconSizes,
  lineHeights,
  borderRadius,
  shadows,
  easing,
  transition,
}

export default config