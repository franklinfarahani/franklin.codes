const colors = {
  lightYellow: '#FFEF5F',
  yellow: '#FFC700',
  orange: '#FF9900',
  white: '#FFFFFF',
  almostWhite: '#F2F2F2',
  lightGrey: '#BCBCBC',
  darkGrey: '#333333',
  almostBlack: '#111111',
  black: '#0D0D0D',
}

const lightColors = {
  primary: colors.yellow,
  secondary: colors.orange,
  text: colors.almostBlack,
  info: colors.lightGrey,
  highlight: colors.lightYellow,
  bg: colors.almostWhite,
  cardBg: colors.white,
}

const darkColors = {
  primary: colors.yellow,
  secondary: colors.orange,
  text: colors.white,
  info: colors.darkGrey,
  highlight: colors.lightYellow,
  bg: colors.black,
  cardBg: colors.almostBlack,
}

const fonts = {
  TTCommons: '"TT Commons", San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
  SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
}

const fontSizes = {
  xsmall: '12px',
  smallish: '13px',
  small: '14px',
  medium: '16px',
  large: '18px',
  xlarge: '20px',
  xxlarge: '22px',
  h3: '32px',
}

const lineHeights = [1, 1.125, 1.25, 1.5]

const borderRadius = '2px'

const shadows = {
  low: '0 2px 4px rgba(0,0,0,0.12)',
  medium: '0 3px 6px rgba(0,0,0,0.16)',
  high: '0 10px 20px rgba(0,0,0,0.19)',
}

// const easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)'
const transition = 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'

const commons = {
  fonts,
  fontSizes,
  lineHeights,
  borderRadius,
  shadows,
  transition,
}

export const light = {
  ...commons,
  colors: lightColors
}

export const dark = {
  ...commons,
  colors: darkColors,
} 
