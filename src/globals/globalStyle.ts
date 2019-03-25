import { css } from "@emotion/core"
import theme from "./theme"
import * as fontFamilies from "./fonts"

const { colors, fontSizes, fonts } = theme

const globalStyle = css`
  @font-face {
    font-family: 'TT Commons';
    src: url(${fontFamilies.TTCommonsRegularWOFF2}) format('woff2'),
    url(${fontFamilies.TTCommonsRegularWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'TT Commons';
    src: url(${fontFamilies.TTCommonsMediumWOFF2}) format('woff2'),
    url(${fontFamilies.TTCommonsMediumWOFF}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'TT Commons';
    src: url(${fontFamilies.TTCommonsDemiboldWOFF2}) format('woff2'),
    url(${fontFamilies.TTCommonsDemiboldWOFF}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'TT Commons';
    src: url(${fontFamilies.TTCommonsBoldWOFF2}) format('woff2'),
    url(${fontFamilies.TTCommonsBoldWOFF}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoRegularWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoRegularWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.bg};
    color: ${colors.primary};
    line-height: 1.3;
    font-family: ${fonts.TTCommons};
    font-size: ${fontSizes.xlarge};
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > .container > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }
  ::selection {
    /* background-color: ${colors.highlight}; */
    background-color: #bac6ff;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${colors.primary};
    margin: 0 0 10px 0;
  }
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
  a {
    display: inline-block;
    text-decoration: underline;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${colors.secondary};
      outline: 0;
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline-color: ${colors.secondary};
    }
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  p {
    margin: 0 0 15px 0;
  }
  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }
  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${theme.easing};
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }
`

export default globalStyle
