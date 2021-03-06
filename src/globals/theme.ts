export enum Theme {
  Light,
  Dark,
}

export type ThemeColors = {
  readonly type: Theme
  readonly primary: string
  readonly secondary: string
  readonly text: string
  readonly link: string
  readonly info: string
  readonly highlight: string
  readonly inlineCode: string
  readonly inlineBg: string
  readonly bg: string
  readonly cardBg: string
}

export const colors: {[key: string] : string} = {
  lightYellow: 'rgba(255, 235, 59, .99)',
  yellow: '#FFC700',
  orange: '#FF9900',
  white: '#FFFFFF',
  almostWhite: '#F2F2F2',
  lighterGrey: '#D8D8D8',
  lightGrey: '#BCBCBC',
  darkGrey: '#555555',
  grey: '#777777',
  darkerGrey: '#8C8C8C',
  darkestGrey: '#2f2f2f',
  almostBlack: '#171717',
  black: '#0D0D0D',
}

export const light: ThemeColors = {
  type: Theme.Light,
  primary: colors.yellow,
  secondary: colors.orange,
  text: colors.almostBlack,
  link: colors.grey,
  info: colors.lightGrey,
  highlight: colors.lightYellow,
  inlineCode: colors.darkGrey,
  inlineBg: colors.lighterGrey,
  bg: colors.almostWhite,
  cardBg: colors.white,
}

export const dark: ThemeColors = {
  type: Theme.Dark,
  primary: colors.yellow,
  secondary: colors.orange,
  text: colors.white,
  link: colors.lightGrey,
  info: colors.darkGrey,
  highlight: colors.darkerGrey,
  inlineCode: colors.lighterGrey,
  inlineBg: colors.darkestGrey,
  bg: colors.black,
  cardBg: colors.almostBlack,
}
