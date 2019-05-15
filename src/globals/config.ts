export const fonts = {
  TTCommons: '"TT Commons", San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
  SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
}

const fontSizes = {
  text: [16, 20],
  heading: [13, 19, 24, 28, 48, 64, 72, 80],
  nav: [20],
}

const iconSizes = {
  min: 16,
  max: 24
}

const lineHeights = [1, 1.125, 1.25, 1.5, 1.75]

const borderRadius = {
  sharp: '4px',
  round: '8px',
}

const shadows = {
  low: '0 2px 4px rgba(0,0,0,0.12)',
  medium: '0 3px 6px rgba(0,0,0,0.16)',
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