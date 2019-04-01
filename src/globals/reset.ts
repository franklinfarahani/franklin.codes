import { css } from '@emotion/core'
import config from './config'
import { light as colors } from './theme'

const { fontSizes, fonts, transition } = config

const reset = css`
  html {
    box-sizing: border-box;
    width: 100%;
    overflow-y: scroll;
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
    color: ${colors.text};
    line-height: 1.3;
    font-family: ${fonts.TTCommons};
    font-size: ${fontSizes.text}px;
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > .container > * {
        filter: blur(5px) brightness(0.7);
        transition: ${transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }
  ::selection {
    background-color: ${colors.highlight};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
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
    font-weight: 500;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${transition};
    cursor: pointer;
    &:hover,
    &:focus {
      outline: 0;
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline-color: ${colors.primary};
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
