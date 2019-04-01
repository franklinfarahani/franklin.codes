export enum Theme {
  Light,
  Dark,
}

export type ThemeColors = {
  readonly primary: string
  readonly secondary: string
  readonly text: string
  readonly link: string
  readonly info: string
  readonly highlight: string
  readonly bg: string
  readonly cardBg: string
}

const colors: {[key: string] : string} = {
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

export const light: ThemeColors = {
  primary: colors.yellow,
  secondary: colors.orange,
  text: colors.almostBlack,
  link: colors.darkGrey,
  info: colors.lightGrey,
  highlight: colors.lightYellow,
  bg: colors.almostWhite,
  cardBg: colors.white,
}

export const dark: ThemeColors = {
  primary: colors.yellow,
  secondary: colors.orange,
  text: colors.white,
  link: colors.lightGrey,
  info: colors.darkGrey,
  highlight: colors.lightYellow,
  bg: colors.black,
  cardBg: colors.almostBlack,
}
