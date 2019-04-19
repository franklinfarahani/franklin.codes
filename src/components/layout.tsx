import React, { Fragment, useState } from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import { reset, fonts, config, themes } from '../globals'
import { Theme } from '../globals/theme'

import Header from './Header'

const Content = styled.main`
  padding: 0 50px;
  color: ${props=>props.theme.text};
  background-color: ${props=>props.theme.bg};
  position: relative;
  min-height: calc(100vh - 130px);
  z-index:1;
  p a {
    margin-bottom: -2px;
    position: relative;
    &::after {
      content: " ";
      display: block;
      position: absolute;
      right:0;
      left:0;
      bottom: -2px;
      border-bottom: 2px solid ${props=>props.theme.primary};
      transition: ${config.transition};
      z-index:-1;
    }
    &:focus,
    &:hover {
      color: ${props=>props.theme.link};
    }
  }
`

type LayoutProps =  {
  title?: string
  children: React.ReactNode
}

const Layout = ({title, children}: LayoutProps) => {
  const [theme, setTheme] = useState(themes.light)

  const changeTheme = (newTheme: Theme) => {
    newTheme === Theme.Light ? setTheme(themes.light) : setTheme(themes.dark)
  }

  return (    
    <Fragment>
      <Global 
        styles = {css`
          ${fonts}
          ${reset}
        `}
      />
      <ThemeProvider theme = {theme}>
        <Header themeSelect = {changeTheme}/>
        <Content>{children}</Content>
        <footer id="contact">
          © {new Date().getFullYear()}, Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout
