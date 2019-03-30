import { css } from '@emotion/core'
import theme from './theme'

const { light, fontSizes, fonts } = theme

const reset = css`
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
    background-color: ${light.bg};
    color: ${light.text};
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
    background-color: ${light.highlight};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${light.text};
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
      color: ${light.primary};
      outline: 0;
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline-color: ${light.primary};
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
`

export default reset
