const fonts = {
  TTCommons: '"TT Commons", San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
  SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
}

const fontSizes = {
  text: [16],
  heading: [18, 20, 24, 28, 48, 64],
  nav: [20],
}

const iconSizes = {
  min: 16,
  max: 24
}

const lineHeights = [1, 1.125, 1.25, 1.5]

const borderRadius = '2px'

const shadows = {
  low: '0 2px 4px rgba(0,0,0,0.12)',
  medium: '0 3px 6px rgba(0,0,0,0.16)',
  high: '0 10px 20px rgba(0,0,0,0.19)',
}

// const easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)'
const transition = '0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'

const config = {
  fonts,
  fontSizes,
  iconSizes,
  lineHeights,
  borderRadius,
  shadows,
  transition,
}

export default config