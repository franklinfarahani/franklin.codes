const color = {
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

const theme = {
  colors: {
    primary: color.yellow,
    secondary: color.orange,
    text: color.almostBlack,
    info: color.lightGrey,
    highlight: color.lightYellow,
    bg: color.almostWhite,
    cardBg: color.white,
  },

  fonts: {
    TTCommons: '"TT Commons", San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '2px',
  headerHeight: '100px',
  headerScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,

  gradient: 'linear-gradient(0.4turn, #64d6ff, #64ffda)',

  loaderDelay: '6',

  hamburgerWidth: 30,
  hamBefore: 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in',
  hamBeforeActive: 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s',
  hamAfter: 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  hamAfterActive: 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s',
}

export default theme
